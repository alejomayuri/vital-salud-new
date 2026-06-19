import { CheckCircle2, ShieldCheck, Building2, Users } from "lucide-react";

export default function PlanesDiferencial() {
  return (
    <section id="diferencial" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm sm:text-base font-extrabold tracking-wider text-[#434bb2] uppercase">
            Soluciones a tu Medida
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2 leading-tight">
            Atención médica de confianza para <span className="text-[#7aaf43]">personas y organizaciones</span>
          </h3>
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            Diseñamos coberturas y servicios específicos que se adaptan tanto al cuidado familiar como a las exigencias de salud y seguridad en el trabajo.
          </p>
        </div>

        {/* Bloque Comparativo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Tarjeta 1 - Pacientes Particulares */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 relative group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-[#434bb2] flex items-center justify-center">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">Para Pacientes y Familias</h4>
                <p className="text-slate-500 text-sm mt-1">Cuidado preventivo y reactivo enfocado en tu bienestar diario.</p>
              </div>
              
              <hr className="border-slate-100" />
              
              {/* Lista de características */}
              <ul className="space-y-4">
                {[
                  { title: "Atención Particular y Convenios", desc: "Consultas accesibles y coberturas con las principales aseguradoras." },
                  { title: "Historia Clínica Digital Única", desc: "Acceso inmediato a tus antecedentes médicos desde cualquier dispositivo." },
                  { title: "Planes Preventivos Familiares", desc: "Chequeos anuales y monitoreo continuo para todas las edades." },
                  { title: "Resultados Online", desc: "Visualiza tus exámenes de laboratorio e imágenes desde tu correo o portal." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-[#7aaf43] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-slate-800 font-bold text-sm sm:text-base">{item.title}</h5>
                      <p className="text-slate-500 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <a href="#contacto" className="block text-center bg-indigo-50/60 border border-indigo-100 text-[#434bb2] hover:bg-[#434bb2] hover:text-white font-bold py-4 rounded-xl transition-all text-sm">
                Agendar Consulta Particular
              </a>
            </div>
          </div>

          {/* Tarjeta 2 - Planes para Empresas (Destacada de forma sutil) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#434bb2] shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* Tag destacado corporativo */}
            <div className="absolute top-0 right-0 bg-[#434bb2] text-white text-[11px] uppercase tracking-widest font-extrabold px-5 py-1.5 rounded-bl-xl">
              Corporativo B2B
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#7aaf43] flex items-center justify-center">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">Para Empresas y PYMES</h4>
                <p className="text-slate-500 text-sm mt-1">Gestión integral de salud ocupacional y bienestar laboral.</p>
              </div>
              
              <hr className="border-slate-100" />
              
              {/* Lista de características */}
              <ul className="space-y-4">
                {[
                  { title: "Salud Ocupacional de Ley", desc: "Exámenes médicos ocupacionales (Ingreso, Periódicos y Retiro)." },
                  { title: "Planes de Salud Corporativos", desc: "Tarifas preferenciales y Cobertura de EPS para tus colaboradores." },
                  { title: "Campañas de Prevención In-house", desc: "Vacunaciones y ferias de salud directamente en tus oficinas." },
                  { title: "Plataforma de Gestión para RRHH", desc: "Control de descansos médicos y reportes epidemiológicos en tiempo real." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <ShieldCheck className="h-5 w-5 text-[#434bb2] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-slate-800 font-bold text-sm sm:text-base">{item.title}</h5>
                      <p className="text-slate-500 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <a href="#contacto" className="block text-center bg-[#434bb2] hover:bg-opacity-90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/10 text-sm">
                Cotizar Plan Corporativo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}