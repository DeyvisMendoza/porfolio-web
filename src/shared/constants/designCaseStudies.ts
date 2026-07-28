import imgTadiclick from "../../assets/tadiclick.svg";
import imgVast from "../../assets/vast.svg";
import imgDymm from "../../assets/dymm.svg";
import imgHysionWeb from "../../assets/hysion-web.svg";
import imgKypacApp from "../../assets/kypac-app.svg";
import imgFoodiegoApp from "../../assets/foodiego-app.svg";
import imgStudioNineWeb from "../../assets/studionine-web.svg";
import imgAgrotrackWeb from "../../assets/agrotrack-web.svg";

export interface DesignProcessPhase {
  id: string;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
  images: string[];
}

export interface DesignCaseStudy {
  id: string;
  title: string;
  role: string;
  duration: string;
  tools: string[];
  challenge: string;
  outcome: string;
  mockup: string;
  processPhases: DesignProcessPhase[];
}

const defaultPhases: Omit<DesignProcessPhase, "images">[] = [
  {
    id: "discovery",
    title: "1. Descubrimiento",
    description: "Fase donde se entiende el proyecto: qué problema existe, cuál es el objetivo del negocio y qué funcionalidades tendrá.",
    activities: [
      "Kickoff con el cliente",
      "Reunión con stakeholders",
      "Definición del alcance",
      "Objetivos del proyecto",
      "Requisitos funcionales",
    ],
    deliverables: ["Brief", "Objetivos", "Alcance", "Roadmap inicial"],
  },
  {
    id: "ux-research",
    title: "2. Investigación UX",
    description: "Se estudia al usuario para conocer sus necesidades, dolores, hábitos y comportamientos.",
    activities: [
      "Entrevistas a usuarios",
      "Encuestas y benchmarking",
      "Análisis de competencia",
      "Mapas de empatía",
      "Observación directa",
    ],
    deliverables: ["User Persona", "Empathy Map", "Benchmark", "Insights"],
  },
  {
    id: "define",
    title: "3. Definir el problema",
    description: "Toda la información obtenida se organiza para definir exactamente qué problema se resolverá.",
    activities: [
      "Problem Statement",
      "How Might We...",
      "User Journey",
      "Customer Journey",
    ],
    deliverables: ["Problem Statement", "User Journey Map", "HMW Statements"],
  },
  {
    id: "ideate",
    title: "4. Ideación",
    description: "Aquí nacen las soluciones. Se generan ideas sin diseñar bonito, solo se exploran posibilidades.",
    activities: [
      "Brainstorming",
      "Crazy 8",
      "Sketching rápido",
      "Mapas mentales",
    ],
    deliverables: ["Sketches", "Ideas priorizadas", "Mapa mental"],
  },
  {
    id: "ia",
    title: "5. Arquitectura de Información",
    description: "Se organiza todo el contenido: navegación, categorías, jerarquía y menús.",
    activities: [
      "Definición de navegación",
      "Categorías y jerarquía",
      "Estructura de menús",
      "Sitemap",
    ],
    deliverables: ["Sitemap", "User Flow", "Task Flow"],
  },
  {
    id: "wireframes",
    title: "6. Wireframes",
    description: "Primeras pantallas sin colores ni imágenes. Solo estructura: dónde va cada botón, menú y texto.",
    activities: [
      "Wireframes de baja fidelidad",
      "Wireframes de media fidelidad",
      "Definición de layout",
      "Posición de elementos",
    ],
    deliverables: ["Low Fidelity Mockups", "Mid Fidelity Mockups"],
  },
  {
    id: "ui-design",
    title: "7. Diseño UI",
    description: "Aparece el diseño visual: colores, tipografía, iconografía, espaciados y componentes.",
    activities: [
      "Definición de colores y tipografía",
      "Iconografía y espaciados",
      "Construcción del Design System",
      "Componentes y variantes",
      "Tokens y Grid",
      "Responsive",
    ],
    deliverables: ["Design System", "Componentes", "Tokens", "Guidelines"],
  },
  {
    id: "prototype",
    title: "8. Prototipo",
    description: "Se conectan las pantallas para que parezca una aplicación real. El usuario puede hacer clic y navegar.",
    activities: [
      "Conexión de pantallas",
      "Interacciones y transiciones",
      "Navegación completa",
    ],
    deliverables: ["Prototipo interactivo"],
  },
  {
    id: "testing",
    title: "9. Testing de Usabilidad",
    description: "Usuarios reales prueban el producto. Se observa dónde dudan, se equivocan y cuánto tardan.",
    activities: [
      "Sesiones con usuarios reales",
      "Tareas asignadas",
      "Observación de comportamiento",
      "Registro de errores y comentarios",
    ],
    deliverables: ["Reporte de usabilidad", "Métricas", "Insights"],
  },
  {
    id: "iteration",
    title: "10. Iteración",
    description: "Con los resultados del testing se mejora el diseño. Es un ciclo continuo: diseñar → probar → corregir → volver a probar.",
    activities: [
      "Análisis de resultados",
      "Correcciones de diseño",
      "Nuevas iteraciones",
      "Validación continua",
    ],
    deliverables: ["Diseño refinado", "Nuevas versiones del prototipo"],
  },
  {
    id: "handoff",
    title: "11. Handoff a Desarrollo",
    description: "El diseñador entrega todo al equipo de desarrollo: componentes, medidas, colores, tipografía, assets y especificaciones.",
    activities: [
      "Documentación de componentes",
      "Especificaciones de diseño",
      "Entrega de assets",
      "Revisión con desarrollo",
    ],
    deliverables: ["Especificaciones", "Assets", "Documentación"],
  },
  {
    id: "followup",
    title: "12. Seguimiento",
    description: "Una vez publicada la aplicación se analiza: analytics, heatmaps, conversiones, bugs y feedback.",
    activities: [
      "Análisis de analytics",
      "Revisión de heatmaps",
      "Monitoreo de conversiones",
      "Recopilación de feedback",
    ],
    deliverables: ["Reportes", "Mejoras", "Nuevas iteraciones"],
  },
];

