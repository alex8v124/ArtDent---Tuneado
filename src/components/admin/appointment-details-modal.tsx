import React from 'react';
import type { Appointment } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';
import { Eye, Edit } from 'lucide-react';

interface AppointmentDetailsModalProps {
  appointment: Appointment;
}

const DetailRow = ({ label, value }: { label: string; value?: string }) => (
  <>
    <div className="bg-primary/10 text-primary font-semibold p-3 rounded-l-md">{label}</div>
    <div className="bg-muted/50 p-3 rounded-r-md text-foreground">{value || 'N/A'}</div>
  </>
);

const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({ appointment }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          Ver detalles
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle className="text-2xl font-bold text-primary">Detalles de la Cita</DialogTitle>
          <div className="flex items-center gap-4">
             <Badge variant="secondary">ID Reserva: {appointment.id}</Badge>
            <Button variant="outline" size="sm" className="bg-yellow-400 hover:bg-yellow-500 border-yellow-500 text-yellow-900">
              <Edit className="mr-2 h-4 w-4" />
              Editar Información
            </Button>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-[max-content_1fr] gap-x-0 gap-y-2 my-6 text-sm">
          <DetailRow label="DNI del Paciente" value={appointment.patientDni} />
          <DetailRow label="Nombre del Paciente" value={appointment.patientName} />
          <DetailRow label="Fecha de Cita" value={appointment.date} />
          <DetailRow label="Hora de Cita" value={appointment.time} />
          <DetailRow label="Motivo" value={appointment.reason} />
          <DetailRow label="Descripción" value={appointment.description} />
          <DetailRow label="Médico Asignado" value={appointment.assignedDoctor} />
          <DetailRow label="Notas Adicionales" value={appointment.additionalNotes} />
          <DetailRow label="Observaciones del Médico" value={appointment.doctorObservations} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDetailsModal;
