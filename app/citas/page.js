'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Shield, Clock, User, FileText, CheckCircle2 } from 'lucide-react';

// Listados para alimentar los selects del formulario corporativo
const DOCTORES = [
  { id: 'carla-garcia', nombre: 'Dra. Carla Pierina Garcia Torres' },
  { id: 'fernando-sanchez', nombre: 'Dr. Fernando José Sanchez Sevillano' },
  { id: 'grisnery-manquera', nombre: 'Dra. Grisnery Guadalupe Maquera Torres' },
  { id: 'luis-alvarez', nombre: 'Dr. Luis Miguel Alvarez Barreda' },
  { id: 'magaly-suarez', nombre: 'Dra. Magaly Mirtha Suarez Acevedo' },
  { id: 'maria-hinojosa', nombre: 'Dra. María Fernanda Hinojosa Ugarte' },
  { id: 'francisco-dominguez', nombre: 'Dr. Francisco Javier Dominguez Jaime' },
  { id: 'manuel-chavez', nombre: 'Dr. Manuel Chavez Gonzales' }
];

const SERVICIOS = [
  { id: 'laboratorio-de-patologia', nombre: 'Laboratorio de Patología' },
  { id: 'biopsias', nombre: 'Biopsias' },
  { id: 'examenes-de-laboratorio-clinico', nombre: 'Exámenes de Laboratorio Clínico' },
  { id: 'chequeos-preventivos', nombre: 'Chequeos Preventivos' },
  { id: 'medicina-general', nombre: 'Medicina General' },
  { id: 'ginecologia', nombre: 'Ginecología' },
  { id: 'cardiologia', nombre: 'Cardiología' },
  { id: 'gastroenterologia', nombre: 'Gastroenterología' },
  { id: 'test-de-aliento', nombre: 'Test de Aliento' },
  { id: 'imagenes-medicas', nombre: 'Imágenes Médicas' },
  { id: 'inmunologia-y-alergia', nombre: 'Inmunología y Alergia' },
  { id: 'oncologia', nombre: 'Oncología' },
  { id: 'vitaminas-y-suplementacion', nombre: 'Vitaminas y Suplementación' },
];

export default function PaginaCitasExtendida({ searchParams }) {
  // Manejo de parámetros recibidos (soporta objeto síncrono o promesa de Next.js App Router)
  const resolvedSearchParams = React.use(searchParams instanceof Promise ? searchParams : Promise.resolve(searchParams || {}));
  const preselectedDr = resolvedSearchParams?.dr || '';
  const preselectedServicio = resolvedSearchParams?.servicio || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "659909bd-6a4e-43f1-acf2-c127f9671998");
    formData.append("subject", "Nueva Solicitud de Cita Médica - VitalSalud Center");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage({
          type: 'success',
          text: '¡Solicitud registrada con éxito! Nos pondremos en contacto a la brevedad.'
        });
        event.target.reset();
      } else {
        setResultMessage({
          type: 'error',
          text: data.message || 'Ocurrió un error al enviar el formulario.'
        });
      }
    } catch (error) {
      setResultMessage({
        type: 'error',
        text: 'Error de conexión. Inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-b-3xl shadow-sm border-x border-b border-slate-100 text-slate-800">
          
          {resultMessage && (
            <div 
              className={`p-4 rounded-xl text-sm font-medium ${
                resultMessage.type === 'success' 
                  ? 'bg-emerald-500/10 text-emerald-800 border border-emerald-500/20' 
                  : 'bg-red-500/10 text-red-800 border border-red-500/20'
              }`}
            >
              {resultMessage.text}
            </div>
          )}

          {/* BLOQUE 1: Información de Triaje y Derivación Automática */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#434bb2] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <Clock className="h-5 w-5" /> 1. Especialidad y Médico Tratante
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Servicio o Especialidad</label>
                <select 
                  name="servicio"
                  defaultValue={preselectedServicio}
                  className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all cursor-pointer"
                  required
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
                  name="doctor"
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
                <input type="text" name="nombre_completo" placeholder="Ej. Carlos Mendoza Ramos" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Documento / Nro</label>
                <div className="flex gap-2">
                  <select name="tipo_documento" className="bg-slate-50 border border-[#434bb2] rounded-xl px-2 py-3 text-xs focus:outline-none focus:border-[#434bb2]">
                    <option value="DNI">DNI</option>
                    <option value="CE">CE</option>
                    <option value="PAS">PAS</option>
                  </select>
                  <input type="text" name="numero_documento" placeholder="12345678" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha de Nacimiento</label>
                <input type="date" name="fecha_nacimiento" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] text-slate-600" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Número de Celular</label>
                <input type="tel" name="telefono" placeholder="999 999 999" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correo Electrónico</label>
                <input type="email" name="email" placeholder="paciente@correo.com" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] transition-all" required />
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
                <select name="tipo_financiamiento" className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] cursor-pointer">
                  <option value="Particular / Autopago">Particular / Autopago</option>
                  <option value="Seguro EPS (Rimac, Pacífico, Mapfre)">Seguro EPS (Rimac, Pacífico, Mapfre)</option>
                  <option value="Convenio Institucional / Corporativo">Convenio Institucional / Corporativo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Modalidad de Consulta</label>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <label className="flex items-center gap-2 p-3 bg-slate-50 border border-[#434bb2] rounded-xl text-xs sm:text-sm font-medium cursor-pointer hover:border-[#434bb2] transition-colors">
                    <input type="radio" name="modalidad" value="Presencial" defaultChecked className="text-[#434bb2] focus:ring-[#434bb2]" />
                    Presencial
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-slate-50 border border-[#434bb2] rounded-xl text-xs sm:text-sm font-medium cursor-pointer hover:border-[#434bb2] transition-colors">
                    <input type="radio" name="modalidad" value="Telemedicina" className="text-[#434bb2] focus:ring-[#434bb2]" />
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
              <textarea name="motivo_consulta" rows={4} placeholder="Escriba brevemente los síntomas principales o el motivo del examen solicitado..." className="w-full bg-slate-50 border border-[#434bb2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#434bb2] resize-none transition-all"></textarea>
            </div>
          </div>

          {/* Botón de Envío Oficial */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#7aaf43] hover:bg-[#6c9b3a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#7aaf43]/20 text-sm tracking-wide uppercase flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <CheckCircle2 className="h-4 w-4" /> {isSubmitting ? 'Enviando...' : 'Registrar Solicitud de Cita Médica'}
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