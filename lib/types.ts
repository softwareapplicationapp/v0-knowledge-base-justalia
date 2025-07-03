export interface Category {
  id: string
  title: string
  description: string
  icon: string // Icon name from lucide-react
}

export type CategoryID = "my-permissions" | "deals-management" | "tasks-calls" | "troubleshooting"

export interface Article {
  id: string
  slug: string
  title: string
  description: string
  content: string // Contenido en formato Markdown
  category: string // Category ID
  views: number
  difficulty: "Básico" | "Intermedio" | "Avanzado"
}

export const categories = [
  {
    id: "my-permissions",
    title: "Qué Puedo Hacer",
    description: "Conoce tus permisos y qué casos puedes ver según tu equipo.",
    icon: "shield-check", // Example icon
  },
  {
    id: "deals-management",
    title: "Gestión de Casos",
    description: "Entiende las etapas de un caso, desde que entra hasta que se cierra.",
    icon: "folder", // Example icon
  },
  {
    id: "tasks-calls",
    title: "Tareas y Llamadas",
    description: "Descubre por qué recibes tareas automáticas y cómo gestionarlas.",
    icon: "phone-call", // Example icon
  },
  {
    id: "troubleshooting",
    title: "Problemas Comunes",
    description: "Soluciones a dudas como '¿Por qué no veo un caso?'",
    icon: "alert-circle", // Example icon
  },
]

export const categoryMap = new Map(categories.map((c) => [c.id, c.title]))
