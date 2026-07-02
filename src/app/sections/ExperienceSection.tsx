import { EXPERIENCE_ITEMS } from "../../shared/constants/experience";
import { HiddenNote } from "../../components/HiddenNote";
import { useMode } from "../context/ModeContext";

export function ExperienceSection() {
  const { isDev } = useMode();

  if (isDev) {
    return (
      <section className="relative w-full bg-[#0d1117] overflow-hidden pt-32 pb-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,255,65,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="flex justify-center mb-16">
            <h2
              className="text-[#00ff41] text-[28px] sm:text-[36px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
            >
              &lt;Experiencia /&gt;
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 items-start">
            {EXPERIENCE_ITEMS.map((card, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-[#00ff41]"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-[#21262d] border-b border-[#30363d]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span
                    className="ml-2 text-[#8b949e] text-[11px] truncate"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {card.company.toLowerCase().replace(/\s+/g, "-")}.js
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-[#e6edf3] text-[16px] sm:text-[18px] leading-snug mb-1"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}
                  >
                    {card.company}
                  </h3>
                  <p
                    className="text-[#8b949e] text-[12px] mb-5"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {card.location}
                  </p>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-[#c9d1d9] text-[13px] sm:text-[14px] leading-snug pl-4 border-l-2 border-[#00ff41]"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <HiddenNote rotate={2} color="bg-[#161b22]" textColor="text-[#00ff41]">
              git log --oneline | head -n 5
            </HiddenNote>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-white overflow-hidden pt-40 pb-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="flex justify-center mb-16">
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
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-8 items-start">
          {EXPERIENCE_ITEMS.map((card, i) => (
            <div key={i} className="relative flex justify-center">
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
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <HiddenNote rotate={2}>
            Dato curioso: mis primeros wireframes se hicieron en papel y aun conservo algunos.
          </HiddenNote>
        </div>
      </div>
    </section>
  );
}
