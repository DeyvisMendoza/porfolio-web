import { useMode } from "../context/ModeContext";
import { ContactSection as DesignContact } from "./design/ContactSection";
import { ContactSection as DevContact } from "./dev/ContactSection";

export function ContactSection() {
  const { isDev } = useMode();
  return isDev ? <DevContact /> : <DesignContact />;
}
