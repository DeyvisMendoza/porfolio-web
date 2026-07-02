import { motion } from "framer-motion";

export function DevCaseStudy({
  project,
}: {
  project: { id: string; title: string; desc: string };
}) {
  return (
    <motion.section
      id={`dev-${project.id}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-[#070707] overflow-hidden py-12 sm:py-16 border-t border-white/6"
    >
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {project.title}
            </h2>
            <p className="text-white/40 text-sm mt-1">
              Frontend · UI · Integración
            </p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="px-3 py-2 bg-white/6 text-white rounded-md">
              🌐 Ver en vivo
            </a>
            <a href="#" className="px-3 py-2 bg-white/6 text-white rounded-md">
              📦 GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-white/80 font-medium mb-2">El Reto Técnico</h3>
            <p className="text-white/60 mb-4">{project.desc}</p>

            <h3 className="text-white/80 font-medium mb-2">
              De Diseño a Código
            </h3>
            <p className="text-white/60 mb-4">
              Componentización con React y Tailwind, manejo de estado local y
              consumo de APIs. Diseño responsive y accesible.
            </p>

            <h3 className="text-white/80 font-medium mb-2">
              Rendimiento y Despliegue
            </h3>
            <p className="text-white/60">
              Despliegue en Vercel con optimizaciones de imagen y carga
              diferida. Lighthouse: ejemplo 95+/100 (dependiendo del proyecto).
            </p>
          </div>

          <aside className="p-4 rounded-lg border border-white/6 bg-white/[0.02]">
            <p className="text-white/40 text-sm mb-2">Stack</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[12px] px-2 py-1 bg-white/6 rounded">
                React
              </span>
              <span className="text-[12px] px-2 py-1 bg-white/6 rounded">
                TypeScript
              </span>
              <span className="text-[12px] px-2 py-1 bg-white/6 rounded">
                Tailwind
              </span>
              <span className="text-[12px] px-2 py-1 bg-white/6 rounded">
                Vercel
              </span>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
