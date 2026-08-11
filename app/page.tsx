import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import QuienesSomos from '@/components/QuienesSomos';
import Servicios from '@/components/Servicios';
import Especialistas from '@/components/Especialistas';
import PlanesDiferencial from '@/components/PlanesDiferencial';
import Contacto from '@/components/Contacto';
import WhatsAppButton from '@/components/WhatsappButton';

export default function HomePage() {

  const servicios_medicos = [
    
    { id: 1, name: " Cardiología", 
      desc: "Especialidad enfocada en la prevención, diagnóstico y tratamiento de las enfermedades del corazón y los vasos sanguíneos. Es clave para el control de la hipertensión arterial, evaluación del riesgo cardiovascular y el cuidado de la salud de tu sistema circulatorio." ,
      slug: "servicios/cardiologia"
    },
    { id: 2, name: "Gastroenterología", 
      desc: "Especialidad médica encargada del estudio y tratamiento de las enfermedades del aparato digestivo, que incluye el esófago, estómago, intestinos, hígado y páncreas. Ideal para el control de la gastritis, reflujo, colon irritable y prevención de neoplasias digestivas." ,
      slug: "servicios/gastroenterologia"
    },
    { id: 3, name: "Ginecología", 
      desc: "Especialidad dedicada al cuidado de la salud del sistema reproductor femenino y las mamas a lo largo de todas las etapas de la vida. Abarca desde la prevención mediante el Papanicolaou y la detección del VPH, hasta el control de trastornos hormonales y planificación familiar." ,
      slug: "servicios/ginecologia"
    },
    { id: 4, name: "Inmunología y Alergia", 
      desc: "Especialidad dedicada al diagnóstico y tratamiento de las alteraciones del sistema inmunitario. Abarca el manejo de alergias alimentarias, respiratorias o cutáneas, así como el estudio de enfermedades autoinmunes donde las defensas del cuerpo reaccionan de forma inusual. " ,
      slug: "servicios/inmunologia-y-alergia"
    },
    {
      id: 5, name: "Anatomía Patológica",
      desc: "Análisis especializado de tejidos y células recolectadas mediante biopsias o citologías. Su función principal es estudiar las muestras bajo el microscopio para diagnosticar enfermedades complejas, determinar si una lesión es benigna o maligna y guiar al médico tratante hacia el mejor tratamiento." ,
      slug: "servicios/anatomia-patologica"
    },
    {
      id: 6, name: "Patología Clínica",
      desc: "Servicio en el análisis de fluidos y líquidos corporales mediante técnicas de laboratorio automatizadas y manuales." ,
      slug: "servicios/patologia-clinica"
    },
    { id: 7, name: "Medicina General", 
      desc: "Tu primer punto de contacto con la salud. El médico general evalúa de forma integral al paciente, diagnostica y trata enfermedades comunes, realiza controles de rutina y, de ser necesario, te deriva de manera oportuna con el especialista indicado." ,
      slug: "servicios/medicina-general"
    },
    { 
      id: 8, name: "Medicina Energética",
      desc: "integramos la medicina energética como un enfoque complementario para equilibrar el bienestar físico, mental y emocional. A través de terapias orientadas a armonizar la energía vital, ayudamos a reducir el estrés, mejorar la vitalidad y potenciar la sanación natural del organismo, brindándote una atención integral y personalizada para tu salud." ,
      slug: "servicios/medicina-energetica"
    },
    { id: 9, name: "Oncología", 
      desc: "Área médica especializada en la prevención, diagnóstico, estadificación y tratamiento del cáncer. Trabaja de la mano con patología y laboratorio clínico para ofrecer terapias personalizadas, acompañamiento integral y un enfoque multidisciplinario para cada paciente." ,
      slug: "servicios/oncologia"
    },
    { 
      id: 10, name: "Salud Ocupacional",
      desc: "Garantizamos el cumplimiento de las normativas vigentes mediante evaluaciones precisas que aseguran la aptitud física y mental de tus colaboradores. Nuestro enfoque preventivo ayuda a identificar riesgos y proteger la salud de tu equipo de trabajo." ,
      slug: "servicios/salud-ocupacional"
    },
    { 
      id: 11, name: "Carnet de Sanidad",
      desc: "En Vital Salud Center te ofrecemos una gestión rápida y eficiente del carnet de sanidad para garantizar que tu empresa cumpla con las normativas vigentes sin retrasos. Nuestro proceso integral cuenta con evaluaciones confiables y atención especializada en salud ocupacional, convirtiéndonos en tu aliado estratégico para cuidar a tu personal." ,
      slug: "servicios/carnet-de-sanidad"
    },
    // { id: 1, name: "Laboratorio de Patología", 
    //   desc: "Análisis especializado de tejidos y células recolectadas mediante biopsias o citologías. Su función principal es estudiar las muestras bajo el microscopio para diagnosticar enfermedades complejas, determinar si una lesión es benigna o maligna y guiar al médico tratante hacia el mejor tratamiento.",
    //   slug: "servicios/laboratorio-de-patologia"
    // },
  ];

  const procedimientos = [
    { id: 1, name: "Biopsias", 
      desc: "Procedimiento médico mínimamente invasivo que consiste en la extracción de una pequeña muestra de tejido o células del cuerpo para ser analizada en el laboratorio de patología. Es la herramienta definitiva para confirmar diagnósticos precisos en nódulos, órganos o lesiones sospechosas." ,
      slug: "servicios/biopsias"
    },
    { id: 2, name: "Chequeos Preventivos", 
      desc: "Evaluaciones médicas integrales diseñadas para pacientes sanos o con factores de riesgo, cuyo objetivo es detectar enfermedades en etapas iniciales antes de que presenten síntomas. Incluyen consultas, exámenes de laboratorio e imágenes adaptadas a tu edad y estilo de vida." ,
      slug: "servicios/chequeos-preventivos"
    },
    { id: 3, name: "Exámenes de Laboratorio Clínico", 
      desc: "Pruebas esenciales de sangre, orina y otros fluidos corporales que permiten evaluar el estado general de tu salud. Ayudan a detectar a tiempo condiciones como anemia, diabetes, infecciones o alteraciones en los órganos, sirviendo de base para cualquier control médico." ,
      slug: "servicios/examenes-de-laboratorio-clinico"
    },
    { id: 4, name: "Imágenes Médicas", 
      desc: "Servicio de diagnóstico avanzado que utiliza tecnología como ecografías, para obtener imágenes del interior del cuerpo en tiempo real. Permite visualizar órganos, tejidos y estructuras óseas de forma precisa y sin dolor." ,
      slug: "servicios/imagenes-medicas"
    },
    { id: 5, name: "Test de Aliento", 
      desc: "Prueba rápida, segura y no invasiva que se utiliza principalmente para detectar la presencia de la bacteria Helicobacter pylori en el estómago (causante de gastritis y úlceras) o para evaluar intolerancias alimentarias y sobrecrecimiento bacteriano." ,
      slug: "servicios/test-de-aliento"
    },
    { 
      id: 6, name: "Test Molecular de VPH",
      desc: "Ofrecemos el test molecular de VPH de 14 y 35 genotipos, una herramienta clave para la detección temprana y precisa que garantiza mayor seguridad en el cuidado de tu salud. Nuestro proceso integral cuenta con tecnología avanzada y atención especializada, brindándote resultados confiables y oportunos." ,
      slug: "servicios/test-molecular-de-vph"
    },
    { id: 7, name: "Vitaminas y Suplementación", 
      desc: "Servicio orientado a evaluar tus niveles nutricionales y guiarte en el uso correcto de micronutrientes esenciales. Su objetivo es optimizar el funcionamiento de tu organismo, fortalecer el sistema inmunitario y corregir deficiencias específicas de manera segura y supervisada." ,
      slug: "servicios/vitaminas-y-suplementacion"
    },
    { 
      id: 8, name: "Evaluaciones médicas ocupacionales",
      desc: "Brindamos servicios médicos en general y en diversas especialidades, además de soluciones integrales en salud ocupacional y medicina clínica. Contamos con un excelente equipo de profesionales que respaldan nuestra labor con más de 30 años de experiencia." ,
      slug: "servicios/evaluaciones-medicas-ocupacionales"
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <Hero />
      <QuienesSomos />
      <Servicios title="Servicios Médicos y Especialidades" servicios={servicios_medicos} />
      <Servicios title="Procedimientos Especiales" servicios={procedimientos} />
      <Especialistas />
      <PlanesDiferencial />
      <Contacto />
    </div>
  );
}