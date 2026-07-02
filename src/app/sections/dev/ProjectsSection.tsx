import { useState } from "react";
import { motion } from "framer-motion";
import imgTadiclick from "../../../assets/tadiclick.svg";
import imgVast from "../../../assets/vast.svg";
import imgDymm from "../../../assets/dymm.svg";
import imgHysionWeb from "../../../assets/hysion-web.svg";
import imgKypacApp from "../../../assets/kypac-app.svg";
import imgFoodiegoApp from "../../../assets/foodiego-app.svg";
import imgStudioNineWeb from "../../../assets/studionine-web.svg";
import imgAgrotrackWeb from "../../../assets/agrotrack-web.svg";
import { DevCaseStudyModal } from "../../../components/DevCaseStudyModal";
import { ProjectCarousel } from "../../../components/ProjectCarousel";

const projects = [
  {
    id: "tadiclick",
    img: imgTadiclick,
    title: "Tadiclick — App de préstamos y finanzas",
    desc: "Interfaz móvil para gestionar préstamos personales, pagos y recordatorios. Construí los formularios y la experiencia en React para que la navegación sea sencilla.",
  },
  {
    id: "vast",
    img: imgVast,
    title: "VAST — Plataforma de servicios técnicos",
    desc: "SaaS para solicitud de mantenimiento técnico. Trabajé en los flujos de creación de tickets y en una experiencia de usuario clara y accesible.",
  },
  {
    id: "dymm",
    img: imgDymm,
    title: "Dymm — Sistema de autenticación multiplataforma",
    desc: "Interfaz de autenticación con login social, verificación por correo y recuperación de contraseña. Enfocado en frontend y conexión con APIs.",
  },
  {
    id: "hysion-web",
    img: imgHysionWeb,
    title: "Hysion Web — Landing de agencia",
    desc: "Sitio web de agencia con portfolio, servicios y formulario de contacto. Animaciones de scroll y diseño responsivo con React y Tailwind CSS.",
  },
  {
    id: "kypac-app",
    img: imgKypacApp,
    title: "Kypac — E-commerce y pagos",
    desc: "App de e-commerce con Stripe, carrito en tiempo real y seguimiento de pedidos. Frontend en React con estado global para el carrito.",
  },
  {
    id: "foodiego-app",
    img: imgFoodiegoApp,
    title: "FoodieGo — Delivery de comida",
    desc: "App de delivery con integración de Google Maps, menús dinámicos y reseñas. Construí el tracking del repartidor en tiempo real.",
  },
  {
    id: "studionine-web",
    img: imgStudioNineWeb,
    title: "StudioNine — Portfolio creativo",
    desc: "Sitio web de estudio con animaciones de scroll y blog en MDX. Frontend en React con Tailwind y Framer Motion.",
  },
  {
    id: "agrotrack-web",
    img: imgAgrotrackWeb,
    title: "AgroTrack — Monitoreo agrícola",
    desc: "Dashboard de monitoreo con gráficos en tiempo real y mapas interactivos. Frontend en Next.js con WebSocket para datos de sensores.",
  },
];

export function ProjectsSection() {
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 sm:py-24"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-14">
          <motion.p
            className="text-white/40 text-[13px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            .../Sobre proyectos ...
          </motion.p>
          <motion.p
            className="text-white/40 text-[13px] max-w-[360px] text-left sm:text-right"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Una selección de proyectos donde el diseño y el código trabajan
            juntos.
          </motion.p>
        </div>

        <ProjectCarousel
          theme="dev"
          maxWidth="max-w-[1200px]"
          itemWidth="w-[300px] sm:w-[340px]"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors w-[300px] sm:w-[340px]"
              initial={
                i % 3 === 0
                  ? { opacity: 0, x: -60, y: 40, rotate: -2 }
                  : i % 3 === 1
                    ? { opacity: 0, y: 60, scale: 0.9 }
                    : { opacity: 0, x: 60, y: 40, rotate: 2 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                i % 3 === 1
                  ? { type: "spring", stiffness: 160, damping: 14, delay: 0.15 }
                  : { duration: 0.7, delay: 0.1 + i * 0.1, ease: "easeOut" }
              }
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-white text-[16px] mb-2"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/40 text-[13px] leading-relaxed mb-5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.desc}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenCaseStudy(project.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0a0a0a] text-[12px] hover:bg-white/90 transition-colors w-fit"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                  }}
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
            </motion.div>
          ))}
        </ProjectCarousel>
        <DevCaseStudyModal
          isOpen={!!openCaseStudy}
          onClose={() => setOpenCaseStudy(null)}
          projectId={openCaseStudy || ""}
        />
      </div>
    </motion.section>
  );
}
