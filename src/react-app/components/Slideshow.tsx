import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { GalleryImage } from "@/react-app/pages/Home";

interface SlideshowProps {
  images: GalleryImage[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Apresentação Automática
          </h2>
          <p 
            className="text-zinc-400 text-lg font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Deixe-se envolver pela beleza em movimento
          </p>
        </div>

        {/* Slideshow container */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main image */}
          <div className="relative aspect-[21/9] overflow-hidden">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            ))}

            {/* Image info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12 bg-amber-500/50"></div>
                <span 
                  className="text-amber-400 text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              </div>
              <h3 
                className="text-3xl md:text-5xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {images[currentIndex].title}
              </h3>
              <p 
                className="text-zinc-300 text-lg font-light max-w-2xl"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation controls */}
          <div className={`absolute inset-0 flex items-center justify-between px-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={goToPrevious}
              className="p-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={goToNext}
              className="p-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm group"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`absolute top-6 right-6 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm group ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            ) : (
              <Play className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            )}
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-amber-500' 
                    : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
