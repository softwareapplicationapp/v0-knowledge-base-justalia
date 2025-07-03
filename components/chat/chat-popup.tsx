"use client"

import { useChat } from "ai/react"
import { useArticles } from "@/hooks/use-articles"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendHorizonal, Bot, User } from "lucide-react"
import { useEffect, useRef } from "react"

export function ChatPopup() {
  const { articles, loading: articlesLoading } = useArticles()
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    body: {
      articles: articles,
    },
  })

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [messages])

  useEffect(() => {
    if (error) {
      console.error("Chat Error:", error)
    }
  }, [error])

  return (
    <Card className="w-[400px] h-[600px] flex flex-col shadow-2xl rounded-lg">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bot className="w-6 h-6" />
          Asistente de Conocimiento
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-6 p-4">
            {messages.length === 0 && (
              <div className="text-center text-sm text-muted-foreground p-8">
                <p className="mb-2">Hola, soy tu asistente virtual.</p>
                <p>Pregúntame cualquier cosa sobre la base de conocimiento.</p>
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
                {m.role === "assistant" && <Bot className="w-6 h-6 text-primary flex-shrink-0" />}
                <div
                  className={`rounded-lg p-3 max-w-sm break-words ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                </div>
                {m.role === "user" && <User className="w-6 h-6 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            id="message"
            placeholder="Escribe tu pregunta..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={handleInputChange}
            disabled={isLoading || articlesLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || articlesLoading}>
            <SendHorizonal className="h-4 w-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
      </CardFooter>
      {error && (
        <div className="p-4 text-xs text-red-600 border-t border-red-200 bg-red-50">
          <p>
            <strong>Error de conexión con el asistente.</strong>
          </p>
          <p>
            {error.message.includes("key")
              ? "La clave de API de OpenAI no está configurada. Por favor, añádela a las variables de entorno del proyecto."
              : "Ha ocurrido un error en el servidor. Por favor, inténtalo de nuevo más tarde."}
          </p>
        </div>
      )}
    </Card>
  )
}
