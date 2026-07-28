import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  theme?: "design" | "dev";
}

export function ImageCarousel({ images, alt, theme = "design" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const bgColor = theme === "design" ? "bg-[#016634]/5" : "bg-white/[0.02]";
  const borderColor = theme === "design" ? "border-[#016634]/20" : "border-white/10";
  const dotActive = theme === "design" ? "bg-[#016634]" : "bg-white";
  const dotInactive = theme === "design" ? "bg-[#016634]/30" : "bg-white/30";
  const arrowBg = theme === "design" ? "bg-[#016634]" : "bg-white";
  const arrowText = theme === "design" ? "text-white" : "text-[#0a0a0a]";

  return (
    <div className="relative w-full">
      <div className={`rounded-[24px] overflow-hidden border ${borderColor} ${bgColor}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${alt} - imagen ${currentIndex + 1}`}
            className="w-full h-auto object-contain max-h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className={`absolute left-2 top-1/2 -translate-y-1/2 ${arrowBg} ${arrowText} w-8 h-8 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity`}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${arrowBg} ${arrowText} w-8 h-8 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity`}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? `w-4 ${dotActive}` : `w-1.5 ${dotInactive}`
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
