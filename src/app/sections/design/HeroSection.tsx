import { useRef, useState } from "react";
import { motion } from "framer-motion";
import imgAvatarCalidad1 from "../../../imports/Frame2/6a7be3c1798d76f5debe0730320cc95b363d573d.png";
import imgLibreta from "../../../assets/libreta.png";
import imgBocina from "../../../assets/bocina.svg";
import imgTeclado from "../../../assets/teclado.svg";
import imgStickerEstilosMiles1 from "../../../assets/sticker_estilos_miles.png";
import avatarVideo from "../../../assets/avatar_saludo_fondo_blanco.webm";
import { CONTACT } from "../../../shared/constants/contact";
import { HiddenNote } from "../../../components/HiddenNote";
import { useMode } from "../../context/ModeContext";

const content = {
  heading: "Gran eleccion! Te doy la bienvenida a mi lado creativo.",
  body: [
    "Hola, soy Deyvis Mendoza. Si elegiste este camino, es porque valoras la estetica, la usabilidad y la experiencia del usuario. Me dedico a transformar ideas complejas en interfaces intuitivas, limpias y visualmente atractivas.",
    "Para mi, el diseno no es solo como se ve un producto, sino como funciona y como resuelve los problemas del usuario real.",
  ],
  bullets: [
    "Mi enfoque en UI/UX: wireframes funcionales, prototipos de alta fidelidad y sistemas de diseno escalables.",
    "Especialidad: flujos orientados a producto - desde e-commerce hasta sistemas de cientos de paginas.",
    "Mis herramientas: Figma es mi lienzo principal para conceptualizar y prototipar.",
  ],
};

