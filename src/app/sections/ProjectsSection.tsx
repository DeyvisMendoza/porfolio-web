import { useMode } from "../context/ModeContext";
import { ProjectsSection as DesignProjects } from "./design/ProjectsSection";
import { ProjectsSection as DevProjects } from "./dev/ProjectsSection";

export function ProjectsSection() {
  const { isDev } = useMode();
  return isDev ? <DevProjects /> : <DesignProjects />;
}
