import { useMode } from "../context/ModeContext";
import { ExperienceSection as DesignExperience } from "./design/ExperienceSection";
import { ExperienceSection as DevExperience } from "./dev/ExperienceSection";

export function ExperienceSection() {
  const { isDev } = useMode();
  return isDev ? <DevExperience /> : <DesignExperience />;
}
