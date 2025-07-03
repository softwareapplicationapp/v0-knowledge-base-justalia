import { ArrowLeft, Clock, Eye, User, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DealStagesArticle() {
  const stages = [
    {
      name: "Listo para asignar",
      description: "¡Nuevo cliente potencial! El caso acaba de entrar al sistema.",
      yourAction: "No tienes que hacer nada. El sistema te asignará el caso automáticamente si te toca.",
      isAutomatic: true,
      color: "bg-green-100 text-green-800",
      borderColor: "border-green-500",
    },
    {
      name: "Contacto Pendiente",
      description: "El caso es tuyo. Es el momento de hacer la primera llamada.",
      yourAction:
        "Llama al cliente para presentarte, entender su situación y explicarle cómo podemos ayudarle. ¡Esta primera llamada es clave!",
      isAutomatic: false,
      color: "bg-yellow-100 text-yellow-800",
      borderColor: "border-yellow-500",
    },
    {
      name: "Contacto Programado",
      description: "Hablaste con el cliente y acordaste una fecha para volver a llamar.",
      yourAction: "El sistema te recordará la llamada. Asegúrate de cumplir con la fecha y hora programada.",
      isAutomatic: false,
      color: "bg-blue-100 text-blue-800",
      borderColor: "border-blue-500",
    },
    {
      name: "Documentación Solicitada",
      description: "El cliente está interesado y le has pedido los documentos necesarios.",
      yourAction:
        "Haz seguimiento por email o WhatsApp para recordarle amablemente que envíe los documentos. El sistema también te ayudará con tareas de recordatorio.",
      isAutomatic: false,
      color: "bg-orange-100 text-orange-800",
      borderColor: "border-orange-500",
    },
    {
      name: "Solicitado - Autorización y LSA/LFA",
      description: "¡Genial! El cliente ha enviado los documentos. Ahora pasan a revisión.",
      yourAction:
        "Nada. El equipo legal (Pre-LSA) tomará el caso desde aquí para revisarlo todo. Tu trabajo en esta fase ha terminado.",
      isAutomatic: true,
      color: "bg-purple-100 text-purple-800",
      borderColor: "border-purple-500",
    },
    {
      name: "Listo para reclamación",
      description: "El equipo legal ha estudiado el caso y ha determinado que es viable.",
      yourAction: "Nada. El caso sigue su curso legal de forma automática.",
      isAutomatic: true,
      color: "bg-indigo-100 text-indigo-800",
      borderColor: "border-indigo-500",
    },
    {
      name: "Caso abierto",
      description: "¡Felicidades! El caso ha sido aceptado y se ha iniciado el proceso de reclamación.",
      yourAction: "Nada. El equipo de Customer Service se encargará del cliente a partir de ahora.",
      isAutomatic: true,
      color: "bg-teal-100 text-teal-800",
      borderColor: "border-teal-500",
    },
    {
      name: "Perdido",
      description: "El cliente no continúa con el proceso.",
      yourAction: "Asegúrate de que el motivo de la pérdida esté bien registrado. Esto nos ayuda a mejorar.",
      isAutomatic: false,
      color: "bg-red-100 text-red-800",
      borderColor: "border-red-500",
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/category/deals-management" className="hover:text-gray-700">
            Gestión de Casos
          </Link>
          <span>/</span>
          <span className="text-gray-900">Etapas de Casos</span>
        </nav>

        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            Gestión de Casos
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entender las etapas de mis casos</h1>
          <p className="text-xl text-gray-600 mb-6">
            Cada caso viaja por un camino con diferentes paradas. Conoce qué pasa en cada una y cuál es tu papel.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Equipo de Operaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>8 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>250 vistas</span>
              </div>
            </div>
            <span>Actualizado: 3 junio 2025</span>
          </div>
        </div>

        <Alert className="mb-8 bg-yellow-50 border-yellow-200">
          <Zap className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800">Tu Foco Principal</AlertTitle>
          <AlertDescription className="text-yellow-700">
            Tu trabajo más importante ocurre en las primeras etapas:{" "}
            <strong>Contacto Pendiente, Contacto Programado y Documentación Solicitada</strong>. Aquí es donde tu
            habilidad para conectar con el cliente marca la diferencia.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">El Viaje de un Caso</h2>
          <p className="mb-6">
            Desde que un cliente muestra interés hasta que su caso se resuelve, pasa por varias fases. Algunas dependen
            100% de ti, mientras que en otras el sistema trabaja por su cuenta para agilizar el proceso.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {stages.map((stage, index) => (
            <Card key={index} className={`border-l-4 ${stage.borderColor}`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge className={`${stage.color} font-semibold`}>{stage.name}</Badge>
                  {stage.isAutomatic && (
                    <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                      <Zap className="w-3 h-3 mr-1" />
                      Automático
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{stage.description}</p>

                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {stage.isAutomatic ? "¿Qué pasa automáticamente?" : "¿Qué tienes que hacer tú?"}
                  </h4>
                  <p className="text-gray-700">{stage.yourAction}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flujo Visual Simplificado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>
              <div className="relative flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-right font-semibold text-yellow-600">TU ACCIÓN</div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full z-10 border-2 border-white"></div>
                  <div className="flex-1 text-left">Contacto y Documentación</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-right">Revisión Legal</div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full z-10 border-2 border-white"></div>
                  <div className="flex-1 text-left font-semibold text-purple-600">AUTOMÁTICO</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-right font-semibold text-yellow-600">TU ACCIÓN</div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full z-10 border-2 border-white"></div>
                  <div className="flex-1 text-left">Cerrar como Perdido</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 flex justify-between">
          <Link href="/category/deals-management">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Gestión de Casos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
