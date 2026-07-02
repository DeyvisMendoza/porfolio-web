import { useState, type ReactNode } from "react";
import { motion, type TargetAndTransition, type Transition, type VariantLabels } from "framer-motion";
import { CONTACT } from "../../../shared/constants/contact";
import { HiddenNote } from "../../../components/HiddenNote";

function CopyChip({
  icon,
  value,
  href,
  copyText,
  initial,
  whileInView,
  transition,
}: {
  icon: ReactNode;
  value: string;
  href: string;
  copyText?: string;
  initial?: TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  transition?: Transition;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const text = copyText || value;
    if (navigator.clipboard && text) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        // fallback: dejar que el link abra normalmente
      }
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative flex items-center gap-3 bg-[#fee95a] hover:bg-yellow-300 transition-all px-5 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 active:scale-95 text-[#016634]"
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.3 }}
      transition={transition}
    >
      <span className="text-[20px]">{icon}</span>
      <span
        className="text-[14px] sm:text-[15px]"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
      >
        {value}
      </span>
      <span
        className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#016634] text-white text-[11px] whitespace-nowrap transition-all duration-200 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
        }`}
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        Copiado!
      </span>
    </motion.a>
  );
}

export function ContactSection() {
  return (
    <motion.section
      className="relative w-full bg-[#016634] overflow-hidden py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.05,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />
      <div
        className="absolute top-0 left-0 w-full h-20 bg-black pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.p
            className="text-white text-[48px] sm:text-[64px] leading-none mb-2 select-none"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, transform: "rotate(-1.5deg)", display: "inline-block" }}
            initial={{ opacity: 0, x: -60, rotate: -8, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1.5, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Trabajamos juntos?
          </motion.p>
          <motion.p
            className="text-white/70 text-[15px] sm:text-[17px] max-w-[520px] mt-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            Estoy disponible para proyectos de diseno, desarrollo o ambos. Escribeme y hablamos.
          </motion.p>
          <motion.div
            className="mt-6 inline-flex items-center gap-2 border border-white/25 bg-white/10 rounded-full px-5 py-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.25 }}
          >
            <span className="size-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-white text-[13px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Disponible para proyectos
            </span>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <CopyChip
            href={"mailto:" + CONTACT.email}
            value={CONTACT.email}
            copyText={CONTACT.email}
            initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.35 }}
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
          <CopyChip
            href={"tel:" + CONTACT.phone.replace(/\s/g, "")}
            value={CONTACT.phone}
            copyText={CONTACT.phone}
            initial={{ opacity: 0, y: 30, scale: 0.8, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.45 }}
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
            }
          />
          <CopyChip
            href={"https://" + CONTACT.linkedin}
            value="LinkedIn"
            copyText={CONTACT.linkedin}
            initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.55 }}
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            }
          />
          <CopyChip
            href={"https://" + CONTACT.github}
            value="GitHub"
            copyText={CONTACT.github}
            initial={{ opacity: 0, y: 30, scale: 0.8, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.65 }}
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            }
          />
        </div>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.5 }}
        >
          <a
            href={"mailto:" + CONTACT.email}
            className="inline-flex items-center gap-3 bg-white text-[#016634] hover:bg-[#fee95a] transition-all px-10 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 17 }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Enviarme un mensaje
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 40, scale: 0.8, rotate: 12 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -5 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.7 }}
        >
          <HiddenNote rotate={-5} color="bg-white" textColor="text-[#016634]">
            Los datos se copian al portapapeles al hacer click. Practico, no?
          </HiddenNote>
        </motion.div>
      </div>
    </motion.section>
  );
}
