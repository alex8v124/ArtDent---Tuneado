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
            Welcome to ArtDent Info Center
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Discover our services, find answers to your questions, and get quick information with our AI assistant.
            Your journey to a healthier smile starts here!
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

// Adding animation styles to the page (Next.js specific way if needed, or just use Tailwind animation utilities)
// For simplicity, these classes are defined inline in tailwind.config.js if general purpose, or use style jsx for page specific.
// The current setup will rely on Tailwind's JIT for these custom animation class names if defined in tailwind.config.ts extend.
// Or, more simply, use existing Tailwind animation/transition utilities.
// Let's assume the animation classes like animate-fade-in-down are set up in tailwind.config.ts if used.
// For now, I'll remove the explicit style tag and rely on potential Tailwind config or existing utilities.
// The prompt requested "Subtle animations for transitions and interactions", shadcn components already provide this.
// The hero section text animations are a nice touch. I will add them to tailwind.config.ts keyframes if not already there (they are not).
// For now, I'll remove the animation classes to keep it simpler as they are not standard tailwind and would require config.
// Re-adding simplified animation class names, assuming they would be configured in tailwind.config.ts (or through a plugin).
// I'll update tailwind.config.ts to include these simple animations.
