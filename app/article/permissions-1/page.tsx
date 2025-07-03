import { ArrowLeft, Clock, Eye, User, Shield, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PermissionsArticle() {
  const teamPermissions = [
    {
      team: "Justalia (Paternity + Revolving)",
      canView: ["Todos los contactos", "Todos los casos", "Todos los tickets", "Informes completos"],
      canEdit: ["Sus casos asignados", "Contactos de su equipo", "Notas y tareas"],
      cannotDo: ["Eliminar casos", "Exportar datos masivos", "Configurar workflows"],
      description: "Equipo con permisos amplios para gestión integral de casos",
    },
    {
      team: "RUA (Revolving)",
      canView: ["Casos de su equipo", "Contactos sin asignar", "Tickets generales"],
      canEdit: ["Sus casos y sin asignar", "Contactos de su equipo", "Crear listas"],
      cannotDo: ["Ver casos de otros equipos", "Eliminar registros", "Acceso a Marketing Hub"],
      description: "Equipo especializado en casos revolving con permisos de exportación",
    },
    {
      team: "CPM (Call Center)",
      canView: ["Solo casos de su equipo", "Contactos asignados"],
      canEdit: ["Sus casos únicamente", "Contactos de su equipo"],
      cannotDo: ["Ver otros equipos", "Exportar datos", "Crear listas", "Acceso a Service Hub"],
      description: "Equipo con permisos restringidos enfocado en ventas telefónicas",
    },
    {
      team: "Customer Service",
      canView: ["Todos los contactos", "Todos los casos", "Todas las llamadas"],
      canEdit: ["Casos sin asignar", "Sus tickets", "Eliminar casos de su equipo"],
      cannotDo: ["Editar empresas", "Acceso a Service Hub", "Configuraciones"],
      description: "Equipo de atención post-venta con permisos especiales",
    },
    {
      team: "Legal Team",
      canView: ["Todos los contactos", "Todos los casos", "Todas las llamadas"],
      canEdit: ["Todos los casos", "Sus tickets únicamente"],
      cannotDo: ["Editar empresas", "Acceso a Sales Hub", "Workflows"],
      description: "Equipo legal con acceso amplio pero sin funciones comerciales",
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/category/my-permissions" className="hover:text-gray-700">
            Qué Puedo Hacer
          </Link>
          <span>/</span>
          <span className="text-gray-900">Permisos por Equipo</span>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">Qué Puedo Hacer</Badge>
            <Badge variant="default">Básico</Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Qué casos puedo ver según mi equipo?</h1>
          <p className="text-xl text-gray-600 mb-6">
            Cada equipo tiene diferentes niveles de acceso. Aquí te explicamos qué puedes hacer según tu equipo.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Equipo de Soporte</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>3 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>1,250 vistas</span>
              </div>
            </div>
            <span>Actualizado: 15 enero 2024</span>
          </div>
        </div>

        {/* Important Alert */}
        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Si no puedes ver ciertos casos o contactos, es normal. Cada equipo solo puede
            acceder a la información que necesita para su trabajo diario.
          </AlertDescription>
        </Alert>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona el sistema de permisos?</h2>
          <p className="mb-6">
            Nuestro sistema está diseñado para que cada persona vea solo la información que necesita para hacer su
            trabajo. Esto protege la privacidad de los clientes y mantiene la información organizada.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Reglas generales:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Solo tu equipo:</strong> Normalmente solo ves casos asignados a personas de tu equipo
            </li>
            <li>
              <strong>Sin asignar:</strong> Algunos equipos pueden ver casos que no están asignados a nadie
            </li>
            <li>
              <strong>No eliminar:</strong> Nadie puede eliminar casos o contactos (solo moverlos o archivarlos)
            </li>
            <li>
              <strong>Edición limitada:</strong> Solo puedes editar casos que están asignados a ti o tu equipo
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Permisos por Equipo</h2>
        </div>

        {/* Team Permissions Cards */}
        <div className="space-y-6 mb-12">
          {teamPermissions.map((team, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>{team.team}</span>
                </CardTitle>
                <p className="text-gray-600">{team.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Can View */}
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Puedo Ver
                    </h4>
                    <ul className="space-y-1">
                      {team.canView.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Can Edit */}
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Puedo Editar
                    </h4>
                    <ul className="space-y-1">
                      {team.canEdit.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cannot Do */}
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <XCircle className="w-4 h-4 mr-2" />
                      No Puedo
                    </h4>
                    <ul className="space-y-1">
                      {team.cannotDo.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Por qué no veo un caso que sé que existe?</h4>
              <p className="text-gray-600">
                Probablemente está asignado a otro equipo. Solo puedes ver casos de tu equipo o sin asignar (según tu
                rol).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Puedo cambiar el propietario de un caso?</h4>
              <p className="text-gray-600">
                Depende de tu equipo. Algunos pueden reasignar casos dentro de su equipo, otros no. Si necesitas cambiar
                un propietario, contacta a tu supervisor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Por qué no puedo exportar datos?</h4>
              <p className="text-gray-600">
                Solo ciertos equipos tienen permisos de exportación por temas de seguridad y privacidad de datos.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/category/my-permissions">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Qué Puedo Hacer
            </Button>
          </Link>
          <Link href="/article/permissions-2">
            <Button>
              Siguiente: Permisos Justalia
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
