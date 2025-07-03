"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Article } from "@/lib/types"
import { useCategories } from "@/hooks/use-categories"
import { useEffect } from "react"

interface ArticleFormProps {
  onSubmit: SubmitHandler<FormValues>
  defaultValues?: Partial<FormValues>
  isEditing?: boolean
}

type FormValues = Omit<Article, "id" | "slug">

export function ArticleForm({ onSubmit, defaultValues, isEditing = false }: ArticleFormProps) {
  const router = useRouter()
  const { categories, loading: categoriesLoading } = useCategories()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    defaultValues,
  })

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)
    }
  }, [defaultValues, reset])

  const categoryValue = watch("category")
  const difficultyValue = watch("difficulty")

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <Label htmlFor="title">Título del Artículo</Label>
        <Input id="title" {...register("title", { required: "El título es obligatorio" })} className="mt-1" />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <Label htmlFor="description">Descripción Corta</Label>
        <Input
          id="description"
          {...register("description", { required: "La descripción es obligatoria" })}
          className="mt-1"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <Label htmlFor="content">Contenido (Markdown)</Label>
        <Textarea
          id="content"
          {...register("content", { required: "El contenido es obligatorio" })}
          rows={15}
          className="mt-1"
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="category">Categoría</Label>
          <Select
            onValueChange={(value) => setValue("category", value, { shouldValidate: true })}
            value={categoryValue}
            {...register("category", { required: "La categoría es obligatoria" })}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent>
              {categoriesLoading ? (
                <SelectItem value="loading" disabled>
                  Cargando...
                </SelectItem>
              ) : (
                categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.title}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <Label htmlFor="difficulty">Dificultad</Label>
          <Select
            onValueChange={(value: "Básico" | "Intermedio" | "Avanzado") =>
              setValue("difficulty", value, { shouldValidate: true })
            }
            value={difficultyValue}
            {...register("difficulty", { required: "La dificultad es obligatoria" })}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecciona una dificultad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Básico">Básico</SelectItem>
              <SelectItem value="Intermedio">Intermedio</SelectItem>
              <SelectItem value="Avanzado">Avanzado</SelectItem>
            </SelectContent>
          </Select>
          {errors.difficulty && <p className="text-red-500 text-sm mt-1">{errors.difficulty.message}</p>}
        </div>
        <div>
          <Label htmlFor="views">Vistas</Label>
          <Input
            id="views"
            type="number"
            {...register("views", { required: "El número de vistas es obligatorio", valueAsNumber: true, min: 0 })}
            className="mt-1"
          />
          {errors.views && <p className="text-red-500 text-sm mt-1">{errors.views.message}</p>}
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancelar
        </Button>
        <Button type="submit">{isEditing ? "Guardar Cambios" : "Crear Artículo"}</Button>
      </div>
    </form>
  )
}
