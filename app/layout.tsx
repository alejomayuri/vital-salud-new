// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vital Salud | Centro Médico Integral",
  description: "Atención médica de vanguardia y especialistas en salud. Agenda tu cita médica con nosotros y cuida de los tuyos.",
  keywords: ["centro medico", "clinica salud", "citas medicas", "medicina general", "pediatria"],
  authors: [{ name: "Pataki Landing Studio" }],
  openGraph: {
    title: "Vital Salud | Centro Médico Integral",
    description: "Cuidando de ti y de los tuyos con la excelencia médica que nos caracteriza.",
    url: "https://vitalsalud.com", // Cambiar por el dominio real cuando esté listo
    siteName: "Vital Salud",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}