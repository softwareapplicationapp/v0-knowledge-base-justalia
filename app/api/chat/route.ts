import { openai } from "@ai-sdk/openai"
import { streamText, type CoreMessage } from "ai"
import type { Article } from "@/lib/types"
import { NextResponse } from "next/server"

// Set the runtime to edge for best performance
export const runtime = "edge"

/**
 * Finds the most relevant articles from a list based on a user's query.
 * This improved version uses a scoring mechanism based on token frequency
 * and gives a significant boost to title matches.
 */
const findMostRelevantArticles = (query: string, articles: Article[], count = 3) => {
  // A list of common Spanish stop words to ignore.
  const stopWords = new Set([
    "de",
    "a",
    "el",
    "la",
    "los",
    "las",
    "un",
    "una",
    "unos",
    "unas",
    "y",
    "e",
    "o",
    "u",
    "pero",
    "mas",
    "sino",
    "con",
    "sin",
    "sobre",
    "para",
    "por",
    "se",
    "le",
    "les",
    "su",
    "sus",
    "mi",
    "mis",
    "tu",
    "tus",
    "que",
    "como",
    "cuando",
    "donde",
    "quien",
    "es",
    "son",
    "fue",
    "fueron",
    "del",
    "al",
    "me",
    "lo",
  ])

  // A simple tokenizer that cleans, normalizes, and removes stop words.
  const tokenize = (text: string): string[] => {
    if (!text) return []
    return text
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") // Remove punctuation
      .split(/\s+/)
      .filter((word) => word.length > 2 && !stopWords.has(word))
  }

  const queryTokens = tokenize(query)

  if (queryTokens.length === 0) {
    return []
  }

  const scoredArticles = articles.map((article) => {
    const articleContent = `${article.title} ${article.description} ${article.content}`
    const articleTokens = tokenize(articleContent)

    let score = 0
    // Calculate score based on the frequency of query tokens in the article.
    queryTokens.forEach((queryToken) => {
      score += articleTokens.filter((articleToken) => articleToken === queryToken).length
    })

    // Add a significant bonus for matching words in the title.
    const titleTokens = tokenize(article.title)
    queryTokens.forEach((queryToken) => {
      if (titleTokens.includes(queryToken)) {
        score += 5 // Boost score significantly if a keyword is in the title.
      }
    })

    return { article, score }
  })

  // Filter out articles with a score of 0 and sort by the highest score.
  const relevantArticles = scoredArticles.filter((item) => item.score > 0).sort((a, b) => b.score - a.score)

  // For debugging: log the scores to see how the engine is ranking articles.
  // console.log("Scored Articles:", relevantArticles.map(a => ({ title: a.article.title, score: a.score })));

  return relevantArticles.slice(0, count).map((item) => item.article)
}

export async function POST(req: Request) {
  try {
    // Check for OpenAI API key in environment variables
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse(JSON.stringify({ error: "OpenAI API key is not set." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const body = await req.json()
    const { messages, articles } = body as {
      messages: CoreMessage[]
      articles: Article[]
    }

    // Validate that the request body contains the expected data
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

    // 1. Retrieval: Find relevant articles using the improved logic.
    const relevantArticles = findMostRelevantArticles(userQuery, articles)

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

    // The crucial fix: use toDataStreamResponse() to correctly stream the response
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
