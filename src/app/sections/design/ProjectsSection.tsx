import { useRef, useState } from "react";
import { motion } from "framer-motion";
import imgTadiclick from "../../../assets/tadiclick.svg";
import imgVast from "../../../assets/vast.svg";
import imgDymm from "../../../assets/dymm.svg";
import imgHysionWeb from "../../../assets/hysion-web.svg";
import imgKypacApp from "../../../assets/kypac-app.svg";
import imgFoodiegoApp from "../../../assets/foodiego-app.svg";
import imgStudioNineWeb from "../../../assets/studionine-web.svg";
import imgAgrotrackWeb from "../../../assets/agrotrack-web.svg";
import imgFigmaBarra from "../../../assets/figmabarra.svg";
import { HiddenNote } from "../../../components/HiddenNote";
import { DesignCaseStudyModal } from "../../../components/DesignCaseStudyModal";
import { ProjectCarousel } from "../../../components/ProjectCarousel";

const projects = [
  {
    id: "tadiclick",
    img: imgTadiclick,
    title: "Tadiclick",
    subtitle: "App de prestamos y finanzas personales",
    role: "Diseno UI/UX + Frontend",
    text: "Aplicacion movil para gestionar prestamos personales, pagos, historial de desembolsos y recordatorios. Disené el sistema de diseno completo, los flujos de solicitud de credito y colabore en la interfaz con React.",
    tags: ["Figma", "React", "TypeScript", "Supabase"],
  },
  {
    id: "vast",
    img: imgVast,
    title: "VAST",
    subtitle: "Plataforma de solicitud de servicios tecnicos",
    role: "Product Designer",
    text: "SaaS para empresas que necesitan solicitar mantenimiento correctivo y preventivo de equipos. Creé los flujos de creacion de tickets, asignacion de tecnicos, seguimiento de estados y dashboard de métricas.",
    tags: ["Figma", "Prototipado", "Design System", "UX Research"],
  },
  {
    id: "Dymm",
    img: imgDymm,
    title: "Dymm",
    subtitle: "Sistema de autenticacion multiplataforma",
    role: "UI/UX + Fullstack",
    text: "Plataforma de autenticacion unificada con login social, verificacion de correo y recuperacion de contrasena. Trabaje en la experiencia de registro, el panel de administracion y la integracion con APIs de terceros.",
    tags: ["Next.js", "Supabase", "Figma", "OAuth"],
  },
  {
    id: "hysion-web",
    img: imgHysionWeb,
    title: "Hysion Web",
    subtitle: "Sitio web y landing page de agencia",
    role: "Diseno UI/UX + Frontend",
    text: "Landing page de agencia con portfolio, servicios y formulario de contacto. Disené el layout responsivo, la identidad visual y colabore en el desarrollo frontend con animaciones de scroll.",
    tags: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "kypac-app",
    img: imgKypacApp,
    title: "Kypac",
    subtitle: "E-commerce y pagos digitales",
    role: "Diseño UI/UX + Frontend",
    text: "App móvil de e-commerce con pasarela de pagos integrada, carrito de compras y seguimiento de pedidos en tiempo real. Diseñé el flujo completo de compra y el checkout.",
    tags: ["Figma", "React", "Stripe", "Supabase"],
  },
  {
    id: "foodiego-app",
    img: imgFoodiegoApp,
    title: "FoodieGo",
    subtitle: "Delivery de comida a domicilio",
    role: "UI/UX Designer",
    text: "App de delivery con geolocalización, menús dinámicos y sistema de reseñas. Diseñé la experiencia de pedido, seguimiento del repartidor y calificación.",
    tags: ["Figma", "Prototipado", "Google Maps API", "UX Research"],
  },
  {
    id: "studionine-web",
    img: imgStudioNineWeb,
    title: "StudioNine",
    subtitle: "Portfolio de estudio creativo",
    role: "Diseño UI/UX + Frontend",
    text: "Sitio web de estudio creativo con portfolio interactivo, servicios y blog. Diseñé el layout con animaciones de scroll y un sistema de casos de estudio visuales.",
    tags: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "agrotrack-web",
    img: imgAgrotrackWeb,
    title: "AgroTrack",
    subtitle: "Plataforma de monitoreo agrícola",
    role: "Product Designer",
    text: "Dashboard web para monitoreo de cultivos con sensores IoT, mapas interactivos y reportes de productividad. Diseñé el sistema de visualización de datos.",
    tags: ["Figma", "Design System", "Data Viz", "UX Research"],
  },
];

