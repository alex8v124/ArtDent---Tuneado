import type { AppointmentRequest } from '@/types';

export const appointmentRequests: AppointmentRequest[] = [
  {
    id: 'req1',
    patientName: 'Ana García',
    service: 'Limpieza Dental',
    requestedDate: '30/08/2024',
    requestedTime: '10:00:00',
  },
  {
    id: 'req2',
    patientName: 'Luis Fernandez',
    service: 'Empastes de Caries',
    requestedDate: '30/08/2024',
    requestedTime: '12:30:00',
  },
  {
    id: 'req3',
    patientName: 'Maria Rodriguez',
    service: 'Revisiones Generales',
    requestedDate: '02/09/2024',
    requestedTime: '15:00:00',
  },
];
