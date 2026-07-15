"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const servicios = [
  { id: 1, name: "Laboratorio de Patología", 
    desc: "Análisis especializado de tejidos y células recolectadas mediante biopsias o citologías. Su función principal es estudiar las muestras bajo el microscopio para diagnosticar enfermedades complejas, determinar si una lesión es benigna o maligna y guiar al médico tratante hacia el mejor tratamiento.",
    slug: "servicios/laboratorio-de-patologia"
  },
  { id: 2, name: "Biopsias", 
    desc: "Procedimiento médico mínimamente invasivo que consiste en la extracción de una pequeña muestra de tejido o células del cuerpo para ser analizada en el laboratorio de patología. Es la herramienta definitiva para confirmar diagnósticos precisos en nódulos, órganos o lesiones sospechosas." ,
    slug: "servicios/biopsias"
  },
  { id: 3, name: "Exámenes de Laboratorio Clínico", 
    desc: "Pruebas esenciales de sangre, orina y otros fluidos corporales que permiten evaluar el estado general de tu salud. Ayudan a detectar a tiempo condiciones como anemia, diabetes, infecciones o alteraciones en los órganos, sirviendo de base para cualquier control médico." ,
    slug: "servicios/examenes-de-laboratorio-clinico"
  },
  { id: 4, name: "Chequeos Preventivos", 
    desc: "Evaluaciones médicas integrales diseñadas para pacientes sanos o con factores de riesgo, cuyo objetivo es detectar enfermedades en etapas iniciales antes de que presenten síntomas. Incluyen consultas, exámenes de laboratorio e imágenes adaptadas a tu edad y estilo de vida." ,
    slug: "servicios/chequeos-preventivos"
  },
  { id: 5, name: "Medicina General", 
    desc: "Tu primer punto de contacto con la salud. El médico general evalúa de forma integral al paciente, diagnostica y trata enfermedades comunes, realiza controles de rutina y, de ser necesario, te deriva de manera oportuna con el especialista indicado." ,
    slug: "servicios/medicina-general"
  },
  { id: 6, name: "Ginecología", 
    desc: "Especialidad dedicada al cuidado de la salud del sistema reproductor femenino y las mamas a lo largo de todas las etapas de la vida. Abarca desde la prevención mediante el Papanicolaou y la detección del VPH, hasta el control de trastornos hormonales y planificación familiar." ,
    slug: "servicios/ginecologia"
  },
  { id: 7, name: " Cardiología", 
    desc: "Especialidad enfocada en la prevención, diagnóstico y tratamiento de las enfermedades del corazón y los vasos sanguíneos. Es clave para el control de la hipertensión arterial, evaluación del riesgo cardiovascular y el cuidado de la salud de tu sistema circulatorio." ,
    slug: "servicios/cardiologia"
  },
  { id: 8, name: "Gastroenterología", 
    desc: "Especialidad médica encargada del estudio y tratamiento de las enfermedades del aparato digestivo, que incluye el esófago, estómago, intestinos, hígado y páncreas. Ideal para el control de la gastritis, reflujo, colon irritable y prevención de neoplasias digestivas." ,
    slug: "servicios/gastroenterologia"
  },
  { id: 9, name: "Test de Aliento", 
    desc: "Prueba rápida, segura y no invasiva que se utiliza principalmente para detectar la presencia de la bacteria Helicobacter pylori en el estómago (causante de gastritis y úlceras) o para evaluar intolerancias alimentarias y sobrecrecimiento bacteriano." ,
    slug: "servicios/test-de-aliento"
  },
  { id: 10, name: "Imágenes Médicas", 
    desc: "Servicio de diagnóstico avanzado que utiliza tecnología como ecografías, para obtener imágenes del interior del cuerpo en tiempo real. Permite visualizar órganos, tejidos y estructuras óseas de forma precisa y sin dolor." ,
    slug: "servicios/imagenes-medicas"
  },
  { id: 11, name: "Inmunología y Alergia", 
    desc: "Especialidad dedicada al diagnóstico y tratamiento de las alteraciones del sistema inmunitario. Abarca el manejo de alergias alimentarias, respiratorias o cutáneas, así como el estudio de enfermedades autoinmunes donde las defensas del cuerpo reaccionan de forma unusual." ,
    slug: "servicios/inmunologia-y-alergia"
  },
  { id: 12, name: "Oncología", 
    desc: "Área médica especializada en la prevención, diagnóstico, estadificación y tratamiento del cáncer. Trabaja de la mano con patología y laboratorio clínico para ofrecer terapias personalizadas, acompañamiento integral y un enfoque multidisciplinario para cada paciente." ,
    slug: "servicios/oncologia"
  },
  { id: 13, name: "Vitaminas y Suplementación", 
    desc: "Servicio orientado a evaluar tus niveles nutricionales y guiarte en el uso correcto de micronutrientes esenciales. Su objetivo es optimizar el funcionamiento de tu organismo, fortalecer el sistema inmunitario y corregir deficiencias específicas de manera segura y supervisada." ,
    slug: "servicios/vitaminas-y-suplementacion"
  },
];

export default function Servicios() {
  const scrollContainerRef = useRef(null);
  
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
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
          } ${!isDown ? "scroll-smooth" : ""}`} // ← Truco clave: Sólo añade scroll-smooth cuando NO arrastras
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
                
                <p className="text-slate-600 text-sm leading-relaxed pointer-events-none line-clamp-4 overflow-hidden">
                  {servicio.desc}
                </p>
              </div>
              
              {/* Enlace Saber Más */}
              <div className="pt-6">
                <a 
                  href={`/${servicio.slug}`} 
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