"use client";

import Image from "next/image";
import Link from "next/link"; // Usamos Link de Next.js para la navegación interna
import { ArrowRight } from "lucide-react";

const medicos = [
  {
    id: "1",
    name: "Dra. Carla Pierina Garcia Torres",
    specialty: "Inmunología y Alergia",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    slug: "/dr/carla-garcia"
  },
  {
    id: "2",
    name: "Dr. Fernando José Sanchez Sevillano",
    specialty: "Radiología",
    image: "/images/sanchez.png",
    slug: "/dr/fernando-sanchez"
  },
  {
    id: "3",
    name: "Dra. Grisnery Guadalupe Manquera Torres",
    specialty: "Anatomía patológica",
    image: "/images/grisnery.png",
    slug: "/dr/grisnery-manquera"
  },
  {
    id: "4",
    name: "Dr. Luis Miguel Alvarez Barreda",
    specialty: "Gastroenterología",
    image: "/images/alvarez.png",
    slug: "/dr/luis-alvarez"
  },
  {
    id: "5",
    name: "Dra. Magaly Mirtha Suarez Acevedo",
    specialty: "Ginecología y Obstetricia",
    image: "/images/suarez.png",
    slug: "/dr/magaly-suarez"
  },
  {
    id: "6",
    name: "Dra. María Fernanda Hinojosa Ugarte",
    specialty: "Cardiología",
    image: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&w=600&q=80",
    slug: "/dr/maria-hinojosa"
  },
  {
    id: "7",
    name: "Dr. Francisco Javier Dominguez Jaime",
    specialty: "Medicina energética",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    slug: "/dr/francisco-dominguez"
  },
  {
    id: "8",
    name: "Dra. Greta Francesca Tinajeros Sanchez",
    specialty: "Exámenes de Lab. clínico",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    slug: "/dr/greta-tinajeros"
  }
];

export default function Especialistas() {
  return (
    <section id="especialistas" className="py-24 bg-white relative overflow-hidden">
      
      {/* Sutil círculo decorativo detrás */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm sm:text-base font-extrabold tracking-wider text-[#434bb2] uppercase">
            Nuestro Equipo Médico
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 leading-tight">
            Especialistas de primer nivel comprometidos con tu bienestar
          </h3>
          <p className="text-slate-500 mt-4 text-base">
            Conoce a los profesionales de la salud listos para brindarte una atención médica excepcional, personalizada y humana.
          </p>
        </div>

        {/* Grid de Médicos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {medicos.map((medico) => (
            <Link 
              href={medico.slug} 
              key={medico.id}
              className="group block bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
            >
              {/* Contenedor de la foto */}
              <div className="relative w-full aspect-[4/5] bg-slate-200 overflow-hidden">
                <Image 
                  src={medico.image}
                  alt={`Fotografía de ${medico.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 280px"
                />
                {/* Overlay gradiente suave al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#434bb2]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Información abajo */}
              <div className="p-6 bg-white relative">
                <span className="text-xs font-bold text-[#7aaf43] uppercase tracking-wider block mb-1">
                  {medico.specialty}
                </span>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#434bb2] transition-colors leading-snug">
                  {medico.name}
                </h4>
                
                {/* Detalle interactivo "Ver Perfil" */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#434bb2] transition-colors">
                  <span>Ver perfil médico</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enlace o botón para ver el staff completo si es necesario */}
        {/* <div className="text-center mt-12">
          <Link 
            href="/especialistas"
            className="inline-flex items-center gap-2 bg-indigo-50/60 border border-indigo-100/40 text-[#434bb2] hover:bg-[#434bb2] hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm text-sm"
          >
            Ver todos los especialistas
          </Link>
        </div> */}

      </div>
    </section>
  );
}