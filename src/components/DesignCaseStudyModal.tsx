import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  getDesignCaseStudyById,
  DesignCaseStudy,
} from "../shared/constants/designCaseStudies";
import { useSmoothScroll } from "./SmoothScroll";

interface DesignCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

export function DesignCaseStudyModal({
  isOpen,
  onClose,
  projectId,
}: DesignCaseStudyModalProps) {
  const study = useMemo<DesignCaseStudy | undefined>(
    () => getDesignCaseStudyById(projectId),
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-[95vw] max-w-[1100px] h-[90vh] rounded-[28px] overflow-y-auto shadow-2xl bg-[#fefce8] text-[#016634] px-6 sm:px-12 py-14 sm:py-16 no-scrollbar"
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
              className="sticky top-0 float-right z-20 w-10 h-10 rounded-full bg-[#fee95a] text-[#016634] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fee95a] text-[#016634] text-[11px] font-semibold mb-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Caso de estudio
              </div>
              <h1
                className="text-[40px] sm:text-[56px] leading-tight mb-4"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 700,
                }}
              >
                {study.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="px-3 py-1 rounded-full border border-[#016634]/30 text-[12px]"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {study.role}
                </span>
                <span
                  className="px-3 py-1 rounded-full border border-[#016634]/30 text-[12px]"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {study.duration}
                </span>
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-[#016634] text-white text-[12px]"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p
                className="text-[20px] sm:text-[24px] leading-relaxed max-w-[900px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {study.challenge}
              </p>
            </motion.section>

            {/* Diagnóstico */}
            <motion.section
              className="mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[14px] uppercase tracking-widest mb-5 text-[#016634]/70"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                Diagnóstico
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-[24px] bg-[#fee95a] p-6 sm:p-8">
                  <p
                    className="text-[12px] uppercase tracking-wide mb-1 text-[#016634]/70"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    Persona principal
                  </p>
                  <h3
                    className="text-[22px] mb-1"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 700,
                    }}
                  >
                    {study.persona.name}
                  </h3>
                  <p
                    className="text-[13px] mb-4 text-[#016634]/80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {study.persona.role}
                  </p>
                  <blockquote
                    className="text-[16px] leading-relaxed border-l-4 border-[#016634] pl-4 italic"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {study.persona.quote}
                  </blockquote>
                </div>
                <div className="rounded-[24px] border-2 border-[#016634]/15 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-[18px] mb-4"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontWeight: 700,
                      }}
                    >
                      Pain points
                    </h3>
                    <ul className="space-y-3">
                      {study.persona.painPoints.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14px] leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className="mt-1 w-2 h-2 rounded-full bg-[#fee95a] flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[24px] bg-[#016634] text-[#fefce8] p-6 sm:p-8">
                <h3
                  className="text-[14px] uppercase tracking-widest mb-3 text-[#fee95a]"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                  }}
                >
                  El Problema Clave
                </h3>
                <p
                  className="text-[16px] sm:text-[18px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.problem}
                </p>
              </div>
            </motion.section>

            {/* Solución visual */}
            <motion.section
              className="mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[14px] uppercase tracking-widest mb-5 text-[#016634]/70"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                Solución visual
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {study.components.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-[24px] border-2 border-[#016634]/15 p-6"
                  >
                    <h3
                      className="text-[14px] uppercase tracking-widest mb-4 text-[#016634]/70"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontWeight: 600,
                      }}
                    >
                      {group.label}
                    </h3>
                    <ul className="space-y-3">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14px] leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#016634] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] bg-white p-4 sm:p-6 border-2 border-[#016634]/10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-[20px] overflow-hidden bg-[#f4f4f5]">
                    <img
                      src={study.beforeAfter.mockup}
                      alt={study.beforeAfter.beforeAlt}
                      className="w-full h-auto object-cover opacity-70"
                      loading="lazy"
                    />
                    <p
                      className="text-center text-[12px] py-3 text-[#016634]/60"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      Antes
                    </p>
                  </div>
                  <div className="rounded-[20px] overflow-hidden bg-[#f4f4f5] border-2 border-[#fee95a]">
                    <img
                      src={study.beforeAfter.mockup}
                      alt={study.beforeAfter.afterAlt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <p
                      className="text-center text-[12px] py-3 text-[#016634]"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontWeight: 600,
                      }}
                    >
                      Después
                    </p>
                  </div>
                </div>
                <p
                  className="mt-5 text-center text-[14px] sm:text-[15px] leading-relaxed text-[#016634]/80 max-w-[800px] mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.beforeAfter.caption}
                </p>
              </div>
            </motion.section>

            {/* Impacto */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[14px] uppercase tracking-widest mb-5 text-[#016634]/70"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                Impacto
              </h2>
              <div className="rounded-[24px] bg-[#fee95a] p-6 sm:p-8">
                <p
                  className="text-[18px] sm:text-[22px] leading-relaxed text-[#016634]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {study.outcome}
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
