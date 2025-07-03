import { ArrowLeft, Search, Clock, Eye, User, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TasksCallsPage() {
  const articles = [
    {
      id: 1,
      title: "¿Cuándo se me asignan tareas automáticamente?",
      description: "Sistema de Aircall Task Campaigns y LCC - Lead Call Cycle",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "6 min",
      difficulty: "Básico",
    },
    {
      id: 2,
      title: "Diferencia entre Aircall Task Campaign y LCC",
      description: "Dos sistemas diferentes de asignación de tareas de llamadas",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "8 min",
      difficulty: "Intermedio",
    },
    {
      id: 3,
      title: "Tareas por llamadas perdidas",
      description: "Cómo el sistema crea tareas cuando hay llamadas perdidas",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "4 min",
      difficulty: "Básico",
    },
    {
      id: 4,
      title: "Recordatorios de Docusign",
      description: "Tareas automáticas para seguimiento de firmas pendientes",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "5 min",
      difficulty: "Básico",
    },
    {
      id: 5,
      title: "¿Por qué no me llegan tareas de nuevos leads?",
      description: "Troubleshooting del sistema de asignación automática",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "7 min",
      difficulty: "Intermedio",
    },
    {
      id: 6,
      title: "Reasignación de tareas cuando cambia un vendedor",
      description: "Qué pasa con tus tareas cuando hay cambios en el equipo",
      author: "Basado en protocolos reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "6 min",
      difficulty: "Intermedio",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-gray-900">Tareas y Llamadas</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tareas y Llamadas</h1>
              <p className="text-lg text-gray-600">Sistema automático de tareas, Aircall y seguimiento</p>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200 mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-orange-900 mb-3">Sistemas Automáticos Activos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2 text-orange-800">Aircall Task Campaigns:</h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Nuevos leads RUA y CPM</li>
                    <li>• Llamadas perdidas</li>
                    <li>• Recordatorios Docusign</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-orange-800">LCC - Lead Call Cycle:</h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Seguimiento de leads</li>
                    <li>• Reasignación de tareas</li>
                    <li>• Gestión de propietarios</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input type="text" placeholder="Buscar en tareas y llamadas..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/tasks-${article.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                    </div>
                    <Badge variant={article.difficulty === "Básico" ? "default" : "secondary"}>
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
                    <span>Estado: {article.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

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
