import { useEffect, useState } from "react";
export default function GalleryHero() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    link.onload = () => setFontLoaded(true);
  }, []);
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent animate-pulse"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${fontLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase" style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>UM CARRO DE VERDADE</span>
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-tight" style={{
        fontFamily: "'Playfair Display', serif"
      }}>
          Corsa
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed" style={{
        fontFamily: "'Montserrat', sans-serif"
      }}>Bem melhor que o Palio</p>

        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
        </div>
      </div>
    </div>;
}