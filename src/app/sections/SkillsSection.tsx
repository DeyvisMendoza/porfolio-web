import imgEtiquetas21 from "../../imports/Frame2/4e3f7b3fd6a3cd6472893471b506ffd0ece8a5e0.png";
import imgEtiqueta31 from "../../imports/Frame2/019b3d5eba962e665f522cb8d3f32d3163407c39.png";
import imgEtiquetas11 from "../../imports/Frame2/1d3e996443a3727e028778b179a87b99dc215403.png";
import { HiddenNote } from "../../components/HiddenNote";
import { useMode } from "../context/ModeContext";

const devSkills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend & DB", items: ["Supabase", "Node.js", "PostgreSQL", "REST APIs", "Auth"] },
  { category: "Tools", items: ["Git", "GitHub Copilot", "Figma", "Vercel", "Bolt"] },
];

function Sticker({
  img,
  baseRotate,
  position,
  delay,
}: {
  img: string;
  baseRotate: number;
  position: string;
  delay: number;
}) {
  return (
    <div
      className={`transition-transform duration-200 will-change-transform hover:scale-110 hover:-translate-y-2 ${position}`}
      style={{ transform: `rotate(${baseRotate}deg)`, animationDelay: `${delay}s` }}
    >
      <img
        src={img}
        alt="Habilidades"
        className="w-full object-contain drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-300 hero-float"
      />
    </div>
  );
}

export function SkillsSection() {
  const { isDev } = useMode();

  if (isDev) {
    return (
      <section className="relative w-full bg-[#161b22] overflow-hidden py-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#00ff41 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="flex justify-center mb-14">
            <h2
              className="text-[#00d4aa] text-[28px] sm:text-[36px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            >
              import {"{ Skills }"} from <span className="text-[#00ff41]">"./deyvis"</span>;
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devSkills.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-[#30363d] bg-[#0d1117] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3
                  className="text-[#00ff41] text-[14px] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
                >
                  // {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded border border-[#30363d] bg-[#161b22] text-[#c9d1d9] text-[13px] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-colors"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <HiddenNote rotate={-3} color="bg-[#0d1117]" textColor="text-[#00d4aa]">
              Tambien debuggeo con console.log como todo un profesional.
            </HiddenNote>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-white overflow-hidden py-20">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="flex justify-center mb-16">
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
        </div>

        <div className="relative flex flex-col items-center gap-8 md:block md:h-[520px] lg:h-[480px]">
          <div className="hidden md:block absolute right-4 top-0 z-20">
            <HiddenNote rotate={5}>
              Pasa el cursor sobre las etiquetas... se ponen nerviosas.
            </HiddenNote>
          </div>
          <div className="md:absolute md:left-0 md:top-0 w-full max-w-[500px] md:max-w-[440px] mx-auto md:mx-0 group">
            <Sticker img={imgEtiquetas21} baseRotate={19} position="group-hover:-rotate-3" delay={0} />
          </div>
          <div className="md:absolute md:right-0 md:top-0 w-full max-w-[460px] md:max-w-[400px] mx-auto md:mx-0">
            <Sticker img={imgEtiquetas11} baseRotate={-19} position="" delay={0.6} />
          </div>
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 w-full max-w-[460px] md:max-w-[380px] mx-auto md:mx-0">
            <Sticker img={imgEtiqueta31} baseRotate={9} position="" delay={1.2} />
          </div>
          <div className="hidden md:block absolute left-8 bottom-4 z-20">
            <HiddenNote rotate={-4} color="bg-[#016634]" textColor="text-white">
              Tambien se hablar con APIs. O sea, les mando mensajes y responden JSON.
            </HiddenNote>
          </div>
        </div>
      </div>
    </section>
  );
}
