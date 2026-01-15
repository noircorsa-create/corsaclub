import { Award, CheckCircle } from "lucide-react";

export default function Endorsement() {
  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Decorative top border */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500/50"></div>
          <Award className="w-8 h-8 text-amber-400 mx-4" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-500/50"></div>
        </div>

        {/* Section title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aprovado pelos Especialistas
          </h2>
          <p 
            className="text-zinc-400 text-lg font-light mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Reconhecido até pelos mais renomados especialistas em Palio
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-400 mt-4">
            <CheckCircle className="w-5 h-5" />
            <span 
              className="text-sm tracking-wider"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Selo de Qualidade Confirmado
            </span>
          </div>
        </div>

        {/* Endorsement card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 hover:border-amber-500/30 transition-all duration-500 group">
          {/* Image container */}
          <div className="relative">
            <img
              src="https://019bb45b-828c-704a-938f-f22a9c919671.mochausercontent.com/aceitacorsa.png"
              alt="Aprovação de especialistas"
              className="w-full h-auto"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Decorative frame */}
            <div className="absolute inset-0 border-8 border-white/5 rounded-3xl pointer-events-none"></div>

            {/* Badge overlay */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-amber-500/90 backdrop-blur-sm shadow-lg shadow-amber-500/50">
              <span 
                className="text-zinc-950 text-sm font-bold tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ✓ VERIFICADO
              </span>
            </div>
          </div>

          {/* Info section */}
          <div className="p-8 bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Reconhecimento Oficial
                </h3>
                <p 
                  className="text-zinc-400 font-light leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Quando até os maiores admiradores de outros modelos reconhecem a superioridade do Corsa, 
                  você sabe que está diante de algo verdadeiramente especial. Uma aprovação que fala mais 
                  do que mil palavras.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800">
              <div className="text-center">
                <div 
                  className="text-2xl font-bold text-amber-400 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100%
                </div>
                <div 
                  className="text-xs text-zinc-500 tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  APROVAÇÃO
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-2xl font-bold text-amber-400 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  #1
                </div>
                <div 
                  className="text-xs text-zinc-500 tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  ESCOLHA
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-2xl font-bold text-amber-400 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ∞
                </div>
                <div 
                  className="text-xs text-zinc-500 tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  QUALIDADE
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-12">
          <blockquote 
            className="text-zinc-500 italic text-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "A verdade sempre prevalece, mesmo quando vem dos lugares mais inesperados"
          </blockquote>
        </div>

        {/* Decorative bottom border */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 mx-4"></div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-500/50"></div>
        </div>
      </div>
    </div>
  );
}
