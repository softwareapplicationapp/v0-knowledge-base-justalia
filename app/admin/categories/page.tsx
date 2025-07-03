"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCategories } from "@/hooks/use-categories"
import { useArticles } from "@/hooks/use-articles"
import type { Category } from "@/lib/types"
import { Trash2 } from "lucide-react"

type FormValues = Omit<Category, "id">

export default function CategoriesAdminPage() {
  const { categories, addCategory, deleteCategory, loading: categoriesLoading } = useCategories()
  const { articles, loading: articlesLoading } = useArticles()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addCategory(data)
    reset()
  }

  const handleDelete = (categoryId: string) => {
    const isCategoryInUse = articles.some((article) => article.category === categoryId)
    if (isCategoryInUse) {
      alert(
        "No se puede eliminar una categoría que contiene artículos. Primero, mueva o elimine los artículos de esta categoría.",
      )
      return
    }

    if (confirm("¿Estás seguro de que quieres eliminar esta categoría? Esta acción no se puede deshacer.")) {
      deleteCategory(categoryId)
    }
  }

  if (categoriesLoading || articlesLoading) {
    return <div>Cargando datos...</div>
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Categorías Existentes</CardTitle>
            <CardDescription>Lista de todas las categorías de la Knowledge Base.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.title}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(category.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Crear Nueva Categoría</CardTitle>
            <CardDescription>Añade una nueva categoría para organizar los artículos.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="title">Título</Label>
                <Input id="title" {...register("title", { required: "El título es obligatorio" })} />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Input id="description" {...register("description", { required: "La descripción es obligatoria" })} />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
              </div>
              <Button type="submit">Crear Categoría</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
