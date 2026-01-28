import { Link } from "react-router-dom"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WaveDivider } from "./WaveDivider"

// SVG6 (Ola Inferior)
const BOTTOM_WAVE = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

// SVG1 (Ola Superior)

const products = [
  { id: 1, name: "Agua de Mar", price: "$7.000", image: "/images/products/aguademar.png" },
  { id: 2, name: "DMSO Líquido 120ml", price: "$30.000", image: "/images/products/dmso.png" },
  { id: 3, name: "Trementina Vegetal 120ml", price: "$24.000", image: "/images/products/trementina.png" },
  { id: 4, name: "CDS Profesional Vidrio 500ml", price: "$20.000", image: "/images/products/cdsprofesional.png" },
]

const WHATSAPP_NUMBER = "56912345678" 

export function ProductsSection() {
  return (
    // CAMBIO 1: Fondo 'bg-terracotta' para darle vida y contraste
    <section className="bg-terracotta py-16 md:py-24 px-6 md:px-12 relative text-cream">
      
      {/* CAMBIO 2: Ola Superior BEIGE 
         (Se conecta visualmente con el final de la sección 'Sobre Mí')
      <WaveDivider path={TOP_WAVE} className="text-[#E8DED5]" position="top" />
      */}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            Botiquín Natural
          </h2>
          <p className="font-sans text-lg text-cream/80 max-w-2xl mx-auto">
            Productos naturales seleccionados para acompañar tu proceso de sanación y bienestar
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                {/* Textos en dark-brown para leerse bien sobre la tarjeta blanca */}
                <h3 className="font-serif text-sm md:text-base text-dark-brown mb-1 line-clamp-2 min-h-[2.5em]">
                  {product.name}
                </h3>
                <p className="font-sans text-earthy-brown font-medium mb-4">{product.price}</p>
                
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa el producto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 bg-[#25D366] text-white text-xs md:text-sm px-3 py-2.5 rounded-full hover:bg-[#128C7E] transition-colors duration-300 w-full justify-center shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/catalogo"
            // Botón con alto contraste: Dark Brown sobre fondo Terracotta
            className="inline-flex items-center gap-3 bg-dark-brown text-cream border border-cream/20 font-sans uppercase tracking-widest text-sm md:text-base px-8 md:px-10 py-4 hover:bg-cream hover:text-dark-brown transition-all duration-300 rounded-full shadow-lg"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* CAMBIO 3: Ola Inferior BEIGE
         (Se conecta visualmente con el inicio de 'CoursesSection') */}
      <WaveDivider path={BOTTOM_WAVE} className="text-[#E8DED5]" position="bottom" />
    </section>
  )
}