import type { Article, Category } from "./types"

export const initialCategories: Category[] = [
  {
    id: "my-permissions",
    title: "¿Qué puedo hacer según mi equipo?",
    description: "Entiende qué acciones puedes realizar en HubSpot según los permisos de tu equipo.",
    icon: "Users",
  },
  {
    id: "deals-management",
    title: "Gestión de Casos (Deals)",
    description: "Aprende sobre el ciclo de vida de los casos, desde su creación hasta el cierre.",
    icon: "Briefcase",
  },
  {
    id: "tasks-calls",
    title: "Tareas y Llamadas",
    description: "Guías sobre cómo se asignan y gestionan las tareas y llamadas automáticas.",
    icon: "Phone",
  },
  {
    id: "troubleshooting",
    title: "Problemas Comunes",
    description: "Encuentra soluciones a los problemas y dudas más frecuentes.",
    icon: "Wrench",
  },
]

export const initialArticles: Article[] = [
  {
    id: "1",
    slug: "que-casos-puedo-ver-segun-mi-equipo",
    title: "¿Qué casos puedo ver según mi equipo?",
    description: "Explica cómo la estructura de equipos en HubSpot afecta la visibilidad de los casos (deals).",
    content:
      "En HubSpot, no todos ven lo mismo. Tu acceso a los casos (deals) depende del equipo al que perteneces. Esto se hace para mantener el orden y asegurar que solo veas la información relevante para tu trabajo.\n\n### Visibilidad por Equipo:\n\n*   **Equipos de Ventas (RUA, CPM, Madrid)**: Generalmente, solo pueden ver los casos que les pertenecen a ellos o a su equipo directo. Esto les ayuda a centrarse en sus propios objetivos.\n*   **Equipo Pre-LSA**: Tiene una visión más amplia para poder realizar los estudios de viabilidad, accediendo a casos de diferentes equipos de ventas.\n*   **Customer Service**: Puede ver los casos que ya han avanzado a etapas de post-venta para dar seguimiento al cliente.\n*   **Administradores**: Tienen visibilidad total sobre todos los casos en todos los pipelines.\n\nEsta configuración asegura que la información sensible esté protegida y que tu panel de trabajo esté siempre limpio y enfocado en tus tareas.",
    category: "my-permissions",
    views: 152,
    difficulty: "Básico",
  },
  {
    id: "2",
    slug: "reasignacion-de-casos-por-salida-de-un-vendedor",
    title: "Reasignación de casos por salida de un vendedor",
    description: "Protocolo a seguir cuando un agente comercial deja la empresa y sus casos deben ser reasignados.",
    content:
      "Cuando un vendedor deja la empresa, sus casos y tareas deben ser transferidos a otros miembros del equipo para no perder ninguna oportunidad. Este proceso está estandarizado para ser rápido y eficiente.\n\n### Pasos del Proceso:\n\n1.  **Identificación**: Un administrador crea una lista con todos los casos y contactos del vendedor que se va.\n2.  **Reasignación de Contactos**: Los contactos se reasignan automáticamente de forma equitativa entre los miembros activos del equipo correspondiente.\n3.  **Reasignación de Casos (Deals)**: Una vez que los contactos tienen un nuevo dueño, los casos asociados a esos contactos se actualizan para reflejar el cambio. El nuevo dueño del contacto se convierte en el nuevo dueño del caso.\n4.  **Gestión de Tareas**:\n    *   **Para campañas 'Aircall Task Campaign'**: Las tareas antiguas se eliminan y el sistema crea nuevas tareas para los nuevos dueños.\n    *   **Para campañas 'LCC - Lead Call Cycle'**: Las tareas existentes no se eliminan, simplemente se reasignan al nuevo propietario del caso.\n\nEste proceso asegura una transición fluida y que ningún cliente quede desatendido.",
    category: "deals-management",
    views: 89,
    difficulty: "Intermedio",
  },
]
