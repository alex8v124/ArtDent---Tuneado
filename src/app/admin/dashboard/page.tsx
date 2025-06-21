import type { Metadata } from 'next';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { appointments } from '@/data/appointments';
import { CheckCircle2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Historial de Citas - ArtDent',
  description: 'Ver el historial de citas de la clínica.',
};

export default function AdminDashboardPage() {
  const getStatusIcon = (status: string) => {
    if (status === 'Completed') {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    }
    // Placeholder for other statuses
    return <Users className="h-5 w-5 text-gray-500" />;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Citas</CardTitle>
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
              <TableHead className="text-center">Acciones</TableHead>
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
                  <div className="flex items-center gap-2">
                     <span>{appointment.status}</span>
                    {getStatusIcon(appointment.status)}
                  </div>
                </TableCell>
                <TableCell className="text-center space-x-2">
                  {appointment.action === 'details' ? (
                     <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                      Ver detalles
                    </Button>
                  ) : (
                    <Button size="sm" variant="default" className="bg-purple-600 hover:bg-purple-700">
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
