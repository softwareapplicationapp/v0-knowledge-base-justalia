"use client"

import { useState, useEffect } from "react"
import type { Article } from "@/lib/types"
import { initialArticles } from "@/lib/initial-data"

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const storedArticles = localStorage.getItem("kb-articles")
      if (storedArticles) {
        setArticles(JSON.parse(storedArticles))
      } else {
        setArticles(initialArticles)
        localStorage.setItem("kb-articles", JSON.stringify(initialArticles))
      }
    } catch (error) {
      console.error("Failed to parse articles from localStorage", error)
      setArticles(initialArticles)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("kb-articles", JSON.stringify(articles))
    }
  }, [articles, loading])

  const getArticleBySlug = (slug: string) => {
    return articles.find((article) => article.slug === slug)
  }

  const addArticle = (articleData: Omit<Article, "id" | "slug">) => {
    const newArticle: Article = {
      ...articleData,
      id: new Date().toISOString(),
      slug: slugify(articleData.title),
    }
    setArticles((prev) => [...prev, newArticle])
    return newArticle
  }

  const updateArticle = (slug: string, updatedData: Partial<Omit<Article, "id">>) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.slug === slug
          ? {
              ...article,
              ...updatedData,
              slug: updatedData.title ? slugify(updatedData.title) : article.slug,
            }
          : article,
      ),
    )
  }

  const deleteArticle = (slug: string) => {
    setArticles((prev) => prev.filter((article) => article.slug !== slug))
  }

  const importArticles = (importedData: any[]) => {
    const newArticles: Article[] = importedData
      .filter((item) => item.title && item.content) // Basic validation
      .map((item) => ({
        id: new Date().toISOString() + Math.random(),
        slug: slugify(item.title),
        title: item.title,
        description: item.description || "",
        content: item.content,
        category: item.category || "troubleshooting",
        views: Number(item.views) || 0,
        difficulty: item.difficulty || "Básico",
      }))

    setArticles((prev) => [...prev, ...newArticles])
    return newArticles.length
  }

  return { articles, loading, getArticleBySlug, addArticle, updateArticle, deleteArticle, importArticles }
}
