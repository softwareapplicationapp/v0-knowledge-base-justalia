import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChatWidget } from "@/components/chat/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Justalia - Base de Conocimiento HubSpot",
  description: "Base de conocimiento para los procesos de Justalia en HubSpot.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>{children}</main>
        <ChatWidget />
      </body>
    </html>
  )
}
