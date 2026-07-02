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
  const { isDev } = useMode();
  return (
    <SmoothScroll>
      <div className={`w-full min-h-screen overflow-x-hidden transition-colors duration-500 ${isDev ? "bg-[#0d1117]" : "bg-white"}`}>
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
