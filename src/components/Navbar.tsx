import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#sobre-mi", label: "Sobre Mí", id: "sobre-mi" },
  { href: "/#terapias", label: "Terapias", id: "terapias" },
  { href: "/#cursos", label: "Cursos", id: "cursos" },
  { href: "/catalogo", label: "Catálogo", id: "catalogo" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (location.pathname === "/") {
        const sections = navLinks.map(link => link.id).filter(id => id !== "home" && id !== "catalogo")
        let current = "home"
        
        if (window.scrollY < 100) {
            current = "home"
        } else {
            for (const section of sections) {
              const element = document.getElementById(section)
              if (element) {
                const rect = element.getBoundingClientRect()
                if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
                  current = section
                  break 
                }
              }
            }
        }
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  useEffect(() => {
      if (location.pathname === '/catalogo') {
          setActiveSection('catalogo')
      } else if (location.pathname === '/' && window.scrollY < 100) {
          setActiveSection('home')
      }
  }, [location.pathname])

  // --- AQUÍ ESTÁ LA MAGIA ---
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Caso 1: Clic en Home o Logo ("/")
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Caso 2: Clic en Ancla (/#seccion)
    else if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-cream/40 backdrop-blur-md border-white/20 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo con acción de ir arriba */}
          <Link 
            to="/" 
            onClick={() => handleNavClick("/")} // <--- AGREGADO AQUÍ
            className="font-cursive text-2xl md:text-3xl text-dark-brown relative z-50 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
                src="/images/logo.png"
                alt="Yo Soy Vida Logo"
                className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-sans text-sm uppercase tracking-widest transition-colors duration-300 py-2 group ${
                    isActive 
                      ? "text-terracotta font-bold"
                      : isScrolled ? "text-dark-brown hover:text-earthy-brown" : "text-cream hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-terracotta transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                  }`} />
                </Link>
              )
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled || isMobileMenuOpen ? "text-dark-brown" : "text-cream"
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-cream/95 backdrop-blur-xl pt-24 px-6 flex flex-col items-center gap-8 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-sans text-xl uppercase tracking-widest transition-colors ${
                  activeSection === link.id ? "text-terracotta font-bold" : "text-dark-brown"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}