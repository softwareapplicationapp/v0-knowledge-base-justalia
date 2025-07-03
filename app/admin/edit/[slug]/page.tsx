"use client"

import { useRouter, useParams } from "next/navigation"
import { ArticleForm } from "@/components/admin/article-form"
import { useArticles } from "@/hooks/use-articles"
import { useEffect, useState } from "react"
import type { Article } from "@/lib/types"
import type { SubmitHandler } from "react-hook-form"

type FormValues = Omit<Article, "id" | "slug">

export default function EditArticlePage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string
  const { getArticleBySlug, updateArticle, loading } = useArticles()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    if (!loading && slug) {
      const foundArticle = getArticleBySlug(slug)
      if (foundArticle) {
        setArticle(foundArticle)
      } else {
        // Si no se encuentra el artículo, volver al dashboard
        router.push("/admin")
      }
    }
  }, [slug, loading, getArticleBySlug, router])

  const handleSubmit: SubmitHandler<FormValues> = (data) => {
    updateArticle(slug, data)
    router.push("/admin")
  }

  if (loading || !article) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p className="text-lg text-muted-foreground">Cargando artículo...</p>
      </div>
    )
  }

  // Excluimos 'id' y 'slug' para que coincida con `FormValues`
  const { id, slug: articleSlug, ...defaultValues } = article

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Editar Artículo</h1>
      <ArticleForm onSubmit={handleSubmit} defaultValues={defaultValues} isEditing />
    </div>
  )
}
