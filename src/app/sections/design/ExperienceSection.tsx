import { motion } from "framer-motion";
import { EXPERIENCE_ITEMS } from "../../../shared/constants/experience";
import { HiddenNote } from "../../../components/HiddenNote";

export function ExperienceSection() {
  return (
    <motion.section
      className="relative z-40 w-full bg-white overflow-hidden pt-40 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.1 }}
        >
          <div className="relative inline-flex items-center justify-center">
            <svg viewBox="0 0 339 131" className="w-[260px] sm:w-[320px]" fill="none">
              <path
                d="M169.5 5C215.851 5 257.587 12.269 287.553 23.8486C302.552 29.6447 314.348 36.4239 322.308 43.6963C330.265 50.9662 334 58.3406 334 65.5C334 72.6594 330.265 80.0338 322.308 87.3037C314.348 94.5761 302.552 101.355 287.553 107.151C257.587 118.731 215.851 126 169.5 126C123.149 126 81.4129 118.731 51.4473 107.151C36.4483 101.355 24.6523 94.5761 16.6924 87.3037C8.73536 80.0338 5 72.6594 5 65.5C5 58.3406 8.73536 50.9662 16.6924 43.6963C24.6523 36.4239 36.4483 29.6447 51.4473 23.8486C81.4129 12.269 123.149 5 169.5 5Z"
                fill="#FFC313"
                stroke="#1FA33D"
                strokeWidth="10"
              />
            </svg>
            <span
              className="absolute text-[#016634] text-[22px] sm:text-[28px] whitespace-nowrap"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            >
              EXPERIENCIA
            </span>
          </div>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-8 items-start">
          {EXPERIENCE_ITEMS.map((card, i) => (
            <motion.div
              key={i}
              className="relative flex justify-center"
              initial={
                i === 0
                  ? { opacity: 0, x: -80, y: 40, rotate: -6, scale: 0.95 }
                  : i === 1
                  ? { opacity: 0, x: 0, y: 80, scale: 0.9, rotate: 4 }
                  : { opacity: 0, x: 80, y: 40, rotate: 6, scale: 0.95 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.15, ease: "easeOut" }}
            >
              <div className="absolute -bottom-3 left-4 right-4 h-6 bg-black/20 blur-lg rounded-full z-0" />
              <div
                className={`relative z-10 w-full bg-[#fee95a] p-8 ${card.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
                style={{ minHeight: 340 }}
              >
                <h3
                  className="text-[#016634] text-[17px] sm:text-[19px] leading-snug mb-6"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
                >
                  {card.company}
                  <span className="block text-[13px] mt-1 opacity-70">{card.location}</span>
                </h3>
                <ul className="space-y-4">
                  {card.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[#016634] text-[14px] sm:text-[15px] leading-snug list-disc ml-5"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 40, scale: 0.8, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.8 }}
        >
          <HiddenNote rotate={2}>
            Dato curioso: mis primeros wireframes se hicieron en papel y aun conservo algunos.
          </HiddenNote>
        </motion.div>
      </div>
    </motion.section>
  );
}
