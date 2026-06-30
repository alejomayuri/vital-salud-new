import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import QuienesSomos from '@/components/QuienesSomos';
import Servicios from '@/components/Servicios';
import Especialistas from '@/components/Especialistas';
import PlanesDiferencial from '@/components/PlanesDiferencial';
import Contacto from '@/components/Contacto';
import WhatsAppButton from '@/components/WhatsappButton';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <Hero />
      <QuienesSomos />
      <Servicios />
      <Especialistas />
      <PlanesDiferencial />
      <Contacto />
      
      {/* 6. FOOTER */}
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
      </footer>
      <WhatsAppButton /> {/* 2. Integración aquí */}      
    </div>
  );
}