import { useState, type ReactNode } from "react";
import { CONTACT } from "../../shared/constants/contact";
import { HiddenNote } from "../../components/HiddenNote";
import { useMode } from "../context/ModeContext";

function CopyChip({
  icon,
  value,
  href,
  copyText,
  isDev,
}: {
  icon: ReactNode;
  value: string;
  href: string;
  copyText?: string;
  isDev?: boolean;
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative flex items-center gap-3 transition-all px-5 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 active:scale-95 ${
        isDev
          ? "bg-[#161b22] border border-[#30363d] hover:border-[#00ff41] text-[#00ff41]"
          : "bg-[#fee95a] hover:bg-yellow-300 text-[#016634]"
      }`}
    >
      <span className="text-[20px]">{icon}</span>
      <span
        className="text-[14px] sm:text-[15px]"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
      >
        {value}
      </span>
      <span
        className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[11px] whitespace-nowrap transition-all duration-200 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
        } ${isDev ? "bg-[#00ff41] text-[#0d1117]" : "bg-[#016634] text-white"}`}
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        Copiado!
      </span>
    </a>
  );
}

export function ContactSection() {
  const { isDev } = useMode();

  if (isDev) {
    return (
      <section className="relative w-full bg-[#0d1117] overflow-hidden py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,255,65,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.4) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col items-center mb-12 text-center">
            <p
              className="text-[#00ff41] text-[32px] sm:text-[44px] leading-none mb-4"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            >
              &lt;Contact /&gt;
            </p>
            <p
              className="text-[#8b949e] text-[15px] sm:text-[17px] max-w-[520px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Estoy disponible para proyectos de desarrollo, diseno o ambos. Escribeme y hablamos.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-[#30363d] bg-[#161b22] rounded-full px-5 py-2">
              <span className="size-2 rounded-full bg-[#00ff41] animate-pulse" />
              <span className="text-[#c9d1d9] text-[13px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Disponible para proyectos
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CopyChip
              isDev
              href={"mailto:" + CONTACT.email}
              value={CONTACT.email}
              copyText={CONTACT.email}
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            />
            <CopyChip
              isDev
              href={"tel:" + CONTACT.phone.replace(/\s/g, "")}
              value={CONTACT.phone}
              copyText={CONTACT.phone}
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
              }
            />
            <CopyChip
              isDev
              href={"https://" + CONTACT.linkedin}
              value="LinkedIn"
              copyText={CONTACT.linkedin}
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
            />
            <CopyChip
              isDev
              href={"https://" + CONTACT.github}
              value="GitHub"
              copyText={CONTACT.github}
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              }
            />
          </div>

          <div className="flex justify-center mb-10">
            <a
              href={"mailto:" + CONTACT.email}
              className="inline-flex items-center gap-3 bg-[#00ff41] text-[#0d1117] hover:bg-[#00d4aa] transition-all px-10 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 17 }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Enviarme un mensaje
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <HiddenNote rotate={-5} color="bg-[#161b22]" textColor="text-[#00ff41]">
              Los datos se copian al portapapeles al hacer click. Practico, no?
            </HiddenNote>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#016634] overflow-hidden py-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-20 bg-black pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <p
            className="text-white text-[48px] sm:text-[64px] leading-none mb-2 select-none"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, transform: "rotate(-1.5deg)", display: "inline-block" }}
          >
            Trabajamos juntos?
          </p>
          <p
            className="text-white/70 text-[15px] sm:text-[17px] max-w-[520px] mt-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Estoy disponible para proyectos de diseno, desarrollo o ambos. Escribeme y hablamos.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border border-white/25 bg-white/10 rounded-full px-5 py-2">
            <span className="size-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-white text-[13px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Disponible para proyectos
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <CopyChip
            href={"mailto:" + CONTACT.email}
            value={CONTACT.email}
            copyText={CONTACT.email}
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
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            }
          />
        </div>

        <div className="flex justify-center mb-10">
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
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <HiddenNote rotate={-5} color="bg-white" textColor="text-[#016634]">
            Los datos se copian al portapapeles al hacer click. Practico, no?
          </HiddenNote>
        </div>
      </div>
    </section>
  );
}
