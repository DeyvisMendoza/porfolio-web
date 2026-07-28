import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imgTadiclick from "../../../assets/tadiclick.svg";
import imgVast from "../../../assets/vast.svg";
import imgDymm from "../../../assets/dymm.svg";
import imgKypacApp from "../../../assets/kypac.png";
import imgFigmaBarra from "../../../assets/figmabarra.svg";
import { HiddenNote } from "../../../components/HiddenNote";
import { ProjectCarousel } from "../../../components/ProjectCarousel";
import imgHysionWeb from "../../../assets/hysion.png";

const projects = [
  {
    id: "tadiclick",
    img: imgTadiclick,
    title: "Tadiclick",
    subtitle: "App de préstamos y finanzas personales",
    role: "Diseño UI/UX + Frontend",
    text: "Aplicación móvil para gestionar préstamos personales, pagos, historial de desembolsos y recordatorios. Diseñé el sistema de diseño completo, los flujos de solicitud de crédito y colabore en la interfaz con React.",
    tags: ["Figma", "React", "TypeScript", "Supabase"],
  },
  {
    id: "vast",
    img: imgVast,
    title: "VAST",
    subtitle: "Plataforma de solicitud de servicios técnicos",
    role: "Product Designer",
    text: "SaaS para empresas que necesitan solicitar mantenimiento correctivo y preventivo de equipos. Creé los flujos de creación de tickets, asignación de técnicos, seguimiento de estados y dashboard de métricas.",
    tags: ["Figma", "Prototipado", "Design System", "UX Research"],
  },
  {
    id: "Dymm",
    img: imgDymm,
    title: "Dymm",
    subtitle: "Sistema de autenticación multiplataforma",
    role: "UI/UX + Fullstack",
    text: "Plataforma de autenticación unificada con login social, verificación de correo y recuperación de contraseña. Trabajé en la experiencia de registro, el panel de administración y la integración con APIs de terceros.",
    tags: ["Next.js", "Supabase", "Figma", "OAuth"],
  },
  {
    id: "hysion-web",
    img: imgHysionWeb,
    title: "Hysion Web",
    subtitle: "Sitio web y landing page de agencia",
    role: "Diseño UI/UX + Frontend",
    text: "Landing page de agencia con portfolio, servicios y formulario de contacto. Diseñé el layout responsivo, la identidad visual y colabore en el desarrollo frontend con animaciones de scroll.",
    tags: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "kypac",
    img: imgKypacApp,
    title: "Kypac",
    subtitle: "E-commerce y pagos digitales",
    role: "Diseño UI/UX + Frontend",
    text: "App móvil de e-commerce con pasarela de pagos integrada, carrito de compras y seguimiento de pedidos en tiempo real. Diseñé el flujo completo de compra y el checkout.",
    tags: ["Figma", "React", "Stripe", "Supabase"],
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
}: {
  project: (typeof projects)[number];
  flipped: boolean;
  selected: boolean;
}) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group perspective-[1000px] w-[380px] sm:w-[480px] h-[300px] sm:h-[340px] flex-shrink-0 block"
      data-project-id={project.id}
      onClick={(e) => {
        if (flipped) {
          e.preventDefault();
        }
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* CARA FRONTAL */}
        <div
          className={`relative w-full h-full backface-hidden cursor-pointer flex flex-col items-start min-h-0 ${
            selected
              ? "rounded-[36px] ring-2 ring-[#0d99ff] ring-offset-4 ring-offset-[#1e1e1e]"
              : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span
            className="inline-block mb-2 bg-[#0d99ff] text-white text-[11px] px-2 py-0.5 rounded-sm select-none"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            {project.id}
          </span>
          <div
            className="overflow-hidden rounded-[24px] border-[3px] border-[#111] bg-white/[0.03] transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-2 h-[200px] sm:h-[240px] flex-shrink-0"
            style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.12))" }}
          >
            <img
              src={project.img}
              alt={`Mockup de ${project.title}`}
              className="w-full h-full object-cover object-center block pointer-events-none"
              loading="lazy"
            />
          </div>
          <p
            className="text-white/50 text-[12px] text-center mt-2 mx-auto max-w-[220px] flex-shrink-0"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0a0a0a] text-[12px] hover:bg-white/90 transition-colors">
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
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectionBox, setSelectionBox] = useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
  } | null>(null);
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("[data-project-id]") && selectedIds.length > 0) return;

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
      <div className="relative z-10 w-full px-5 sm:px-10">
        <div className="relative flex justify-center mb-6">
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
              Estos son mis favoritos. Tengo más escondidos en GitHub.
            </HiddenNote>
          </motion.div>
        </div>

        <ProjectCarousel theme="design" itemWidth="w-[380px] sm:w-[480px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
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
                  ? { type: "spring", stiffness: 160, damping: 14, delay: 0.25 }
                  : { duration: 0.7, delay: 0.25 + i * 0.1, ease: "easeOut" }
              }
            >
              <FlipCard
                project={p}
                flipped={false}
                selected={selectedIds.includes(p.id)}
              />
            </motion.div>
          ))}
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
          Click en un proyecto para ver el proceso · Arrastra para seleccionar
          como en Figma
        </motion.p>
      </div>
    </motion.section>
  );
}
