import { motion } from "framer-motion";
import imgAvatarCalidad1 from "../../../assets/avatar_cafe.png";

const skillGroups = [
  {
    title: "Front-end",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vite", "React Native"],
  },
  {
    title: "Maquetación",
    items: ["HTML", "CSS", "SASS", "Diseño responsivo", "Accesibilidad"],
  },
  {
    title: "UX y prototipos",
    items: ["Figma", "Wireframes", "Prototipado", "Componentes", "Design tokens"],
  },
  {
    title: "APIs & herramientas",
    items: ["REST APIs", "Git", "GitHub", "Vercel", "Supabase"],
  },
];

export function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="about"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 sm:py-24"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <motion.p
              className="text-white/40 text-[13px] mb-4"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              .../Sobre mí ...
            </motion.p>
            <motion.p
              className="text-white/70 text-[17px] sm:text-[19px] leading-relaxed max-w-[480px] mb-8 sm:mb-12"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              ¡Hola! Soy Deyvis, desarrollador <em className="text-white not-italic">front-end junior</em>. Construyo interfaces web claras y accesibles con React, TypeScript y Tailwind.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors"
                  initial={
                    i === 0
                      ? { opacity: 0, x: -40, rotate: -1 }
                      : i === 1
                      ? { opacity: 0, x: 40, rotate: 1 }
                      : i === 2
                      ? { opacity: 0, x: -30, y: 40, rotate: -1 }
                      : { opacity: 0, x: 30, y: 40, rotate: 1 }
                  }
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                >
                  <h3
                    className="text-white text-[15px] mb-3"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                  >
                    {group.title}
                  </h3>
                  <p
                    className="text-white/40 text-[12px] leading-relaxed"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {group.items.join(" / ")}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-white/30 text-[11px] mt-6 max-w-none sm:max-w-[260px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Estas son las herramientas y habilidades que uso para crear interfaces rápidas, accesibles y fáciles de mantener.
            </motion.p>
          </div>

          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <div className="relative w-[360px] h-[480px] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src={imgAvatarCalidad1}
                alt="Deyvis Mendoza"
                className="w-full h-full object-cover grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:hidden mt-2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[260px] h-[320px] rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src={imgAvatarCalidad1}
                alt="Deyvis Mendoza"
                className="w-full h-full object-cover grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
