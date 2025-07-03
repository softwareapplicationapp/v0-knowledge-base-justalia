"use client"

import { useState, useEffect } from "react"
import type { Category } from "@/lib/types"
import { initialCategories } from "@/lib/initial-data"

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

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const storedCategories = localStorage.getItem("kb-categories")
      if (storedCategories) {
        setCategories(JSON.parse(storedCategories))
      } else {
        setCategories(initialCategories)
        localStorage.setItem("kb-categories", JSON.stringify(initialCategories))
      }
    } catch (error) {
      console.error("Failed to parse categories from localStorage", error)
      setCategories(initialCategories)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("kb-categories", JSON.stringify(categories))
    }
  }, [categories, loading])

  const addCategory = (categoryData: Omit<Category, "id">) => {
    const newCategory: Category = {
      ...categoryData,
      id: slugify(categoryData.title),
    }
    setCategories((prev) => [...prev, newCategory])
    return newCategory
  }

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((category) => category.id !== id))
  }

  const getCategoryById = (id: string) => {
    return categories.find((c) => c.id === id)
  }

  return { categories, loading, addCategory, deleteCategory, getCategoryById }
}
