
import type { Metadata } from 'next';
import Image from 'next/image';
import { HeartHandshake, Microscope, Smile } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros - ArtDent',
  description: 'Conozca más sobre la historia, misión, valores y el equipo de la clínica dental ArtDent.',
};

export default function NosotrosPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-center py-32 md:py-44 rounded-xl shadow-lg mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://dentalrosel.com/wp-content/uploads/2023/07/clinica-dental-en-merida-1024x576.jpg"
            alt="Fondo de la sección sobre nosotros"
            fill
            className="object-cover brightness-50"
            quality={95}
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Conoce nuestra historia, misión y al equipo de profesionales apasionados por la salud dental.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Section 1: History */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Nuestra Historia</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fundada con la misión de proveer cuidado dental excepcional en un ambiente cálido y profesional, ArtDent ha crecido hasta convertirse en un pilar de la comunidad.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde nuestros inicios, nos hemos dedicado a utilizar la tecnología más avanzada y a mantenernos al día con las últimas técnicas odontológicas para garantizar que nuestros pacientes reciban la mejor atención posible. Nuestro viaje ha sido impulsado por la pasión y el compromiso con cada sonrisa que cuidamos.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Interior de la clínica ArtDent"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                  data-ai-hint="clinic interior"
                />
              </div>
            </div>

            {/* Section 2: Team */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
              <div>
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Equipo de ArtDent"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                  data-ai-hint="dental team"
                />
              </div>
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Nuestro Equipo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro equipo está compuesto por dentistas, higienistas y personal administrativo altamente cualificados y apasionados por la salud dental. Cada miembro está comprometido a hacer que su visita sea lo más cómoda y agradable posible. Creemos en la educación continua y en un enfoque centrado en el paciente para construir relaciones duraderas basadas en la confianza y el cuidado excepcional.
                </p>
              </div>
            </div>

            {/* Section 3: Values */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Nuestros Valores</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <HeartHandshake className="mx-auto h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Compromiso</h3>
                  <p className="text-sm text-muted-foreground">Dedicados a tu bienestar y a ofrecerte el mejor cuidado posible en cada visita.</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <Microscope className="mx-auto h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovación</h3>
                  <p className="text-sm text-muted-foreground">Utilizamos la última tecnología y técnicas para tratamientos eficaces y cómodos.</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <Smile className="mx-auto h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Confianza</h3>
                  <p className="text-sm text-muted-foreground">Construimos relaciones transparentes y duraderas con nuestros pacientes.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
