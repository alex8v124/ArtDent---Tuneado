import InteractiveFAQ from '@/components/interactive-faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - ArtDent',
  description: 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios dentales, horarios, seguros y políticas en ArtDent.',
};

export default function FaqPage() {
  return (
    <div className="py-8">
      <InteractiveFAQ />
    </div>
  );
}
