"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useArticles } from "@/hooks/use-articles"
import { useCategories } from "@/hooks/use-categories"
import { FilePlus, Edit, Trash2, Upload, Download } from "lucide-react"
import Papa from "papaparse"

export default function AdminDashboard() {
  const { articles, deleteArticle, importArticles, loading: articlesLoading } = useArticles()
  const { categories, loading: categoriesLoading } = useCategories()
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDelete = (slug: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este artículo?")) {
      deleteArticle(slug)
    }
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category ? category.title : "Sin categoría"
  }

  const handleExport = () => {
    const dataToExport = articles.map(({ id, slug, ...rest }) => rest)
    const csv = Papa.unparse(dataToExport)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", "justalia-kb-articles.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const importedCount = importArticles(results.data)
          alert(`${importedCount} artículos importados correctamente.`)
        },
        error: (error) => {
          alert("Ha ocurrido un error al importar el archivo CSV.")
          console.error("CSV Import Error:", error)
        },
      })
    }
  }

  if (articlesLoading || categoriesLoading) {
    return <div>Cargando datos...</div>
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <CardTitle>Panel de Artículos</CardTitle>
            <CardDescription>Crea, edita, elimina, importa y exporta artículos.</CardDescription>
          </div>
          <div className="flex gap-2 flex-wrap">
            <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleFileImport}
              style={{ display: "none" }}
            />
            <Button variant="outline" onClick={handleImportClick}>
              <Upload className="mr-2 h-4 w-4" /> Importar
            </Button>
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" /> Exportar
            </Button>
            <Button asChild>
              <Link href="/admin/new">
                <FilePlus className="mr-2 h-4 w-4" /> Crear Artículo
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Dificultad</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{getCategoryName(article.category)}</Badge>
                </TableCell>
                <TableCell>
                  <Badge>{article.difficulty}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => router.push(`/admin/edit/${article.slug}`)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(article.slug)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
