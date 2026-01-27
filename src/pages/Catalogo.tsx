import { MessageCircle, Star } from "lucide-react"
import { FooterSection } from "../components/FooterSection"
import { WaveDivider } from "../components/WaveDivider"

const WHATSAPP_NUMBER = "56912345678" // Configura tu número aquí

// Olas específicas para esta página
// SVG6 (Hero -> Favoritos): Transición hacia color Muted (#E8DED5)
const HERO_WAVE = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

// SVG7 (Favoritos -> Todos): Transición hacia color Cream (#F9F4EF)
const MID_WAVE = "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,208C672,192,768,128,864,122.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"


const topProducts = [
  { id: 1, name: "Esencia Floral Calma", price: "$12.990", image: "/images/products/product-1.jpg", bestseller: true },
  { id: 2, name: "Té Herbal Serenidad", price: "$8.990", image: "/images/products/product-2.jpg", bestseller: true },
  { id: 3, name: "Aceite Corporal Bienestar", price: "$18.990", image: "/images/products/product-5.jpg", bestseller: true },
  { id: 4, name: "Cristales Sanadores", price: "$22.990", image: "/images/products/product-7.jpg", bestseller: true },
  { id: 5, name: "Vela Aromática Paz", price: "$14.990", image: "/images/products/product-4.jpg", bestseller: true },
]

const allProducts = [
  { id: 11, name: "Aceite Esencial Eucalipto", price: "$10.990", image: "/images/products/product-1.jpg" },
  { id: 12, name: "Té Relajante Noche", price: "$8.490", image: "/images/products/product-2.jpg" },
  { id: 13, name: "Jabón de Avena", price: "$5.990", image: "/images/products/product-3.jpg" },
  { id: 14, name: "Vela de Soya Rosa", price: "$12.990", image: "/images/products/product-4.jpg" },
  { id: 15, name: "Aceite de Almendras", price: "$16.990", image: "/images/products/product-5.jpg" },
  { id: 16, name: "Sahumerio Palo Santo", price: "$7.990", image: "/images/products/product-6.jpg" },
  { id: 17, name: "Amatista Natural", price: "$28.990", image: "/images/products/product-7.jpg" },
  { id: 18, name: "Bálsamo Labial Natural", price: "$4.990", image: "/images/products/product-8.jpg" },
]

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: string
    image: string
    bestseller?: boolean
  }
  featured?: boolean
}

function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <div className={`group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? "ring-2 ring-terracotta ring-offset-2 ring-offset-muted" : "border border-black/5"}`}>
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.bestseller && (
          <div className="absolute top-3 left-3 bg-terracotta text-cream text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
            <Star className="w-3 h-3 fill-current" />
            <span>FAVORITO</span>
          </div>
        )}
        {/* Overlay rápido al hacer hover */}
        <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/10 transition-colors duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-lg text-dark-brown mb-1 line-clamp-2 leading-tight group-hover:text-earthy-brown transition-colors">
          {product.name}
        </h3>
        <p className="font-sans text-earthy-brown font-bold text-lg mb-4">{product.price}</p>
        
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa el producto: ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-[#128C7E] transition-all duration-300 w-full hover:shadow-md active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar</span>
        </a>
      </div>
    </div>
  )
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-cream animate-fade-in">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
        {/* Imagen de Fondo (Reutilizamos la de productos o una nueva de textura) */}
        <div className="absolute inset-0">
             <img 
               src="/images/hero-lifestyle2.jpg" // O una imagen de "ingredientes" o "botellas"
               alt="Productos Naturales"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-dark-brown/40 backdrop-blur-[2px]" />
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <span className="block font-sans uppercase tracking-[0.2em] text-cream/80 text-sm mb-4 animate-fade-in">
              Bienestar & Armonía
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-6 drop-shadow-lg">
              Nuestros Productos
            </h1>
            <p className="font-sans text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
               Una cuidadosa selección de elementos naturales para acompañar tu proceso de sanación, limpieza y conexión espiritual.
            </p>
        </div>

        {/* OLA DE TRANSICIÓN (Hacia sección beige "Favoritos") */}
        <WaveDivider path={HERO_WAVE} className="text-[#E8DED5]" />
      </section>

      {/* --- SECCIÓN FAVORITOS (Fondo Beige/Muted) --- */}
      <section className="bg-[#E8DED5] py-16 md:py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-12">
            <div className="p-3 bg-terracotta/20 rounded-full">
               <Star className="w-8 h-8 text-terracotta fill-terracotta" />
            </div>
            <div className="text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-4xl text-dark-brown">Los Favoritos</h2>
                <p className="text-dark-brown/70 text-sm">Lo más amado por nuestra comunidad</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>

        {/* OLA DE TRANSICIÓN (Hacia sección Cream "Todos") */}
        <WaveDivider path={MID_WAVE} className="text-cream" />
      </section>

      {/* --- SECCIÓN TODOS LOS PRODUCTOS (Fondo Cream) --- */}
      <section className="bg-cream py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-brown mb-8 pl-4 border-l-4 border-earthy-brown">
            Catálogo Completo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <FooterSection topWaveColor="text-cream" />
    </main>
  )
}