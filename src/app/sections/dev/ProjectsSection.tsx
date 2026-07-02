import { motion } from "framer-motion";
import imgTadiclick from "../../../assets/tadiclick.svg";
import imgVast from "../../../assets/vast.svg";
import imgDymm from "../../../assets/dymm.svg";

const projects = [
  {
    id: "tadiclick",
    img: imgTadiclick,
    title: "Tadiclick — Loans & Finance App",
    desc: "A complete mobile application for managing personal loans, payments, disbursement history and reminders. Built with React and Supabase.",
  },
  {
    id: "vast",
    img: imgVast,
    title: "VAST — Technical Services Platform",
    desc: "A SaaS for companies to request corrective and preventive maintenance. Tickets, technician assignments and metrics dashboard.",
  },
  {
    id: "dymm",
    img: imgDymm,
    title: "Dymm — Cross-platform Auth System",
    desc: "Unified authentication platform with social login, email verification and password recovery. Next.js + Supabase + OAuth.",
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-24"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between mb-14">
          <motion.p
            className="text-white/40 text-[13px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            .../About project ...
          </motion.p>
          <motion.p
            className="text-white/40 text-[13px] max-w-[360px] text-right hidden sm:block"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of projects where design and code work together.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
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
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/40 text-[13px] leading-relaxed mb-5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.desc}
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0a0a0a] text-[12px] hover:bg-white/90 transition-colors"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                >
                  Read more
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
