import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function HiddenNote({
  children,
  className = "",
  rotate = 0,
  color = "bg-[#fee95a]",
  textColor = "text-[#016634]",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
  textColor?: string;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; above: boolean } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const updatePosition = () => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const tooltipHeight = 90; // aproximado
    const spaceBelow = window.innerHeight - rect.bottom;
    const above = spaceBelow < tooltipHeight + 16 && rect.top > tooltipHeight + 16;
    setPos({
      top: above ? rect.top - 8 : rect.bottom + 8,
      left: rect.left + rect.width / 2,
      above,
    });
  };

  useEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    updatePosition();
    const handle = () => updatePosition();
    window.addEventListener("scroll", handle, true);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle, true);
      window.removeEventListener("resize", handle);
    };
  }, [open]);

  const tooltip = (
    <span
      className={`fixed min-w-[180px] max-w-[260px] px-3 py-2 rounded-lg shadow-xl text-[12px] text-left ${color} ${textColor} transition-all duration-200`}
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        top: pos?.top ?? 0,
        left: pos?.left ?? 0,
        transform: `translateX(-50%) ${pos?.above ? "translateY(-100%)" : "translateY(0)"}`,
        zIndex: 9999,
        opacity: pos ? 1 : 0,
        pointerEvents: pos ? "auto" : "none",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </span>
  );

  return (
    <button
      ref={btnRef}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((v) => !v);
      }}
      className={`group relative transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="sr-only">Mensaje oculto</span>
      <span
        className={`inline-flex items-center justify-center size-8 rounded-full shadow-md ${color} ${textColor} text-[12px] font-bold cursor-pointer`}
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        ?
      </span>
      {open && typeof document !== "undefined" && createPortal(tooltip, document.body)}
    </button>
  );
}

export function StickerNote({
  children,
  className = "",
  rotate = -3,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`pointer-events-auto select-none px-3 py-2 bg-[#fee95a] text-[#016634] shadow-md text-[12px] max-w-[180px] transition-transform duration-300 hover:scale-105 cursor-help ${className}`}
      style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
