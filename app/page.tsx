import React from 'react';
import { Heart, Phone, Mail, MapPin, CheckCircle, Menu, X, ArrowRight } from 'lucide-react'; // Puedes usar lucide-react o cualquier set de iconos

export default function HomePage() {
  // Simulación de los 18 servicios para el scroll horizontal
  const servicios = [
    { id: 1, name: "Medicina General", desc: "Atención médica primaria y preventiva." },
    { id: 2, name: "Pediatría", desc: "Cuidado especializado para los más pequeños." },
    { id: 3, name: "Cardiología", desc: "Salud cardiovascular y prevención." },
    { id: 4, name: "Ginecología", desc: "Cuidado integral de la mujer." },
    { id: 5, name: "Dermatología", desc: "Tratamiento y cuidado de la piel." },
    { id: 6, name: "Oftalmología", desc: "Cuidado de la salud visual." },
    { id: 7, name: "Odontología", desc: "Servicios dentales integrales." },
    { id: 8, name: "Traumatología", desc: "Lesiones óseas y musculares." },
    { id: 9, name: "Nutrición", desc: "Planes alimenticios personalizados." },
    { id: 10, name: "Psicología", desc: "Apoyo y bienestar mental." },
    { id: 11, name: "Gastroenterología", desc: "Sistema digestivo y salud gástrica." },
    { id: 12, name: "Urología", desc: "Salud del sistema urinario." },
    { id: 13, name: "Neumología", desc: "Cuidado del sistema respiratorio." },
    { id: 14, name: "Endocrinología", desc: "Trastornos hormonales y metabólicos." },
    { id: 15, name: "Neurología", desc: "Sistema nervioso y cerebro." },
    { id: 16, name: "Fisioterapia", desc: "Rehabilitación física y motora." },
    { id: 17, name: "Laboratorio", desc: "Análisis clínicos rápidos y precisos." },
    { id: 18, name: "Resultados Online", desc: "Consulta tus exámenes desde casa." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      
      {/* 1. HEADER & NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-teal-600 p-2 rounded-xl text-white">
              <Heart className="h-6 w-6" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Vital<span className="text-teal-600">Salud</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#inicio" className="hover:text-teal-600 transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-teal-600 transition-colors">Quiénes Somos</a>
            <a href="#servicios" className="hover:text-teal-600 transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-teal-600 transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contacto" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 text-sm">
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button (Simplificado) */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* 2. HERO BANNER */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-sky-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/60 rounded-full px-4 py-1.5 text-sm font-semibold text-teal-700">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Atención médica de vanguardia
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
              Tu salud y bienestar son nuestra <span className="text-teal-600">prioridad</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              En Vital Salud combinamos un equipo médico de primer nivel con tecnología avanzada para ofrecerte el cuidado integral que tú y tu familia merecen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#servicios" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 group">
                Explorar Servicios
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contacto" className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl font-medium transition-colors">
                Contactar Ahora
              </a>
            </div>
          </div>
          
          {/* Placeholder para Imagen del Hero */}
          <div className="relative justify-center hidden lg:flex">
            <div className="w-[450px] h-[500px] bg-gradient-to-tr from-teal-600 to-sky-400 rounded-3xl shadow-2xl overflow-hidden relative rotate-2">
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
              {/* Aquí irá tu etiqueta <Image /> de Next.js */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <p className="text-sm font-bold text-slate-900">Central Telefónica</p>
                <p className="text-xl font-extrabold text-teal-600">+1 (555) 0199-234</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUIÉNES SOMOS */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 p-8 rounded-2xl space-y-2 mt-8">
                <span className="text-4xl font-extrabold text-teal-600">15+</span>
                <p className="font-semibold text-slate-800">Años de Experiencia</p>
              </div>
              <div className="bg-sky-50 p-8 rounded-2xl space-y-2">
                <span className="text-4xl font-extrabold text-sky-600">50+</span>
                <p className="font-semibold text-slate-800">Especialistas Médicos</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-base font-bold tracking-wider text-teal-600 uppercase">Quiénes Somos</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Comprometidos con la excelencia médica y el trato humano
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Fundado con la misión de democratizar el acceso a una salud de calidad, Vital Salud se ha consolidado como el centro médico de referencia de la región. Nos enfocamos no solo en tratar la enfermedad, sino en prevenirla y promover hábitos de vida saludables.
              </p>
              <ul className="space-y-3 pt-2">
                {['Infraestructura moderna y equipamiento de última generación.', 'Atención personalizada y sin tiempos de espera prolongados.', 'Convenios con las principales aseguradoras.'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN SERVICIOS (SCROLL HORIZONTAL DE 18 SERVICIOS) */}
      <section id="servicios" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-base font-bold tracking-wider text-teal-600 uppercase">Nuestras Especialidades</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Servicios médicos integrales
            </h3>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            Desliza horizontalmente para ver más →
          </p>
        </div>

        {/* Contenedor del Scroll Horizontal */}
        <div className="w-full overflow-x-auto pl-4 sm:pl-[calc((100vw-1280px)/2+2rem)] pr-4 scrollbar-none snap-x snap-mandatory flex gap-6 pb-8">
          {/* Ajuste dinámico de padding para alinear con el grid de arriba en pantallas grandes */}
          {servicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="w-[280px] sm:w-[320px] shrink-0 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between group hover:border-teal-100"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {servicio.id < 10 ? `0${servicio.id}` : servicio.id}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{servicio.name}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{servicio.desc}</p>
              </div>
              <div className="pt-6">
                <a href="#contacto" className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1">
                  Saber más <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACTO & FORMULARIO */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Info de contacto (Izquierda) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-700 to-teal-900 p-8 sm:p-12 text-white flex flex-col justify-between space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">Información de Contacto</h3>
                <p className="text-teal-100/80 leading-relaxed">
                  ¿Tienes dudas o deseas agendar una cita inmediata? Comunícate directamente con nuestros asesores de salud.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200/70 font-semibold uppercase tracking-wider">Llámanos</p>
                    <p className="text-lg font-bold">+1 (555) 0199-234</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200/70 font-semibold uppercase tracking-wider">Escríbenos</p>
                    <p className="text-lg font-bold">contacto@vitalsalud.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200/70 font-semibold uppercase tracking-wider">Sede Principal</p>
                    <p className="text-lg font-bold">Av. de la Salud 456, Medical City</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-teal-200/50">
                Horario de atención: Lun a Vie 7:00 am - 9:00 pm | Sáb 8:00 am - 2:00 pm
              </div>
            </div>

            {/* Formulario (Derecha) */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-900 text-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nombre completo</label>
                    <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Correo electrónico</label>
                    <input type="email" placeholder="juan@correo.com" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Teléfono</label>
                    <input type="tel" placeholder="+1 555 000 000" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Especialidad de interés</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors appearance-none">
                      <option className="bg-slate-800 text-slate-400">Seleccionar servicio</option>
                      <option className="bg-slate-800">Medicina General</option>
                      <option className="bg-slate-800">Pediatría</option>
                      <option className="bg-slate-800">Cardiología</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Mensaje o motivo de consulta</label>
                  <textarea rows={4} placeholder="Cuéntanos brevemente cómo podemos ayudarte..." className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-teal-600/20">
                  Enviar Mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <Heart className="h-5 w-5" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight">VitalSalud</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Cuidando de ti y de los tuyos con la excelencia médica que nos caracteriza.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legales</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Desarrollado por</h4>
            <p className="text-sm">
              Diseño y desarrollo web a cargo de <span className="text-teal-400 font-medium">Pataki Landing Studio</span>.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/60 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Vital Salud. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}