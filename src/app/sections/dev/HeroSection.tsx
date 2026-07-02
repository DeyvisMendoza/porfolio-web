import { motion } from "framer-motion";
import { useMode } from "../../context/ModeContext";
import { CONTACT } from "../../../shared/constants/contact";
import imgAvatarCalidad1 from "../../../assets/avatar_sentado.png";

const navItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#work" },
  { label: "Contacto", href: "#contacts" },
];
const socials = [
  { label: "GitHub", href: "https://" + CONTACT.github },
  { label: "LinkedIn", href: "https://" + CONTACT.linkedin },
  { label: "Telegram", href: "#" },
  { label: "Correo", href: "mailto:" + CONTACT.email },
];
const tabs = [
  { value: "design" as const, label: "Diseño" },
  { value: "dev" as const, label: "Desarrollo" },
];

export function HeroSection() {
  const { mode, setMode } = useMode();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full bg-[#0a0a0a] overflow-hidden text-white"
    >
      {/* sutil grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.04,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-12 sm:pb-16">
        {/* HEADER */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-16 sm:mb-24">
          <div className="flex flex-col leading-none">
            <motion.span
              className="text-[15px] sm:text-[17px] text-white/90"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {CONTACT.name.split(" ")[0]}
            </motion.span>
            <motion.span
              className="text-[15px] sm:text-[17px] text-white/90"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              {CONTACT.name.split(" ")[1]}
            </motion.span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-[13px] text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                initial={{ opacity: 0, y: -12, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.div
              className="relative flex overflow-hidden rounded-full border border-white/15 bg-white/5"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 16,
                delay: 0.15,
              }}
            >
              <span
                className="absolute top-0 bottom-0 w-1/2 bg-white transition-all duration-300 ease-out rounded-full"
                style={{ left: mode === "design" ? "0%" : "50%" }}
              />
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setMode(tab.value)}
                  className="
                      relative
                      flex items-center justify-center
                      w-1/2
                      px-6
                      py-3
                      text-xs
                      font-medium
                      transition-colors
  "
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color:
                      mode === tab.value ? "#0a0a0a" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>
            <motion.span
              className="hidden sm:block text-[12px] text-white/40"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Es
            </motion.span>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-16 xl:gap-20 items-start">
          <div className="max-w-[620px] pr-0 lg:pr-10 xl:pr-14">
            <h1
              className="text-[40px] sm:text-[72px] lg:text-[90px] leading-[0.95] mb-6 sm:mb-8"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 700,
              }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -60, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Desarrollador
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: 60, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.32 }}
              >
                Front-end Junior
              </motion.span>
            </h1>

            <motion.p
              className="text-white/60 text-[15px] sm:text-[17px] max-w-[420px] leading-relaxed mb-8 sm:mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Me enfoco en crear interfaces web con{" "}
              <em className="text-white not-italic">React</em>,{" "}
              <em className="text-white not-italic">TypeScript</em> y CSS.
              Construyo componentes responsivos y accesibles, cuidando que cada
              interacción se sienta fluida.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white hover:text-[#0a0a0a] transition-all text-[12px]"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 500,
                  }}
                  initial={
                    s.label === "GitHub"
                      ? { opacity: 0, x: -30, y: 20 }
                      : s.label === "LinkedIn"
                        ? { opacity: 0, y: 30, scale: 0.9 }
                        : s.label === "Telegram"
                          ? { opacity: 0, x: 30, y: 20 }
                          : { opacity: 0, x: -20, y: 30, rotate: -2 }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                >
                  {s.label === "GitHub" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  )}
                  {s.label === "LinkedIn" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {s.label === "Telegram" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.498a2.25 2.25 0 0 0 .095 4.236l3.85 1.18 1.66 5.508a1.5 1.5 0 0 0 2.8.35l2.27-4.3 4.48 3.2a2.25 2.25 0 0 0 3.55-1.7L23.14 4.25a2.25 2.25 0 0 0-1.942-2.817Z" />
                    </svg>
                  )}
                  {s.label === "Email" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  )}
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          >
            <div className="relative w-[320px] h-[420px] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src={imgAvatarCalidad1}
                alt="Deyvis Mendoza"
                className="w-full h-full object-cover grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:hidden mt-4"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[280px] h-[320px] rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src={imgAvatarCalidad1}
                alt="Deyvis Mendoza"
                className="w-full h-full object-cover grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
