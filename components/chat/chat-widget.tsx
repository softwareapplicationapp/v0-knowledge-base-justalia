"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { ChatPopup } from "./chat-popup"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div style={{ display: isOpen ? "block" : "none" }}>
        <ChatPopup />
      </div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="rounded-full w-16 h-16 shadow-lg mt-4 ml-auto block"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
      </Button>
    </div>
  )
}
