
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Stethoscope, HelpCircle, Users, Phone } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="relative overflow-hidden text-left py-32 md:py-44 rounded-xl shadow-lg">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn-3.expansion.mx/dims4/default/20a5c17/2147483647/strip/true/crop/2121x1414+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F65%2F06%2F99b822244e65b2723c6fb457cde2%2Fistock-810206880.jpg"
            alt="Fondo de clínica dental"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
            ArtDent
          </h1>
          <h4 className="text-4xl md:text-4xl font-headline font-bold text-white mb-4">
            Ayudandote a sonreir
          </h4>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore nuestros servicios, encuentre respuestas a sus preguntas y obtenga información rápida con nuestro asistente de IA. 
            ¡Su camino hacia una sonrisa más saludable comienza aquí!
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/reservar-cita">
              <Phone className="mr-2 h-5 w-5" />
              Reserva tu cita aquí
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-center mb-10 text-primary">Explore Nuestras Secciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/servicios" className="block group">
            <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
              <Stethoscope className="h-16 w-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Nuestros Servicios</h3>
              <p className="text-muted-foreground mb-4 flex-grow">Descubra la gama completa de tratamientos dentales que ofrecemos para cuidar su salud bucal.</p>
              <Button variant="outline" className="mt-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Ver Servicios
              </Button>
            </div>
          </Link>
          <Link href="/nosotros" className="block group">
            <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
              <Users className="h-16 w-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Sobre Nosotros</h3>
              <p className="text-muted-foreground mb-4 flex-grow">Descubra toda la informacion sobre nuestra clinica, doctores y reseñas de pacientes.</p>
              <Button variant="outline" className="mt-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Ver Nosotros
              </Button>
            </div>
          </Link>
          <Link href="/faq" className="block group">
            <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
              <HelpCircle className="h-16 w-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-headline font-semibold text-primary mb-3">FAQ</h3>
              <p className="text-muted-foreground mb-4 flex-grow">Consulte cualquier duda o consulta en nuestra seccion de preguntas frecuentes.</p>
              <Button variant="outline" className="mt-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Consultar FAQ
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
