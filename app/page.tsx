import { Search, BookOpen, Users, Settings, HelpCircle, Video, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  // Actualizar las categorías principales para reflejar el contenido real del sistema
  const categories = [
    {
      id: "my-permissions",
      title: "Qué Puedo Hacer",
      description: "Conoce tus permisos según tu equipo (Justalia, RUA, CPM, etc.)",
      icon: Users,
      articles: 5,
      color: "bg-green-500",
    },
    {
      id: "deals-management",
      title: "Gestión de Casos",
      description: "Pipelines Revolving, Paternity y FMV - Etapas y procesos",
      icon: Settings,
      articles: 8,
      color: "bg-purple-500",
    },
    {
      id: "tasks-calls",
      title: "Tareas y Llamadas",
      description: "Sistema automático de tareas, Aircall y seguimiento",
      icon: HelpCircle,
      articles: 6,
      color: "bg-orange-500",
    },
    {
      id: "troubleshooting",
      title: "Problemas Comunes",
      description: "Soluciones a problemas de permisos, asignaciones y sistema",
      icon: Video,
      articles: 12,
      color: "bg-red-500",
    },
  ]

  // Actualizar los artículos populares
  const popularArticles = [
    {
      title: "¿Qué casos puedo ver según mi equipo?",
      category: "Qué Puedo Hacer",
      views: 0,
      updated: "Pendiente",
    },
    {
      title: "¿Por qué no veo algunos casos o contactos?",
      category: "Problemas Comunes",
      views: 0,
      updated: "Pendiente",
    },
    {
      title: "Diferencias entre pipelines Revolving",
      category: "Gestión de Casos",
      views: 0,
      updated: "Pendiente",
    },
    {
      title: "¿Cuándo se me asignan tareas automáticamente?",
      category: "Tareas y Llamadas",
      views: 0,
      updated: "Pendiente",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Inicio
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                Categorías
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿En qué podemos ayudarte?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Encuentra respuestas rápidas a tus preguntas en nuestra base de conocimiento
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar artículos, guías, tutoriales..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg">Buscar</Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Explorar por Categorías</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.id} href={`/category/${category.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <Badge variant="secondary">{category.articles} artículos</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Artículos Populares</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Link key={index} href={`/article/${article.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 hover:text-blue-600">{article.title}</h4>
                      <Badge variant="outline">{article.views} vistas</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{article.category}</p>
                    <p className="text-xs text-gray-400">Actualizado: {article.updated}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Descargas</h4>
              <p className="text-gray-600 mb-4">Accede a manuales, plantillas y recursos</p>
              <Button variant="outline">Ver Descargas</Button>
            </Card>

            <Card className="text-center p-6">
              <Video className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Video Tutoriales</h4>
              <p className="text-gray-600 mb-4">Aprende con nuestros tutoriales en video</p>
              <Button variant="outline">Ver Videos</Button>
            </Card>

            <Card className="text-center p-6">
              <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">¿Necesitas Ayuda?</h4>
              <p className="text-gray-600 mb-4">Contacta con nuestro equipo de soporte</p>
              <Button variant="outline">Contactar</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Knowledge Base</h5>
              <p className="text-gray-400">Tu centro de documentación y soporte técnico.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categorías</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/category/getting-started">Primeros Pasos</Link>
                </li>
                <li>
                  <Link href="/category/user-management">Gestión de Usuarios</Link>
                </li>
                <li>
                  <Link href="/category/configuration">Configuración</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Recursos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/downloads">Descargas</Link>
                </li>
                <li>
                  <Link href="/videos">Videos</Link>
                </li>
                <li>
                  <Link href="/api-docs">API Docs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Soporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact">Contacto</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/status">Estado del Sistema</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Knowledge Base. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
