import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Stethoscope, HelpCircle, Bot } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Bienvenido al Centro de Información ArtDent
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nuestros servicios, encuentre respuestas a sus preguntas y obtenga información rápida con nuestro asistente de IA. 
            ¡Su camino hacia una sonrisa más saludable comienza aquí!
          </p>
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
          <Link href="/faq" className="block group">
            <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
              <HelpCircle className="h-16 w-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Preguntas Frecuentes</h3>
              <p className="text-muted-foreground mb-4 flex-grow">Encuentre respuestas a las dudas más comunes sobre nuestros procedimientos, horarios y políticas.</p>
              <Button variant="outline" className="mt-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Consultar FAQ
              </Button>
            </div>
          </Link>
          <Link href="/asistente-ia" className="block group">
            <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
              <Bot className="h-16 w-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Asistente IA</h3>
              <p className="text-muted-foreground mb-4 flex-grow">Hable con nuestro asistente virtual para obtener respuestas rápidas a sus consultas sobre ArtDent.</p>
              <Button variant="outline" className="mt-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Hablar con IA
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
