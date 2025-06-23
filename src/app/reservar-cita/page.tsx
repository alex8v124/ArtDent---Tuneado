import AppointmentForm from '@/components/appointment-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservar Cita - ArtDent',
  description: 'Agende su cita en ArtDent de forma rápida y sencilla a través de nuestro formulario en línea.',
};

export default function ReservarCitaPage() {
  return (
    <div className="py-12 md:py-16">
      <AppointmentForm />
    </div>
  );
}
