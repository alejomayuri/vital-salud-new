import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contacto() {
  const services = [
    { id: 1, name: "Laboratorio de Patología" },
    { id: 2, name: "Biopsias" },
    { id: 3, name: "Exámenes de Laboratorio Clínico" },
    { id: 4, name: "Chequeos Preventivos" },
    { id: 5, name: "Medicina General" },
    { id: 6, name: "Ginecología" },
    { id: 7, name: "Cardiología" },
    { id: 8, name: "Gastroenterología" },
    { id: 9, name: "Test de Aliento" },
    { id: 10, name: "Imágenes Médicas" },
    { id: 11, name: "Inmunología y Alergia" },
    { id: 12, name: "Oncología" },
    { id: 13, name: "Vitaminas y Suplementación" },
  ];

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info de contacto e iframe de Google Maps (Izquierda) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#7aaf43] to-[#5a852e] p-8 sm:p-12 text-white flex flex-col justify-between space-y-10">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight text-white">Información de Contacto</h3>
              <p className="text-emerald-50/90 leading-relaxed text-sm">
                ¿Tienes dudas o deseas agendar una cita inmediata? Comunícate directamente con nuestros asesores de salud o visítanos.
              </p>
            </div>

            {/* Listado de canales de atención */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="h-5 w-5 text-[#434bb2]" />
                </div>
                <div>
                  <p className="text-xs text-emerald-100/70 font-semibold uppercase tracking-wider">Llámanos</p>
                  <p className="text-base font-bold text-white">957 045 728</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="h-5 w-5 text-[#434bb2]" />
                </div>
                <div>
                  <p className="text-xs text-emerald-100/70 font-semibold uppercase tracking-wider">Escríbenos</p>
                  <p className="text-base font-bold text-white">vitalsaludcenter2025@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="h-5 w-5 text-[#434bb2]" />
                </div>
                <div>
                  <p className="text-xs text-emerald-100/70 font-semibold uppercase tracking-wider">Sede Principal</p>
                  <p className="text-base font-bold text-white">Cayaltí 596, Santiago de Surco, Lima – Perú</p>
                </div>
              </div>
            </div>

            {/* Contenedor del Mapa de Google Maps Activo */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/20 shadow-md relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.714777595568!2d-76.9940177!3d-12.1316521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b819f727c62d%3A0x6bfa3b82dfcb056c!2sCayalt%C3%AD%20596%2C%20Santiago%20de%20Surco%2015049!5e0!3m2!1ses-419!2spe!4v1719950000000!5m2!1ses-419!2spe" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de VitalSalud"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            <div className="text-[11px] text-emerald-100/60 pt-2 border-t border-white/10">
              Horario de atención: Lun a Vie 7:00 am - 9:00 pm | Sáb 8:00 am - 2:00 pm
            </div>
          </div>

          {/* Formulario (Derecha) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-900 text-white flex flex-col justify-center">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Correo electrónico</label>
                  <input 
                    type="email" 
                    placeholder="juan@correo.com" 
                    className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all text-sm" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="+1 555 000 000" 
                    className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Especialidad de interés</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option className="bg-slate-800 text-slate-500">Seleccionar servicio</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.name} className="bg-slate-800 text-white">
                          {service.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Mensaje o motivo de consulta</label>
                <textarea 
                  rows={4} 
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte..." 
                  className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#434bb2] focus:ring-1 focus:ring-[#434bb2] transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#434bb2] hover:bg-[#363c91] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#434bb2]/20 text-sm tracking-wide uppercase"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}