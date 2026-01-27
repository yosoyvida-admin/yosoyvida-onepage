/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F4EF",
        terracotta: "#D08C8C",
        "dark-brown": "#4A3B32",
        "earthy-brown": "#8B5E3C",
        "accent-orange": "#E67E22",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Para títulos elegantes
        sans: ['"Lato"', 'sans-serif'],        // Para lectura
        cursive: ['"Dancing Script"', 'cursive'], // Para firmas/detalles
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-lifestyle.jpg')", // Ajusta la ruta según necesites
      }
    },
  },
  plugins: [],
}