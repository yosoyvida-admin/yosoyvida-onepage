import { Dna, Sparkles, User, Clock, CheckCircle2, Star } from "lucide-react"
import { WaveDivider } from "./WaveDivider"
import { FadeIn } from "./ui/FadeIn"

const TOP_WAVE = "M0,288L48,282.7C96,277,192,267,288,250.7C384,235,480,213,576,186.7C672,160,768,128,864,144C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
const BOTTOM_WAVE = "M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,122.7C672,128,768,224,864,240C960,256,1056,192,1152,149.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

const therapies = [
    { 
      icon: Dna, 
      title: "Biodecodificación", 
      description: "Transforma memorias emocionales y patrones heredados que afectan tu bienestar físico y mental." 
    },
    { 
      icon: Sparkles, 
      title: "Sanación Energética", 
      description: "Limpieza profunda para liberar bloqueos, armonizar tu campo y elevar tu vibración." 
    },
    { 
      icon: User, 
      title: "Cuerpo Sutil", 
      description: "Reconexión con tu esencia más profunda, alineando tus centros energéticos (chakras)." 
    },
]

export function TherapiesSection() {
  return (
    <section id="terapias" className="relative bg-terracotta text-cream">
       
       <div className="-mt-[2px] relative z-10">
         <WaveDivider path={TOP_WAVE} className="text-cream" position="top" />
       </div>
       
       <div className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* 1. ENCABEZADO CENTRADO: Más legible y estético */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-sm">
                   <Star className="w-3 h-3 text-cream" fill="currentColor" />
                   <span className="text-xs font-sans uppercase tracking-widest text-cream">Enfoque Holístico</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white drop-shadow-sm">
                  Terapia Integral
                </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
                <div className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed text-pretty space-y-2">
                    <p className="font-medium text-white text-2xl mb-3">
                        ¿Sabías que la energía se puede medir?
                    </p>
                    <p className="opacity-90 font-light">
                        No solo tratamos el síntoma, vamos al <span className="font-serif italic text-white text-xl">origen</span>. 
                        Realizamos una medición precisa para entregarte herramientas concretas que eleven tu frecuencia.
                    </p>
                </div>
            </FadeIn>
          </div>

          {/* 2. ESTRUCTURA 2 COLUMNAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             
             {/* COLUMNA IMAGEN (Izquierda) */}
             <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
                <FadeIn direction="right" className="relative w-full max-w-sm lg:max-w-full">
                    <div className="absolute top-10 left-0 w-full h-full bg-cream/10 rounded-full blur-3xl -z-10 transform scale-90" />
                    <img 
                        src="/images/therapies-oval.webp" 
                        alt="Sesión de Terapia"
                        className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                    />
                </FadeIn>
             </div>

             {/* COLUMNA DETALLES (Derecha) */}
             <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-10">
                
                {/* LISTA DE TERAPIAS MEJORADA */}
                <div className="space-y-10">
                    {therapies.map((item, index) => (
                        <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
                            <div className="flex gap-6 items-start group">
                                {/* Icono Brillante */}
                                <div className="shrink-0 p-4 bg-white/10 rounded-full border border-white/10 shadow-inner group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                    <item.icon className="w-6 h-6 text-cream" />
                                </div>
                                
                                {/* Textos */}
                                <div className="space-y-1">
                                    <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-cream transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="font-sans text-cream/80 leading-relaxed text-base md:text-lg font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* CAJA DESTACADA */}
                <FadeIn delay={0.6}>
                    <div className="bg-cream/10 border border-cream/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm mt-4 hover:bg-cream/15 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-cream" />
                                <span className="uppercase tracking-widest text-sm font-bold text-cream">Detalles de la Sesión</span>
                            </div>
                            <span className="text-xl font-serif italic text-white opacity-90">Duración: 2 Horas</span>
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/30 to-transparent mb-5" />
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base font-light text-cream/90">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cream opacity-70"/> Conversación Profunda</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cream opacity-70"/> Chequeo Energético</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cream opacity-70"/> Limpieza con Productos</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cream opacity-70"/> Plan de Acción</li>
                        </ul>
                    </div>
                </FadeIn>

             </div>
          </div>
        </div>
      </div>

      <WaveDivider path={BOTTOM_WAVE} className="text-cream" />
    </section>
  )
}