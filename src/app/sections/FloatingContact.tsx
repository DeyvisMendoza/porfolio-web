import { useState } from "react";
import { CONTACT } from "../../shared/constants/contact";
import { useMode } from "../context/ModeContext";

const ITEMS = [
  {
    label: CONTACT.email,
    href: "mailto:" + CONTACT.email,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: CONTACT.phone,
    href: "tel:" + CONTACT.phone.replace(/\s/g, ""),
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://" + CONTACT.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://" + CONTACT.github,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { isDev } = useMode();

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 items-end">
          {ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 rounded-full px-4 py-2.5 shadow-lg transition-all hover:scale-105 ${
                isDev
                  ? "text-[#00ff41] bg-[#161b22] border border-[#30363d] hover:border-[#00ff41]"
                  : "text-[#016634] bg-[#fee95a] hover:bg-yellow-300"
              }`}
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, fontSize: 13 }}
            >
              {item.icon}
              <span className="whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </div>
      )}

      <div className="relative">
        {!open && (
          <span className={`absolute inset-0 rounded-full animate-ping pointer-events-none ${isDev ? "bg-[#00ff41]/40" : "bg-[#fee95a]/40"}`} />
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`relative size-[54px] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${
            isDev
              ? "bg-[#00ff41] text-[#0d1117] border-2 border-[#161b22]"
              : "bg-[#016634] text-white border-2 border-[#fee95a]"
          }`}
          aria-label={open ? "Cerrar contacto" : "Ver contacto"}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
