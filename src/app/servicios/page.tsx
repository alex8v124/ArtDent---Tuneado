import ServiceShowcase from '@/components/service-showcase';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nuestros Servicios - ArtDent',
  description: 'Descubra la gama completa de servicios dentales que ofrecemos en ArtDent para cuidar su salud bucal.',
};

export default function ServiciosPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-center py-28 md:py-36 rounded-xl shadow-lg mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://clinicalikedental.com/wp-content/uploads/2021/05/clinica-dental-Brunete-profesionales-min-scaled-2560x1280.jpg"
            alt="Fondo de la sección de servicios"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Ofrecemos una gama completa de tratamientos para asegurar tu salud dental. Conoce todo lo que podemos hacer por tu sonrisa.
          </p>
        </div>
      </section>
      <div className="pb-16">
        <ServiceShowcase />
      </div>
    </div>
  );
}
