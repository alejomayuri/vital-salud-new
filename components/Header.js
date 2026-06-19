"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Mail, Phone } from "lucide-react"; // Añadimos Phone aquí

// Font Awesome - Marcas
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faInstagram, 
  faWhatsapp, 
  faTiktok 
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-50 shadow-sm shadow-[#7aaf43]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Contenedor del Logo */}
        <div className="flex items-center shrink-0 w-[230px] h-[66px] md:w-[300px] md:h-[86px] relative">
          <a href="#inicio" onClick={closeMenu} className="w-full h-full block relative">
            <Image 
              src="/logo-b.png" 
              alt="Vital Salud Logo" 
              fill
              className="object-contain" 
              priority 
            />
          </a>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-base text-slate-800">
          <a href="#nosotros" className="relative py-2 transition-colors hover:text-[#434bb2] group">
            Quiénes Somos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#434bb2] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicios" className="relative py-2 transition-colors hover:text-[#434bb2] group">
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#434bb2] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contacto" className="relative py-2 transition-colors hover:text-[#434bb2] group">
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#434bb2] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Zona de Acción Desktop (Teléfono + Botón) */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="tel:+15550199234" 
            className="flex items-center gap-2 font-bold text-slate-800 hover:text-[#434bb2] transition-colors"
          >
            <Phone className="h-5 w-5 text-[#434bb2] stroke-[2.5]" />
            <span>+1 (555) 019-9234</span>
          </a>
          <a 
            href="#contacto" 
            className="bg-[#7aaf43] hover:bg-[#434bb2] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg shadow-[#7aaf43]/15 text-sm uppercase tracking-wider"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-slate-800 hover:text-[#434bb2] focus:outline-none rounded-lg hover:bg-slate-50 transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white absolute top-[84px] left-0 w-full shadow-xl z-50 animate-in fade-in duration-150">
          <nav className="flex flex-col p-6 space-y-4 font-bold text-lg text-slate-800">
            <a href="#nosotros" onClick={closeMenu} className="hover:text-[#434bb2] hover:bg-slate-50 p-3 rounded-xl transition-all">
              Quiénes Somos
            </a>
            <a href="#servicios" onClick={closeMenu} className="hover:text-[#434bb2] hover:bg-slate-50 p-3 rounded-xl transition-all">
              Servicios
            </a>
            <a href="#contacto" onClick={closeMenu} className="hover:text-[#434bb2] hover:bg-slate-50 p-3 rounded-xl transition-all">
              Contacto
            </a>
            
            <div className="pt-4 px-3 space-y-4">
              {/* Teléfono Móvil Destacado */}
              <a 
                href="tel:+15550199234" 
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 text-[#434bb2] px-5 py-3.5 rounded-xl font-bold transition-all text-base border border-slate-100"
              >
                <Phone className="h-5 w-5 stroke-[2.5]" />
                +1 (555) 019-9234
              </a>

              {/* Botón de Cita Móvil */}
              <a 
                href="#contacto" 
                onClick={closeMenu} 
                className="block text-center bg-[#7aaf43] hover:bg-[#434bb2] text-white px-5 py-3.5 rounded-xl font-bold transition-all text-sm uppercase tracking-wider shadow-md shadow-[#7aaf43]/10"
              >
                Agendar Cita
              </a>

              {/* SECCIÓN DE REDES SOCIALES */}
              <div className="flex items-center justify-center gap-6 pt-5 border-t border-slate-100">
                <a href="mailto:contacto@vitalsalud.com" className="text-[#434bb2] hover:opacity-80 transition-opacity p-2 flex items-center justify-center" aria-label="Email">
                  <Mail className="h-6 w-6 stroke-[2.5]" />
                </a>
                <a href="https://wa.me/15550199234" target="_blank" rel="noopener noreferrer" className="text-[#434bb2] hover:text-[#7aaf43] transition-colors p-2" aria-label="WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#434bb2] hover:opacity-80 transition-opacity p-2" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} className="h-5.5 w-5.5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#434bb2] hover:text-pink-600 transition-colors p-2" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="h-5.5 w-5.5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#434bb2] hover:text-black transition-colors p-2" aria-label="TikTok">
                  <FontAwesomeIcon icon={faTiktok} className="h-5.5 w-5.5" />
                </a>
              </div>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}