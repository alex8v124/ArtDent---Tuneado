import ServiceShowcase from '@/components/service-showcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestros Servicios - ArtDent',
  description: 'Descubra la gama completa de servicios dentales que ofrecemos en ArtDent para cuidar su salud bucal.',
};

export default function ServiciosPage() {
  return (
    <div className="py-8">
      <ServiceShowcase />
    </div>
  );
}
