"use client"

import { useParams } from "next/navigation"
import { useArticles } from "@/hooks/use-articles"
import { useCategories } from "@/hooks/use-categories"
import { useEffect, useState } from "react"
import type { Article } from "@/lib/types"
import Link from "next/link"
import { ArrowLeft, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ArticlePage() {
  const params = useParams()
  const { slug } = params
  const { getArticleBySlug, loading: articlesLoading } = useArticles()
  const { getCategoryById, loading: categoriesLoading } = useCategories()
  const [article, setArticle] = useState<Article | undefined>(undefined)

  useEffect(() => {
    if (!articlesLoading && slug) {
      const foundArticle = getArticleBySlug(slug as string)
      setArticle(foundArticle)
    }
  }, [slug, articlesLoading, getArticleBySlug])

  const category = article ? getCategoryById(article.category) : undefined

  if (articlesLoading || categoriesLoading || article === undefined) {
    return <div>Cargando artículo...</div>
  }

  if (article === null) {
    return <div>Artículo no encontrado.</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Justalia - Base de Conocimiento HubSpot</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link href={`/category/${category.id}`} className="hover:text-gray-700">
                {category.title}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900 truncate">{article.title}</span>
        </nav>

        <div className="mb-8">
          {category && (
            <Badge variant="secondary" className="mb-4">
              {category.title}
            </Badge>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{article.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{article.views} vistas</span>
            </div>
            <Badge>{article.difficulty}</Badge>
          </div>
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  )
}
