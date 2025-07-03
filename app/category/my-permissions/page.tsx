import { ArrowLeft, Search, Clock, Eye, User, Shield, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MyPermissionsPage() {
  const articles = [
    {
      id: 1,
      title: "Permisos del equipo Justalia (Paternity + Revolving)",
      description: "Qué puedes ver y editar si perteneces a Justalia y sus subequipos",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "5 min",
      difficulty: "Básico",
    },
    {
      id: 2,
      title: "Permisos del equipo RUA (Revolving)",
      description: "Accesos específicos para RUA Customer Service, Sales Team y subequipos",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "4 min",
      difficulty: "Básico",
    },
    {
      id: 3,
      title: "Permisos del equipo CPM (Call Center)",
      description: "Limitaciones y accesos para CPM Sales Team y Validation Team",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "3 min",
      difficulty: "Básico",
    },
    {
      id: 4,
      title: "Permisos del Legal Team",
      description: "Accesos especiales para el equipo legal (REV + PAT)",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "4 min",
      difficulty: "Básico",
    },
    {
      id: 5,
      title: "¿Por qué no puedo ver ciertos casos?",
      description: "Explicación de las restricciones 'Su equipo' vs 'Todo' vs 'Sin asignar'",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "3 min",
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
          <span className="text-gray-900">Qué Puedo Hacer</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Qué Puedo Hacer</h1>
              <p className="text-lg text-gray-600">Conoce tus permisos y funciones según tu equipo</p>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Puedo Ver</span>
                </div>
                <p className="text-sm text-blue-700 mt-1">Casos y contactos de mi equipo</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">Puedo Editar</span>
                </div>
                <p className="text-sm text-green-700 mt-1">Información de mis casos asignados</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-900">No Puedo</span>
                </div>
                <p className="text-sm text-red-700 mt-1">Eliminar casos o contactos</p>
              </CardContent>
            </Card>
          </div>

          {/* Search within category */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input type="text" placeholder="Buscar en permisos..." className="pl-10" />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/permissions-${article.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                    </div>
                    <Badge variant="default">{article.difficulty}</Badge>
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
