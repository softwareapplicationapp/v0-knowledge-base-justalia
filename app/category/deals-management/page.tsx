import { ArrowLeft, Search, Clock, Eye, User, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DealsManagementPage() {
  const articles = [
    {
      id: 1,
      title: "Pipeline Revolving JUSTALIA [1 PASO]",
      description: "Cómo funciona el proceso de 1 paso para casos de Justalia",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "6 min",
      difficulty: "Básico",
    },
    {
      id: 2,
      title: "Pipeline Revolving RUA [2 PASOS]",
      description: "Proceso de 2 pasos para casos RUA - diferencias con Justalia",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "8 min",
      difficulty: "Intermedio",
    },
    {
      id: 3,
      title: "Pipeline Revolving CPM [1 PASO]",
      description: "Proceso específico para el equipo CPM",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "5 min",
      difficulty: "Básico",
    },
    {
      id: 4,
      title: "Pipeline Paternity",
      description: "Proceso específico para casos de paternidad",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "7 min",
      difficulty: "Intermedio",
    },
    {
      id: 5,
      title: "Pipelines FMV (Cliente grande vs Small Client)",
      description: "Diferencias entre los dos tipos de clientes FMV",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "6 min",
      difficulty: "Intermedio",
    },
    {
      id: 6,
      title: "Etapas comunes: Listo para asignar → Caso abierto",
      description: "Flujo general que siguen todos los pipelines",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "8 min",
      difficulty: "Básico",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-gray-900">Gestión de Casos</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gestión de Casos</h1>
              <p className="text-lg text-gray-600">Cómo trabajar con tus casos y oportunidades</p>
            </div>
          </div>

          {/* Process Overview */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-purple-900 mb-3">Pipelines Activos en el Sistema</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Revolving:</h4>
                  <ul className="space-y-1 text-purple-700">
                    <li>• JUSTALIA [1 PASO]</li>
                    <li>• RUA [2 PASOS]</li>
                    <li>• CPM [1 PASO]</li>
                    <li>• TRAINING</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Otros:</h4>
                  <ul className="space-y-1 text-purple-700">
                    <li>• Paternity</li>
                    <li>• FMV - Cliente grande</li>
                    <li>• FMV - Small Client</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search within category */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input type="text" placeholder="Buscar en gestión de casos..." className="pl-10" />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/deals-${article.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                    </div>
                    <Badge
                      variant={
                        article.difficulty === "Básico"
                          ? "default"
                          : article.difficulty === "Intermedio"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {article.difficulty}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views} vistas</span>
                      </div>
                    </div>
                    <span>Actualizado: {article.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Back to categories */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a todas las categorías
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
