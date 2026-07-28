import imgTadiclick from "../../assets/tadiclick.svg";
import imgVast from "../../assets/vast.svg";
import imgDymm from "../../assets/dymm.svg";
import imgHysionWeb from "../../assets/case-studies/hysion-web/hysionportada.png";
import imgKypacApp from "../../assets/kypac-app.svg";
import imgFoodiegoApp from "../../assets/foodiego-app.svg";
import imgStudioNineWeb from "../../assets/studionine-web.svg";
import imgAgrotrackWeb from "../../assets/agrotrack-web.svg";
import imgFlujoGeneral from "../../assets/case-studies/tadiclick/define/flujo general.svg";
import imgIdea1 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 1.svg";
import imgIdea2 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 2.svg";
import imgIdea3 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 3.svg";
import imgIdea4 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 4.svg";
import imgIdea5 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 5.svg";
import imgIdea8 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 8.svg";
import imgIdea9 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 42.svg";
import imgIdea10 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 10.svg";
import imgIdea11 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 11.svg";
import imgIdea12 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 12.svg";
import imgIdea13 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 13.svg";
import imgIdea14 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 14.svg";
import imgIdea52 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 52.svg";
import imgIdea51 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 51.svg";
import imgIdea49 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 49.svg";
import imgIdea50 from "../../assets/case-studies/tadiclick/ideate/iPhone 16 Pro Max - 50.svg";
import imgGeneral from "../../assets/case-studies/tadiclick/wireframes/vistageneral.png";
import imgTadi from "../../assets/case-studies/tadiclick/wireframes/tadi.png";
import captura1 from "../../assets/case-studies/tadiclick/ui-design/captura1.png";
import captura2 from "../../assets/case-studies/tadiclick/ui-design/captura2.png";
import captura3 from "../../assets/case-studies/tadiclick/ui-design/captura3.png";
import registro from "../../assets/case-studies/tadiclick/prototype/registro.png";
import actualizaciones from "../../assets/case-studies/tadiclick/prototype/actualizaciones.png";
import desembolso from "../../assets/case-studies/tadiclick/prototype/desembolso.png";
import backoffice from "../../assets/case-studies/tadiclick/prototype/backoffice.png";
import tadiclick from "../../assets/case-studies/tadiclick/iteration/iPhone 16 Pro Max - 242.svg";
import pfinales from "../../assets/case-studies/tadiclick/iteration/pfinales.png";
import phistorial from "../../assets/case-studies/tadiclick/iteration/phistorial.png";

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
    description: "Investigación inicial del proyecto y reunión con el cliente para entender sus necesidades y expectativas.",
    activities: [
      "Investigación de apps de préstamo existentes (Kashin, Doctor Sol, Yape)",
      "Reunión inicial con el cliente para entender sus objetivos",
      "Preguntas clave: público objetivo, referencias, colores, funcionamiento",
      "Definición de alcance y objetivos del proyecto",
    ],
    deliverables: ["Brief del proyecto", "Objetivos definidos", "Alcance acordado"],
  },
  {
    id: "ux-research",
    title: "2. Investigación UX",
    description: "Profundización en el comportamiento del usuario y análisis de la competencia para tomar decisiones informadas.",
    activities: [
      "Análisis de referencias en Pinterest, Mobbin y Google",
      "Investigación de cómo funciona el proceso de préstamos en apps",
      "Estudio de la competencia: Kashin, Doctor Sol, Yape",
      "Entendimiento de cómo los usuarios interactúan con el sistema antiguo",
    ],
    deliverables: ["Análisis de competencia", "Referencias visuales", "Insights de usuarios"],
  },
  {
    id: "define",
    title: "3. Definir el problema",
    description: "Organización de toda la información recopilada para definir exactamente qué problema se resolverá.",
    activities: [
      "Reunión con equipo funcional para escuchar al cliente",
      "Definición de roles y responsabilidades",
      "Comprensión del flujo actual del cliente (sistema antiguo)",
      "Identificación de pain points y oportunidades",
    ],
    deliverables: ["Problem Statement", "Roles definidos", "Flujo actual documentado"],
  },
  {
    id: "ideate",
    title: "4. Ideación",
    description: "Generación de soluciones a través de bocetos y reuniones de feedback con el cliente.",
    activities: [
      "Presentación de bocetos de baja fidelidad al cliente",
      "Feedback iterativo: agregar, quitar y ajustar elementos",
      "Reuniones para definir detalles del app",
      "Exploración de ideas y soluciones creativas",
    ],
    deliverables: ["Bocetos de baja fidelidad", "Feedback del cliente", "Dirección definida"],
  },
  {
    id: "ia",
    title: "5. Arquitectura de Información",
    description: "Definición de pantallas y flujos para que el cliente pueda entender cómo funcionará la app.",
    activities: [
      "Definición de pantallas principales",
      "Creación de flujos de navegación",
      "Documentación de funcionalidades por pantalla",
      "Organización de la estructura de la app",
    ],
    deliverables: ["Flujos de navegación", "Mapa de pantallas", "Estructura definida"],
  },
  {
    id: "wireframes",
    title: "6. Wireframes",
    description: "Diseño de pantallas más acordadas con flujos para presentar al cliente.",
    activities: [
      "Diseño de pantallas con colores iniciales",
      "Creación de la mascota Tadi con IA para diferenciarse",
      "Presentación al cliente para conformidad",
      "Ajustes basados en feedback",
    ],
    deliverables: ["Wireframes con diseño", "Mascota Tadi", "Aprobación del cliente"],
  },
  {
    id: "ui-design",
    title: "7. Diseño UI",
    description: "Definición del diseño visual completo: colores, tipografía, componentes y sistema de diseño.",
    activities: [
      "Aplicación de colores compartidos por el cliente",
      "Diseño de componentes y variantes",
      "Creación del Design System",
      "Coherencia visual en todas las pantallas",
    ],
    deliverables: ["Design System", "Componentes", "Pantallas finales"],
  },
  {
    id: "prototype",
    title: "8. Prototipo",
    description: "Conexión de pantallas y creación del backoffice para que el cliente pudiera configurar la app.",
    activities: [
      "Conexión de pantallas para prototipo interactivo",
      "Creación del backoffice con Figma Make (IA)",
      "Publicación en link temporal de Figma",
      "Presentación del backoffice al cliente",
    ],
    deliverables: ["Prototipo interactivo", "Backoffice funcional", "Documentación"],
  },
  {
    id: "testing",
    title: "9. Testing y Validación",
    description: "Revisión con el cliente y validación de que todo estuviera conforme a lo esperado.",
    activities: [
      "Revisión de pantallas por parte del cliente",
      "Validación de funcionalidades del backoffice",
      "Confirmación de que todo está conforme",
      "Ajustes finales antes del handoff",
    ],
    deliverables: ["Conformidad del cliente", "Lista de ajustes", "Aprobación final"],
  },
  {
    id: "iteration",
    title: "10. Iteración",
    description: "Ajustes y mejoras basados en el feedback del cliente antes de entregar a desarrollo.",
    activities: [
      "Correcciones de diseño según feedback",
      "Ajustes de funcionalidades del backoffice",
      "Mejoras visuales y de usabilidad",
      "Preparación para handoff",
    ],
    deliverables: ["Diseño refinado", "Backoffice actualizado", "Documentación final"],
  },
  {
    id: "handoff",
    title: "11. Handoff a Desarrollo",
    description: "Entrega organizada de todo el diseño y código al equipo de desarrollo.",
    activities: [
      "Entrega del link de Figma organizado para desarrolladores",
      "Entrega del archivo ZIP con código del backoffice",
      "Documentación de componentes y especificaciones",
      "Reuniones con equipo de desarrollo para cambios",
    ],
    deliverables: ["Link de Figma", "Código del backoffice", "Documentación"],
  },
  {
    id: "followup",
    title: "12. Seguimiento",
    description: "Prueba del app final, identificación de problemas visuales y trabajo con desarrollo para solucionarlos.",
    activities: [
      "Prueba del app con acceso proporcionado",
      "Identificación de problemas visuales y diferencias con Figma",
      "Reunión con equipo de desarrollo para solucionar detalles",
      "Cierre del proyecto con entrega formal",
    ],
    deliverables: ["Reporte de problemas", "Soluciones implementadas", "Proyecto cerrado"],
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
      "discovery": ["https://play-lh.googleusercontent.com/DLTZl3e0MJFy2wEvZlYEyRmvjLG42Lj0hGBppjOUWhYetpEkItHIx2PHXAwtRudrGh5fftROq62qgrOpm-t4", "https://play-lh.googleusercontent.com/JtnfveCv3e2_ZJyI0RWvIO1U6KYQGvdXx40hUnS7e7GN1kkM2Jj3epJtufDQpOlCbQLBzQcO7A4e4PIbiYKbSco", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LCHo8SWaxniS73Ac0iNpH-dxsBefGbk4itOmjazO3T0potpcWN_8UME&s=10"],
      "ux-research": ["https://i.pinimg.com/1200x/fb/e7/a4/fbe7a4e9aef20ce9a8ae920ab8f5348d.jpg", "https://i.pinimg.com/736x/21/92/6f/21926f94ea0215fe188061fe0aeff38f.jpg", "https://i.pinimg.com/1200x/50/74/d7/5074d7d6058ddcec08de0c2fba6131a2.jpg"],
      "define": [imgFlujoGeneral],
      "ideate": [imgIdea1, imgIdea2, imgIdea3, imgIdea4, imgIdea5, imgIdea8, imgIdea9, imgIdea10, imgIdea11, imgIdea12, imgIdea13, imgIdea14,],
      "ia": [ imgIdea52, imgIdea51, imgIdea49, imgIdea50],
      "wireframes": [imgGeneral, imgTadi],
      "ui-design": [captura1, captura2, captura3],
      "prototype": [registro, actualizaciones, desembolso, backoffice],
      "testing": [],
      "iteration": [tadiclick, pfinales, phistorial],
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
