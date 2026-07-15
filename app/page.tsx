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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <Hero />
      <QuienesSomos />
      <Servicios />
      <Especialistas />
      <PlanesDiferencial />
      <Contacto />   
    </div>
  );
}