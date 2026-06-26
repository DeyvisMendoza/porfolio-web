export interface HeroSectionProps {
  activeTab: "design" | "dev";
  onTabChange: (tab: "design" | "dev") => void;
}
