import { useRef, useState, useCallback, useEffect } from "react";

interface ProjectCarouselProps {
  children: React.ReactNode[];
  itemWidth?: string;
  theme: "design" | "dev";
}

export function ProjectCarousel({
  children,
  itemWidth = "w-[380px] sm:w-[480px]",
  theme,
}: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let bestIndex = 0;
    let bestDist = Infinity;
    for (let i = 0; i < items.length; i++) {
      const itemCenter = items[i].offsetLeft + items[i].offsetWidth / 2;
      const dist = Math.abs(center - itemCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }
    setActiveIndex(bestIndex);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -el.clientWidth * 0.6 : el.clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const clamped = Math.max(0, Math.min(idx, items.length - 1));
    const item = items[clamped];
    if (!item) return;
    const target = item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const arrowColor =
    theme === "design" ? "bg-[#0d99ff] text-white" : "bg-white text-[#0a0a0a]";
  const activeDot = theme === "design" ? "bg-[#0d99ff]" : "bg-white";

  return (
    <div className="relative w-full group">
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Proyecto anterior"
          onClick={() => scroll("left")}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full shadow-lg flex items-center justify-center ${arrowColor}`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2"
      >
        {children.map((child, i) => (
          <div key={i} className={`flex-shrink-0 snap-center ${itemWidth}`}>
            {child}
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          type="button"
          aria-label="Proyecto siguiente"
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full shadow-lg flex items-center justify-center ${arrowColor}`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {children.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
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
