import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import type { GalleryImage } from "@/react-app/pages/Home";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const categories = [
  { id: "all", label: "Todos" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "details", label: "Detalhes" },
  { id: "action", label: "Em Ação" },
  { id: "classic", label: "Clássicos" }
];

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  useEffect(() => {
    setVisibleImages([]);
    filteredImages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, index * 100);
    });
  }, [filteredImages.length, selectedCategory]);

  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Section title */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Galeria Completa
        </h2>
        <p 
          className="text-zinc-400 text-lg font-light mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Explore cada ângulo e detalhe
        </p>

        {/* Filter button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 group"
        >
          <Filter className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
          <span 
            className="text-zinc-300 group-hover:text-white transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Filtrar Galeria
          </span>
        </button>
      </div>

      {/* Category filters */}
      {showFilters && (
        <div className="max-w-7xl mx-auto mb-12 animate-fadeIn">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/30'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <span 
              className="text-zinc-500 text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {filteredImages.length} {filteredImages.length === 1 ? 'imagem' : 'imagens'}
            </span>
          </div>
        </div>
      )}

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`group cursor-pointer transition-all duration-700 ${
              visibleImages.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            onClick={() => onImageClick(image)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-500"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700">
                  <span 
                    className="text-amber-400 text-xs tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {categories.find(c => c.id === image.category)?.label || image.category}
                  </span>
                </div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 transition-transform duration-500">
                <h3 
                  className="text-2xl font-semibold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {image.title}
                </h3>
                <p 
                  className="text-zinc-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {image.description}
                </p>
              </div>

              {/* Frame effect */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-amber-500/30 transition-colors duration-500"></div>
            </div>

            {/* Exhibition number */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-zinc-700"></div>
              <span 
                className="text-zinc-600 text-xs tracking-[0.3em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {String(image.id).padStart(2, '0')}
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-zinc-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
