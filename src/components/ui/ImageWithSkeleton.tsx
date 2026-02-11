import { useState, useEffect, useRef } from "react";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function ImageWithSkeleton({ src, alt, className, ...props }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 🔍 CORRECCIÓN CLAVE:
    // Verificamos si la imagen ya está "completa" en el navegador (caché).
    // Si es así, forzamos el estado a 'cargado' inmediatamente.
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      {/* 1. SKELETON (Cargando...) */}
      {/* Usamos renderizado condicional (!isLoaded &&) para eliminarlo del DOM 
          apenas cargue la imagen, cortando la animación de raíz. */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse z-10 flex items-center justify-center">
             <svg className="w-10 h-10 text-gray-300/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
             </svg>
        </div>
      )}

      {/* 2. IMAGEN REAL */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}