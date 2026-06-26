import { useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "../components/Footer";
import { FloatingContact } from "./sections/FloatingContact";
import { SmoothScroll } from "../components/SmoothScroll";
import { ScrollToTop } from "../components/ScrollToTop";

export default function App() {
  const [activeTab, setActiveTab] = useState<"design" | "dev">("design");

  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-white overflow-x-hidden">
        <section id="inicio">
          <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />
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