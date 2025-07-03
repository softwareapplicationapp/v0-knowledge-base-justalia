import type React from "react"
import Link from "next/link"
import { Home, Book, Layers } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center p-2 rounded hover:bg-gray-700">
            <Book className="mr-3 h-5 w-5" />
            Artículos
          </Link>
          <Link href="/admin/categories" className="flex items-center p-2 rounded hover:bg-gray-700">
            <Layers className="mr-3 h-5 w-5" />
            Categorías
          </Link>
          <Link href="/" className="flex items-center p-2 rounded hover:bg-gray-700 mt-8">
            <Home className="mr-3 h-5 w-5" />
            Volver a la web
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  )
}
