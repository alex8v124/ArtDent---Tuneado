"use client"

import type { Metadata } from 'next';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { appointments } from '@/data/appointments';
import { Badge } from '@/components/ui/badge';
import AppointmentDetailsModal from '@/components/admin/appointment-details-modal';
import RescheduleModal from '@/components/admin/reschedule-modal';
import type { Appointment } from '@/types';


// Metadata can still be exported from a client component
// export const metadata: Metadata = {
//   title: 'Historial de Citas - ArtDent',
//   description: 'Ver el historial de citas de la clínica.',
// };

export default function AdminDashboardPage() {
  const getStatusVariant = (status: 'Completed' | 'Pending' | 'Cancelled'): "default" | "secondary" | "destructive" => {
    switch (status) {
      case 'Completed':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Citas</CardTitle>
        <CardDescription>Un registro de todas las citas pasadas y pendientes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Paciente</TableHead>
              <TableHead>Fecha de Cita</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Motivo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment: Appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.patientName}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(appointment.status)}>{appointment.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  {appointment.action === 'details' ? (
                     <AppointmentDetailsModal appointment={appointment} />
                  ) : (
                    <RescheduleModal appointment={appointment} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}