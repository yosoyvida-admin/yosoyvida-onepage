import { useEffect, useState } from "react";
import { createPortal } from "react-dom"; 
import { X, MessageCircle, Package, CheckCircle } from "lucide-react";
import type { Product } from "../data/product";
import { SITE_CONFIG } from "../config/site";
import { ImageWithSkeleton } from "./ui/ImageWithSkeleton"; // 👈 1. IMPORTADO

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const BRAND_LOGO = "/images/cropped-Logo.png"; 

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !product || !mounted) return null;

  const paragraphs = product.description.split('\n');

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-brown/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row overflow-hidden animate-scale-up z-[10000]">
        
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-white/90 backdrop-blur rounded-full hover:bg-gray-100 transition-colors shadow-md border border-gray-100"
        >
          <X className="w-5 h-5 text-dark-brown" />
        </button>

        {/* --- 1. SECCIÓN IMAGEN --- */}
        <div className="w-full md:w-2/5 h-56 md:h-auto bg-[#F9F4EF] flex items-center justify-center p-6 shrink-0 relative group">
           
           {product.type !== 'book' && (
             <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <img 
                  src={BRAND_LOGO} 
                  alt="Pro Natural" 
                  className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md opacity-90"
                />
             </div>
           )}

           {/* 👇 2. AHORA SÍ: USAMOS EL SKELETON */}
           <ImageWithSkeleton 
             src={product.image} 
             alt={product.name} 
             className="w-full h-full object-contain drop-shadow-xl"
           />
        </div>

        {/* --- 2. CONTENEDOR DERECHO (Texto + Botón) --- */}
        <div className="flex flex-col w-full md:w-3/5 h-full min-h-0 bg-white">
            
            {/* A. ÁREA SCROLLABLE (Texto) */}
            <div className="flex-1 overflow-y-auto p-5 md:p-8 overscroll-contain">
                
                <div className="border-b border-gray-100 pb-3 mb-4">
                    <span className="text-terracotta text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 block">
                    {product.type === 'book' ? 'Libro Recomendado' : 'Producto Natural'}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-dark-brown mb-1 leading-tight">
                    {product.name}
                    </h2>
                    <span className="text-lg md:text-xl font-bold text-earthy-brown">{product.price}</span>
                </div>
                
                {product.technicalInfo && (
                    <div className="bg-earthy-brown/5 p-3 rounded-lg mb-5 flex gap-3 items-start border border-earthy-brown/10">
                        <Package className="w-4 h-4 text-earthy-brown flex-shrink-0 mt-0.5" />
                        <p className="text-xs md:text-sm text-dark-brown font-medium uppercase tracking-wide leading-relaxed">
                        {product.technicalInfo}
                        </p>
                    </div>
                )}

                <div className="space-y-3 mb-4 text-dark-brown/80 font-sans text-sm leading-relaxed">
                    {paragraphs.map((line, index) => (
                    line.trim() === "" ? <br key={index}/> : 
                    <div key={index} className="flex gap-2 items-start">
                        {line.includes(':') && <CheckCircle className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />}
                        <p className={line.includes('En resumen') ? "font-bold text-dark-brown italic bg-cream/50 p-2 rounded-md w-full border-l-2 border-terracotta" : ""}>
                            {line}
                        </p>
                    </div>
                    ))}
                </div>

                {product.formats && product.formats.length > 0 && (
                    <div className="mb-2">
                    <h4 className="font-serif text-dark-brown text-sm mb-2 border-l-4 border-terracotta pl-2">
                        Opciones Disponibles
                    </h4>
                    <div className="grid gap-2">
                        {product.formats.map((fmt, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-50 p-2 px-3 rounded-lg border border-gray-100">
                            <span className="text-xs md:text-sm font-medium text-dark-brown">{fmt.name}</span>
                            <span className="text-xs md:text-sm font-bold text-earthy-brown">{fmt.price}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
            </div>

            {/* B. ÁREA BOTÓN (Sticky al fondo) */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <a
                    href={SITE_CONFIG.whatsappLink(`Hola! Me interesa: ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium py-3 rounded-xl hover:bg-[#128C7E] transition-colors w-full shadow-lg active:scale-95"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Pedir por WhatsApp</span>
                </a>
            </div>

        </div>
      </div>
    </div>,
    document.body
  );
}