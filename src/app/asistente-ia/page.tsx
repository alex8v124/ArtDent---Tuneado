import AiAssistant from '@/components/ai-assistant';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asistente IA - ArtDent',
  description: 'Obtenga respuestas instantáneas a sus preguntas sobre los servicios y políticas de ArtDent con nuestro asistente de inteligencia artificial.',
};

export default function AsistenteIaPage() {
  return (
    <div className="py-12 md:py-16">
      <AiAssistant />
    </div>
  );
}
