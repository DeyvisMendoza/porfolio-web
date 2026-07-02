import imgTadiclick from "../../assets/tadiclick.svg";
import imgVast from "../../assets/vast.svg";
import imgDymm from "../../assets/dymm.svg";
import imgHysionWeb from "../../assets/hysion-web.svg";
import imgKypacApp from "../../assets/kypac-app.svg";
import imgFoodiegoApp from "../../assets/foodiego-app.svg";
import imgStudioNineWeb from "../../assets/studionine-web.svg";
import imgAgrotrackWeb from "../../assets/agrotrack-web.svg";

export interface DevCaseStudy {
  id: string;
  title: string;
  liveUrl: string;
  repoUrl: string;
  stack: string[];
  challenge: string;
  figmaToCode: { mockup: string; caption: string; points: string[] };
  architecture: { title: string; desc: string }[];
  metrics: { label: string; value: string }[];
  deployment: string;
}

export const devCaseStudies: DevCaseStudy[] = [
  {
    id: "tadiclick",
    title: "Tadiclick — App de préstamos y finanzas",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    challenge:
      "Construir una interfaz móvil fluida donde el usuario avance por un flujo de solicitud de crédito sin perder el contexto de cuánto debe y cuándo paga, manteniendo la accesibilidad y el rendimiento en dispositivos de gama media.",
    figmaToCode: {
      mockup: imgTadiclick,
      caption:
        "Traduje el design system de Figma a componentes React reutilizables, conservando microinteracciones y tokens visuales.",
      points: [
        "Tokens de color y tipografía centralizados en Tailwind config.",
        "Componentes de formulario controlados con validación en tiempo real.",
        "Animaciones de transición entre pasos con Framer Motion.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Supabase como backend-for-frontend: auth, base de datos PostgreSQL y edge functions para cálculos de préstamo en tiempo real.",
      },
      {
        title: "Componentización",
        desc:
          "Separación entre tarjetas de resumen, timeline de pagos y formularios de solicitud, cada uno testeable de forma aislada.",
      },
      {
        title: "Rendimiento",
        desc:
          "Lazy loading de rutas secundarias, memoización de cálculos financieros y optimización de imágenes para móvil.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "94" },
      { label: "Largest Contentful Paint", value: "1.2 s" },
      { label: "Total Blocking Time", value: "120 ms" },
      { label: "Cumulative Layout Shift", value: "0.02" },
    ],
    deployment:
      "Frontend desplegado en Vercel con CI/CD automático y previews por pull request. Supabase maneja migraciones y políticas de seguridad a nivel de fila.",
  },
  {
    id: "vast",
    title: "VAST — Plataforma de servicios técnicos",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC"],
    challenge:
      "Desarrollar un SaaS de tickets de mantenimiento que soporte múltiples roles, permisos granulares y actualizaciones en tiempo real, sin sacrificar la velocidad de carga ni la claridad del código.",
    figmaToCode: {
      mockup: imgVast,
      caption:
        "Convertí los flujos de Figma en una arquitectura de tipo seguro de extremo a extremo, desde la base de datos hasta los componentes.",
      points: [
        "Modelos de Prisma reflejan estados y permisos del design system.",
        "Procedimientos tRPC tipados evitan inconsistencias API-UI.",
        "Tablero kanban interactivo con actualización optimista.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "PostgreSQL + Prisma para relaciones complejas entre clientes, tickets, técnicos y equipos; tRPC para llamadas tipadas.",
      },
      {
        title: "Componentización",
        desc:
          "Columnas de kanban, tarjetas de ticket y formularios de asignación desacoplados; hooks reutilizables para mutaciones.",
      },
      {
        title: "Rendimiento",
        desc:
          "SSR para carga inicial del dashboard, SWR para actualizaciones en segundo plano y revalidación selectiva.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "92" },
      { label: "Largest Contentful Paint", value: "1.4 s" },
      { label: "Total Blocking Time", value: "150 ms" },
      { label: "Cumulative Layout Shift", value: "0.03" },
    ],
    deployment:
      "Aplicación Next.js en Vercel con conexión a base de datos PostgreSQL en Railway; despliegues automáticos con Prisma migrate.",
  },
  {
    id: "dymm",
    title: "Dymm — Sistema de autenticación multiplataforma",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["Next.js", "Supabase Auth", "OAuth 2.0", "TypeScript", "Prisma"],
    challenge:
      "Implementar un sistema de autenticación reusable que integre OAuth social, verificación de correo, recuperación de contraseña y logs de auditoría, todo bajo una API limpia para equipos de producto.",
    figmaToCode: {
      mockup: imgDymm,
      caption:
        "Llevé las pantallas de auth de Figma a un paquete de componentes consistente, accesible y fácil de integrar en cualquier app.",
      points: [
        "Componentes de login, registro y recuperación con ARIA labels.",
        "Manejo de errores de OAuth con mensajes claros para el usuario.",
        "Variables de diseño sincronizadas con el design system.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Supabase Auth gestiona sesiones, tokens y proveedores OAuth; PostgreSQL almacena perfiles extendidos y logs de auditoría.",
      },
      {
        title: "Componentización",
        desc:
          "Auth layout compartido, formularios encapsulados y hooks para signIn, signUp, magic link y reset de contraseña.",
      },
      {
        title: "Rendimiento",
        desc:
          "Middleware de Next.js protege rutas sin cargar JavaScript innecesario; cookies seguras para sesiones.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "96" },
      { label: "Largest Contentful Paint", value: "1.0 s" },
      { label: "Total Blocking Time", value: "80 ms" }, { label: "Cumulative Layout Shift", value: "0.01" },
    ],
    deployment:
      "Desplegado como paquete interno de autenticación junto con una app de demostración en Vercel; documentación automatizada con Storybook.",
  },
  {
    id: "hysion-web",
    title: "Hysion Web — Landing de agencia",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    challenge:
      "Construir una landing page de agencia con animaciones de scroll fluidas, SEO técnico y carga sub-segundo, todo sin sacrificar la personalidad visual de la marca.",
    figmaToCode: {
      mockup: imgHysionWeb,
      caption:
        "Traduje el diseño de Figma a componentes React con Tailwind CSS, manteniendo la fidelidad pixel-perfect y añadiendo microinteracciones.",
      points: [
        "Componentes de sección reutilizables con variantes de Tailwind.",
        "Animaciones de scroll con Framer Motion whileInView.",
        "Lazy loading de imágenes y code splitting por sección.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Formulario de contacto con validación en cliente y envío vía API route serverless en Vercel; sin backend dedicado.",
      },
      {
        title: "Componentización",
        desc:
          "Hero, servicios, portfolio y contacto como secciones independientes; cada una testeable y reordenable.",
      },
      {
        title: "Rendimiento",
        desc:
          "Imágenes optimizadas, fuentes con display swap y CSS crítico inline para un LCP mínimo.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "97" },
      { label: "Largest Contentful Paint", value: "0.9 s" },
      { label: "Total Blocking Time", value: "60 ms" },
      { label: "Cumulative Layout Shift", value: "0.01" },
    ],
    deployment:
      "Desplegado en Vercel con CI/CD automático desde GitHub; previews por rama y redirects configurados a nivel de edge.",
  },
  {
    id: "kypac-app",
    title: "Kypac — E-commerce y pagos",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["React", "TypeScript", "Stripe", "Supabase", "Vercel"],
    challenge:
      "Construir un carrito de compras en tiempo real y un checkout con Stripe que soportara pagos guardados, webhooks de confirmación y reconexión tras caídas de red, manteniendo el estado consistente entre pestañas.",
    figmaToCode: {
      mockup: imgKypacApp,
      caption:
        "Traduje los flujos de compra de Figma a componentes React con estado global tipado, conservando las microinteracciones del carrito y el feedback visual de pago.",
      points: [
        "Estado del carrito en Zustand con persistencia local.",
        "Integración de Stripe Elements con PaymentIntent y webhook de confirmación.",
        "Componentes de producto, carrito y checkout desacoplados y testeables.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Zustand para el carrito con middleware de persist; Supabase para catálogo, pedidos y sesiones de cliente; Stripe para pagos y webhooks firmados.",
      },
      {
        title: "Componentización",
        desc:
          "Tarjetas de producto, drawer de carrito y flujo de checkout separados; hooks reutilizables para mutate de pedido y confirmación de pago.",
      },
      {
        title: "Rendimiento",
        desc:
          "Code splitting del checkout, lazy loading de Stripe.js y memoización de cálculos de totales para evitar re-renders innecesarios.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "95" },
      { label: "Largest Contentful Paint", value: "1.1 s" },
      { label: "Total Blocking Time", value: "90 ms" },
      { label: "Cumulative Layout Shift", value: "0.02" },
    ],
    deployment:
      "Frontend en Vercel con funciones serverless para el webhook de Stripe; Supabase gestiona catálogo y pedidos con políticas de fila por tienda.",
  },
  {
    id: "foodiego-app",
    title: "FoodieGo — Delivery de comida",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["React Native", "TypeScript", "Google Maps API", "WebSocket", "Supabase"],
    challenge:
      "Implementar el seguimiento en tiempo real del repartidor sobre Google Maps con conexiones WebSocket resilientes, manejo de reconexión y renderizado fluido del marcador móvil sin congelar la UI.",
    figmaToCode: {
      mockup: imgFoodiegoApp,
      caption:
        "Llevé las pantallas de tracking de Figma a componentes React Native con animaciones de marcador y gestión de ciclo de vida del WebSocket.",
      points: [
        "Servicio WebSocket con reconexión exponencial y cola de mensajes.",
        "Integración de Google Maps con marcador animado y ruta optimizada.",
        "Hooks de pedidos y estado de entrega tipados de extremo a extremo.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Supabase para usuarios, pedidos y reseñas; WebSocket dedicado para la posición del repartidor con backoff exponencial y reanudación de sesión.",
      },
      {
        title: "Componentización",
        desc:
          "Pantallas de menú, checkout y tracking separadas; componentes de mapa, marcador y ETA reutilizables y testeables de forma aislada.",
      },
      {
        title: "Rendimiento",
        desc:
          "Throttling de actualizaciones de ubicación, memoización de cálculos de ETA y carga diferida de pantallas secundarias.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "90" },
      { label: "Largest Contentful Paint", value: "1.6 s" },
      { label: "Total Blocking Time", value: "200 ms" },
      { label: "Cumulative Layout Shift", value: "0.04" },
    ],
    deployment:
      "App móvil desplegada vía EAS Build; backend de WebSocket en Railway y Supabase para datos, con webhooks de estado de pedido.",
  },
  {
    id: "studionine-web",
    title: "StudioNine — Portfolio creativo",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Construir un portfolio con blog en MDX y animaciones de scroll que mantuvieran un LCP sub-segundo y un CLS mínimo, sin sacrificar la riqueza visual editorial del estudio.",
    figmaToCode: {
      mockup: imgStudioNineWeb,
      caption:
        "Traduje el diseño editorial de Figma a componentes Next.js con MDX para el blog y Framer Motion para las animaciones de scroll.",
      points: [
        "Blog en MDX con componentes personalizados embebidos.",
        "Animaciones de scroll con Framer Motion whileInView y variantes.",
        "Componentes de caso de estudio y hero reutilizables.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Next.js App Router con ISR para el blog MDX; sin backend dedicado, el contenido vive en archivos versionados en el repo.",
      },
      {
        title: "Componentización",
        desc:
          "Secciones de hero, portfolio, servicios y contacto independientes; componentes de blog MDX con tipado de frontmatter.",
      },
      {
        title: "Rendimiento",
        desc:
          "Imágenes optimizadas con next/image, fuentes con display swap y CSS crítico inline para un LCP mínimo.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98" },
      { label: "Largest Contentful Paint", value: "0.8 s" },
      { label: "Total Blocking Time", value: "50 ms" },
      { label: "Cumulative Layout Shift", value: "0.01" },
    ],
    deployment:
      "Desplegado en Vercel con ISR para el blog y previews por pull request; redirects y rewrites a nivel de edge.",
  },
  {
    id: "agrotrack-web",
    title: "AgroTrack — Monitoreo agrícola",
    liveUrl: "#",
    repoUrl: "#",
    stack: ["Next.js", "TypeScript", "WebSocket", "D3.js", "Vercel"],
    challenge:
      "Visualizar en tiempo real datos de cientos de sensores IoT agrícolas con gráficos D3 y un mapa interactivo, manteniendo la UI fluida incluso con alta frecuencia de actualizaciones.",
    figmaToCode: {
      mockup: imgAgrotrackWeb,
      caption:
        "Convertí el design system de Figma en un dashboard Next.js con gráficos D3 reutilizables y overlay de mapa, conservando la jerarquía visual de datos.",
      points: [
        "Gráficos D3 encapsulados en componentes React con update selectiva.",
        "Overlay de mapa con sensores geolocalizados y clustering.",
        "Hooks tipados para suscripciones WebSocket de sensores.",
      ],
    },
    architecture: [
      {
        title: "Estado y datos",
        desc:
          "Next.js con streaming para la carga inicial; WebSocket para datos de sensores en vivo y D3.js para la capa de visualización.",
      },
      {
        title: "Componentización",
        desc:
          "Gráficos, mapa y panel de alertas desacoplados; hooks de suscripción reutilizables por tipo de sensor con memoización de series.",
      },
      {
        title: "Rendimiento",
        desc:
          "Throttling de updates de WebSocket, virtualización de listas largas y canvas para gráficos de alta densidad de puntos.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "93" },
      { label: "Largest Contentful Paint", value: "1.3 s" },
      { label: "Total Blocking Time", value: "110 ms" },
      { label: "Cumulative Layout Shift", value: "0.02" },
    ],
    deployment:
      "Frontend en Vercel con edge streaming; gateway WebSocket de sensores en Railway y cache de series históricas en Redis.",
  },
];

export const devCaseStudyMap = new Map<string, DevCaseStudy>(
  devCaseStudies.map((study) => [study.id, study]),
);

export const getDevCaseStudyById = (id: string): DevCaseStudy | undefined =>
  devCaseStudyMap.get(id);
