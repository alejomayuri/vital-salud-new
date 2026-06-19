"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const servicios = [
  { id: 1, name: "Medicina General", desc: "Evaluación integral de tu salud, diagnóstico preciso y planes de prevención personalizados para toda la familia." },
  { id: 2, name: "Pediatría Integral", desc: "Cuidado especializado para los más pequeños, desde el nacimiento hasta la adolescencia, monitoreando su crecimiento." },
  { id: 3, name: "Cardiología Avanzada", desc: "Chequeos cardiológicos preventivos, electrocardiogramas y control de la presión arterial con tecnología de punta." },
  { id: 4, name: "Ginecología y Obstetricia", desc: "Acompañamiento en todas las etapas de la mujer, control prenatal y prevención ginecológica integral." },
  { id: 5, name: "Nutrición y Dietética", desc: "Planes alimenticios a la medida para alcanzar tus objetivos de salud y consolidar hábitos saludables duraderos." },
  { id: 6, name: "Psicología Clínica", desc: "Espacio seguro de apoyo emocional y herramientas prácticas para el manejo del estrés, ansiedad y bienestar mental." },
];

export default function Servicios() {
  const scrollContainerRef = useRef(null);
  
  // Estados para controlar el arrastre con el mouse
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Al hacer click con el mouse
  const handleMouseDown = (e) => {
    setIsDown(true);
    // Guardamos la posición inicial del mouse y el scroll actual
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Al soltar el click o salir del contenedor
  const handleMouseUpOrLeave = () => {
    setIsDown(false);
  };

  // Mientras se mueve el mouse manteniendo el click presionado
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    // Multiplicamos por 1.5 o 2 si quieres que el scroll sea más rápido/sensible
    const walk = (x - startX) * 1.5; 
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold tracking-wider text-[#434bb2] uppercase">
              Nuestras Especialidades
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Servicios médicos integrales
            </h3>
          </div>
          
          <p className="text-slate-400 text-xs font-semibold">
            Haz clic y arrastra o desliza para ver más →
          </p>
        </div>

        {/* Contenedor del Scroll Horizontal Interactivo */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseUp={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
          className={`w-full overflow-x-auto scrollbar-none flex gap-6 pb-8 transition-colors duration-150 ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
          // Quitamos snap-x temporalmente al arrastrar para que el movimiento sea libre y suave
          style={{ scrollSnapType: isDown ? "none" : "x mandatory" }}
        >
          {servicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="w-[280px] sm:w-[320px] shrink-0 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between group hover:border-indigo-100 pointer-events-auto"
            >
              <div>
                {/* Indicador Numérico */}
                <div className="w-12 h-12 rounded-xl bg-indigo-50/60 text-[#434bb2] flex items-center justify-center font-bold text-base mb-6 group-hover:bg-[#434bb2] group-hover:text-white transition-all duration-300">
                  {servicio.id < 10 ? `0${servicio.id}` : servicio.id}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#434bb2] transition-colors">
                  {servicio.name}
                </h4>
                
                <p className="text-slate-600 text-sm leading-relaxed pointer-events-none">
                  {servicio.desc}
                </p>
              </div>
              
              {/* Enlace Saber Más */}
              <div className="pt-6">
                <a 
                  href="#contacto" 
                  className="text-sm font-bold text-[#7aaf43] hover:text-[#434bb2] inline-flex items-center gap-1 group/link transition-colors"
                >
                  Saber más 
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}