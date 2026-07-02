import { motion } from "framer-motion";
import { CONTACT } from "../../../shared/constants/contact";

const links = [
  { label: CONTACT.email, href: "mailto:" + CONTACT.email },
  { label: CONTACT.phone, href: "tel:" + CONTACT.phone.replace(/\s/g, "") },
  { label: "LinkedIn", href: "https://" + CONTACT.linkedin },
  { label: "GitHub", href: "https://" + CONTACT.github },
];

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="contacts"
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
              .../Contacto ...
            </motion.p>
            <motion.h2
              className="text-[34px] sm:text-[56px] leading-none text-white mb-4 sm:mb-6"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trabajemos<br />juntos
            </motion.h2>
            <motion.p
              className="text-white/50 text-[15px] sm:text-[16px] max-w-full sm:max-w-[420px] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Estoy abierto a proyectos freelance, puestos de tiempo completo y colaboraciones. Envíame un mensaje y construyamos algo grande.
            </motion.p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-white/10 text-white hover:text-white/70 transition-colors"
              initial={i % 2 === 0 ? { opacity: 0, x: 40, rotate: 1 } : { opacity: 0, x: -30, rotate: -1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              >
                <span
                  className="text-[18px] sm:text-[22px]"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
                >
                  {link.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
