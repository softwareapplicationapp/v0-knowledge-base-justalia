"use client"

import { useRouter } from "next/navigation"
import { ArticleForm } from "@/components/admin/article-form"
import { useArticles } from "@/hooks/use-articles"

export default function NewArticlePage() {
  const router = useRouter()
  const { addArticle } = useArticles()

  const handleSubmit = (data: any) => {
    addArticle(data)
    router.push("/admin")
  }

  return <ArticleForm onSubmit={handleSubmit} />
}
