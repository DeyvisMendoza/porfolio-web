import { motion } from "framer-motion";
import imgEtiquetas21 from "../../../imports/Frame2/4e3f7b3fd6a3cd6472893471b506ffd0ece8a5e0.png";
import imgEtiqueta31 from "../../../imports/Frame2/019b3d5eba962e665f522cb8d3f32d3163407c39.png";
import imgEtiquetas11 from "../../../imports/Frame2/1d3e996443a3727e028778b179a87b99dc215403.png";
import { HiddenNote } from "../../../components/HiddenNote";

function Sticker({
  img,
  baseRotate,
  position,
  delay,
  from,
}: {
  img: string;
  baseRotate: number;
  position: string;
  delay: number;
  from: "left" | "right" | "bottom";
}) {
  const fromOffset =
    from === "left"
      ? { x: -80, y: 20 }
      : from === "right"
      ? { x: 80, y: 20 }
      : { x: -20, y: 80 };

  return (
    <motion.div
      className={`transition-transform duration-200 will-change-transform hover:scale-110 hover:-translate-y-2 ${position}`}
      style={{ transform: `rotate(${baseRotate}deg)`, animationDelay: `${delay}s` }}
      initial={{ opacity: 0, scale: 0, rotate: baseRotate - 12, ...fromOffset }}
      whileInView={{ opacity: 1, scale: 1, rotate: baseRotate, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 14,
        delay,
      }}
    >
      <img
        src={img}
        alt="Habilidades"
        className="w-full object-contain drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-300 hero-float"
      />
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <motion.section
      className="relative w-full bg-white overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.06,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
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
                fill="#CE3400"
                stroke="#2D3891"
                strokeWidth="10"
              />
            </svg>
            <span
              className="absolute text-[#fcc838] text-[22px] sm:text-[28px] whitespace-nowrap"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            >
              HABILIDADES
            </span>
          </div>
        </motion.div>

        <div className="relative flex flex-col items-center gap-8 md:block md:h-[520px] lg:h-[480px]">
          <motion.div
            className="hidden md:block absolute right-4 top-0 z-20"
            initial={{ opacity: 0, x: 60, y: -20, scale: 0.8, rotate: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 5 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.2 }}
          >
            <HiddenNote rotate={5}>
              Pasa el cursor sobre las etiquetas... se ponen nerviosas.
            </HiddenNote>
          </motion.div>
          <div className="md:absolute md:left-0 md:top-0 w-full max-w-[500px] md:max-w-[440px] mx-auto md:mx-0 group">
            <Sticker img={imgEtiquetas21} baseRotate={19} position="group-hover:-rotate-3" delay={0.3} from="left" />
          </div>
          <div className="md:absolute md:right-0 md:top-0 w-full max-w-[460px] md:max-w-[400px] mx-auto md:mx-0">
            <Sticker img={imgEtiquetas11} baseRotate={-19} position="" delay={0.7} from="right" />
          </div>
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 w-full max-w-[460px] md:max-w-[380px] mx-auto md:mx-0">
            <Sticker img={imgEtiqueta31} baseRotate={9} position="" delay={1.1} from="bottom" />
          </div>
          <motion.div
            className="hidden md:block absolute left-8 bottom-4 z-20"
            initial={{ opacity: 0, x: -60, y: 40, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -4 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 1.3 }}
          >
            <HiddenNote rotate={-4} color="bg-[#016634]" textColor="text-white">
              Tambien se hablar con APIs. O sea, les mando mensajes y responden JSON.
            </HiddenNote>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