export function HeroSection() {
  const { mode, setMode } = useMode();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setParallax({ x: dx, y: dy });
  };

  return (
    <motion.section
      className="relative w-full bg-[#016634] min-h-[900px] lg:min-h-[850px] overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* grilla de fondo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.04,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />

      {/* TECLADO — arriba-derecha, grande, pegado y cortado */}
      <motion.img
        initial={{ opacity: 0, x: 120, rotate: 16 }}
        whileInView={{ opacity: 1, x: 0, rotate: 8 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        src={imgTeclado}
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 pointer-events-none select-none hero-float"
        style={{
          width: 520,
          maxWidth: "none",
          transform: `translateX(170px) translateY(-20px) rotate(8deg) translate3d(${parallax.x * 14}px, ${parallax.y * 14}px, 0)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 160, damping: 14 }}
        className="hidden lg:block absolute right-28 top-24 z-30"
      >
        <HiddenNote rotate={6}>
          Atajo secreto: Ctrl + C y Ctrl + V son mis mejores amigos.
        </HiddenNote>
      </motion.div>

      {/* NOMBRE — arriba-izquierda, rotado */}
      <motion.p
        initial={{ opacity: 0, x: -80, y: -20, rotate: -14 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:block absolute top-20 left-12 z-30 font-bold text-white text-[52px] xl:text-[60px] leading-none select-none hero-wiggle"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {CONTACT.name}
      </motion.p>

      {/* LIBRETA — abajo-izquierda, extendida sobre la sección de Experiencia */}
      <motion.div
        initial={{ opacity: 0, x: -140, y: 80, rotate: -18 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -7 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="hidden lg:block absolute left-0 -bottom-10 z-30 pointer-events-none"
        style={{
          transform: `rotate(-7deg) translateX(-90px) translateY(120px) translate3d(${parallax.x * -10}px, ${parallax.y * -10}px, 0)`,
        }}
      >
        <div className="relative">
          <img
            src={imgLibreta}
            alt="Bitacora de Proyectos"
            className="w-[520px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] pointer-events-auto select-none"
            style={{ maxWidth: "none" }}
          />
          {/* pegatina Hello Deyvis */}
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 180, damping: 12 }}
            className="hero-pop-in absolute top-[44px] left-2 bg-red-500 text-white text-[15px] px-4 py-1.5 rounded-md shadow-md select-none z-30"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, transform: "rotate(-14deg)" }}
          >
            Hello Deyvis!
          </motion.span>
          {/* sticker estilos miles */}
          <motion.img
            initial={{ opacity: 0, y: 40, scale: 0, rotate: 30 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 16 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.85, type: "spring", stiffness: 160, damping: 14 }}
            src={imgStickerEstilosMiles1}
            alt=""
            className="absolute bottom-[36px] right-[50px] w-[80px] h-[72px] object-contain pointer-events-none select-none hero-pop-in z-30"
            style={{ transform: "rotate(16deg)" }}
          />
          {/* nota oculta en la libreta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 160, damping: 14 }}
            className="absolute top-[110px] left-[80px] z-40"
          >
            <HiddenNote rotate={-8}>
              He disenado flujos de mas de 200 pantallas sin perder la cordura (casi).
            </HiddenNote>
          </motion.div>
        </div>
      </motion.div>

      {/* TOGGLE Design/Dev */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 160, damping: 16 }}
        className="relative z-30 flex justify-center pt-10 pb-8 px-4"
      >
        <div className="relative flex overflow-hidden rounded-full border border-black shadow-lg" style={{ background: "#f5f5f5" }}>
          <span
            className="absolute top-0 bottom-0 w-1/2 bg-[#016634] transition-all duration-300 ease-out rounded-full"
            style={{ left: mode === "design" ? "0%" : "50%" }}
          />
          {(["design", "dev"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab)}
              className="relative px-8 sm:px-12 py-[10px] text-[15px] sm:text-[16px] font-medium transition-colors capitalize"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: mode === tab ? "#fff" : "#313131",
              }}
            >
              {tab === "design" ? "Design" : "Dev"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-20 max-w-[620px] mx-auto text-center px-5 pb-10 lg:pb-16">
        {/* nombre en móvil */}
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 160, damping: 14 }}
          className="lg:hidden font-bold text-white text-[38px] sm:text-[52px] leading-none select-none hero-wiggle mb-6"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {CONTACT.name}
        </motion.p>

        <motion.div
          key={mode}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
          }}
          className="hero-fade-in"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50, scale: 0.95, rotate: -1 },
              visible: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="relative inline-block mb-6"
          >
            <h1
              className="text-white text-[22px] sm:text-[26px] md:text-[30px] leading-snug"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
            >
              {content.heading}
            </h1>
            {/* bocina decorativa al lado derecho del título */}
            <motion.img
              initial={{ opacity: 0, scale: 0, rotate: -40 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.85, type: "spring", stiffness: 180, damping: 12 }}
              src={imgBocina}
              alt=""
              className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-[64px] h-[78px] object-contain pointer-events-none select-none z-20 hero-wiggle"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="text-white/95 text-[15px] sm:text-[16px] leading-[28px] space-y-3 text-left lg:text-left"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
          >
            {content.body.map((p, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, x: i === 0 ? -12 : 12 },
                  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                {p}
              </motion.p>
            ))}
            <motion.ul
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="list-disc pl-6 space-y-2 mt-3"
            >
              {content.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 + i * 8, rotate: -1 + i },
                    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* VIDEO / PERSONAJE — abajo-derecha, extendido sobre la sección de Experiencia */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.85, rotate: 4 }}
        whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        className="hidden lg:block absolute right-[60px] -bottom-24 z-30"
        style={{ transform: `translate3d(${parallax.x * 14}px, ${parallax.y * 14}px, 0)` }}
      >
        <div className="relative hero-float">
          {videoOk ? (
            <video
              ref={videoRef}
              className="w-[300px] h-auto object-contain max-h-[500px] mix-blend-multiply"
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoOk(false)}
            >
              <source src={avatarVideo} type="video/webm" />
            </video>
          ) : (
            <img
              src={imgAvatarCalidad1}
              alt="Deyvis Mendoza avatar"
              className="w-[300px] h-auto object-contain max-h-[500px] drop-shadow-2xl mix-blend-multiply"
            />
          )}
          {/* sticker pequeño tapa logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0, rotate: 30, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1.1, type: "spring", stiffness: 180, damping: 12 }}
            src={imgAvatarCalidad1}
            alt=""
            className="absolute -bottom-4 -right-4 z-[100] w-[100px] h-auto object-contain pointer-events-none select-none drop-shadow-2xl bg-white p-1"
            style={{ transform: "rotate(12deg)" }}
          />
        </div>
      </motion.div>

      {/* libreta en móvil/tablet */}
      <motion.div
        initial={{ opacity: 0, y: 80, rotate: -12, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotate: -5, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        className="flex justify-center lg:hidden mb-8 px-5"
      >
        <div className="relative" style={{ transform: "rotate(-5deg)" }}>
          <img
            src={imgLibreta}
            alt="Bitacora de Proyectos"
            className="w-[300px] sm:w-[380px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          />
          <span
            className="hero-pop-in absolute top-[24px] left-0 bg-red-500 text-white text-[13px] px-3 py-1 rounded-md shadow-md select-none z-30"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, transform: "rotate(-14deg)" }}
          >
            Hello Deyvis!
          </span>
        </div>
      </motion.div>

      {/* video en móvil — oculto */}
      <div className="hidden">
        {videoOk ? (
          <video
            ref={videoRef}
            className="w-[200px] sm:w-[260px] h-auto object-contain max-h-[360px] mix-blend-multiply hero-float"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoOk(false)}
          >
            <source src={avatarVideo} type="video/webm" />
          </video>
        ) : (
          <img
            src={imgAvatarCalidad1}
            alt="Deyvis Mendoza avatar"
            className="w-[200px] sm:w-[260px] h-auto object-contain max-h-[360px] drop-shadow-2xl mix-blend-multiply hero-float"
          />
        )}
      </div>
    </motion.section>
  );
}
