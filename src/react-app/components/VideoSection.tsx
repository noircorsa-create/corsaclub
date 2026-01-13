import { useState } from "react";
import { Play, X } from "lucide-react";

interface Video {
  title: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
}

const videos: Video[] = [
  {
    title: "Interior em Detalhes",
    duration: "4:10",
    thumbnail: "https://img.youtube.com/vi/PoNHWHbtDHY/maxresdefault.jpg",
    youtubeId: "PoNHWHbtDHY",
    description: "Conheça cada detalhe do interior do Corsa"
  },
  {
    title: "Performance na Estrada",
    duration: "0:24",
    thumbnail: "https://img.youtube.com/vi/Afb36bQ_GEw/maxresdefault.jpg",
    youtubeId: "Afb36bQ_GEw",
    description: "Veja o desempenho do Corsa em ação, num rachinha"
  },
  {
    title: "Cultura e Estilo",
    duration: "1:00",
    thumbnail: "https://i.ytimg.com/vi/ej9_Hxe_C6Y/maxresdefault.jpg",
    youtubeId: "T15TOtTtAJE",
    description: "Conheça a cultura envolta ao Corsa"
  }
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experiência em Vídeo
          </h2>
          <p 
            className="text-zinc-400 text-lg font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Veja o Corsa em ação
          </p>
        </div>

        {/* Video container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 group">
          <div className="relative aspect-video">
            {/* Video placeholder with YouTube embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/MFvBHRfH0fc?autoplay=0&mute=0&controls=1&rel=0"
              title="Corsa em Ação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Decorative overlay */}
            <div className="absolute inset-0 border-8 border-white/5 rounded-3xl pointer-events-none"></div>
          </div>

          {/* Info bar */}
          <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Tour Completo do Corsa
                </h3>
                <p 
                  className="text-zinc-400 text-sm font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Explore cada detalhe em movimento
                </p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30">
                  <span 
                    className="text-amber-400 text-xs tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    HD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional video cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              onClick={() => setSelectedVideo(video)}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-zinc-800 bg-zinc-900 hover:border-amber-500/30 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                    <Play className="w-6 h-6 text-zinc-950 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700">
                  <span 
                    className="text-zinc-300 text-xs"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {video.duration}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&mute=0&controls=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Info bar */}
              <div className="p-6 bg-zinc-900 border-t border-zinc-800">
                <h3 
                  className="text-2xl font-semibold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedVideo.title}
                </h3>
                <p 
                  className="text-zinc-400 text-sm font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
