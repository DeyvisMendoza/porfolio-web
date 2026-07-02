import { motion } from "framer-motion";

export function DesignCaseStudy({
  project,
}: {
  project: { id: string; title: string; subtitle?: string; text?: string };
}) {
  return (
    <motion.section
      id={`design-${project.id}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-[#0f2f2a] overflow-hidden py-12 sm:py-16 border-t border-white/6"
    >
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-white/40 text-sm mt-1">{project.subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-white/80 font-medium mb-2">El Gancho</h3>
            <p className="text-white/60 mb-4">
              ¿Cómo rediseñar una experiencia compleja para que sea intuitiva? —{" "}
              {project.text}
            </p>

            <h3 className="text-white/80 font-medium mb-2">Diagnóstico</h3>
            <ul className="text-white/60 list-disc pl-5 mb-4">
              <li>
                Persona/Flujo crítico: usuario de onboarding con fricciones en
                formularios.
              </li>
              <li>
                Problema clave: la navegación fragmentada producía abandono en
                pasos críticos.
              </li>
            </ul>

            <h3 className="text-white/80 font-medium mb-2">Solución Visual</h3>
            <p className="text-white/60 mb-4">
              Componentes reutilizables, jerarquía visual clara y sistema de
              diseño para acelerar handoff a desarrollo.
            </p>

            <h3 className="text-white/80 font-medium mb-2">Impacto</h3>
            <p className="text-white/60">
              Reducción de fricción y aumento de conversión en las rutas
              críticas (ej. -40% en tiempo de tarea).
            </p>
          </div>

          <aside className="p-4 rounded-lg border border-white/6 bg-white/[0.02]">
            <p className="text-white/40 text-sm mb-2">Ficha técnica</p>
            <div className="text-white/60 text-sm">
              <div>Rol: UI/UX + Prototipado</div>
              <div>Herramientas: Figma</div>
              <div>Duración: 4 semanas</div>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
