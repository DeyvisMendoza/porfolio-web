import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMode } from "../app/context/ModeContext";
import { getDesignCaseStudyById } from "../shared/constants/designCaseStudies";
import { getDevCaseStudyById } from "../shared/constants/devCaseStudies";
import { ImageCarousel } from "../components/ImageCarousel";

function DesignDetailView({ projectId }: { projectId: string }) {
  const study = getDesignCaseStudyById(projectId);
  const navigate = useNavigate();

  if (!study) {
    return (
      <div className="min-h-screen bg-[#fefce8] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-[#016634] text-4xl mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
          >
            Proyecto no encontrado
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#016634] text-white rounded-full hover:bg-[#016634]/90 transition-colors"
          >
            Volver al portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#fefce8] text-[#016634]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#fefce8]/90 backdrop-blur-md border-b border-[#016634]/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#016634]/70 hover:text-[#016634] transition-colors text-sm"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver
          </Link>
          <span
            className="text-[#016634]/50 text-xs"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Modo Diseño
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-block mb-4 bg-[#0d99ff] text-white text-xs px-3 py-1 rounded-sm"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
          >
            {study.role}
          </span>
          <h1
            className="text-[#016634] text-5xl sm:text-7xl mb-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
          >
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-[#016634]/60 mb-8">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {study.duration}
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              {study.tools.join(", ")}
            </span>
          </div>
          <div className="max-w-[800px]">
            <h2
              className="text-[#016634] text-xl mb-4"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
            >
              El Desafío
            </h2>
            <p className="text-[#016634]/80 text-lg leading-relaxed">
              {study.challenge}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mockup Principal */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] overflow-hidden border-4 border-[#016634]/20 max-w-[320px] mx-auto bg-[#016634]/5"
        >
          <img
            src={study.mockup}
            alt={`Mockup de ${study.title}`}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </section>

      {/* Proceso de Diseño - 12 Etapas */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#016634] text-3xl mb-16"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
        >
          Proceso de Diseño
        </motion.h2>

        <div className="space-y-20">
          {study.processPhases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Phase Number Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#016634] text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {i + 1}
                </div>
                <h3
                  className="text-[#016634] text-2xl"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
                >
                  {phase.title.replace(/^\d+\.\s*/, "")}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#016634]/70 text-lg mb-6 max-w-[800px] ml-14">
                {phase.description}
              </p>

              <div className="ml-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Activities */}
                <div>
                  <h4
                    className="text-[#016634] text-sm mb-3 uppercase tracking-wider"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                  >
                    Actividades
                  </h4>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#016634]/80 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#016634]/40 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4
                    className="text-[#016634] text-sm mb-3 uppercase tracking-wider"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                  >
                    Entregables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((deliverable, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-[#016634]/10 text-[#016634] text-xs"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Images Carousel */}
              {phase.images.length > 0 && (
                <div className="mt-8 ml-14">
                  <ImageCarousel
                    images={phase.images}
                    alt={`${phase.title} - ${study.title}`}
                    theme="design"
                  />
                </div>
              )}

              {/* Separator */}
              {i < study.processPhases.length - 1 && (
                <div className="mt-16 border-b border-[#016634]/10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resultado */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#016634] text-white rounded-[32px] p-10 sm:p-16"
        >
          <h2
            className="text-white text-3xl mb-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
          >
            Resultado
          </h2>
          <p className="text-white/90 text-lg leading-relaxed max-w-[800px]">
            {study.outcome}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-12 border-t border-[#016634]/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#016634]/70 hover:text-[#016634] transition-colors"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver al portfolio
          </Link>
          <span
            className="text-[#016634]/40 text-xs"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            © {new Date().getFullYear()} Portfolio
          </span>
        </div>
      </footer>
    </motion.div>
  );
}

function DevDetailView({ projectId }: { projectId: string }) {
  const study = getDevCaseStudyById(projectId);
  const navigate = useNavigate();

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-white text-4xl mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
          >
            Proyecto no encontrado
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-white text-[#0a0a0a] rounded-full hover:bg-white/90 transition-colors"
          >
            Volver al portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver
          </Link>
          <span
            className="text-white/30 text-xs"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Modo Desarrollo
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-block mb-4 px-3 py-1 rounded-sm text-xs bg-white/10 text-white/70"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
          >
            {study.stack.join(" · ")}
          </span>
          <h1
            className="text-white text-5xl sm:text-7xl mb-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
          >
            {study.title.split("—")[0].trim()}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/40 mb-8">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
            <a
              href={study.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="max-w-[800px]">
            <h2
              className="text-white text-xl mb-4"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
            >
              Reto Técnico
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {study.challenge}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mockup */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] overflow-hidden border border-white/10 max-w-[320px] mx-auto bg-white/[0.02]"
        >
          <img
            src={study.figmaToCode.mockup}
            alt={`Mockup de ${study.title}`}
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <p
          className="text-center text-white/40 text-sm mt-4"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {study.figmaToCode.caption}
        </p>
      </section>

      {/* Proceso de Desarrollo */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl mb-12"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
        >
          Proceso de Desarrollo
        </motion.h2>
        <div className="space-y-16">
          {study.buildProcess.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-white/10"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white" />
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
              >
                {step.title}
              </h3>
              <p className="text-white/50 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Arquitectura */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl mb-12"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
        >
          Arquitectura
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {study.architecture.map((arch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-[20px] p-6"
            >
              <h3
                className="text-white text-lg mb-2"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
              >
                {arch.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{arch.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Métricas */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl mb-12"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
        >
          Métricas de Rendimiento
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {study.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="bg-white/[0.02] border border-white/10 rounded-[20px] p-6 text-center"
            >
              <div
                className="text-white text-3xl sm:text-4xl mb-2"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
              >
                {metric.value}
              </div>
              <div className="text-white/40 text-xs">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Despliegue */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.02] border border-white/10 rounded-[32px] p-10 sm:p-16"
        >
          <h2
            className="text-white text-3xl mb-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
          >
            Despliegue
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-[800px]">
            {study.deployment}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver al portfolio
          </Link>
          <span
            className="text-white/30 text-xs"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            © {new Date().getFullYear()} Portfolio
          </span>
        </div>
      </footer>
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { isDev } = useMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) return null;

  return isDev ? (
    <DevDetailView projectId={id} />
  ) : (
    <DesignDetailView projectId={id} />
  );
}
