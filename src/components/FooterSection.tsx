import { Instagram } from "lucide-react" // <--- Importamos el icono
import { WaveDivider } from "./WaveDivider"

const TOP_WAVE = "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,208C672,192,768,128,864,122.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
const BOTTOM_WAVE = "M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,192C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

interface FooterSectionProps {
  topWaveColor?: string;
}

export function FooterSection({ topWaveColor = "text-[#E8DED5]" }: FooterSectionProps) {
  return (
    <footer className="relative">
      <div className="relative min-h-[500px] md:min-h-[600px]">
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
             <img
              src="/images/footer-nature.jpg"
              alt="Peaceful nature scene"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark-brown/40" />
        </div>

        {/* Ola Superior Dinámica */}
        <WaveDivider path={TOP_WAVE} className={topWaveColor} position="top" />

        {/* Quote Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
          <blockquote className="max-w-3xl text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed italic text-balance drop-shadow-md">
              {`"When I let go of what I am, I become what I might be."`}
            </p>
            <cite className="block mt-6 font-cursive text-xl md:text-2xl text-cream/90 not-italic">
              — Lao Tzu
            </cite>
          </blockquote>
        </div>

        {/* Ola Inferior (Cream) */}
        <WaveDivider path={BOTTOM_WAVE} className="text-cream" position="bottom" />
      </div>

      {/* --- BOTTOM FOOTER --- */}
      <div className="bg-cream py-10 px-6 border-t border-dark-brown/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* IZQUIERDA: Grupo de Logos */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
             {/* Logo 1: Yo Soy Vida (Usamos el mismo que el Navbar) */}
             <img 
               src="/images/logo.png" 
               alt="Yo Soy Vida Logo" 
               className="h-12 w-auto object-contain" 
             />

             {/* Separador vertical (visible solo en desktop) */}
             <div className="hidden sm:block h-8 w-px bg-dark-brown/20"></div>

             {/* Logo 2: Cliente / Partner (Necesitas subir esta imagen) */}
             <img 
               src="/images/logo-client.png" // <--- Asegúrate de tener esta imagen
               alt="Partner Logo" 
               // grayscale opacity-80 para que no compita, hover para color real
               className="h-16 md:h-20 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
             />
          </div>

          {/* DERECHA: Instagram + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
             {/* Link a Instagram */}
             <a 
               href="https://instagram.com/TU_USUARIO" // <--- Pon aquí el link real
               target="_blank" 
               rel="noopener noreferrer"
               className="group flex items-center gap-2 text-dark-brown hover:text-terracotta transition-colors duration-300"
             >
                <div className="p-2 rounded-full bg-dark-brown/5 group-hover:bg-terracotta/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-sans text-sm font-bold tracking-wider uppercase">Síguenos en Instagram</span>
             </a>

             {/* Copyright */}
             <p className="font-sans text-sm text-dark-brown/50">
               © {new Date().getFullYear()} Santosha Coaching. All rights reserved.
             </p>
          </div>

        </div>
      </div>
    </footer>
  )
}