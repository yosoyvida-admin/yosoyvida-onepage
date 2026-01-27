
export function BioSection() {
  return (
    <section id="sobre-mi" className="bg-cream py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Agregado 'items-center' para centrar verticalmente imagen y texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* FOTO 1: Ahora permitimos que sea más grande */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Cambiado max-w-md a max-w-lg (más grande) y w-full */}
            <div className="relative w-full max-w-lg aspect-[3/4]">
              <img
                src="/images/bio-transparent.png" 
                alt="Retrato de la coach"
                className="w-full h-full object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Texto: Ahora tiene más presencia */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-brown leading-tight text-balance">
              Underneath worry, desire...
            </h2>
            
            <div className="space-y-6 text-dark-brown/90 font-sans text-lg md:text-xl leading-relaxed">
                <p>
                  It trusts, it knows joy. There is a place within you that has never been wounded, 
                  that is incapable of suffering. A place of deep stillness that remembers your true nature.
                </p>
                <p>
                  This is the essence of contentment—not the absence of challenges, but the presence 
                  of peace regardless of circumstances.
                </p>
            </div>

            <div className="pt-6 border-t border-earthy-brown/20 flex items-center gap-4">
              <span className="h-px w-12 bg-earthy-brown"></span>
              <p className="font-cursive text-3xl text-earthy-brown italic">
                Santosha means contentment
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}