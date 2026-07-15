"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Mail, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsappButton";

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

  const phoneNumber = "+51957045728"; 
  const message = encodeURIComponent("Hola, me gustaría recibir información sobre las citas y servicios médicos.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4 flex justify-center items-center">
                <Link href="/" className="w-[300px] h-[100px] relative">
                <Image 
                    src="/logo-w.png" 
                    alt="Vital Salud Logo" 
                    fill
                    className="object-contain" 
                    priority 
                />
                </Link>
            </div>
            
            <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#especialistas" className="hover:text-white transition-colors">Especialistas</a></li>
                <li><a href="#diferencial" className="hover:text-white transition-colors">Planes Diferenciales</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
            </div>

            <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legales</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a></li>
            </ul>
            </div>

            {/* <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Desarrollado por</h4>
            <p className="text-sm">
                Diseño y desarrollo web a cargo de <span className="text-teal-400 font-medium">Pataki Landing Studio</span>.
            </p>
            </div> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/60 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Vital Salud. Todos los derechos reservados.
        </div>
        <WhatsAppButton /> {/* 2. Integración aquí */}  
        </footer>
  );
}