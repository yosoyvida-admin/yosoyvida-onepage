import { Link } from "react-router-dom"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WaveDivider } from "./WaveDivider"

//SVG 6
const WAVE_PATH = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

const products = [
  { id: 1, name: "Esencia Floral Calma", price: "$12.990", image: "/images/products/product-1.jpg" },
  { id: 2, name: "Té Herbal Serenidad", price: "$8.990", image: "/images/products/product-2.jpg" },
  { id: 3, name: "Jabón Natural Lavanda", price: "$6.990", image: "/images/products/product-3.jpg" },
  { id: 4, name: "Vela Aromática Paz", price: "$14.990", image: "/images/products/product-4.jpg" },
  { id: 5, name: "Aceite Corporal Bienestar", price: "$18.990", image: "/images/products/product-5.jpg" },
  { id: 6, name: "Incienso Natural", price: "$5.990", image: "/images/products/product-6.jpg" },
  { id: 7, name: "Cristales Sanadores", price: "$22.990", image: "/images/products/product-7.jpg" },
  { id: 8, name: "Bálsamo Herbal", price: "$11.990", image: "/images/products/product-8.jpg" },
]

const WHATSAPP_NUMBER = "56912345678" // ¡Cambia esto por tu número real!

export function ProductsSection() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-4">
            Botiquín Natural
          </h2>
          <p className="font-sans text-lg text-dark-brown/70 max-w-2xl mx-auto">
            Productos naturales seleccionados para acompañar tu proceso de sanación y bienestar
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-sm md:text-base text-dark-brown mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="font-sans text-earthy-brown font-medium mb-3">{product.price}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa el producto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs md:text-sm px-3 py-2 rounded-full hover:bg-[#128C7E] transition-colors duration-300 w-full justify-center"
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
            className="inline-flex items-center gap-3 bg-earthy-brown text-cream font-sans uppercase tracking-widest text-sm md:text-base px-8 md:px-10 py-4 hover:bg-dark-brown transition-colors duration-300"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <WaveDivider path={WAVE_PATH} className="text-[#E8DED5]" />
    </section>
  )
}