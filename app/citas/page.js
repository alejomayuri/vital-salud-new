import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Shield, Clock, User, FileText, CheckCircle2 } from 'lucide-react';

// Listados para alimentar los selects del formulario corporativo
const DOCTORES = [
  { id: 'juan-perez', nombre: 'Dr. Juan Pérez (Cardiología)' },
  { id: 'ana-martinez', nombre: 'Dra. Ana Martínez (Pediatría)' }
];

const SERVICIOS = [
  { id: 'medicina-general', nombre: 'Medicina General' },
  { id: 'pediatria', nombre: 'Pediatría y Neonatología' },
  { id: 'cardiologia', nombre: 'Cardiología Clínica' }
];

export default async function PaginaCitasExtendida({ searchParams }) {
  // Capturamos los parámetros de la URL de forma asíncrona (Next.js App Router)
  const resolvedSearchParams = await searchParams;
  const preselectedDr = resolvedSearchParams.dr || '';
  const preselectedServicio = resolvedSearchParams.servicio || '';

  return (
    <div className="min-h-screen bg-slate-50 antialiased py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enlace de regreso */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#434bb2] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al Inicio
          </Link>
        </div>

        {/* Encabezado Principal */}
        <div className="bg-white rounded-t-3xl p-8 border-b border-slate-100 shadow-sm text-center sm:text-left space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-[#434bb2] border border-indigo-100">
            <Calendar className="h-3.5 w-3.5" /> Formulario de Admisión Ambulatoria
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Formulario de Agendamiento de Citas</h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Por favor, complete los siguientes bloques de información detallada para agilizar su proceso de registro e ingreso médico.
          </p>
        </div>

        {/* Formulario Extendido */}
        <form className="space-y-8 bg-white p-8 rounded-b-3xl shadow-sm border-x border-b border-slate-100 text-slate-800">
          
          {/* BLOQUE 1: Información de Triaje y Derivación Automática */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#434bb2] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <Clock className="h-5 w-5" /> 1. Especialidad y Médico Tratante
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Servicio o Especialidad</label>
                <select 
                  defaultValue={preselectedServicio}
                  className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all cursor-pointer"
                >
                  <option value="">-- Seleccionar Especialidad --</option>
                  {SERVICIOS.map((s) => (
                    <option key={s.id} value={s.id}>{s.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Médico Especialista (Opcional)</label>
                <select 
                  defaultValue={preselectedDr}
                  className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all cursor-pointer"
                >
                  <option value="">-- Cualquier médico disponible --</option>
                  {DOCTORES.map((d) => (
                    <option key={d.id} value={d.id}>{d.nombre}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* BLOQUE 2: Datos Personales del Paciente */}
          <div className="space-y-4 pt-4">
            <h3 className="text-base font-bold text-[#434bb2] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <User className="h-5 w-5" /> 2. Información Personal del Paciente
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nombres y Apellidos Completos</label>
                <input type="text" placeholder="Ej. Carlos Mendoza Ramos" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Documento / Nro</label>
                <div className="flex gap-2">
                  <select className="bg-slate-50 border border-[#434bb2] rounded-xl px-2 py-3 text-xs focus:outline-none focus:border-[#434bb2]">
                    <option>DNI</option>
                    <option>CE</option>
                    <option>PAS</option>
                  </select>
                  <input type="text" placeholder="12345678" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha de Nacimiento</label>
                <input type="date" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] text-slate-600" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Número de Celular</label>
                <input type="tel" placeholder="999 999 999" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correo Electrónico</label>
                <input type="email" placeholder="paciente@correo.com" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
              </div>
            </div>
          </div>

          {/* BLOQUE 3: Modalidad y Cobertura de Salud */}
          <div className="space-y-4 pt-4">
            <h3 className="text-base font-bold text-[#434bb2] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <Shield className="h-5 w-5" /> 3. Cobertura Financiera y Modalidad
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Financiamiento</label>
                <select className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] cursor-pointer">
                  <option>Particular / Autopago</option>
                  <option>Seguro EPS (Rimac, Pacífico, Mapfre)</option>
                  <option>Convenio Institucional / Corporativo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Modalidad de Consulta</label>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <label className="flex items-center gap-2 p-3 bg-slate-50 border border-[#434bb2] rounded-xl text-xs sm:text-sm font-medium cursor-pointer hover:border-[#434bb2] transition-colors">
                    <input type="radio" name="modalidad" defaultChecked className="text-[#434bb2] focus:ring-[#434bb2]" />
                    Presencial
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-slate-50 border border-[#434bb2] rounded-xl text-xs sm:text-sm font-medium cursor-pointer hover:border-[#434bb2] transition-colors">
                    <input type="radio" name="modalidad" className="text-[#434bb2] focus:ring-[#434bb2]" />
                    Telemedicina
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* BLOQUE 4: Antecedentes Clínicos Breves */}
          <div className="space-y-4 pt-4">
            <h3 className="text-base font-bold text-[#434bb2] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <FileText className="h-5 w-5" /> 4. Motivo de Consulta y Antecedentes
            </h3>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sintomatología o motivo detallado de la solicitud</label>
              <textarea rows={4} placeholder="Escriba brevemente los síntomas principales o el motivo del examen solicitado..." className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] resize-none transition-all"></textarea>
            </div>
          </div>

          {/* Botón de Envío Oficial */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#7aaf43] hover:bg-[#6c9b3a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#7aaf43]/20 text-sm tracking-wide uppercase flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4" /> Registrar Solicitud de Cita Médica
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-3">
              Al enviar este formulario, su solicitud entra en cola de triaje digital. Un asesor se comunicará en un lapso máximo de 15 minutos para confirmar fecha y hora definitiva.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}