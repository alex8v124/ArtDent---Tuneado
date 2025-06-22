import type { Appointment } from '@/types';

export const appointments: Appointment[] = [
  {
    id: '22232',
    patientName: 'Carlos Méndez',
    patientDni: '42429425',
    date: '28/08/2024',
    time: '11:00:00',
    endTime: '11:45:00',
    reason: 'Consulta de diagnóstico',
    description: 'El paciente acude para una consulta inicial para diagnosticar molestias en la zona lumbar.',
    assignedDoctor: 'Dr. Jorge Santos',
    additionalNotes: 'El paciente reporta dolor persistente desde hace 2 semanas.',
    doctorObservations: 'Se recomienda realizar una radiografía lumbar y una evaluación posterior en 2 semanas.',
    status: 'Completed',
    action: 'details',
    color: 'bg-blue-100 text-blue-800 border border-blue-200'
  },
  {
    id: '22231',
    patientName: 'Evangelina Oriol Alba Bautista',
    patientDni: '42429152',
    date: '28/08/2024',
    time: '08:00:00',
    endTime: '08:30:00',
    reason: 'Rehabilitación Oral',
    description: 'Cita de seguimiento para ajuste de prótesis.',
    assignedDoctor: 'Dra. Ana Solis',
    additionalNotes: 'El paciente no presenta molestias.',
    doctorObservations: 'Ajuste menor realizado. Próximo control en 6 meses.',
    status: 'Completed',
    action: 'reschedule',
    color: 'bg-purple-100 text-purple-800 border border-purple-200'
  },
  {
    id: '22233',
    patientName: 'Fernanda Alvarez',
    patientDni: '78945612',
    date: '27/08/2024',
    time: '18:15:00',
    endTime: '18:45:00',
    reason: 'Control de Enfermedad Crónica',
    description: 'Control periódico de ortodoncia.',
    assignedDoctor: 'Dr. Luis Torres',
    status: 'Completed',
    action: 'details',
    color: 'bg-gray-100 text-gray-800 border border-gray-200'
  },
   {
    id: '22234',
    patientName: 'Jorge Herrera',
    patientDni: '12345678',
    date: '29/08/2024',
    time: '14:00:00',
    endTime: '14:30:00',
    reason: 'Limpieza Dental',
    description: 'Limpieza dental profunda programada.',
    assignedDoctor: 'Higienista Dental',
    status: 'Pending',
    action: 'reschedule',
    color: 'bg-teal-100 text-teal-800 border border-teal-200'
  },
  {
    id: '22235',
    patientName: 'Sofia Castillo',
    patientDni: '87654321',
    date: '26/08/2024',
    time: '09:30:00',
    endTime: '10:15:00',
    reason: 'Tratamiento de Conducto',
    description: 'Paciente no se presentó a la cita.',
    assignedDoctor: 'Dr. Jorge Santos',
    status: 'Cancelled',
    action: 'details',
    color: 'bg-red-100 text-red-800 border border-red-200'
  },
  // New appointments based on the provided image
  {
    id: 'wkly-1',
    patientName: 'Lucia Gomez',
    patientDni: '11223344',
    date: '03/09/2024', // Martes
    time: '10:00:00',
    endTime: '10:45:00',
    reason: 'Consulta de seguimiento',
    description: 'Seguimiento post-operatorio.',
    assignedDoctor: 'Dra. Ana Solis',
    status: 'Pending',
    action: 'reschedule',
    color: 'bg-yellow-100 text-yellow-800 border border-yellow-200'
  },
  {
    id: 'wkly-2',
    patientName: 'Mario Vargas',
    patientDni: '55667788',
    date: '03/09/2024', // Martes
    time: '11:15:00',
    endTime: '12:30:00',
    reason: 'Colocación de brackets',
    description: 'Inicio de tratamiento de ortodoncia.',
    assignedDoctor: 'Dr. Luis Torres',
    status: 'Pending',
    action: 'reschedule',
    color: 'bg-pink-100 text-pink-800 border border-pink-200'
  },
  {
    id: 'wkly-3',
    patientName: 'Elena Rios',
    patientDni: '99887766',
    date: '03/09/2024', // Martes
    time: '12:45:00',
    endTime: '13:30:00',
    reason: 'Evaluación de Caries Dentales',
    description: 'Revisión y plan de tratamiento para caries.',
    assignedDoctor: 'Dr. Jorge Santos',
    status: 'Pending',
    action: 'reschedule',
    color: 'bg-green-100 text-green-800 border border-green-200'
  },
  {
    id: 'wkly-4',
    patientName: 'Ricardo Palma',
    patientDni: '12123434',
    date: '05/09/2024', // Jueves
    time: '10:00:00',
    endTime: '10:45:00',
    reason: 'Dolor dental persistente',
    description: 'Diagnóstico de dolor en molar superior derecho.',
    assignedDoctor: 'Dr. Jorge Santos',
    status: 'Pending',
    action: 'reschedule',
    color: 'bg-blue-100 text-blue-800 border border-blue-200'
  },
  {
    id: 'wkly-5',
    patientName: 'Isabel Flores',
    patientDni: '34345656',
    date: '06/09/2024', // Viernes
    time: '10:00:00',
    endTime: '10:45:00',
    reason: 'Limpieza Dental',
    description: 'Limpieza dental de rutina.',
    assignedDoctor: 'Higienista Dental',
    status: 'Pending',
    action: 'reschedule',
    color: 'bg-teal-100 text-teal-800 border border-teal-200'
  },
];
