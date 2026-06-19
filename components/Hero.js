import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-indigo-50/40 via-white to-white py-12 lg:py-32">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#7aaf43]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#434bb2]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* Bloque de Texto (Izquierda) */}
        {/* Usamos flex y flex-col para poder ordenar los elementos internamente en móviles */}
        <div className="flex flex-col space-y-6 lg:space-y-8 max-w-2xl order-1">
          <div className="inline-flex self-start items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 text-sm font-bold text-[#434bb2]">
            <span className="w-2 h-2 rounded-full bg-[#7aaf43] animate-pulse"></span>
            Atención médica de vanguardia
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Tu salud y bienestar son nuestra <span className="text-[#7aaf43]">prioridad</span>
          </h1>

          {/* COMPONENTE DE IMAGEN EXCLUSIVO PARA MÓVILES */}
          {/* Se renderiza aquí en móviles (order-2 interno) y se oculta en lg (pantallas grandes) */}
          <div className="block lg:hidden w-full h-[340px] sm:h-[400px] bg-gradient-to-tr from-[#434bb2] to-[#7aaf43] rounded-2xl shadow-xl overflow-hidden relative border-4 border-white my-2">
            <Image 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
              alt="Equipo de médicos de Vital Salud"
              fill
              className="object-cover mix-blend-multiply opacity-85 contrast-110 object-top"
              sizes="(max-width: 1024px) 100vw"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
          </div>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            La salud es el motor de una vida feliz, en vital salud center creamos un espacio integral de medicina preventiva donde detectamos a tiempo anomalías en tu salud, te brindamos tratamiento oportuno con los mejores médicos y tecnología de vanguardia, te brindamos el cuidado de tu salud con seguridad, calidad y la confianza que necesitas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#servicios" 
              className="inline-flex items-center justify-center bg-[#7aaf43] hover:bg-[#434bb2] text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#7aaf43]/20 group uppercase tracking-wider text-sm text-center"
            >
              Explorar Servicios
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-7 py-4 rounded-xl font-bold transition-colors text-sm uppercase tracking-wider text-center"
            >
              Contactar Ahora
            </a>
          </div>

          {/* Tarjeta de teléfono para móviles colocada estratégicamente al final del texto */}
          <div className="flex lg:hidden bg-white/80 border border-slate-100 p-4 rounded-xl items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#434bb2] flex items-center justify-center shrink-0">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Central Telefónica</p>
              <p className="text-lg font-extrabold text-[#434bb2] tracking-tight">+1 (555) 0199-234</p>
            </div>
          </div>
        </div>
        
        {/* Bloque de Imagen Ampliado para DESKTOP (Oculto en móvil) */}
        <div className="relative justify-center lg:justify-end hidden lg:flex order-2">
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#434bb2]/15 to-[#7aaf43]/15 rounded-3xl blur-3xl -z-10"></div>
          
          <div className="w-[500px] h-[580px] bg-gradient-to-tr from-[#434bb2] to-[#7aaf43] rounded-3xl shadow-2xl overflow-hidden relative rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
            <Image 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
              alt="Equipo de médicos de Vital Salud"
              fill
              className="object-cover mix-blend-multiply opacity-85 contrast-110 object-top"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100/50 flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#434bb2] flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Central Telefónica</p>
                <p className="text-xl font-extrabold text-[#434bb2] tracking-tight">+1 (555) 0199-234</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}