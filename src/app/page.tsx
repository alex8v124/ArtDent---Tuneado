import ServiceShowcase from '@/components/service-showcase';
import InteractiveFAQ from '@/components/interactive-faq';
import AiAssistant from '@/components/ai-assistant';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="text-center py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4 animate-fade-in-down">
            Bienvenido al Centro de Información ArtDent
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Descubra nuestros servicios, encuentre respuestas a sus preguntas y obtenga información rápida con nuestro asistente de IA. 
            ¡Su camino hacia una sonrisa más saludable comienza aquí!
          </p>
        </div>
      </section>
      
      <ServiceShowcase />
      
      <Separator className="my-12 md:my-16 max-w-md mx-auto" />
      
      <InteractiveFAQ />
      
      <Separator className="my-12 md:my-16 max-w-md mx-auto" />
      
      <AiAssistant />
    </div>
  );
}

// Basic animation styles (can be moved to globals.css if preferred)
const animationStyles = `
  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
  .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s forwards; }
`;
