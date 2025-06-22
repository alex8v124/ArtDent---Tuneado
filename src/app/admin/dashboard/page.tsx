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
import { Button } from '@/components/ui/button';
import { appointments } from '@/data/appointments';
import { Badge } from '@/components/ui/badge';
import { Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Historial de Citas - ArtDent',
  description: 'Ver el historial de citas de la clínica.',
};

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
            {appointments.map((appointment) => (
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
                     <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver detalles
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline">
                      <Clock className="mr-2 h-4 w-4" />
                      Reprogramar
                    </Button>
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
