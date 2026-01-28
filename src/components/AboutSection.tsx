import { Heart, Sparkles } from "lucide-react"
import { WaveDivider } from "./WaveDivider"

// SVG decorativo para separar esta sección (Crema) de la siguiente (Crema)
// Usaremos un color Beige intermedio para crear contraste
const BOTTOM_WAVE = "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,208C672,192,768,128,864,122.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative bg-cream pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* 1. Imagen con forma orgánica (Diferenciador visual) */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Elemento decorativo detrás */}
            <div className="absolute top-4 -left-4 w-full h-full bg-terracotta/10 rounded-[4rem] rounded-tr-none transform -rotate-2 transition-transform duration-500 group-hover:rotate-0" />
            
            {/* Imagen Principal */}
            <div className="relative overflow-hidden rounded-[4rem] rounded-tr-none shadow-xl">
              <img 
                src="/images/bio-transparent.webp" // Asegúrate de tener una foto aquí
                alt="Retrato terapeuta"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
              
              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[160px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <span className="text-xs font-bold text-dark-brown uppercase tracking-wider">Misión</span>
                </div>
                <p className="text-xs text-earthy-brown font-serif leading-tight">
                  "Acompañarte a recordar tu propia luz."
                </p>
              </div>
            </div>
          </div>

          {/* 2. Contenido Editorial */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-earthy-brown/10 mb-6">
              <Heart className="w-4 h-4 text-terracotta fill-terracotta" />
              <span className="text-xs font-sans uppercase tracking-widest text-earthy-brown">Conóceme</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-8 leading-[1.1]">
              Hola, soy <span className="italic text-terracotta">Jesarela</span>
            </h2>

            <div className="font-sans text-lg text-dark-brown/80 space-y-6 leading-relaxed">
              <p>
                Detrás de Santosha hay un corazón que late por la sanación y el bienestar. 
                Mi camino comenzó como una búsqueda personal de equilibrio, y se transformó 
                en una vocación profunda por servir a otros.
              </p>
              <p>
                Creo firmemente que la sanación no es un destino, sino un viaje de regreso a casa, 
                a nuestro centro. En cada terapia y producto que ofrezco, pongo mi intención, 
                mi energía y mis conocimientos para sostener tu propio proceso.
              </p>
            </div>

            {/* Firma o Cierre personal */}
            <div className="mt-10 pt-8 border-t border-dark-brown/10">
              <p className="font-cursive text-3xl text-earthy-brown">
                Con amor y gratitud.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* OLA SEPARADORA:
         Como la siguiente sección (Productos) es color "Cream" y esta también,
         usamos una ola color BEIGE (#E8DED5) para crear una transición visible y elegante.
      
      <WaveDivider path={BOTTOM_WAVE} className="text-[#E8DED5]" />
      */}
    </section>
  )
}