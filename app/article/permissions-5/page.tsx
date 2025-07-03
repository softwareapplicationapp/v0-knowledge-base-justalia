import { ArrowLeft, Clock, Eye, User, Shield, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function VisibilityArticle() {
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
          <span className="text-gray-900">No veo un caso</span>
        </nav>

        <div className="mb-8">
          <Badge variant="destructive" className="mb-4">
            Problemas Comunes
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué no puedo ver ciertos casos o contactos?</h1>
          <p className="text-xl text-gray-600 mb-6">
            Es la pregunta más habitual. La respuesta es simple: el sistema está diseñado para mostrarte solo lo que
            necesitas para tu trabajo.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Equipo de Operaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>3 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>121 vistas</span>
              </div>
            </div>
            <span>Actualizado: 3 junio 2025</span>
          </div>
        </div>

        <Alert className="mb-8 bg-green-50 border-green-200">
          <Shield className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Es por seguridad y orden</AlertTitle>
          <AlertDescription className="text-green-700">
            Limitar la visibilidad protege los datos de los clientes y evita que te distraigas con información que no es
            relevante para ti. ¡Menos ruido, más foco!
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Las 3 Reglas de Visibilidad</h2>
          <p>
            Cuando buscas un contacto o un caso y no lo encuentras, casi siempre es por una de estas tres razones. Tu
            capacidad para ver algo depende de a quién pertenece:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. "Mi Equipo"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Es la regla más común. Solo puedes ver los registros (contactos, casos, etc.) que están asignados{" "}
                <strong>a ti o a un miembro de tu equipo directo</strong>. Si un caso pertenece al equipo de Paternity y
                tú eres de Revolving, no lo verás.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. "Sin Asignar"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Algunos equipos, como el de ventas, pueden ver los casos que{" "}
                <strong>aún no tienen un propietario asignado</strong>. Esto les permite coger nuevos leads para
                trabajarlos. Una vez que alguien lo coge, desaparece de la vista de "sin asignar" para los demás.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. "Todo"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Muy pocos roles, como los administradores o el equipo legal, tienen permiso para ver{" "}
                <strong>todos</strong> los registros, sin importar a qué equipo pertenezcan. Esto es necesario para
                tareas de supervisión o auditoría.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-3" />
              ¿Qué hago si necesito acceso a un caso que no veo?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Si crees que deberías tener acceso a un caso específico por una razón justificada, habla con tu{" "}
              <strong>supervisor o jefe de equipo</strong>. Ellos pueden revisar la situación y, si es necesario,
              reasignar el caso o darte visibilidad temporal. Nunca intentes acceder a información que no te corresponde
              sin autorización.
            </p>
          </CardContent>
        </Card>

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
