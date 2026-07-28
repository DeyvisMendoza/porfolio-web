import { useRef, useState, useCallback, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  theme?: "design" | "dev";
}

export function ImageCarousel({ images, alt, theme = "design" }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  if (images.length === 0) return null;

  const bgColor = theme === "design" ? "bg-[#016634]/5" : "bg-white/[0.02]";
  const borderColor = theme === "design" ? "border-[#016634]/20" : "border-white/10";
  const arrowBg = theme === "design" ? "bg-[#016634]" : "bg-white";
  const arrowText = theme === "design" ? "text-white" : "text-[#0a0a0a]";

  // 1 imagen: mostrar sola
  if (images.length === 1) {
    return (
      <div className={`rounded-[24px] overflow-hidden border ${borderColor} ${bgColor}`}>
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-auto object-contain max-h-[400px]"
        />
      </div>
    );
  }

  // 2 imágenes: mostrar lado a lado
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className={`rounded-[24px] overflow-hidden border ${borderColor} ${bgColor}`}>
            <img
              src={img}
              alt={`${alt} - imagen ${i + 1}`}
              className="w-full h-auto object-contain max-h-[350px]"
            />
          </div>
        ))}
      </div>
    );
  }

  // 3+ imágenes: scroll horizontal con flechas
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
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
    const scrollAmount = el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {/* Flecha izquierda */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 ${arrowBg} ${arrowText} w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Flecha derecha */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 ${arrowBg} ${arrowText} w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-center w-[70%] sm:w-[45%] lg:w-[30%] rounded-[24px] overflow-hidden border ${borderColor} ${bgColor}`}
          >
            <img
              src={img}
              alt={`${alt} - imagen ${i + 1}`}
              className="w-full h-auto object-contain max-h-[350px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
