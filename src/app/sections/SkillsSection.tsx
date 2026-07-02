import { useMode } from "../context/ModeContext";
import { SkillsSection as DesignSkills } from "./design/SkillsSection";
import { SkillsSection as DevSkills } from "./dev/SkillsSection";

export function SkillsSection() {
  const { isDev } = useMode();
  return isDev ? <DevSkills /> : <DesignSkills />;
}
