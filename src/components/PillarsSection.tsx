import { MessageCircle, Dna, Zap, Heart, Star } from "lucide-react"
import { FadeIn } from "./ui/FadeIn"

// Definimos los pilares permitiendo JSX en la descripción para poder dar estilos (negritas/cursivas)
const pillars = [
  { 
    icon: MessageCircle, 
    title: "Conversación Consciente", 
    description: (
      <>
        Un <span className="font-bold text-terracotta">diálogo profundo</span> diseñado para ir más allá de las palabras y descubrir tus <span className="italic font-serif text-dark-brown">verdaderas necesidades</span>.
      </>
    )
  },
  { 
    icon: Dna, 
    title: "Biodescodificación", 
    description: (
      <>
        Descubre el <span className="font-bold text-terracotta">origen emocional</span> oculto detrás de tus síntomas físicos para iniciar la <span className="italic font-serif text-dark-brown">sanación</span>.
      </>
    )
  },
  { 
    icon: Zap, 
    title: "Chequeo Energético", 
    description: (
      <>
        Medición precisa y <span className="font-bold text-terracotta">análisis de tu campo</span> para identificar y liberar los <span className="italic font-serif text-dark-brown">bloqueos</span> que te limitan.
      </>
    )
  },
  { 
    icon: Heart, 
    title: "Bienestar Integral", 
    description: (
      <>
        Buscamos el <span className="font-bold text-terracotta">equilibrio perfecto</span> entre cuerpo, emoción y espíritu para una <span className="italic font-serif text-dark-brown">vida plena</span>.
      </>
    )
  },
]

export function PillarsSection() {
  return (
    // Reduje el padding vertical (py-12 md:py-20) para quitar exceso de espacio
    <section className="bg-cream py-12 md:py-20 px-6 md:px-12 -mt-[2px] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO: Más compacto y estilizado */}
        <FadeIn>
            <div className="text-center mb-12 md:mb-16"> {/* Menos margen abajo */}
                {/* Pequeño badge decorativo */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 mb-4">
                   <Star className="w-3 h-3 text-terracotta" fill="currentColor" />
                   <span className="text-xs font-bold tracking-widest text-terracotta uppercase">Fundamentos</span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-4 leading-tight">
                    Nuestros <span className="italic text-terracotta">Pilares</span>
                </h2>
                <p className="font-sans text-lg md:text-xl text-dark-brown/80 max-w-2xl mx-auto leading-relaxed">
                    Un enfoque holístico que integra <span className="font-medium text-dark-brown">mente, cuerpo y espíritu</span>.
                </p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"> {/* Gap reducido */}
          
          {/* COLUMNA PILARES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"> {/* Gap interno reducido para que se vean juntos */}
            {pillars.map((pillar, index) => (
              <FadeIn key={index} delay={index * 0.1}> 
                  {/* Tarjeta con fondo sutil y borde para definir el espacio */}
                  <div className="text-center p-6 md:p-8 rounded-2xl bg-white/50 border border-white/60 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 h-full flex flex-col items-center">
                    
                    {/* Icono más elegante */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta text-cream mb-4 shadow-terracotta/20 shadow-lg group-hover:scale-110 transition-transform">
                      <pillar.icon className="w-7 h-7" />
                    </div>
                    
                    {/* Título más grande */}
                    <h3 className="font-serif text-2xl text-dark-brown mb-3 leading-tight">
                        {pillar.title}
                    </h3>
                    
                    {/* Descripción enriquecida */}
                    <p className="font-sans text-base md:text-lg text-dark-brown/70 leading-relaxed text-pretty">
                        {pillar.description}
                    </p>
                  </div>
              </FadeIn>
            ))}
          </div>

          {/* COLUMNA IMAGEN */}
          <FadeIn direction="left" delay={0.3} className="relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
             {/* Círculo decorativo detrás de la imagen */}
             <div className="absolute inset-0 bg-terracotta/5 rounded-full blur-3xl transform scale-75 -z-10" />
             
             <img
                src="/images/pillars-feet.webp" 
                alt="Conexión con la tierra"
                // Ajusté el tamaño máximo para que no se vea gigante al lado de las tarjetas compactas
                className="w-full max-w-md lg:max-w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500"
              />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}