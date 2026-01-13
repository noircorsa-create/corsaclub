import { useState, useRef, useEffect } from "react";
import { RotateCw, Move } from "lucide-react";

export default function Viewer360() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Simulate 360 view with multiple angle images of Corsa
  const angles = [
    "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-360-front.png",
    "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-angle.png",
    "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-360-side.png",
    "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-360-rear.png",
  ];

  const currentAngleIndex = Math.floor((rotation / 360) * angles.length) % angles.length;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => (prev + deltaX) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setRotation(prev => (prev + deltaX) % 360);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const autoRotate = () => {
    setRotation(prev => (prev + 1) % 360);
  };

  useEffect(() => {
    const interval = setInterval(autoRotate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Visualização 360°
          </h2>
          <p 
            className="text-zinc-400 text-lg font-light mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Arraste para girar ou assista a rotação automática
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <Move className="w-4 h-4" />
            <span 
              className="text-sm tracking-wider"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Clique e arraste para explorar
            </span>
          </div>
        </div>

        {/* 360 viewer */}
        <div 
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative aspect-[21/9]">
            <img
              src={angles[currentAngleIndex]}
              alt="Vista 360° do Corsa"
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            {/* Rotation indicator */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center gap-3">
              <RotateCw className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span 
                className="text-amber-400 text-sm font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {Math.round(rotation)}°
              </span>
            </div>

            {/* Angle indicator dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {angles.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentAngleIndex 
                      ? 'bg-amber-500 w-8' 
                      : 'bg-zinc-600'
                  }`}
                />
              ))}
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <h3 
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore Todos os Ângulos
              </h3>
              <p 
                className="text-zinc-300 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Interaja com o Corsa em uma experiência imersiva de 360 graus
              </p>
            </div>
          </div>

          {/* Decorative frame */}
          <div className="absolute inset-0 border-8 border-white/5 rounded-3xl pointer-events-none"></div>
        </div>

        {/* Instructions */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <span className="text-xs">🖱️</span>
            </div>
            <span 
              className="text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Arraste com o mouse
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <span className="text-xs">👆</span>
            </div>
            <span 
              className="text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Deslize no mobile
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <RotateCw className="w-4 h-4 text-amber-400" />
            </div>
            <span 
              className="text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Rotação automática
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