function normalizeRect(
  a: { x: number; y: number },
  b: { x: number; y: number },
) {
  return {
    left: Math.min(a.x, b.x),
    top: Math.min(a.y, b.y),
    right: Math.max(a.x, b.x),
    bottom: Math.max(a.y, b.y),
  };
}

function rectsIntersect(
  a: DOMRect,
  b: { left: number; top: number; right: number; bottom: number },
) {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
}

function FlipCard({
  project,
  flipped,
  selected,
  onFlip,
  onReadMore,
}: {
  project: (typeof projects)[number];
  flipped: boolean;
  selected: boolean;
  onFlip: () => void;
  onReadMore: () => void;
}) {
  return (
    <div
      className="group perspective-[1000px] w-[260px] sm:w-[280px]"
      data-project-id={project.id}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={onFlip}
      >
        {/* CARA FRONTAL */}
        <div
          className={`relative w-full backface-hidden cursor-pointer ${
            selected
              ? "rounded-[36px] ring-2 ring-[#0d99ff] ring-offset-4 ring-offset-[#1e1e1e]"
              : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span
            className="inline-block mb-3 bg-[#0d99ff] text-white text-[11px] px-2 py-0.5 rounded-sm select-none"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            {project.id}
          </span>
          <div
            className="overflow-hidden rounded-[32px] border-[4px] border-[#111] bg-transparent transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-2"
            style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.12))" }}
          >
            <img
              src={project.img}
              alt={`Mockup de ${project.title}`}
              className="w-full h-auto block pointer-events-none"
              loading="lazy"
            />
          </div>
          <p
            className="text-white/50 text-[13px] text-center mt-3 mx-auto max-w-[220px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* CARA TRASERA */}
        <div
          className={`absolute inset-0 w-full h-full rounded-[32px] border-[4px] border-[#111] bg-[#fee95a] p-5 flex flex-col justify-between cursor-pointer ${
            selected
              ? "ring-2 ring-[#0d99ff] ring-offset-4 ring-offset-[#1e1e1e]"
              : ""
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.5))",
          }}
        >
          <div>
            <h3
              className="text-[#016634] text-[20px] mb-1"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 700,
              }}
            >
              {project.title}
            </h3>
            <p
              className="text-[#016634]/70 text-[11px] mb-4"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 500,
              }}
            >
              {project.role}
            </p>
            <p
              className="text-[#016634] text-[12px] leading-[20px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.text}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#016634] text-white text-[10px]"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onReadMore();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0a0a0a] text-[12px] hover:bg-white/90 transition-colors"
            >
              Leer más
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectionBox, setSelectionBox] = useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
  } | null>(null);
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("[data-project-id]") && flippedIds.length > 0) return;

    dragRef.current = {
      isDragging: false,
      startX: e.clientX,
      startY: e.clientY,
    };
    setSelectionBox({
      start: { x: e.clientX, y: e.clientY },
      end: { x: e.clientX, y: e.clientY },
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!selectionBox) return;
    const dist = Math.hypot(
      e.clientX - dragRef.current.startX,
      e.clientY - dragRef.current.startY,
    );
    if (dist > 5) dragRef.current.isDragging = true;
    setSelectionBox((prev) =>
      prev ? { ...prev, end: { x: e.clientX, y: e.clientY } } : prev,
    );
  };

  const handleMouseUp = () => {
    if (!selectionBox) return;

    if (dragRef.current.isDragging) {
      const rect = normalizeRect(selectionBox.start, selectionBox.end);
      const nextSelected = projects
        .filter((p) => {
          const el = document.querySelector(
            `[data-project-id="${p.id}"]`,
          ) as HTMLElement | null;
          if (!el) return false;
          const r = el.getBoundingClientRect();
          return rectsIntersect(r, rect);
        })
        .map((p) => p.id);
      setSelectedIds(nextSelected);
    }

    setSelectionBox(null);
  };

  const handleCardClick = (id: string) => {
    if (dragRef.current.isDragging) return;
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
    setSelectedIds((prev) => prev.filter((x) => x !== id));
  };

  const boxStyle = selectionBox
    ? (() => {
        const rect = normalizeRect(selectionBox.start, selectionBox.end);
        return {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top,
        };
      })()
    : null;

  return (
    <motion.section
      className="relative z-20 w-full bg-[#1e1e1e] overflow-hidden py-16 sm:py-20 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* sutil grilla de canvas estilo Figma */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />

      {/* cuadro de seleccion estilo Figma */}
      {boxStyle && (
        <div
          className="fixed z-[100] border border-[#0d99ff] bg-[#0d99ff]/10 pointer-events-none"
          style={{
            left: boxStyle.left,
            top: boxStyle.top,
            width: boxStyle.width,
            height: boxStyle.height,
          }}
        />
      )}

      {/* TOOLBAR de Figma (imagen oficial) */}
      <motion.div
        className="relative z-20 w-full max-w-[1280px] mx-auto px-5 sm:px-10 mb-10"
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="flex justify-center">
          <motion.img
            src={imgFigmaBarra}
            alt="Figma toolbar"
            className="w-full max-w-[645px] h-auto rounded-[20px] shadow-xl"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 160,
              damping: 16,
            }}
          />
        </div>
      </motion.div>

      {/* WORKSPACE */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="relative flex justify-center mb-12">
          <motion.h2
            className="text-white text-center text-[36px] sm:text-[48px]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 700,
            }}
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            Proyectos
          </motion.h2>
          <motion.div
            className="hidden sm:block absolute right-0 lg:-right-4 top-0"
            initial={{ opacity: 0, x: 60, scale: 0.8, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 6 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
              delay: 0.4,
            }}
          >
            <HiddenNote rotate={6} color="bg-[#0d99ff]" textColor="text-white">
              Estos son mis favoritos. Tengo mas escondidos en GitHub.
            </HiddenNote>
          </motion.div>
        </div>

        <ProjectCarousel
          theme="design"
          maxWidth="max-w-[1280px]"
          itemWidth="w-[260px] sm:w-[280px]"
        >
          {projects.map((p, i) => {
            const isWeb = p.id.includes("web");
            const dataWidth = isWeb
              ? "w-[420px] sm:w-[460px]"
              : "w-[260px] sm:w-[280px]";
            return (
              <motion.div
                key={p.id}
                data-width={dataWidth}
                dataWidth={dataWidth}
                initial={
                  i % 3 === 0
                    ? { opacity: 0, x: -80, rotate: -6, scale: 0.95 }
                    : i % 3 === 1
                      ? { opacity: 0, y: 60, scale: 0.8, rotate: 0, x: 0 }
                      : { opacity: 0, x: 80, rotate: 6, scale: 0.95 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  i % 3 === 1
                    ? {
                        type: "spring",
                        stiffness: 160,
                        damping: 14,
                        delay: 0.25,
                      }
                    : { duration: 0.7, delay: 0.25 + i * 0.1, ease: "easeOut" }
                }
                className={`h-[520px] flex flex-col justify-start`}
              >
                <FlipCard
                  project={p}
                  flipped={flippedIds.includes(p.id)}
                  selected={selectedIds.includes(p.id)}
                  onFlip={() => handleCardClick(p.id)}
                  onReadMore={() => setOpenCaseStudy(p.id)}
                />
              </motion.div>
            );
          })}
        </ProjectCarousel>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-10"
          initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 3 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 14,
            delay: 0.8,
          }}
        >
          <HiddenNote rotate={3} color="bg-[#444]" textColor="text-white">
            Cada mockup pesa menos de lo que pesa mi paciencia con CSS.
          </HiddenNote>
        </motion.div>

        {/* hint de interaccion */}
        <motion.p
          className="text-white/25 text-center text-[12px] mt-10"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Click en un proyecto para voltearlo · Arrastra para seleccionar como
          en Figma
        </motion.p>
        <DesignCaseStudyModal
          isOpen={!!openCaseStudy}
          onClose={() => setOpenCaseStudy(null)}
          projectId={openCaseStudy || ""}
        />
      </div>
    </motion.section>
  );
}
