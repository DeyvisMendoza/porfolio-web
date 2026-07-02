import { useMode } from "../context/ModeContext";
import { HeroSection as DesignHero } from "./design/HeroSection";
import { HeroSection as DevHero } from "./dev/HeroSection";

export function HeroSection() {
  const { isDev } = useMode();
  return isDev ? <DevHero /> : <DesignHero />;
}
