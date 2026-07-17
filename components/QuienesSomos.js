import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      
      {/* Sutil detalle decorativo de fondo */}
      <div className="absolute -left-16 bottom-0 w-64 h-64 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Bloque Izquierdo - Imagen Corporativa */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px]">
            {/* Fondo de sombra decorativo con el verde de la marca */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7aaf43]/10 to-[#434bb2]/5 rounded-[2.5rem] blur-2xl -z-10"></div>
            
            {/* Contenedor principal de la imagen con ligera rotación estética */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white relative -rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/2.png"
                alt="Instalaciones modernas y consulta médica de Vital Salud"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />
              {/* Degradado superpuesto muy suave abajo para dar profundidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Bloque Derecho - Contenido de Texto */}
          <div className="space-y-6 lg:max-w-xl">
            {/* Título "Quiénes Somos" con separación suavizada y equilibrada */}
            <h2 className="text-sm sm:text-base font-extrabold tracking-wider text-[#434bb2] uppercase">
              Quiénes Somos
            </h2>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Comprometidos con la excelencia médica y el <span className="text-[#7aaf43]">trato humano</span>
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Somos un centro médico especializado en medicina preventiva y diagnóstica, comprometido con la detección temprana y el cuidado integral de tu salud. Nuestra atención se fundamenta en los más altos estándares de seguridad, calidad y confianza, para que tú y tu familia reciban el cuidado que merecen.
            </p>
            
            {/* Listado con iconos actualizados */}
            <ul className="space-y-4 pt-4">
              {[
                'Infraestructura moderna y equipamiento de última generación.', 
                'Atención personalizada y sin tiempos de espera prolongados.', 
                'Convenios con las principales aseguradoras.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <CheckCircle className="h-5.5 w-5.5 text-[#7aaf43] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}