import InteractiveFAQ from '@/components/interactive-faq';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - ArtDent',
  description: 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios dentales, horarios, seguros y políticas en ArtDent.',
};

export default function FaqPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-center py-28 md:py-36 rounded-xl shadow-lg mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://clinicadentalbarbastro.com/wp-content/uploads/2020/07/bustillobarbastro_primeravisita.jpg"
            alt="Fondo de la sección de preguntas frecuentes"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Encuentra respuestas rápidas a tus dudas más comunes sobre nuestros servicios, políticas y cuidados dentales.
          </p>
        </div>
      </section>
      <div className="pb-16">
        <InteractiveFAQ />
      </div>
    </div>
  );
}
