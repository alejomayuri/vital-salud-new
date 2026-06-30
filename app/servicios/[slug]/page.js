import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Activity, FileText } from 'lucide-react';

// Simulación de la base de datos de servicios médicos
const SERVICIOS_DATA = {
  'medicina-general': {
    titulo: 'Medicina General',
    subtitulo: 'Atención primaria integral y preventiva para toda la familia',
    imagen: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    descripcion: 'La consulta de Medicina General es el primer frente de cuidado para tu salud. Nuestros médicos están capacitados para diagnosticar, tratar patologías comunes y coordinar chequeos preventivos anuales, derivándote a especialistas solo cuando es estrictamente necesario.',
    beneficios: [
      'Evaluación clínica integral del estado de salud físico.',
      'Control y seguimiento de enfermedades crónicas estables (hipertensión, diabetes).',
      'Prescripción de medicamentos y órdenes de exámenes de laboratorio.',
      'Lectura y diagnóstico rápido de perfiles preventivos.'
    ],
    detalles: {
      duracion: '20 a 30 minutos por consulta',
      requisitos: 'Documento de identidad (DNI/CE). Traer exámenes previos si los tuviera.',
      cobertura: 'Aplica para particulares, convenios corporativos y principales EPS.'
    }
  },
  'pediatria': {
    titulo: 'Pediatría y Neonatología',
    subtitulo: 'Cuidado especializado y empático desde el primer día de vida',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    descripcion: 'Acompañamos el crecimiento de tus hijos garantizando un desarrollo saludable. Nuestro servicio cubre desde la atención al recién nacido hasta la adolescencia, priorizando la prevención mediante esquemas de vacunación y monitoreo nutricional.',
    beneficios: [
      'Control de Crecimiento y Desarrollo Infantil (CRED).',
      'Asesoramiento integral en lactancia materna y alimentación complementaria.',
      'Evaluación y manejo de enfermedades respiratorias y gastrointestinales infantiles.',
      'Seguimiento oportuno del niño sano y pautas de crianza.'
    ],
    detalles: {
      duracion: '30 a 45 minutos por consulta',
      requisitos: 'Tarjeta de vacunación del menor y DNI del apoderado.',
      cobertura: 'Disponible para particulares y planes familiares con EPS.'
    }
  },
  'cardiologia': {
    titulo: 'Cardiología Clínica',
    subtitulo: 'Evaluación y protección avanzada para la salud de tu corazón',
    imagen: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    descripcion: 'Especialidad orientada a la prevención, diagnóstico precoz y tratamiento de afecciones del sistema cardiovascular. Utilizamos tecnología médica moderna para realizar estudios funcionales que miden con precisión tu rendimiento cardíaco.',
    beneficios: [
      'Evaluación y control del riesgo quirúrgico cardiovascular.',
      'Tratamiento avanzado de hipertensión arterial refractaria.',
      'Descarte de arritmias, soplos y cardiopatías isquémicas.',
      'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    ],
    detalles: {
      duracion: '30 minutos por evaluación',
      requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
      cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    }
  }
};

export default async function ServicioInternal({ params }) {
  // Resolvemos la promesa de params para Next.js App Router reciente
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const servicio = SERVICIOS_DATA[slug];

  // Manejo de error si el servicio no existe
  if (!servicio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-2xl font-bold text-slate-800">Servicio no disponible</h1>
        <p className="text-slate-500 mt-2">La especialidad o servicio que buscas no se encuentra en nuestro catálogo.</p>
        <Link href="/#servicios" className="mt-6 flex items-center gap-2 text-[#434bb2] font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" /> Volver a Servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 antialiased pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Botón de Retorno */}
        <div className="mb-8">
          <Link 
            href="/#servicios" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#434bb2] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a los Servicios
          </Link>
        </div>

        {/* Layout Principal de la Sección */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bloque Izquierdo: Imagen del servicio y detalles informativos */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-4">
              <div className="aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden relative bg-slate-100">
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Ficha Técnica de Atención */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
              <h4 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
                Información de la Consulta
              </h4>
              
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#434bb2] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duración aprox.</p>
                    <p className="text-sm text-slate-700 font-medium">{servicio.detalles.duracion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-[#434bb2] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Requisitos</p>
                    <p className="text-sm text-slate-700 font-medium">{servicio.detalles.requisitos}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#434bb2] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Métodos de Pago & EPS</p>
                    <p className="text-sm text-slate-700 font-medium">{servicio.detalles.cobertura}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque Derecho: Textos principales y conversión */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Cabecera del Servicio */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#7aaf43] border border-emerald-100">
                <Activity className="h-3.5 w-3.5" /> Especialidad Médica Autorizada
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{servicio.titulo}</h1>
              <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">{servicio.subtitulo}</p>
            </div>

            {/* Descripción detallada */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-3">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-[#434bb2]">
                ¿En qué consiste el servicio?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>

            {/* Lista de beneficios clínicos */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Campos de Acción y Beneficios
              </h3>
              <ul className="space-y-3.5">
                {servicio.beneficios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-[#7aaf43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de Acción a Formulario */}
            <div className="pt-2">
              <Link 
                href="/#contacto" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#7aaf43] hover:bg-[#6c9b3a] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#7aaf43]/10 text-sm tracking-wide uppercase text-center"
              >
                Solicitar Cita o Cotización
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}