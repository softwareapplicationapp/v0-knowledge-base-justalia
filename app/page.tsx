"use client"

import type React from "react"

import { useState } from "react"
import { Search, BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useArticles } from "@/hooks/use-articles"
import { useCategories } from "@/hooks/use-categories"
import type { Article } from "@/lib/types"

export default function HomePage() {
  const { articles, loading: articlesLoading } = useArticles()
  const { categories, loading: categoriesLoading } = useCategories()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Article[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.length > 2) {
      const results = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const getArticleCountForCategory = (categoryId: string) => {
    return articles.filter((article) => article.category === categoryId).length
  }

  const loading = articlesLoading || categoriesLoading

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Justalia - Base de Conocimiento HubSpot</h1>
            </div>
            {/* Nav removed as requested */}
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿En qué podemos ayudarte?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Encuentra respuestas rápidas a tus preguntas en nuestra base de conocimiento
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar artículos, guías, tutoriales..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </section>

      {searchQuery.length > 2 ? (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Resultados de la Búsqueda</h3>
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((article) => (
                  <Link key={article.id} href={`/article/${article.slug}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 hover:text-blue-600">{article.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <p>No se encontraron artículos para "{searchQuery}".</p>
            )}
          </div>
        </section>
      ) : (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Explorar por Categorías</h3>
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
          </div>
        </section>
      )}

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Justalia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