function createProcessPhases(images: { [key: string]: string[] }): DesignProcessPhase[] {
  return defaultPhases.map((phase) => ({
    ...phase,
    images: images[phase.id] || [],
  }));
}

export const designCaseStudies: DesignCaseStudy[] = [
  {
    id: "tadiclick",
    title: "Tadiclick",
    role: "Diseño UI/UX + Frontend",
    duration: "10 semanas",
    tools: ["Figma", "FigJam", "React", "Tailwind CSS"],
    challenge:
      "Diseñar una app de préstamos en la que cualquier persona, sin conocimiento financiero, pudiera entender cuánto pide, cuánto devuelve y cuándo.",
    outcome:
      "Redujimos la tasa de abandono en el flujo de solicitud un 38 % y aumentamos la confianza medida en pruebas de usabilidad, con 9 de cada 10 usuarios identificando correctamente el costo total.",
    mockup: imgTadiclick,
    processPhases: createProcessPhases({
      "discovery": [imgTadiclick, imgTadiclick],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgTadiclick],
      "prototype": [imgTadiclick],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "vast",
    title: "VAST",
    role: "Product Designer",
    duration: "14 semanas",
    tools: ["Figma", "Prototipado avanzado", "Design System", "Maze"],
    challenge:
      "Crear un SaaS donde equipos de mantenimiento y clientes corporativos hablen el mismo idioma sin depender de llamadas, correos o hojas de cálculo.",
    outcome:
      "El tiempo promedio de asignación bajó de horas a minutos y los coordinadores redujeron la generación de reportes manuales en un 70 %.",
    mockup: imgVast,
    processPhases: createProcessPhases({
      "discovery": [imgVast],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgVast],
      "prototype": [imgVast],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "Dymm",
    title: "Dymm",
    role: "UI/UX + Fullstack",
    duration: "12 semanas",
    tools: ["Figma", "Next.js", "Supabase", "OAuth"],
    challenge:
      "Diseñar un sistema de autenticación que se sintiera seguro para empresas y simple para millones de usuarios finales, sin sacrificar accesibilidad.",
    outcome:
      "El tiempo de integración para nuevos clientes pasó de días a horas y la tasa de recuperación de cuentas mejoró notoriamente al simplificar el flujo de mágica link.",
    mockup: imgDymm,
    processPhases: createProcessPhases({
      "discovery": [imgDymm],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgDymm],
      "prototype": [imgDymm],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "hysion-web",
    title: "Hysion Web",
    role: "Diseño UI/UX + Frontend",
    duration: "6 semanas",
    tools: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Diseñar un sitio web de agencia que comunique servicios en menos de 5 segundos y convierta visitantes en leads sin verse genérico.",
    outcome:
      "La tasa de conversión del formulario aumentó un 45 % en el primer mes y el tiempo de permanencia en la página subió gracias a las animaciones de scroll.",
    mockup: imgHysionWeb,
    processPhases: createProcessPhases({
      "discovery": [imgHysionWeb],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgHysionWeb],
      "prototype": [imgHysionWeb],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "kypac-app",
    title: "Kypac",
    role: "Diseño UI/UX + Frontend",
    duration: "8 semanas",
    tools: ["Figma", "React", "Stripe", "Supabase"],
    challenge:
      "Diseñar un checkout móvil para e-commerce que eliminara la fricción del pago: el usuario debía poder comprar en menos de un minuto sin dejar la app ni reescribir datos.",
    outcome:
      "Reducimos el abandono de carrito un 32 % en el primer mes y el tiempo medio de checkout bajó de 3 minutos a 45 segundos, con seguimiento de pedido en vivo.",
    mockup: imgKypacApp,
    processPhases: createProcessPhases({
      "discovery": [imgKypacApp],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgKypacApp],
      "prototype": [imgKypacApp],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "foodiego-app",
    title: "FoodieGo",
    role: "UI/UX Designer",
    duration: "10 semanas",
    tools: ["Figma", "Prototipado", "Google Maps API", "UX Research"],
    challenge:
      "Diseñar una experiencia de delivery que resolviera la incertidumbre del cliente sobre cuándo llega su pedido, integrando seguimiento en vivo del repartidor sin sobrecargar la pantalla.",
    outcome:
      "Aumentamos los pedidos recurrentes un 50 % y redujimos las llamadas de soporte sobre estado de pedido en un 70 %, gracias al seguimiento en tiempo real.",
    mockup: imgFoodiegoApp,
    processPhases: createProcessPhases({
      "discovery": [imgFoodiegoApp],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgFoodiegoApp],
      "prototype": [imgFoodiegoApp],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "studionine-web",
    title: "StudioNine",
    role: "Diseño UI/UX + Frontend",
    duration: "7 semanas",
    tools: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Crear un portfolio de estudio creativo que se sintiera único y editorial, no como una plantilla más, y que mostrara el trabajo visual sin abrumar al visitante.",
    outcome:
      "El estudio recibió 3 nuevas consultas de clientes en el primer mes y el tiempo de permanencia en el sitio se duplicó gracias a las animaciones de scroll.",
    mockup: imgStudioNineWeb,
    processPhases: createProcessPhases({
      "discovery": [imgStudioNineWeb],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgStudioNineWeb],
      "prototype": [imgStudioNineWeb],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
  {
    id: "agrotrack-web",
    title: "AgroTrack",
    role: "Product Designer",
    duration: "16 semanas",
    tools: ["Figma", "Design System", "Data Viz", "UX Research"],
    challenge:
      "Hacer que datos complejos de sensores IoT agrícolas fueran comprensibles para gerentes de campo sin perfil técnico, sin perder la precisión que los ingenieros necesitan.",
    outcome:
      "Mejoramos la velocidad de decisión del equipo de campo un 60 % y redujimos el tiempo de detección de anomalías de días a horas, gracias a las alertas visuales.",
    mockup: imgAgrotrackWeb,
    processPhases: createProcessPhases({
      "discovery": [imgAgrotrackWeb],
      "ux-research": [],
      "define": [],
      "ideate": [],
      "ia": [],
      "wireframes": [],
      "ui-design": [imgAgrotrackWeb],
      "prototype": [imgAgrotrackWeb],
      "testing": [],
      "iteration": [],
      "handoff": [],
      "followup": [],
    }),
  },
];

export const designCaseStudyMap = new Map<string, DesignCaseStudy>(
  designCaseStudies.map((study) => [study.id, study]),
);

export const getDesignCaseStudyById = (id: string): DesignCaseStudy | undefined =>
  designCaseStudyMap.get(id);
