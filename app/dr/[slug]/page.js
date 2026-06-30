import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Award, CheckCircle2, Shield, Heart } from 'lucide-react';

// Simulación de la base de datos de especialistas
const DOCTORES_DATA = {
  'juan-perez': {
    nombre: 'Dr. Juan Pérez',
    especialidad: 'Cardiología Clínica',
    imagen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    cmp: 'CMP 45678',
    rne: 'RNE 12345',
    bio: 'El Dr. Juan Pérez cuenta con más de 12 años de experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares. Es especialista en cardiología intervencionista y prevención de riesgo coronario.',
    estudios: [
      'Pregrado en Medicina Humana - Universidad Nacional Mayor de San Marcos.',
      'Especialización en Cardiología - Universidad de San Martín de Porres.',
      'Fellowship en Cardiología Intervencionista - Hospital Clínic de Barcelona.'
    ],
    procedimientos: [
      'Ecocardiogramas Doppler color',
      'Pruebas de esfuerzo (Ergometría)',
      'Monitoreo de presión (Holter)',
      'Evaluación de riesgo quirúrgico'
    ],
    horarios: 'Lun a Vie: 9:00 am - 1:00 pm | Sáb: 9:00 am - 12:00 pm'
  },
  'ana-martinez': {
    nombre: 'Dra. Ana Martínez',
    especialidad: 'Pediatría y Neonatología',
    imagen: 'https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&q=80&w=600',
    cmp: 'CMP 59321',
    rne: 'RNE 24680',
    bio: 'La Dra. Ana Martínez se dedica plenamente al cuidado del desarrollo integral infantil y al seguimiento del recién nacido de alto riesgo, priorizando una atención empática y orientada a la familia.',
    estudios: [
      'Pregrado en Medicina Humana - Universidad Cayetano Heredia.',
      'Residencia en Pediatría Médica - Instituto Nacional de Salud del Niño.',
      'Maestría en Nutrición Infantil - Universidad de Barcelona.'
    ],
    procedimientos: [
      'Control de crecimiento y desarrollo (CRED)',
      'Evaluación del recién nacido',
      'Asesoría en lactancia materna',
      'Vacunación e inmunizaciones'
    ],
    horarios: 'Mar y Jue: 3:00 pm - 8:00 pm | Sáb: 8:00 am - 2:00 pm'
  }
};

// Componente asíncrono para resolver la Promesa de params
export default async function DoctorProfile({ params }) {
  // Desasociamos de forma segura resolviendo params con await
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const doctor = DOCTORES_DATA[slug];

  // Si el doctor no existe en la data, manejamos un estado vacío básico
  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-2xl font-bold text-slate-800">Especialista no encontrado</h1>
        <p className="text-slate-500 mt-2">El perfil solicitado no existe o fue movido.</p>
        <Link href="/#especialistas" className="mt-6 flex items-center gap-2 text-[#434bb2] font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" /> Volver a Especialistas
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
            href="/#especialistas" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#434bb2] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al listado principal
          </Link>
        </div>

        {/* Tarjeta Principal de Presentación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bloque Izquierdo: Fotografía fija y datos de colegiatura */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-slate-100">
                <img 
                  src={doctor.imagen} 
                  alt={doctor.nombre} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Colegiatura</p>
                  <p className="text-sm font-bold text-slate-700">{doctor.cmp}</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Especialidad</p>
                  <p className="text-sm font-bold text-slate-700">{doctor.rne}</p>
                </div>
              </div>
            </div>

            {/* Cuadro de Horarios */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-3">
              <div className="flex items-center gap-2.5 text-[#434bb2]">
                <Calendar className="h-5 w-5" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Horario de Consultas</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                {doctor.horarios}
              </p>
            </div>
          </div>

          {/* Bloque Derecho: Información detallada */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Cabecera del perfil */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-[#434bb2] border border-indigo-100">
                <Shield className="h-3.5 w-3.5" /> Staff Médico VitalSalud
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{doctor.nombre}</h1>
              <p className="text-lg font-semibold text-[#7aaf43]">{doctor.especialidad}</p>
            </div>

            {/* Perfil Profesional */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Heart className="h-5 w-5 text-[#434bb2]" /> Perfil Profesional
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {doctor.bio}
              </p>
            </div>

            {/* Formación y Estudios */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Award className="h-5 w-5 text-[#434bb2]" /> Educación y Experiencia
              </h3>
              <ul className="space-y-3">
                {doctor.estudios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-[#7aaf43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedimientos y Áreas de Atención */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <CheckCircle2 className="h-5 w-5 text-[#434bb2]" /> Procedimientos y Exámenes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {doctor.procedimientos.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-medium text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#7aaf43] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de conversión directo */}
            <div className="pt-2">
              <Link 
                href="/#contacto" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#434bb2] hover:bg-opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/10 text-sm tracking-wide uppercase text-center"
              >
                Agendar Cita con este Especialista
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}