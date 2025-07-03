import { ArrowLeft, Clock, Eye, User, Zap, Phone, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AutomaticTasksArticle() {
  const taskTypes = [
    {
      title: "Llamada a un Nuevo Cliente (Lead)",
      description:
        "Cuando un nuevo cliente potencial entra en el sistema y se te asigna, recibirás una tarea para hacer la primera llamada. ¡Es tu oportunidad para causar una buena primera impresión!",
      icon: Phone,
      reason: "Nuevo lead asignado",
      system: "Aircall Task Campaign / LCC",
    },
    {
      title: "Recordatorio de Firma de Documentos (Docusign)",
      description:
        "Si un cliente ha recibido la documentación para firmar pero no lo ha hecho después de un tiempo, el sistema te creará una tarea para que le llames y le recuerdes amablemente.",
      icon: FileText,
      reason: "Inactividad en Docusign",
      system: "Aircall Task Campaign",
    },
    {
      title: "Llamada Perdida",
      description:
        "Si un cliente te llama (por Aircall o WhatsApp) y no puedes contestar, no te preocupes. El sistema creará una tarea para que le devuelvas la llamada lo antes posible y no se pierda el contacto.",
      icon: Phone,
      reason: "Llamada entrante no atendida",
      system: "Aircall Task Campaign",
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
          <Link href="/category/tasks-calls" className="hover:text-gray-700">
            Tareas y Llamadas
          </Link>
          <span>/</span>
          <span className="text-gray-900">Tareas Automáticas</span>
        </nav>

        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            Tareas y Llamadas
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Cuándo se me asignan tareas automáticamente?</h1>
          <p className="text-xl text-gray-600 mb-6">
            El sistema es tu asistente personal. Te crea tareas en momentos clave para que no se te escape nada.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Equipo de Operaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>154 vistas</span>
              </div>
            </div>
            <span>Actualizado: 3 junio 2025</span>
          </div>
        </div>

        <Alert className="mb-8 bg-green-50 border-green-200">
          <Zap className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Tu Objetivo: Bandeja de Tareas a Cero</AlertTitle>
          <AlertDescription className="text-green-700">
            Piensa en estas tareas como un recordatorio para actuar. Tu meta es completar tus tareas cada día para
            asegurar que ningún cliente se quede esperando.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none mb-8">
          <p>
            A veces, verás que aparecen nuevas tareas en tu lista sin que las hayas creado tú. ¡Es normal! El sistema
            está programado para ayudarte a hacer seguimiento en los momentos más importantes. Aquí te explicamos los 3
            tipos principales de tareas automáticas que recibirás:
          </p>
        </div>

        <div className="space-y-6">
          {taskTypes.map((task, index) => {
            const Icon = task.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="text-2xl">{task.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{task.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <Badge variant="outline">Motivo: {task.reason}</Badge>
                    <Badge variant="secondary">Sistema: {task.system}</Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 bg-gray-50">
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">¿Por qué a veces no me llegan tareas de nuevos leads?</h4>
              <p className="text-gray-600">
                El sistema de asignación es rotativo. Solo recibirás tareas de nuevos leads cuando sea tu turno en la
                rotación de tu equipo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">¿Puedo crear mis propias tareas?</h4>
              <p className="text-gray-600">
                ¡Claro! Además de las automáticas, siempre puedes crear tus propias tareas para organizar tu día, como
                "Preparar reunión" o "Enviar email de seguimiento".
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 flex justify-between">
          <Link href="/category/tasks-calls">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Tareas y Llamadas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
