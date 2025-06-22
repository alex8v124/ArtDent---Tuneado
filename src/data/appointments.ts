import type { Appointment } from '@/types';

export const appointments: Appointment[] = [
  {
    id: '1',
    patientName: 'Carlos Méndez',
    date: '28/08/2024',
    time: '11:00:00',
    reason: 'Consulta de diagnóstico',
    status: 'Completed',
    action: 'details',
  },
  {
    id: '2',
    patientName: 'Evangelina Alba',
    date: '28/08/2024',
    time: '08:00:00',
    reason: 'Rehabilitación',
    status: 'Completed',
    action: 'details',
  },
  {
    id: '3',
    patientName: 'Fernanda Alvarez',
    date: '27/08/2024',
    time: '18:15:00',
    reason: 'Control de Enfermedad Crónica',
    status: 'Completed',
    action: 'details',
  },
   {
    id: '4',
    patientName: 'Jorge Herrera',
    date: '29/08/2024',
    time: '14:00:00',
    reason: 'Limpieza Dental',
    status: 'Pending',
    action: 'reschedule',
  },
  {
    id: '5',
    patientName: 'Sofia Castillo',
    date: '26/08/2024',
    time: '09:30:00',
    reason: 'Tratamiento de Conducto',
    status: 'Cancelled',
    action: 'details',
  },
];
