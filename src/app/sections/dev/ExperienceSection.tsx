import { motion } from "framer-motion";
import { EXPERIENCE_ITEMS } from "../../../shared/constants/experience";

function formatDuration(text: string) {
  // Intenta extraer años de los bullets de experiencia
  const match = text.match(/(\d{4})\s*-\s*(\d{4}|presente|actual)/i);
  if (!match) return null;
  const start = parseInt(match[1], 10);
  const endStr = match[2].toLowerCase();
  const end = endStr === "presente" || endStr === "actual" ? new Date().getFullYear() : parseInt(endStr, 10);
  const years = end - start;
  return { start, end, years };
}

export function ExperienceSection() {
  const totalYears = EXPERIENCE_ITEMS.reduce((acc, item) => {
    const dur = formatDuration(item.items[0] || "");
    return acc + (dur?.years || 0);
  }, 0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="work"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-24"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.h2
            className="text-[48px] sm:text-[72px] leading-none text-white"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Work
          </motion.h2>
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <p
              className="text-white/40 text-[13px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Work experience
            </p>
            <p
              className="text-white text-[18px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
            >
              {totalYears}+ years
            </p>
          </motion.div>
        </div>

        <div className="border-t border-white/10">
          {EXPERIENCE_ITEMS.map((card, i) => {
            const dur = formatDuration(card.items[0] || "");
            return (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-white/10 group hover:bg-white/[0.02] transition-colors"
                initial={i % 2 === 0 ? { opacity: 0, x: -40 } : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              >
                <div className="md:col-span-2">
                  {dur && (
                    <p
                      className="text-white/40 text-[13px]"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {dur.start} - {dur.end}
                    </p>
                  )}
                </div>
                <div className="md:col-span-3">
                  <h3
                    className="text-white text-[16px]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                  >
                    {card.company}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p
                    className="text-white/60 text-[14px] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.items.slice(1).join(" ")}
                  </p>
                  <p
                    className="text-white/30 text-[12px] mt-2"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {card.location}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
