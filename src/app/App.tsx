import { AnimatePresence, motion } from "framer-motion";
import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "../components/Footer";
import { FloatingContact } from "./sections/FloatingContact";
import { SmoothScroll } from "../components/SmoothScroll";
import { ScrollToTop } from "../components/ScrollToTop";
import { ModeProvider, useMode } from "./context/ModeContext";

function AppContent() {
  const { mode, isDev } = useMode();

  return (
    <SmoothScroll>
      <div className={`w-full min-h-screen overflow-x-hidden transition-colors duration-500 ${isDev ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <AnimatePresence mode="wait">
          <motion.main
            key={mode}
            initial={{ opacity: 0, y: 30, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.995 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <section id="inicio">
              <HeroSection />
            </section>
            <section id="experiencia">
              <ExperienceSection />
            </section>
            <section id="habilidades">
              <SkillsSection />
            </section>
            <section id="proyectos">
              <ProjectsSection />
            </section>
            <section id="contacto">
              <ContactSection />
            </section>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <FloatingContact />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <ModeProvider>
      <AppContent />
    </ModeProvider>
  );
}
