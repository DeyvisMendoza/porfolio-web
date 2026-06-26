import { CONTACT } from "../shared/constants/contact";

const NAV = ["Inicio", "Experiencia", "Habilidades", "Proyectos", "Contacto"];

export function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black overflow-hidden pt-16 pb-10">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#fee95a] opacity-30" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div className="md:col-span-2">
            <p
              className="text-white text-[44px] sm:text-[56px] leading-none mb-1 select-none"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, transform: "rotate(-1deg)", display: "inline-block" }}
            >
              {CONTACT.name}
            </p>
            <p
              className="text-[#fee95a] text-[14px] mb-4 mt-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
            >
              {CONTACT.role} - {CONTACT.location}
            </p>
            <p
              className="text-white/50 text-[14px] max-w-[420px] leading-relaxed"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Construyendo experiencias digitales que conectan con las personas - desde el primer pixel hasta el ultimo commit.
            </p>
          </div>

          <div>
            <p
              className="text-[#fee95a] text-[13px] mb-4 uppercase tracking-widest"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            >
              Secciones
            </p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item}>
                  <a
                    href={"#" + item.toLowerCase()}
                    className="text-white/60 hover:text-white transition-colors text-[14px]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[12px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            (c) {YEAR} {CONTACT.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-[12px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Hecho con Figma + React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
