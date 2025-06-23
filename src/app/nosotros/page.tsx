import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Users, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros - ArtDent',
  description: 'Conozca más sobre la historia, misión y el equipo de la clínica dental ArtDent.',
};

export default function NosotrosPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-center py-28 md:py-36 rounded-xl shadow-lg mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://mxn.iseie.com/wp-content/uploads/2023/12/Diplomado-En-Gestion-de-Clinicas-Odontologicas.jpg"
            alt="Fondo de la sección sobre nosotros"
            fill
            className="object-cover brightness-50"
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

      <div className="container mx-auto px-4 pb-16">
        <Card className="max-w-4xl mx-auto shadow-lg rounded-xl">
          <CardHeader className="text-center p-8 bg-primary/10">
            <Building className="mx-auto h-16 w-16 text-primary" />
            <CardTitle className="text-4xl font-headline text-primary mt-4">Sobre ArtDent</CardTitle>
            <CardDescription className="text-lg mt-2 text-muted-foreground">Su sonrisa, nuestra pasión.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
              <div className="text-center">
                  <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">Nuestra Historia</h2>
                  <p className="text-muted-foreground leading-relaxed">
                      Fundada con la misión de proveer cuidado dental excepcional en un ambiente cálido y profesional, ArtDent ha crecido hasta convertirse en un pilar de la comunidad. Desde nuestros inicios, nos hemos dedicado a utilizar la tecnología más avanzada y a mantenernos al día con las últimas técnicas odontológicas para garantizar que nuestros pacientes reciban la mejor atención posible.
                  </p>
              </div>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-3 text-primary">
                    <Users className="h-6 w-6" />
                  </span>
                </div>
              </div>
              <div className="text-center">
                  <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">Nuestro Equipo</h2>
                  <p className="text-muted-foreground leading-relaxed">
                      Nuestro equipo está compuesto por dentistas, higienistas y personal administrativo altamente cualificados y apasionados por la salud dental. Cada miembro de nuestro equipo está comprometido a hacer que su visita sea lo más cómoda y agradable posible. Creemos en la educación continua y en un enfoque centrado en el paciente para construir relaciones duraderas basadas en la confianza y el cuidado excepcional.
                  </p>
              </div>
              <div className="mt-10 flex justify-center">
                  <Image 
                      src="https://placehold.co/800x400.png"
                      alt="Equipo de ArtDent"
                      width={800}
                      height={400}
                      className="rounded-lg shadow-md"
                      data-ai-hint="dental team"
                  />
              </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
