import { ArrowLeft, Clock, Eye, User, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DealStagesArticle() {
  const stages = [
    {
      name: "Listo para asignar",
      description: "El lead acaba de llegar al sistema",
      yourAction: "El sistema te asignará automáticamente casos de esta etapa",
      automatic: true,
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "Contacto Pendiente",
      description: "Tienes que llamar al cliente por primera vez",
      yourAction: "Llama al cliente para hacer la primera consulta",
      automatic: false,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "Contacto Programado",
      description: "Ya hablaste con el cliente y programaste una segunda llamada",
      yourAction: "Realiza la llamada programada en la fecha acordada",
      automatic: false,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Documentación Solicitada",
      description: "El cliente debe enviar documentos para continuar",
      yourAction: "Hacer seguimiento hasta que el cliente envíe los documentos",
      automatic: false,
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Solicitado - Autorización y LSA/LFA",
      description: "Los documentos están siendo revisados por el equipo legal",
      yourAction: "Esperar. El equipo legal revisará automáticamente",
      automatic: true,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Listo para reclamación - Estudio de viabilidad",
      description: "El caso está siendo evaluado para ver si es viable",
      yourAction: "Esperar. El sistema asignará automáticamente al equipo Pre-LSA",
      automatic: true,
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      name: "Caso abierto",
      description: "El caso fue aprobado y está en proceso legal",
      yourAction: "El caso pasa al equipo de Customer Service automáticamente",
      automatic: true,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Perdido",
      description: "El caso no prosperó por algún motivo",
      yourAction: "Revisar el motivo y aprender para futuros casos",
      automatic: false,
      color: "bg-red-100 text-red-800",
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
          <Link href="/category/deals-management" className="hover:text-gray-700">
            Gestión de Casos
          </Link>
          <span>/</span>
          <span className="text-gray-900">Etapas de Casos</span>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">Gestión de Casos</Badge>
            <Badge variant="default">Básico</Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entender las etapas de mis casos</h1>
          <p className="text-xl text-gray-600 mb-6">
            Cada caso pasa por diferentes etapas. Algunas requieren tu acción, otras son automáticas.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Equipo de Soporte</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>6 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>1,450 vistas</span>
              </div>
            </div>
            <span>Actualizado: 15 enero 2024</span>
          </div>
        </div>

        {/* Important Alert */}
        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Muchas etapas son automáticas. Tu trabajo principal está en las primeras etapas
            donde tienes contacto directo con el cliente.
          </AlertDescription>
        </Alert>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona el proceso?</h2>
          <p className="mb-6">
            Cuando un cliente potencial llena un formulario en nuestra web, se crea automáticamente un "caso" en el
            sistema. Este caso pasa por diferentes etapas hasta convertirse en un cliente real o descartarse.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tu papel en el proceso:</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>
              <strong>Contacto inicial:</strong> Eres la primera persona que habla con el cliente
            </li>
            <li>
              <strong>Recopilación de información:</strong> Obtienes los datos necesarios para evaluar el caso
            </li>
            <li>
              <strong>Seguimiento:</strong> Te aseguras de que el cliente envíe la documentación requerida
            </li>
            <li>
              <strong>Traspaso:</strong> Una vez completa la información, el caso pasa automáticamente al equipo legal
            </li>
          </ul>
        </div>

        {/* Stages */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etapas del proceso</h2>
          <div className="space-y-4">
            {stages.map((stage, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={stage.color}>{stage.name}</Badge>
                        {stage.automatic && (
                          <Badge variant="outline" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Automático
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{stage.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {stage.automatic ? "¿Qué pasa automáticamente?" : "¿Qué tienes que hacer?"}
                    </h4>
                    <p className="text-gray-700">{stage.yourAction}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Flow Diagram */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flujo Visual del Proceso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Etapas donde TÚ trabajas activamente</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Etapas automáticas (el sistema trabaja solo)</span>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <Badge className="bg-green-100 text-green-800">Listo para asignar</Badge>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <Badge className="bg-yellow-100 text-yellow-800">Contacto Pendiente</Badge>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <Badge className="bg-yellow-100 text-yellow-800">Contacto Programado</Badge>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <Badge className="bg-yellow-100 text-yellow-800">Documentación Solicitada</Badge>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <Badge className="bg-green-100 text-green-800">Proceso Legal</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Cuánto tiempo puede estar un caso en cada etapa?</h4>
              <p className="text-gray-600">
                No hay límite fijo, pero generalmente: Contacto Pendiente (1-3 días), Documentación Solicitada (1-2
                semanas), Proceso Legal (2-4 semanas).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Puedo mover un caso manualmente a otra etapa?</h4>
              <p className="text-gray-600">
                En la mayoría de casos, no. El sistema mueve los casos automáticamente cuando se cumplen las
                condiciones. Si hay un problema, contacta a tu supervisor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Qué pasa si un cliente no responde?</h4>
              <p className="text-gray-600">
                Después de varios intentos de contacto sin respuesta, el caso puede marcarse como "Perdido". Tu
                supervisor te dará las pautas específicas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/category/deals-management">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Gestión de Casos
            </Button>
          </Link>
          <Link href="/article/deals-2">
            <Button>
              Siguiente: Diferencias entre Pipelines
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
