import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Activity, FileText } from 'lucide-react';

// Simulación de la base de datos de servicios médicos
const SERVICIOS_DATA = {
  'anatomia-patologica': {
    titulo: 'Anatomía Patológica',
    // subtitulo: 'Atención primaria integral y preventiva para toda la familia',
    imagen: '/images/servicios/anatomiapatologica.png',
    descripcion: 'Análisis especializado de tejidos y células recolectadas mediante biopsias o citologías. Su función principal es estudiar las muestras bajo el microscopio para diagnosticar enfermedades complejas, determinar si una lesión es benigna o maligna y guiar al médico tratante hacia el mejor tratamiento.',
    // beneficios: [
    //   'Evaluación clínica integral del estado de salud físico.',
    //   'Control y seguimiento de enfermedades crónicas estables (hipertensión, diabetes).',
    //   'Prescripción de medicamentos y órdenes de exámenes de laboratorio.',
    //   'Lectura y diagnóstico rápido de perfiles preventivos.'
    // ],
    // detalles: {
    //   duracion: '20 a 30 minutos por consulta',
    //   requisitos: 'Documento de identidad (DNI/CE). Traer exámenes previos si los tuviera.',
    //   cobertura: 'Aplica para particulares, convenios corporativos y principales EPS.'
    // },
    slug: 'anatomia-patologica',
    type: 'Servicios Médicos y Especialidades'
  },
  'biopsias': {
    titulo: 'Biopsias',
    // subtitulo: 'Evaluación y diagnóstico preciso de lesiones tisulares',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    descripcion: 'Procedimiento médico mínimamente invasivo que consiste en la extracción de una pequeña muestra de tejido o células del cuerpo para ser analizada en el laboratorio de patología. Es la herramienta definitiva para confirmar diagnósticos precisos en nódulos, órganos o lesiones sospechosas.',
    // beneficios: [
    //   'Control de Crecimiento y Desarrollo Infantil (CRED).',
    //   'Asesoramiento integral en lactancia materna y alimentación complementaria.',
    //   'Evaluación y manejo de enfermedades respiratorias y gastrointestinales infantiles.',
    //   'Seguimiento oportuno del niño sano y pautas de crianza.'
    // ],
    // detalles: {
    //   duracion: '30 a 45 minutos por consulta',
    //   requisitos: 'Tarjeta de vacunación del menor y DNI del apoderado.',
    //   cobertura: 'Disponible para particulares y planes familiares con EPS.'
    // },
    slug: 'biopsias',
    type: 'Procedimientos y Exámenes'
  },
  'examenes-de-laboratorio-clinico': {
    titulo: 'Exámenes de Laboratorio Clínico',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/laboratorio.png',
    descripcion: 'Pruebas esenciales de sangre, orina y otros fluidos corporales que permiten evaluar el estado general de tu salud. Ayudan a detectar a tiempo condiciones como anemia, diabetes, infecciones o alteraciones en los órganos, sirviendo de base para cualquier control médico.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'examenes-de-laboratorio-clinico',
    type: 'Procedimientos y Exámenes'
  },
  'chequeos-preventivos': {
    titulo: 'Chequeos Preventivos',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/chequeos.png',
    descripcion: 'Evaluaciones médicas integrales diseñadas para pacientes sanos o con factores de riesgo, cuyo objetivo es detectar enfermedades en etapas iniciales antes de que presenten síntomas. Incluyen consultas, exámenes de laboratorio e imágenes adaptadas a tu edad y estilo de vida.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'chequeos-preventivos',
    type: 'Procedimientos y Exámenes'
  },
  'medicina-general': {
    titulo: 'Medicina General',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/medicinageneral.png',
    descripcion: 'Tu primer punto de contacto con la salud. El médico general evalúa de forma integral al paciente, diagnostica y trata enfermedades comunes, realiza controles de rutina y, de ser necesario, te deriva de manera oportuna con el especialista indicado.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'medicina-general',
    type: 'Servicios Médicos y Especialidades'
  },
  'ginecologia': {
    titulo: 'Ginecología',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/ginecologia.png',
    descripcion: 'Especialidad dedicada al cuidado de la salud del sistema reproductor femenino y las mamas a lo largo de todas las etapas de la vida. Abarca desde la prevención mediante el Papanicolaou y la detección del VPH, hasta el control de trastornos hormonales y planificación familiar.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'ginecologia',
    type: 'Servicios Médicos y Especialidades'
  },
  'cardiologia': {
    titulo: 'Cardiología',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/cardiologia.png',
    descripcion: 'Especialidad enfocada en la prevención, diagnóstico y tratamiento de las enfermedades del corazón y los vasos sanguíneos. Es clave para el control de la hipertensión arterial, evaluación del riesgo cardiovascular y el cuidado de la salud de tu sistema circulatorio.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'cardiologia',
    type: 'Servicios Médicos y Especialidades'
  },
  'gastroenterologia': {
    titulo: 'Gastroenterología',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/gastroenterologia.png',
    descripcion: 'Especialidad médica encargada del estudio y tratamiento de las enfermedades del aparato digestivo, que incluye el esófago, estómago, intestinos, hígado y páncreas. Ideal para el control de la gastritis, reflujo, colon irritable y prevención de neoplasias digestivas.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'gastroenterologia',
    type: 'Servicios Médicos y Especialidades'
  },
  'test-de-aliento': {
    titulo: 'Test de Aliento',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/aliento.png',
    descripcion: 'Prueba rápida, segura y no invasiva que se utiliza principalmente para detectar la presencia de la bacteria Helicobacter pylori en el estómago (causante de gastritis y úlceras) o para evaluar intolerancias alimentarias y sobrecrecimiento bacteriano.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'test-de-aliento',
    type: 'Procedimientos y Exámenes'
  },
  'imagenes-medicas': {
    titulo: 'Imágenes Médicas',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/imagenes.png',
    descripcion: 'Servicio de diagnóstico avanzado que utiliza tecnología como ecografías, para obtener imágenes del interior del cuerpo en tiempo real. Permite visualizar órganos, tejidos y estructuras óseas de forma precisa y sin dolor.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'imagenes-medicas',
    type: 'Procedimientos y Exámenes'
  },
  'inmunologia-y-alergia': {
    titulo: 'Inmunología y Alergia',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/inmunologia.png',
    descripcion: 'Especialidad dedicada al diagnóstico y tratamiento de las alteraciones del sistema inmunitario. Abarca el manejo de alergias alimentarias, respiratorias o cutáneas, así como el estudio de enfermedades autoinmunes donde las defensas del cuerpo reaccionan de forma inusual.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'inmunologia-y-alergia',
    type: 'Servicios Médicos y Especialidades'
  },
  'oncologia': {
    titulo: 'Oncología',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/oncologia.png',
    descripcion: 'Área médica especializada en la prevención, diagnóstico, estadificación y tratamiento del cáncer. Trabaja de la mano con patología y laboratorio clínico para ofrecer terapias personalizadas, acompañamiento integral y un enfoque multidisciplinario para cada paciente.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'oncologia',
    type: 'Servicios Médicos y Especialidades'
  },
  'vitaminas-y-suplementacion': {
    titulo: 'Vitaminas y Suplementación',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/vitaminas.png',
    descripcion: 'Servicio orientado a evaluar tus niveles nutricionales y guiarte en el uso correcto de micronutrientes esenciales. Su objetivo es optimizar el funcionamiento de tu organismo, fortalecer el sistema inmunitario y corregir deficiencias específicas de manera segura y supervisada.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'vitaminas-y-suplementacion',
    type: 'Procedimientos y Exámenes'
  },
  'patologia-clinica': {
    titulo: 'Patología Clínica',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/patologia-clinica.png',
    descripcion: 'Servicio en el análisis de fluidos y líquidos corporales mediante técnicas de laboratorio automatizadas y manuales.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'patologia-clinica',
    type: 'Servicios Médicos y Especialidades'
  },
  'medicina-energetica': {
    titulo: 'Medicina Energética',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/medicinaenergetica.png',
    descripcion: 'Integramos la medicina energética como un enfoque complementario para equilibrar el bienestar físico, mental y emocional. A través de terapias orientadas a armonizar la energía vital, ayudamos a reducir el estrés, mejorar la vitalidad y potenciar la sanación natural del organismo, brindándote una atención integral y personalizada para tu salud.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'medicina-energetica',
    type: 'Servicios Médicos y Especialidades'
  },
  'carnet-de-sanidad': {
    titulo: 'Carnet de Sanidad',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/carnet.png',
    descripcion: 'En Vital Salud Center te ofrecemos una gestión rápida y eficiente del carnet de sanidad para garantizar que tu empresa cumpla con las normativas vigentes sin retrasos. Nuestro proceso integral cuenta con evaluaciones confiables y atención especializada en salud ocupacional, convirtiéndonos en tu aliado estratégico para cuidar a tu personal.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'carnet-de-sanidad',
    type: 'Servicios Médicos y Especialidades'
  },
  'test-molecular-de-vph': {
    titulo: 'Test Molecular de VPH',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/vph.png',
    descripcion: 'Ofrecemos el test molecular de VPH de 14 y 35 genotipos, una herramienta clave para la detección temprana y precisa que garantiza mayor seguridad en el cuidado de tu salud. Nuestro proceso integral cuenta con tecnología avanzada y atención especializada, brindándote resultados confiables y oportunos.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'test-molecular-de-vph',
    type: 'Procedimientos y Exámenes'
  },
  'evaluaciones-medicas-ocupacionales': {
    titulo: 'Evaluaciones Médicas Ocupacionales',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/evaluaciones.png',
    descripcion: 'Brindamos servicios médicos en general y en diversas especialidades, además de soluciones integrales en salud ocupacional y medicina clínica. Contamos con un excelente equipo de profesionales que respaldan nuestra labor con más de 30 años de experiencia.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'evaluaciones-medicas-ocupacionales',
    type: 'Procedimientos y Exámenes'
  },
  'salud-ocupacional': {
    titulo: 'Salud Ocupacional',
    // subtitulo: 'Análisis precisos y confiables para un diagnóstico adecuado',
    imagen: '/images/servicios/ocupacional.png',
    descripcion: 'Garantizamos el cumplimiento de las normativas vigentes mediante evaluaciones precisas que aseguran la aptitud física y mental de tus colaboradores. Nuestro enfoque preventivo ayuda a identificar riesgos y proteger la salud de tu equipo de trabajo.',
    // beneficios: [
    //   'Evaluación y control del riesgo quirúrgico cardiovascular.',
    //   'Tratamiento avanzado de hipertensión arterial refractaria.',
    //   'Descarte de arritmias, soplos y cardiopatías isquémicas.',
    //   'Interpretación inmediata de electrocardiogramas y pruebas de esfuerzo.'
    // ],
    // detalles: {
    //   duracion: '30 minutos por evaluación',
    //   requisitos: 'Asistir con ropa cómoda si tiene programada una prueba de esfuerzo.',
    //   cobertura: 'Cobertura integral con aseguradoras seleccionadas y tarifas preferenciales.'
    // },
    slug: 'salud-ocupacional',
    type: 'Servicios Médicos y Especialidades'
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
            {servicio.detalles && (
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
            </div>)}
          </div>

          {/* Bloque Derecho: Textos principales y conversión */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Cabecera del Servicio */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#7aaf43] border border-emerald-100">
                <Activity className="h-3.5 w-3.5" /> {servicio.type}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{servicio.titulo}</h1>
              {/* <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">{servicio.subtitulo}</p> */}
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
            {servicio.beneficios && (
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
            </div> )}

            {/* Botón de Acción a Formulario */}
            <div className="pt-2">
              <Link 
                href={`/citas?servicio=${servicio.slug}`} 
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