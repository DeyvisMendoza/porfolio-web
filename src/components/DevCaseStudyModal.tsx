import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  getDevCaseStudyById,
  DevCaseStudy,
} from "../shared/constants/devCaseStudies";
import { useSmoothScroll } from "./SmoothScroll";

interface DevCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

export function DevCaseStudyModal({
  isOpen,
  onClose,
  projectId,
}: DevCaseStudyModalProps) {
  const study = useMemo<DevCaseStudy | undefined>(
    () => getDevCaseStudyById(projectId),
    [projectId],
  );
  const { stop, start } = useSmoothScroll();

  useEffect(() => {
    if (!isOpen) return;
    stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, stop, start]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!study) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-[95vw] max-w-[1100px] h-[90vh] rounded-[28px] overflow-y-auto shadow-2xl bg-[#0a0a0a] text-white border border-white/10 px-6 sm:px-12 py-14 sm:py-16"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="sticky top-0 float-right z-20 w-10 h-10 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              aria-label="Cerrar"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Hero */}
            <motion.section
              className="mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white/70 text-[11px] font-semibold mb-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Caso de estudio
              </div>
              <h1
                className="text-[34px] sm:text-[48px] leading-tight mb-6"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 700,
                }}
              >
                {study.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={study.liveUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0a0a0a] text-[13px] hover:bg-white/90 transition-colors"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                  }}
                >
                  Visitar sitio en vivo
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <a
                  href={study.repoUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-[13px] hover:bg-white/10 transition-colors"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                  }}
                >
                  Ver repositorio en GitHub
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/90 text-[12px]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Reto técnico */}
            <motion.section
              className="mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[14px] uppercase tracking-widest mb-5 text-white/50"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                Reto técnico
              </h2>
              <p
                className="text-[18px] sm:text-[22px] leading-relaxed text-white/90 max-w-[900px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {study.challenge}
              </p>
            </motion.section>

            {/* De diseño a código */}
            <motion.section
              className="mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[14px] uppercase tracking-widest mb-5 text-white/50"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                De diseño a código
              </h2>
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.02]">
                  <img
                    src={study.figmaToCode.mockup}
                    alt="Mockup del proyecto pasado de Figma a código"
                    className="w-full h-auto object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <p
                    className="text-[16px] leading-relaxed text-white/80 mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {study.figmaToCode.caption}
                  </p>
                  <ul className="space-y-4">
                    {study.figmaToCode.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] leading-relaxed text-white/70"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {study.architecture.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors"
                  >
                    <h3
                      className="text-[13px] uppercase tracking-wide mb-2 text-white/60"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[14px] leading-relaxed text-white/80"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Rendimiento y despliegue */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[14px] uppercase tracking-widest mb-5 text-white/50"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                Rendimiento y despliegue
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5 text-center"
                  >
                    <p
                      className="text-[28px] sm:text-[36px] mb-1 text-white"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontWeight: 700,
                      }}
                    >
                      {metric.value}
                    </p>
                    <p
                      className="text-[11px] uppercase tracking-wide text-white/50"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
                <h3
                  className="text-[13px] uppercase tracking-wide mb-3 text-white/60"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                  }}
                >
                  Despliegue
                </h3>
                <p
                  className="text-[15px] leading-relaxed text-white/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.deployment}
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
