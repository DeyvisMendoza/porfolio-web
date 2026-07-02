import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProjectCarouselProps {
  children: React.ReactNode[];
  maxWidth?: string;
  itemWidth?: string;
  theme: "design" | "dev";
}

export function ProjectCarousel({
  children,
  maxWidth = "max-w-[1280px]",
  itemWidth = "w-[280px]",
  theme,
}: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemStepRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const measure = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowControls(el.scrollWidth > el.clientWidth + 1);
    const items = el.children;
    if (items.length >= 2) {
      const first = items[0] as HTMLElement;
      const second = items[1] as HTMLElement;
      itemStepRef.current = second.offsetLeft - first.offsetLeft;
    } else if (items.length === 1) {
      itemStepRef.current = (items[0] as HTMLElement).offsetWidth;
    }
  }, []);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure, children.length]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const step = itemStepRef.current || 1;
    const idx = Math.round(el.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(idx, children.length - 1)));
  }, [children.length]);

  const scrollToIndex = useCallback(
    (idx: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const step = itemStepRef.current || 0;
      const clamped = Math.max(0, Math.min(idx, children.length - 1));
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
      setActiveIndex(clamped);
    },
    [children.length],
  );

  const arrowBase =
    "absolute top-1/2 -translate-y-1/2 z-20 size-11 rounded-full shadow-lg flex items-center justify-center";
  const arrowColor =
    theme === "design" ? "bg-[#0d99ff] text-white" : "bg-white text-[#0a0a0a]";
  const activeDot = theme === "design" ? "bg-[#0d99ff]" : "bg-white";

  return (
    <div className={`relative w-full ${maxWidth} mx-auto`}>
      {showControls && (
        <motion.button
          type="button"
          aria-label="Proyecto anterior"
          onClick={() => scrollToIndex(activeIndex - 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${arrowBase} left-0 sm:-left-2 ${arrowColor}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} className={`flex-shrink-0 snap-center ${itemWidth}`}>
            {child}
          </div>
        ))}
      </div>

      {showControls && (
        <motion.button
          type="button"
          aria-label="Proyecto siguiente"
          onClick={() => scrollToIndex(activeIndex + 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${arrowBase} right-0 sm:-right-2 ${arrowColor}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      )}

      {children.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir al proyecto ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? `w-6 ${activeDot}`
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
