"use client"

import { useChat } from "ai/react"
import { useArticles } from "@/hooks/use-articles"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendHorizonal, Bot, User, LoaderCircle } from "lucide-react"
import { useEffect, useRef } from "react"

export function ChatInterface() {
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="h-[550px] flex flex-col shadow-lg rounded-xl">
        <CardContent className="flex-1 p-0 flex flex-col">
          <ScrollArea className="h-full flex-1" ref={scrollAreaRef}>
            <div className="space-y-6 p-6">
              {messages.length === 0 && !isLoading && (
                <div className="text-center text-gray-500 pt-16">
                  <Bot className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <h2 className="text-2xl font-semibold text-gray-800">Asistente de Conocimiento</h2>
                  <p className="mt-2">¿En qué puedo ayudarte hoy?</p>
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-3 text-sm ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "assistant" && <Bot className="w-6 h-6 text-blue-600 flex-shrink-0" />}
                  <div
                    className={`rounded-lg p-3 max-w-lg break-words ${m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                  >
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                  {m.role === "user" && <User className="w-6 h-6 text-gray-600 flex-shrink-0" />}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 text-sm">
                  <Bot className="w-6 h-6 text-blue-600 flex-shrink-0 animate-pulse" />
                  <div className="bg-gray-100 rounded-lg p-3 flex items-center">
                    <LoaderCircle className="w-4 h-4 animate-spin text-gray-500" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                id="message"
                placeholder="Pregúntame cualquier cosa sobre los procesos de Justalia..."
                className="flex-1 text-base py-6"
                autoComplete="off"
                value={input}
                onChange={handleInputChange}
                disabled={articlesLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || articlesLoading} className="w-12 h-12">
                <SendHorizonal className="h-5 w-5" />
                <span className="sr-only">Enviar</span>
              </Button>
            </form>
            {error && (
              <div className="p-2 text-xs text-red-600">
                <p>
                  <strong>Error:</strong>{" "}
                  {error.message.includes("key")
                    ? "La clave de API de OpenAI no está configurada."
                    : "No se pudo conectar con el asistente."}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
