import { motion } from "framer-motion";
import imgAvatarCalidad1 from "../../../imports/Frame2/6a7be3c1798d76f5debe0730320cc95b363d573d.png";

const skillGroups = [
  {
    title: "Front-end",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vite", "React Native"],
  },
  {
    title: "Styles",
    items: ["CSS", "SASS", "PostCSS", "Figma", "Responsive Design"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Auth"],
  },
  {
    title: "DevOps",
    items: ["Git", "GitHub", "Vercel", "CI/CD", "Docker"],
  },
];

export function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="about"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-24"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              className="text-white/40 text-[13px] mb-4"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              .../About me ...
            </motion.p>
            <motion.p
              className="text-white/70 text-[17px] sm:text-[19px] leading-relaxed max-w-[480px] mb-12"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello! I&apos;m Deyvis, I&apos;m a{" "}
              <em className="text-white not-italic">full-stack developer</em>. More than{" "}
              <em className="text-white not-italic">5 years</em> of experience building digital products.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              className="text-white/30 text-[11px] mt-6 max-w-[260px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Some of my favorite technologies, topics, or tools that I worked with.
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
        </div>
      </div>
    </motion.section>
  );
}
