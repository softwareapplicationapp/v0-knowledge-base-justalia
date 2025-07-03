import { ArrowLeft, Clock, Eye, User, Users, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ReassignmentArticle() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/category/troubleshooting" className="hover:text-gray-700">
            Problemas Comunes
          </Link>
          <span>/</span>
          <span className="text-gray-900">Reasignación de Casos</span>
        </nav>

        <div className="mb-8">
          <Badge variant="destructive" className="mb-4">
            Problemas Comunes
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Qué pasa con los casos si un vendedor se va?</h1>
          <p className="text-xl text-gray-600 mb-6">
            Cuando un compañero deja la empresa o cambia de rol, sus casos no se pierden. Se reasignan para que ningún
            cliente quede desatendido.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Equipo de Operaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>4 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>98 vistas</span>
              </div>
            </div>
            <span>Actualizado: 3 junio 2025</span>
          </div>
        </div>

        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Proceso Controlado</AlertTitle>
          <AlertDescription className="text-blue-700">
            Este proceso es gestionado únicamente por los administradores del sistema para garantizar que se haga de
            forma ordenada y justa. No tienes que hacer nada, solo estar al tanto de que podrías recibir nuevos casos.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">El Proceso de Reasignación</h2>
          <p>
            Nuestro objetivo principal es garantizar la continuidad del servicio. Cuando un vendedor se va, seguimos un
            protocolo claro para redistribuir sus casos y tareas activas.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-purple-600" />
                1. Reasignación de Casos (Deals)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Los casos que estaban en las primeras etapas (como Contacto Pendiente o Documentación Solicitada) se
                reasignan a otros vendedores del mismo equipo.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  La asignación se hace por <strong>rotación</strong>, para que sea equitativa.
                </li>
                <li>Si recibes un caso reasignado, se convertirá en tu responsabilidad.</li>
                <li>
                  Los casos que ya estaban en etapas legales (como 'Caso Abierto') no se reasignan, ya que los gestiona
                  otro departamento.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                2. Gestión de Tareas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Las tareas pendientes del antiguo vendedor se gestionan de dos maneras, dependiendo del sistema que las
                creó:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold">Sistema Aircall Task Campaign</h4>
                  <p className="text-sm text-gray-600">
                    Las tareas antiguas se eliminan y el sistema crea <strong>tareas nuevas</strong> para los nuevos
                    dueños de los casos. Recibirás una notificación como si fuera un caso nuevo.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold">Sistema LCC (Lead Call Cycle)</h4>
                  <p className="text-sm text-gray-600">
                    Las tareas existentes <strong>no se eliminan</strong>, simplemente se reasignan al nuevo propietario
                    del caso. La tarea mantendrá su historial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-between">
          <Link href="/category/troubleshooting">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Problemas Comunes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
