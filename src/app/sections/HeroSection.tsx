import { useRef, useState } from "react";
import imgAvatarCalidad1 from "../../imports/Frame2/6a7be3c1798d76f5debe0730320cc95b363d573d.png";
import imgLibreta from "../../assets/libreta.png";
import imgBocina from "../../assets/bocina.svg";
import imgTeclado from "../../assets/teclado.svg";
// import imgCheck1 from "../../assets/check.png";
import imgStickerEstilosMiles1 from "../../assets/sticker_estilos_miles.png";
import avatarVideo from "../../assets/avatar_saludo_fondo_blanco.webm";
import { CONTACT } from "../../shared/constants/contact";
import { HiddenNote } from "../../components/HiddenNote";
import type { HeroSectionProps } from "../../shared/types";

const content = {
  design: {
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
  },
  dev: {
    heading: "Bienvenido al lado del codigo! Aqui construyo lo que diseno.",
    body: [
      "Hola, soy Deyvis Mendoza. Si elegiste este camino, valoras la logica, el rendimiento y la arquitectura de software. Me especializo en transformar disenos en productos funcionales con codigo limpio y escalable.",
      "Para mi, el desarrollo no es solo hacer que funcione - es hacerlo bien: mantenible, eficiente y orientado al usuario.",
    ],
    bullets: [
      "Stack principal: React, TypeScript, Next.js y Supabase para construir MVPs completos.",
      "Integracion de IA: GitHub Copilot, Bolt y herramientas generativas para acelerar el ciclo.",
      "Enfoque fullstack: base de datos, APIs, autenticacion e interfaz en una sola vision.",
    ],
  },
};

export function HeroSection({ activeTab, onTabChange }: HeroSectionProps) {
  const c = content[activeTab];
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
    <section
      className="relative w-full bg-[#016634] min-h-[900px] lg:min-h-[850px]"
      onMouseMove={handleMouseMove}
    >
      {/* grilla de fondo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* TECLADO — arriba-derecha, grande, pegado y cortado */}
      <img
        src={imgTeclado}
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 pointer-events-none select-none hero-float"
        style={{
          width: 520,
          maxWidth: "none",
          transform: `translateX(170px) translateY(-20px) rotate(8deg) translate3d(${parallax.x * 14}px, ${parallax.y * 14}px, 0)`,
        }}
      />
      <div className="hidden lg:block absolute right-28 top-24 z-30">
        <HiddenNote rotate={6}>
          Atajo secreto: Ctrl + C y Ctrl + V son mis mejores amigos.
        </HiddenNote>
      </div>

      {/* NOMBRE — arriba-izquierda, rotado */}
      <p
        className="hidden lg:block absolute top-20 left-12 z-30 font-bold text-white text-[52px] xl:text-[60px] leading-none select-none hero-wiggle"
        style={{ fontFamily: "'Caveat', cursive", transform: "rotate(-6deg)" }}
      >
        {CONTACT.name}
      </p>

      {/* LIBRETA — abajo-izquierda, extendida sobre la sección de Experiencia */}
      <div
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
          <span
            className="hero-pop-in absolute top-[44px] left-2 bg-red-500 text-white text-[15px] px-4 py-1.5 rounded-md shadow-md select-none z-30"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, transform: "rotate(-14deg)" }}
          >
            Hello Deyvis!
          </span>
          {/* check sticker */}
          {/* <img
            src={imgCheck1}
            alt=""
            className="absolute top-[26px] right-[70px] w-[70px] h-[70px] object-contain pointer-events-none select-none hero-wiggle z-30"
            style={{ transform: "rotate(15deg)" }}
          /> */}
          {/* sticker estilos miles */}
          <img
            src={imgStickerEstilosMiles1}
            alt=""
            className="absolute bottom-[36px] right-[50px] w-[80px] h-[72px] object-contain pointer-events-none select-none hero-pop-in z-30"
            style={{ transform: "rotate(16deg)" }}
          />
          {/* nota oculta en la libreta */}
          <div className="absolute top-[110px] left-[80px] z-40">
            <HiddenNote rotate={-8}>
              He disenado flujos de mas de 200 pantallas sin perder la cordura (casi).
            </HiddenNote>
          </div>
        </div>
      </div>

      {/* TOGGLE Design/Dev */}
      <div className="relative z-30 flex justify-center pt-10 pb-8 px-4">
        <div className="relative flex overflow-hidden rounded-full border border-black shadow-lg" style={{ background: "#f5f5f5" }}>
          <span
            className="absolute top-0 bottom-0 w-1/2 bg-[#016634] transition-all duration-300 ease-out rounded-full"
            style={{ left: activeTab === "design" ? "0%" : "50%" }}
          />
          {(["design", "dev"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className="relative px-8 sm:px-12 py-[10px] text-[15px] sm:text-[16px] font-medium transition-colors capitalize"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: activeTab === tab ? "#fff" : "#313131",
              }}
            >
              {tab === "design" ? "Design" : "Dev"}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-20 max-w-[620px] mx-auto text-center px-5 pb-10 lg:pb-16">
        {/* nombre en móvil */}
        <p
          className="lg:hidden font-bold text-white text-[38px] sm:text-[52px] leading-none select-none hero-wiggle mb-6"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {CONTACT.name}
        </p>

        <div key={activeTab} className="hero-fade-in">
          <div className="relative inline-block mb-6">
            <h1
              className="text-white text-[22px] sm:text-[26px] md:text-[30px] leading-snug"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}
            >
              {c.heading}
            </h1>
            {/* bocina decorativa al lado derecho del título */}
            <img
              src={imgBocina}
              alt=""
              className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-[64px] h-[78px] object-contain pointer-events-none select-none z-20 hero-wiggle"
              style={{ transform: "rotate(-12deg)" }}
            />
          </div>

          <div
            className="text-white/95 text-[15px] sm:text-[16px] leading-[28px] space-y-3 text-left lg:text-left"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
          >
            {c.body.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="list-disc pl-6 space-y-2 mt-3">
              {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* VIDEO / PERSONAJE — abajo-derecha, extendido sobre la sección de Experiencia */}
      <div
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
          <img
            src={imgAvatarCalidad1}
            alt=""
            className="absolute -bottom-4 -right-4 z-[100] w-[100px] h-auto object-contain pointer-events-none select-none drop-shadow-2xl bg-white p-1"
            style={{ transform: "rotate(12deg)" }}
          />
        </div>
      </div>

      {/* libreta en móvil/tablet */}
      <div className="flex justify-center lg:hidden mb-8 px-5">
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
      </div>

      {/* video en móvil */}
      <div className="flex justify-center mt-2 mb-4 lg:hidden pointer-events-none select-none">
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
    </section>
  );
}
