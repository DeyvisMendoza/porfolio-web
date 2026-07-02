import { createContext, useContext, useState, type ReactNode } from "react";

export type Mode = "design" | "dev";

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
  isDev: boolean;
}

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("design");
  return <ModeContext.Provider value={{ mode, setMode, isDev: mode === "dev" }}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
