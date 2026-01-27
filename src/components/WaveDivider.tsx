interface WaveDividerProps {
  path: string;
  className?: string; // Para colores como text-cream, text-terracotta
  position?: 'top' | 'bottom';
  height?: string;
}

export function WaveDivider({ path, className = "text-cream", position = "bottom", height = "h-[60px] md:h-[120px]" }: WaveDividerProps) {
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${className} ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'}`}
    >
      <svg
        className={`relative block w-[calc(100%+1.3px)] ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d={path}
        />
      </svg>
    </div>
  )
}