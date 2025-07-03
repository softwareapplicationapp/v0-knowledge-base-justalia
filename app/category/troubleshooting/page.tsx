import { ArrowLeft, Search, Clock, Eye, User, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TroubleshootingPage() {
  const articles = [
    {
      id: 1,
      title: "¿Por qué no veo algunos casos o contactos?",
      description: "Problemas de permisos: 'Su equipo' vs 'Todo' vs 'Sin asignar'",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "3 min",
      difficulty: "Básico",
      priority: "Alta",
    },
    {
      id: 2,
      title: "No me llegan las tareas automáticas",
      description: "Problemas con Aircall Task Campaigns y LCC",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "4 min",
      difficulty: "Básico",
      priority: "Alta",
    },
    {
      id: 3,
      title: "Error: No puedo editar este contacto/caso",
      description: "Limitaciones de edición según permisos de equipo",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "2 min",
      difficulty: "Básico",
      priority: "Media",
    },
    {
      id: 4,
      title: "Un caso se quedó atascado en una etapa",
      description: "Problemas con el avance automático entre etapas",
      author: "Basado en workflows reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "5 min",
      difficulty: "Intermedio",
      priority: "Alta",
    },
    {
      id: 5,
      title: "No puedo exportar datos",
      description: "Permisos de exportación por equipo",
      author: "Basado en configuración real",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "3 min",
      difficulty: "Básico",
      priority: "Media",
    },
    {
      id: 6,
      title: "Problemas con reasignación de casos",
      description: "Qué pasa cuando un vendedor deja el equipo",
      author: "Basado en protocolos reales",
      views: 0,
      lastUpdated: "Pendiente",
      readTime: "6 min",
      difficulty: "Intermedio",
      priority: "Media",
    },
  ]

  const quickFixes = [
    {
      problem: "No veo mis casos",
      solution: "Verifica que estés en la vista de tu equipo específico",
      time: "30 seg",
    },
    {
      problem: "No puedo editar",
      solution: "Solo puedes editar casos asignados a ti o tu equipo",
      time: "1 min",
    },
    {
      problem: "Faltan tareas",
      solution: "Revisa si tu equipo está en los workflows activos",
      time: "2 min",
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
          <span className="text-gray-900">Problemas Comunes</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Problemas Comunes</h1>
              <p className="text-lg text-gray-600">Soluciones rápidas a los problemas más frecuentes</p>
            </div>
          </div>

          {/* Quick Fixes */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-red-900 mb-4">🚀 Soluciones Rápidas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickFixes.map((fix, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-red-100">
                    <h4 className="font-medium text-red-800 text-sm mb-1">{fix.problem}</h4>
                    <p className="text-red-600 text-xs mb-2">{fix.solution}</p>
                    <Badge variant="outline" className="text-xs">
                      {fix.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search within category */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input type="text" placeholder="Buscar problemas..." className="pl-10" />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/troubleshooting-${article.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant={article.priority === "Alta" ? "destructive" : "secondary"}>
                          {article.priority} prioridad
                        </Badge>
                        <Badge variant={article.difficulty === "Básico" ? "default" : "secondary"}>
                          {article.difficulty}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                    </div>
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

        {/* Emergency Contact */}
        <Card className="mt-12 border-orange-200 bg-orange-50">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-orange-900 mb-2">¿No encuentras la solución?</h3>
            <p className="text-orange-700 mb-4">
              Si tu problema no está aquí o las soluciones no funcionan, contacta directamente con soporte.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-100 bg-transparent"
              >
                Crear Ticket de Soporte
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">Chat en Vivo</Button>
            </div>
          </CardContent>
        </Card>

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
