import imgTadiclick from "../../assets/tadiclick.svg";
import imgVast from "../../assets/vast.svg";
import imgDymm from "../../assets/dymm.svg";
import imgHysionWeb from "../../assets/hysion-web.svg";
import imgKypacApp from "../../assets/kypac-app.svg";
import imgFoodiegoApp from "../../assets/foodiego-app.svg";
import imgStudioNineWeb from "../../assets/studionine-web.svg";
import imgAgrotrackWeb from "../../assets/agrotrack-web.svg";

export interface DesignCaseStudy {
  id: string;
  title: string;
  role: string;
  duration: string;
  tools: string[];
  challenge: string;
  persona: { name: string; role: string; quote: string; painPoints: string[] };
  problem: string;
  components: { label: string; items: string[] }[];
  beforeAfter: {
    mockup: string;
    beforeAlt: string;
    afterAlt: string;
    caption: string;
  };
  outcome: string;
  processSteps: {
    title: string;
    description: string;
    details: string[];
  }[];
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
    persona: {
      name: "María Elena",
      role: "Vendedora ambulante, 34 años",
      quote:
        "No entiendo los contratos del banco; necesito ver en colores si me conviene o no el préstamo.",
      painPoints: [
        "Miedo a letras pequeñas y cláusulas ocultas.",
        "No tiene tiempo de llenar formularios largos.",
        "Necesita saber el costo total antes de aceptar.",
      ],
    },
    problem:
      "El verdadero problema no era la falta de crédito, sino la desconfianza: los usuarios abandonaban en el paso de términos porque no entendían el costo real ni la fecha de pago.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Paleta de confianza: verdes oscuros + acentos amarillos.",
          "Tipografía IBM Plex Mono para cifras y Inter para lectura.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Tarjeta de resumen de préstamo con desglose total.",
          "Timeline de pagos con recordatorios automáticos.",
          "Formularios en 3 pasos con validación visual.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgTadiclick,
      beforeAlt: "Formulario largo y denso de solicitud de crédito",
      afterAlt: "Resumen visual del préstamo con costo total destacado",
      caption:
        "Pasamos de un formulario abrumador a un resumen visual que comunica transparencia antes de que el usuario acepte.",
    },
    outcome:
      "Redujimos la tasa de abandono en el flujo de solicitud un 38 % y aumentamos la confianza medida en pruebas de usabilidad, con 9 de cada 10 usuarios identificando correctamente el costo total.",
    processSteps: [
      {
        title: "Investigación y descubrimiento",
        description: "Entendimos a los usuarios y su relación con los préstamos.",
        details: [
          "Entrevistas con 12 usuarios potenciales de不同tes perfiles financieros.",
          "Análisis de apps existentes de préstamos: identificamos patrones de desconfianza.",
          "Mapa de empatía que reveló que la ansiedad era mayor que la necesidad de dinero.",
        ],
      },
      {
        title: "Wireframes y estructura",
        description: "Diseñamos la arquitectura de información y flujos principales.",
        details: [
          "Wireframes de baja fidelidad para el flujo de solicitud en 3 pasos.",
          "User flows que eliminaron 4 pasos innecesarios del proceso original.",
          "Arquitectura de información centrada en transparencia de costos.",
        ],
      },
      {
        title: "Diseño visual y sistema de diseño",
        description: "Creamos un sistema visual que transmitiera confianza y claridad.",
        details: [
          "Paleta de colores con verdes oscuros (confianza) y amarillos (atención).",
          "Tipografía dual: IBM Plex Mono para cifras, Inter para lectura.",
          "Componentes reutilizables: tarjetas de resumen, timeline de pagos, formularios.",
        ],
      },
      {
        title: "Prototipado y pruebas",
        description: "Validamos el diseño con usuarios reales antes de desarrollar.",
        details: [
          "Prototipo interactivo en Figma con 15 pantallas clave.",
          "Pruebas de usabilidad con 8 usuarios que completaron el flujo.",
          "Iteraciones basadas en feedback: simplificamos el resumen de préstamo.",
        ],
      },
    ],
  },
  {
    id: "vast",
    title: "VAST",
    role: "Product Designer",
    duration: "14 semanas",
    tools: ["Figma", "Prototipado avanzado", "Design System", "Maze"],
    challenge:
      "Crear un SaaS donde equipos de mantenimiento y clientes corporativos hablen el mismo idioma sin depender de llamadas, correos o hojas de cálculo.",
    persona: {
      name: "Carlos Ruiz",
      role: "Coordinador de mantenimiento",
      quote:
        "Recibo tickets por WhatsApp, correo y teléfono al mismo tiempo; pierdo la mitad y no sé quién los resolvió.",
      painPoints: [
        "Múltiples canales de entrada desordenados.",
        "Falta de trazabilidad de quién atendió cada ticket.",
        "Reportes manuales que tardan horas en armarse.",
      ],
    },
    problem:
      "La desconexión entre quien reporta y quien resuelve generaba duplicidad, tiempos muertos y frustración. Necesitábamos un sistema de verdad único para el ciclo completo del servicio.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Colores de estado semáforo para prioridades visuales.",
          "Iconografía técnica consistente en toda la plataforma.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Vista de kanban de tickets con asignación en drag & drop.",
          "Tarjeta de equipo con historial de mantenimiento.",
          "Dashboard de métricas exportable.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgVast,
      beforeAlt: "Bandeja de entrada saturada con tickets sin clasificar",
      afterAlt: "Vista de kanban con tickets asignados y estado visible",
      caption:
        "Centralizamos el caos en un kanban claro donde cada ticket tiene dueño, prioridad y trazabilidad completa.",
    },
    outcome:
      "El tiempo promedio de asignación bajó de horas a minutos y los coordinadores redujeron la generación de reportes manuales en un 70 %.",
    processSteps: [
      {
        title: "Descubrimiento del ecosistema",
        description: "Mapeamos el flujo caótico de tickets existente.",
        details: [
          "Observación de campo: seguimos a 5 coordinadores durante una semana.",
          "Documentación de 7 canales de entrada (WhatsApp, email, teléfono, etc.).",
          "Identificación de 3 roles clave: coordinador, técnico y cliente.",
        ],
      },
      {
        title: "Diseño de la arquitectura",
        description: "Estructuramos el sistema alrededor del ciclo de vida del ticket.",
        details: [
          "Mapa de navegación con 3 vistas principales: Kanban, Equipos, Métricas.",
          "Definición de estados: Nuevo → Asignado → En Progreso → Resuelto.",
          "Diseño de permisos por rol para cada acción del sistema.",
        ],
      },
      {
        title: "Diseño de componentes",
        description: "Creamos un design system consistente para toda la plataforma.",
        details: [
          "Componentes de tarjeta de ticket con estado visual semáforo.",
          "Vista kanban con drag & drop para asignación rápida.",
          "Dashboard de métricas con gráficos de rendimiento por técnico.",
        ],
      },
      {
        title: "Prototipado avanzado y validación",
        description: "Probamos flujos completos con stakeholders reales.",
        details: [
          "Prototipo interactivo de 25 pantallas con flujo completo.",
          "Pruebas con 5 coordinadores que gestionan tickets diariamente.",
          "Iteración del kanban: simplificamos la vista de asignación.",
        ],
      },
    ],
  },
  {
    id: "Dymm",
    title: "Dymm",
    role: "UI/UX + Fullstack",
    duration: "12 semanas",
    tools: ["Figma", "Next.js", "Supabase", "OAuth"],
    challenge:
      "Diseñar un sistema de autenticación que se sintiera seguro para empresas y simple para millones de usuarios finales, sin sacrificar accesibilidad.",
    persona: {
      name: "Ana Lucía",
      role: "Product Manager en startup",
      quote:
        "Necesito que mis usuarios entren con Google o correo, pero no quiero depender de un proveedor externo para la seguridad.",
      painPoints: [
        "Configurar OAuth es técnico y propenso a errores.",
        "Los usuarios olvidan contraseñas constantemente.",
        "No hay visibilidad de intentos de inicio de sesión.",
      ],
    },
    problem:
      "Los equipos técnicos pierden semanas integrando auth; los usuarios se frustan con flujos de recuperación confusos y las empresas no ven quién intenta acceder.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Modo claro y oscuro con variables de color consistentes.",
          "Enfoque móvil primero para el registro y login.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Pantalla de login social + mágica link.",
          "Flujo de verificación de correo de dos pasos.",
          "Panel de administración con logs de sesión.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgDymm,
      beforeAlt: "Pantalla de login genérica con muchos campos",
      afterAlt: "Login unificado con opciones sociales y mágica link",
      caption:
        "Convertimos un login tradicional en una puerta de entrada rápida, accesible y auditada para productos multiplataforma.",
    },
    outcome:
      "El tiempo de integración para nuevos clientes pasó de días a horas y la tasa de recuperación de cuentas mejoró notoriamente al simplificar el flujo de mágica link.",
    processSteps: [
      {
        title: "Análisis de flujos de auth",
        description: "Estudiamos los patrones de autenticación más efectivos.",
        details: [
          "Benchmark de 8 sistemas de auth (Auth0, Supabase, Firebase, etc.).",
          "Identificación de 4 métodos principales: email, social, magic link, SSO.",
          "Definición de requisitos de accesibilidad WCAG 2.1 AA.",
        ],
      },
      {
        title: "Diseño del sistema unificado",
        description: "Creamos un sistema que unificara múltiples métodos de login.",
        details: [
          "Layout compartido para login, registro y recuperación de contraseña.",
          "Componentes modulares: input, botón social, divider, mensaje de error.",
          "Paleta dual: modo claro para usuarios finales, oscuro para admins.",
        ],
      },
      {
        title: "Flujos de usuario y error handling",
        description: "Diseñamos cada escenario posible del flujo de autenticación.",
        details: [
          "User flows para: login exitoso, error de credenciales, cuenta bloqueada.",
          "Manejo de errores de OAuth con mensajes claros y acciones de recuperación.",
          "Flujo de magic link con estados: enviado, verificado, expirado.",
        ],
      },
      {
        title: "Pruebas de accesibilidad",
        description: "Validamos que el sistema fuera usable por todos.",
        details: [
          "Pruebas con lector de pantalla (NVDA, VoiceOver) en cada flujo.",
          "Contraste de colores verificado para WCAG AAA en elementos críticos.",
          "Navegación completa por teclado sin mouse.",
        ],
      },
    ],
  },
  {
    id: "hysion-web",
    title: "Hysion Web",
    role: "Diseño UI/UX + Frontend",
    duration: "6 semanas",
    tools: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Diseñar un sitio web de agencia que comunique servicios en menos de 5 segundos y convierta visitantes en leads sin verse genérico.",
    persona: {
      name: "Lucía Fernández",
      role: "Dueña de agencia de marketing, 29 años",
      quote:
        "Necesito una web que venda por mí mientras duermo; las plantillas se ven todas iguales.",
      painPoints: [
        "Sitios genéricos que no diferencian la marca.",
        "Falta de llamadas a la acción claras.",
        "Dificultad para mostrar un portfolio de forma atractiva.",
      ],
    },
    problem:
      "La agencia perdía leads por una web lenta y confusa: el visitante no entendía qué servicios ofrecía ni cómo contactar en los primeros segundos.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Sistema de color de marca con acentos vibrantes.",
          "Tipografía Inter para lectura y mono para etiquetas.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Hero animado con CTA principal fijo.",
          "Grid de proyectos con hover interactivo.",
          "Formulario de contacto validado en tiempo real.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgHysionWeb,
      beforeAlt: "Landing plana sin jerarquía visual clara",
      afterAlt: "Landing con hero animado y CTAs destacados",
      caption:
        "Reestructuramos la jerarquía visual: el valor de la agencia se comunica en el hero y el visitante puede contactar en un solo scroll.",
    },
    outcome:
      "La tasa de conversión del formulario aumentó un 45 % en el primer mes y el tiempo de permanencia en la página subió gracias a las animaciones de scroll.",
    processSteps: [
      {
        title: "Definición de marca",
        description: "Establecimos la identidad visual de la agencia.",
        details: [
          "Paleta de colores con acentos vibrantes sobre fondo neutro.",
          "Selección tipográfica: Inter para lectura, monospace para etiquetas técnicas.",
          "Definición de estilo de iconografía y elementos gráficos.",
        ],
      },
      {
        title: "Estructura de contenido",
        description: "Organizamos la información para máxima conversión.",
        details: [
          "Jerarquía: Hero (valor) → Servicios → Portfolio → Contacto.",
          "CTA principal fijo en el hero para capturar leads inmediatos.",
          "Sección de proyectos con hover revelador para engagement.",
        ],
      },
      {
        title: "Diseño visual y animaciones",
        description: "Creamos una experiencia visual memorable y fluida.",
        details: [
          "Hero con animación de entrada que comunica el valor en 3 segundos.",
          "Grid de proyectos con transiciones hover que revelan detalles.",
          "Formulario de contacto con validación en tiempo real y feedback visual.",
        ],
      },
      {
        title: "Optimización de rendimiento",
        description: "Aseguramos carga rápida sin sacrificar animaciones.",
        details: [
          "Lazy loading de imágenes y code splitting por sección.",
          "Animaciones con Framer Motion whileInView para carga bajo demanda.",
          "Optimización de fuentes con display swap para LCP mínimo.",
        ],
      },
    ],
  },
  {
    id: "kypac-app",
    title: "Kypac",
    role: "Diseño UI/UX + Frontend",
    duration: "8 semanas",
    tools: ["Figma", "React", "Stripe", "Supabase"],
    challenge:
      "Diseñar un checkout móvil para e-commerce que eliminara la fricción del pago: el usuario debía poder comprar en menos de un minuto sin dejar la app ni reescribir datos.",
    persona: {
      name: "Roberto Méndez",
      role: "Dueño de tienda deportiva, 41 años",
      quote:
        "Mis clientes abandonan el carrito porque el checkout pide demasiados datos; pierdo ventas cada día.",
      painPoints: [
        "Formularios de pago largos y redundantes.",
        "Miedo a ingresar datos de tarjeta en sitios desconocidos.",
        "Sin visibilidad del estado del pedido tras pagar.",
      ],
    },
    problem:
      "El abandono de carrito ocurría en el paso de pago: demasiados campos, falta de métodos rápidos y ninguna confirmación visual inmediata generaban desconfianza y abandono.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Paleta de marca con acentos de acción (verde confirmación).",
          "Tipografía Inter para lectura y mono para precios.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Tarjeta de producto con add-to-cart persistente.",
          "Checkout en un solo paso con Stripe y pagos guardados.",
          "Pantalla de seguimiento de pedido en tiempo real.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgKypacApp,
      beforeAlt: "Checkout fragmentado en múltiples pasos con formularios largos",
      afterAlt: "Checkout unificado con pago exprés y confirmación inmediata",
      caption:
        "Unificamos el pago en una sola pantalla con Stripe y guardado de métodos, eliminando pasos intermedios que generaban abandono.",
    },
    outcome:
      "Reducimos el abandono de carrito un 32 % en el primer mes y el tiempo medio de checkout bajó de 3 minutos a 45 segundos, con seguimiento de pedido en vivo.",
    processSteps: [
      {
        title: "Análisis de abandono",
        description: "Identificamos exactamente dónde perdíamos usuarios.",
        details: [
          "Análisis de funnel: 68% abandonaba en el paso de datos de pago.",
          "Heatmaps que revelaban confusión en el formulario de dirección.",
          "Entrevistas con 8 clientes que abandonaron el carrito.",
        ],
      },
      {
        title: "Rediseño del checkout",
        description: "Simplificamos el pago a un solo paso con métodos guardados.",
        details: [
          "Consolidación de 4 pasos en 1: dirección + pago en una pantalla.",
          "Integración de Stripe Elements con pagos guardados (Apple Pay, Google Pay).",
          "Validación en tiempo real de datos de tarjeta y dirección.",
        ],
      },
      {
        title: "Experiencia post-pago",
        description: "Diseñamos la confirmación y seguimiento del pedido.",
        details: [
          "Pantalla de confirmación inmediata con resumen visual del pedido.",
          "Tracking en tiempo real del estado: Procesando → Enviado → Entregado.",
          "Notificaciones push para actualizaciones de estado.",
        ],
      },
      {
        title: "Pruebas y optimización",
        description: "Validamos con datos reales y optimizamos el flujo.",
        details: [
          "A/B testing del checkout: versión simplificada vs. original.",
          "Pruebas de usabilidad con 10 usuarios completando compras.",
          "Iteración basada en métricas: tiempo de checkout y tasa de conversión.",
        ],
      },
    ],
  },
  {
    id: "foodiego-app",
    title: "FoodieGo",
    role: "UI/UX Designer",
    duration: "10 semanas",
    tools: ["Figma", "Prototipado", "Google Maps API", "UX Research"],
    challenge:
      "Diseñar una experiencia de delivery que resolviera la incertidumbre del cliente sobre cuándo llega su pedido, integrando seguimiento en vivo del repartidor sin sobrecargar la pantalla.",
    persona: {
      name: "Valentina Cruz",
      role: "Consultora, 32 años",
      quote:
        "Pido comida casi a diario; lo que más me estresa es no saber si el repartidor ya salió o cuánto falta.",
      painPoints: [
        "Incertidumbre sobre el tiempo de entrega.",
        "Menús estáticos que no muestran disponibilidad real.",
        "Sin forma clara de calificar la experiencia.",
      ],
    },
    problem:
      "La ansiedad del cliente nacía de la falta de visibilidad: sin tracking en vivo ni estimaciones confiables, el usuario llamaba al restaurante y generaba fricción operativa.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Paleta cálida que abre el apetito (naranjas y rojos suaves).",
          "Mapa a pantalla completa como fondo del tracking.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Tarjetas de menú con disponibilidad dinámica.",
          "Pantalla de seguimiento con ruta del repartidor en vivo.",
          "Sistema de reseñas post-entrega con fotos.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgFoodiegoApp,
      beforeAlt: "Pantalla de pedido estática sin información de entrega",
      afterAlt: "Tracking en vivo del repartidor con tiempo estimado",
      caption:
        "Reemplazamos la pantalla de espera estática por un mapa vivo que muestra al repartidor y el tiempo restante, eliminando la incertidumbre.",
    },
    outcome:
      "Aumentamos los pedidos recurrentes un 50 % y redujimos las llamadas de soporte sobre estado de pedido en un 70 %, gracias al seguimiento en tiempo real.",
    processSteps: [
      {
        title: "Investigación de ansiedad",
        description: "Entendimos la fuente de estrés de los usuarios.",
        details: [
          "Diarios de usuario con 15 personas que pedían delivery regularmente.",
          "Identificación del patrón: la ansiedad picaba en los primeros 10 min tras pagar.",
          "Análisis de llamadas al restaurante: 80% eran '¿dónde está mi pedido?'",
        ],
      },
      {
        title: "Diseño del tracking",
        description: "Creamos una experiencia de seguimiento en vivo.",
        details: [
          "Mapa a pantalla completa con ruta del repartidor en tiempo real.",
          "Marcador animado con dirección de movimiento y ETA visible.",
          "Estados del pedido: Preparando → En camino → Cerca → Entregado.",
        ],
      },
      {
        title: "Menú y disponibilidad",
        description: "Diseñamos menús que mostraran disponibilidad real.",
        details: [
          "Tarjetas de producto con indicador de disponibilidad en tiempo real.",
          "Sistema de badges: Disponible, Últimos disponibles, Agotado.",
          "Filtros por disponibilidad para reducir fricción.",
        ],
      },
      {
        title: "Sistema de reseñas",
        description: "Creamos un flujo de calificación post-entrega.",
        details: [
          "Reseñas con fotos del plato para futuros pedidos.",
          "Calificación por: Comida, Entrega, Presentación.",
          "Sistema de recompensas por reseñas frecuentes.",
        ],
      },
    ],
  },
  {
    id: "studionine-web",
    title: "StudioNine",
    role: "Diseño UI/UX + Frontend",
    duration: "7 semanas",
    tools: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Crear un portfolio de estudio creativo que se sintiera único y editorial, no como una plantilla más, y que mostrara el trabajo visual sin abrumar al visitante.",
    persona: {
      name: "Daniela Soto",
      role: "Directora creativa de agencia, 38 años",
      quote:
        "Cuando contrato un estudio, lo primero que miro es su web; si se ve como una plantilla, asumo que su trabajo también lo es.",
      painPoints: [
        "Portfolios genéricos que no diferencian al estudio.",
        "Casos de estudio poco visuales y densos de texto.",
        "Falta de personalidad de marca.",
      ],
    },
    problem:
      "El estudio perdía oportunidades porque su sitio anterior era una plantilla: no comunicaba su proceso creativo ni mostraba los casos con suficiente profundidad visual.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Sistema tipográfico editorial con jerarquía marcada.",
          "Paleta neutra con acentos de marca puntuales.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Tarjetas de proyecto con hover revelador.",
          "Animaciones de scroll que descubren el contenido.",
          "Sistema de casos de estudio visuales a pantalla completa.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgStudioNineWeb,
      beforeAlt: "Portfolio en grid plano sin jerarquía ni animaciones",
      afterAlt: "Portfolio editorial con animaciones de scroll y casos visuales",
      caption:
        "Pasamos de un grid plano a una experiencia editorial con animaciones que guían la lectura y muestran cada caso con profundidad visual.",
    },
    outcome:
      "El estudio recibió 3 nuevas consultas de clientes en el primer mes y el tiempo de permanencia en el sitio se duplicó gracias a las animaciones de scroll.",
    processSteps: [
      {
        title: "Definición editorial",
        description: "Establecimos un estilo editorial único y memorable.",
        details: [
          "Inspiración en revistas de diseño: jerarquía tipográfica marcada.",
          "Paleta neutra (blanco, negro, grises) con acentos de marca puntuales.",
          "Sistema de espaciado y proporciones basado en la retícula editorial.",
        ],
      },
      {
        title: "Estructura de portfolio",
        description: "Organizamos los casos de estudio para máximo impacto visual.",
        details: [
          "Grid de proyectos con hover que revela el rol y el resultado.",
          "Cada caso de estudio como página independiente a pantalla completa.",
          "Animaciones de scroll que descubren el contenido progresivamente.",
        ],
      },
      {
        title: "Diseño visual y animaciones",
        description: "Creamos una experiencia visual inmersiva y fluida.",
        details: [
          "Hero con tipografía editorial grande y animación de entrada.",
          "Tarjetas de proyecto con transiciones hover que revelan contexto.",
          "Animaciones de scroll con Framer Motion whileInView.",
        ],
      },
      {
        title: "Caso de estudio visual",
        description: "Diseñamos la vista detallada de cada proyecto.",
        details: [
          "Layout de pantalla completa para cada caso de estudio.",
          "Galería de imágenes con zoom interactivo.",
          "Sección de proceso creativo con timeline visual.",
        ],
      },
    ],
  },
  {
    id: "agrotrack-web",
    title: "AgroTrack",
    role: "Product Designer",
    duration: "16 semanas",
    tools: ["Figma", "Design System", "Data Viz", "UX Research"],
    challenge:
      "Hacer que datos complejos de sensores IoT agrícolas fueran comprensibles para gerentes de campo sin perfil técnico, sin perder la precisión que los ingenieros necesitan.",
    persona: {
      name: "Javier Quispe",
      role: "Gerente de campo agrícola, 47 años",
      quote:
        "Tengo cientos de sensores tirando números; lo que necesito es ver de un vistazo qué cultivo necesita mi atención hoy.",
      painPoints: [
        "Sobrecarga de datos sin contexto visual.",
        "Reportes difíciles de interpretar para perfiles no técnicos.",
        "Falta de alertas tempranas accionables.",
      ],
    },
    problem:
      "Los gerentes se ahogaban en tablas de números sin jerarquía: la información estaba, pero no era accionable, lo que llevaba a reacciones tardías ante problemas de cultivo.",
    components: [
      {
        label: "Fundaciones",
        items: [
          "Sistema de color semántico para estados de cultivo.",
          "Design system de visualización de datos consistente.",
        ],
      },
      {
        label: "Componentes clave",
        items: [
          "Dashboard de gráficos en tiempo real por sensor.",
          "Overlay de mapa con sensores geolocalizados.",
          "Reportes de productividad exportables.",
        ],
      },
    ],
    beforeAfter: {
      mockup: imgAgrotrackWeb,
      beforeAlt: "Tabla densa de números sin jerarquía visual",
      afterAlt: "Dashboard con gráficos en vivo y mapa de cultivos",
      caption:
        "Convertimos tablas densas en un dashboard visual con mapa y gráficos en tiempo real que jerarquizan qué cultivo necesita atención.",
    },
    outcome:
      "Mejoramos la velocidad de decisión del equipo de campo un 60 % y redujimos el tiempo de detección de anomalías de días a horas, gracias a las alertas visuales.",
    processSteps: [
      {
        title: "Investigación de datos",
        description: "Entendimos qué datos importaban y para quién.",
        details: [
          "Entrevistas con 6 gerentes de campo y 4 ingenieros agrónomos.",
          "Análisis de 200+ métricas de sensores: identificamos las 12 más críticas.",
          "Definición de umbrales de alerta para cada tipo de sensor.",
        ],
      },
      {
        title: "Diseño de visualización",
        description: "Creamos gráficos que comunicaran datos complejos claramente.",
        details: [
          "Paleta semántica: verde (óptimo), amarillo (precaución), rojo (alerta).",
          "Gráficos de línea para tendencias, mapas de calor para distribución.",
          "Dashboard principal con KPIs de cultivos en tiempo real.",
        ],
      },
      {
        title: "Mapa interactivo",
        description: "Diseñamos una vista geolocalizada de todos los sensores.",
        details: [
          "Mapa a pantalla completa con clustering de sensores cercanos.",
          "Overlay de información al hacer click en un sensor específico.",
          "Filtros por tipo de cultivo, estado y rango de fechas.",
        ],
      },
      {
        title: "Sistema de alertas",
        description: "Creamos alertas visuales que fueran accionables.",
        details: [
          "Alertas en tiempo real con nivel de prioridad (urgente, alto, medio).",
          "Notificaciones push para anomalies críticas.",
          "Dashboard de alertas históricas para análisis de tendencias.",
        ],
      },
    ],
  },
];

export const designCaseStudyMap = new Map<string, DesignCaseStudy>(
  designCaseStudies.map((study) => [study.id, study]),
);

export const getDesignCaseStudyById = (id: string): DesignCaseStudy | undefined =>
  designCaseStudyMap.get(id);
