interface ImageCarouselProps {
  images: string[];
  alt: string;
  theme?: "design" | "dev";
}

export function ImageCarousel({ images, alt, theme = "design" }: ImageCarouselProps) {
  if (images.length === 0) return null;

  const bgColor = theme === "design" ? "bg-[#016634]/5" : "bg-white/[0.02]";
  const borderColor = theme === "design" ? "border-[#016634]/20" : "border-white/10";

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

  // 3+ imágenes: scroll horizontal
  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
      {/* Indicador de scroll */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              theme === "design" ? "bg-[#016634]/30" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
