import { motion } from "framer-motion";
import imgTadiclick from "../../../assets/tadiclick.svg";
import imgVast from "../../../assets/vast.svg";
import imgDymm from "../../../assets/dymm.svg";

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
];

export function ProjectsSection() {
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

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`group relative flex-1 rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
              initial={
                i === 0
                  ? { opacity: 0, x: -60, y: 40, rotate: -2 }
                  : i === 1
                    ? { opacity: 0, y: 60, scale: 0.9 }
                    : { opacity: 0, x: 60, y: 40, rotate: 2 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                i === 1
                  ? { type: "spring", stiffness: 160, damping: 14, delay: 0.2 }
                  : { duration: 0.7, delay: 0.15 + i * 0.12, ease: "easeOut" }
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
                <a
                  href={`#dev-${project.id}`}
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
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Render dev case study sections for each project (anchor targets) */}
        {projects.map((p) => (
          // lazy inline import to avoid circular deps; render minimal detail section
          <div id={`dev-${p.id}`} key={p.id} className="mt-8">
            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 py-8 border-t border-white/6">
              <h3 className="text-xl text-white font-semibold">{p.title}</h3>
              <p className="text-white/60 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
