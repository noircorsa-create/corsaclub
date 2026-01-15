import { useState, useEffect } from "react";
import GalleryHero from "@/react-app/components/GalleryHero";
import GalleryGrid from "@/react-app/components/GalleryGrid";
import ImageModal from "@/react-app/components/ImageModal";
import Slideshow from "@/react-app/components/Slideshow";
import VideoSection from "@/react-app/components/VideoSection";
import Viewer360 from "@/react-app/components/Viewer360";
import Endorsement from "@/react-app/components/Endorsement";

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  aspect: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-urban-front.png",
    title: "Vista Urbana Frontal",
    description: "O Corsa em seu elemento: a cidade moderna",
    aspect: "16:9",
    category: "exterior"
  },
  {
    id: 2,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-highway.png",
    title: "Dinâmica na Estrada",
    description: "Capturando a essência do movimento e velocidade",
    aspect: "16:9",
    category: "action"
  },
  {
    id: 3,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-city-rear.png",
    title: "Presença Urbana",
    description: "Design traseiro que marca presença na cidade",
    aspect: "4:3",
    category: "exterior"
  },
  {
    id: 4,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-front-detail.png",
    title: "Identidade Visual",
    description: "Grade e faróis que definem o caráter do Corsa",
    aspect: "4:3",
    category: "exterior"
  },
  {
    id: 5,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-interior-dash.png",
    title: "Habitáculo Refinado",
    description: "Interior pensado para conforto e funcionalidade",
    aspect: "16:9",
    category: "interior"
  },
  {
    id: 6,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-dashboard.png",
    title: "Central de Comando",
    description: "Painel de instrumentos moderno e intuitivo",
    aspect: "4:3",
    category: "interior"
  },
  {
    id: 7,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-wheel-detail.png",
    title: "Rodas Esportivas",
    description: "Detalhes que revelam personalidade e estilo",
    aspect: "1:1",
    category: "details"
  },
  {
    id: 8,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-taillight.png",
    title: "Assinatura Luminosa",
    description: "Lanternas traseiras com design marcante",
    aspect: "1:1",
    category: "details"
  },
  {
    id: 9,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-mountain.png",
    title: "Aventura nas Montanhas",
    description: "Liberdade para explorar novos horizontes",
    aspect: "21:9",
    category: "action"
  },
  {
    id: 10,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-night-city.png",
    title: "Noite na Metrópole",
    description: "Brilhando sob as luzes da cidade que nunca dorme",
    aspect: "16:9",
    category: "action"
  },
  {
    id: 11,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-seats.png",
    title: "Conforto Interior",
    description: "Bancos ergonômicos para todas as jornadas",
    aspect: "4:3",
    category: "interior"
  },
  {
    id: 12,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-coastal.png",
    title: "Vista para o Mar",
    description: "O Corsa acompanhando você em cada destino",
    aspect: "16:9",
    category: "action"
  },
  {
    id: 13,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-front.png",
    title: "Elegância Frontal",
    description: "Uma perspectiva majestosa que captura a essência do design",
    aspect: "4:3",
    category: "exterior"
  },
  {
    id: 14,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-side.png",
    title: "Perfil Atemporal",
    description: "A silhueta perfeita em sua forma mais pura",
    aspect: "16:9",
    category: "exterior"
  },
  {
    id: 15,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-rear.png",
    title: "Perspectiva Traseira",
    description: "Luz dourada revelando cada detalhe refinado",
    aspect: "4:3",
    category: "exterior"
  },
  {
    id: 16,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-detail.png",
    title: "Detalhes Artísticos",
    description: "A beleza está nos pequenos detalhes",
    aspect: "1:1",
    category: "details"
  },
  {
    id: 17,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-motion.png",
    title: "Em Movimento",
    description: "A dinâmica capturada em um único momento",
    aspect: "21:9",
    category: "action"
  },
  {
    id: 18,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-reflection.png",
    title: "Reflexões",
    description: "Simetria e perfeição espelhada",
    aspect: "4:5",
    category: "exterior"
  },
  {
    id: 19,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-classic-90s.png",
    title: "Clássico dos Anos 90",
    description: "A primeira geração que conquistou o Brasil",
    aspect: "4:3",
    category: "classic"
  },
  {
    id: 20,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-vintage-sedan.png",
    title: "Sedan Vintage",
    description: "Elegância clássica dos anos 2000",
    aspect: "16:9",
    category: "classic"
  },
  {
    id: 21,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-wind-classic.png",
    title: "Corsa Wind Clássico",
    description: "O icônico modelo que marcou época",
    aspect: "4:3",
    category: "classic"
  },
  {
    id: 22,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-super-vintage.png",
    title: "Corsa Super Vintage",
    description: "Performance clássica dos primeiros modelos",
    aspect: "4:3",
    category: "classic"
  },
  {
    id: 23,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-classic-interior.png",
    title: "Interior Clássico",
    description: "O painel que iniciou uma era de inovação",
    aspect: "16:9",
    category: "classic"
  },
  {
    id: 24,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-vintage-road.png",
    title: "Nas Estradas do Passado",
    description: "Aventuras que marcaram gerações",
    aspect: "21:9",
    category: "classic"
  },
  {
    id: 25,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-classic-yellow.png",
    title: "Amarelo Vintage",
    description: "Cores vibrantes que definiram uma década",
    aspect: "4:3",
    category: "classic"
  },
  {
    id: 26,
    url: "https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/corsa-vintage-wheel.png",
    title: "Rodas Clássicas",
    description: "Detalhes autênticos da era dourada",
    aspect: "1:1",
    category: "classic"
  }
];

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <GalleryHero />
        <Slideshow images={galleryImages} />
        <Endorsement />
        <GalleryGrid images={galleryImages} onImageClick={setSelectedImage} />
        <VideoSection />
        <Viewer360 />
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            images={galleryImages}
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    </div>
  );
}
