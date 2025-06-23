import ServiceShowcase from '@/components/service-showcase';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestros Servicios - ArtDent',
  description: 'Descubra la gama completa de servicios dentales que ofrecemos en ArtDent para cuidar su salud bucal.',
};

export default function ServiciosPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-left py-20 md:py-28 rounded-xl shadow-lg mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn-3.expansion.mx/dims4/default/20a5c17/2147483647/strip/true/crop/2121x1414+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F65%2F06%2F99b822244e65b2723c6fb457cde2%2Fistock-810206880.jpg"
            alt="Fondo de la sección de servicios"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Ofrecemos una gama completa de tratamientos para asegurar tu salud dental. Conoce todo lo que podemos hacer por tu sonrisa.
          </p>
           <Button asChild className="mt-8" size="lg">
            <Link href="/reservar-cita">
              <Phone className="mr-2 h-5 w-5" />
              Reserva tu cita aquí
            </Link>
          </Button>
        </div>
      </section>
      <div className="pb-16">
        <ServiceShowcase />
      </div>
    </div>
  );
}
