"use client"

import { BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useArticles } from "@/hooks/use-articles"
import { useCategories } from "@/hooks/use-categories"
import { ChatInterface } from "@/components/chat/chat-interface"

export default function HomePage() {
  const { articles, loading: articlesLoading } = useArticles()
  const { categories, loading: categoriesLoading } = useCategories()

  const getArticleCountForCategory = (categoryId: string) => {
    return articles.filter((article) => article.category === categoryId).length
  }

  const loading = articlesLoading || categoriesLoading

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Justalia - Base de Conocimiento HubSpot</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <ChatInterface />
      </main>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">O explora el contenido manualmente</h2>
            <p className="mt-2 text-lg text-gray-600">Navega por las categorías para encontrar guías y artículos.</p>
          </div>
          {loading ? (
            <div className="text-center">Cargando categorías...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={`/category/${category.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <Badge variant="secondary">{getArticleCountForCategory(category.id)} artículos</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Justalia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
