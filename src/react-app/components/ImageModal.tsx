import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/react-app/pages/Home";

interface ImageModalProps {
  image: GalleryImage;
  images: GalleryImage[];
  onClose: () => void;
}

export default function ImageModal({ image, images, onClose }: ImageModalProps) {
  const [zoom, setZoom] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(images.findIndex(img => img.id === image.id));

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose, currentIndex]);

  const currentImage = images[currentIndex];

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    setZoom(1);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>

      {/* Top controls */}
      <div className="absolute top-6 right-6 z-10 flex gap-3">
        {/* Zoom controls */}
        <div className="flex gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-full p-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            disabled={zoom <= 1}
            className="p-2 rounded-full hover:bg-zinc-800 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          </button>
          <span 
            className="px-3 flex items-center text-amber-400 text-sm font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            disabled={zoom >= 3}
            className="p-2 rounded-full hover:bg-zinc-800 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-6 z-10 p-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-6 z-10 p-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
      </button>

      {/* Modal content */}
      <div 
        className="relative z-10 max-w-6xl w-full animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
          <div className="overflow-auto max-h-[80vh]">
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="w-full h-auto object-contain transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            />
          </div>

          {/* Info bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-amber-500/50"></div>
                  <span 
                    className="text-amber-400 text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Obra {String(currentImage.id).padStart(2, '0')} • {currentIndex + 1} de {images.length}
                  </span>
                </div>
                <h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {currentImage.title}
                </h2>
                <p 
                  className="text-zinc-300 text-lg font-light max-w-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {currentImage.description}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative frame */}
          <div className="absolute inset-0 border-8 border-white/5 rounded-3xl pointer-events-none"></div>
          <div className="absolute inset-4 border border-amber-500/20 rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
