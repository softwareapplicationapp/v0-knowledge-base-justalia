import { openai, embed } from "@ai-sdk/openai"
import { streamText, type CoreMessage } from "ai"
import type { Article } from "@/lib/types"
import { NextResponse } from "next/server"

// Set the runtime to edge for best performance
export const runtime = "edge"

/**
 * Calculates the cosine similarity between two vectors.
 * This is used to determine how similar the user's query is to each article.
 */
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    return 0
  }
  let dotProduct = 0
  let normA = 0
  let normB = 0
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i]
    normA += vecA[i] * vecA[i]
    normB += vecB[i] * vecB[i]
  }
  if (normA === 0 || normB === 0) {
    return 0
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse(JSON.stringify({ error: "OpenAI API key is not set." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const { messages, articles } = (await req.json()) as {
      messages: CoreMessage[]
      articles: Article[]
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new NextResponse(JSON.stringify({ error: "Invalid 'messages' in request body." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }
    if (!articles || !Array.isArray(articles)) {
      return new NextResponse(JSON.stringify({ error: "Invalid 'articles' in request body." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const userQuery = messages[messages.length - 1].content as string

    // 1. Retrieval using Semantic Search (Embeddings)
    // Generate embedding for the user's query
    const { embedding: queryEmbedding } = await embed({
      model: openai.embedding("text-embedding-ada-002"),
      value: userQuery,
    })

    // Generate embeddings for all articles and calculate similarity
    const articleEmbeddings = await Promise.all(
      articles.map(async (article) => {
        const { embedding } = await embed({
          model: openai.embedding("text-embedding-ada-002"),
          value: `${article.title}\n${article.description}\n${article.content}`,
        })
        return { article, embedding }
      }),
    )

    const scoredArticles = articleEmbeddings.map((item) => ({
      article: item.article,
      similarity: cosineSimilarity(queryEmbedding, item.embedding),
    }))

    // Sort articles by similarity and filter out those with low relevance
    const relevantArticles = scoredArticles
      .sort((a, b) => b.similarity - a.similarity)
      .filter((item) => item.similarity > 0.75) // Use a threshold to ensure relevance
      .slice(0, 3) // Take the top 3 most relevant articles
      .map((item) => item.article)

    // 2. Augmentation: Create the context string for the AI
    const context =
      relevantArticles.length > 0
        ? relevantArticles
            .map((article) => `Título del Artículo: ${article.title}\nContenido:\n${article.content}`)
            .join("\n\n---\n\n")
        : "No se encontraron artículos relevantes."

    // 3. Generation: Build the system prompt and stream the response
    const systemPrompt = `Eres un asistente virtual experto para la "Justalia - Base de Conocimiento HubSpot".
Tu misión es responder a las preguntas de los usuarios basándote ÚNICA Y EXCLUSIVAMENTE en el contexto de los artículos proporcionados a continuación.
Si la respuesta a la pregunta no se encuentra en el contexto, DEBES responder con: "Lo siento, no he encontrado información sobre eso en la base de conocimiento.".
No inventes información ni respondas usando conocimiento general. Sé conciso y directo. Responde siempre en español.

---
CONTEXTO DE ARTÍCULOS:
${context}
---
`

    const processedMessages: CoreMessage[] = [{ role: "system", content: systemPrompt }, ...messages]

    const result = await streamText({
      model: openai("gpt-4o"),
      messages: processedMessages,
    })

    return result.toDataStreamResponse()
  } catch (e) {
    console.error("Chat API Error:", e)
    const error = e as Error
    return new NextResponse(JSON.stringify({ error: "An unexpected error occurred.", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
