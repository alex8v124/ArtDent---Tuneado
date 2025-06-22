import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { appointmentRequests } from '@/data/requests';
import { Check, X } from 'lucide-react';

export default function AdminRequestsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solicitudes de Reserva Pendientes</CardTitle>
        <CardDescription>Revise y gestione las nuevas solicitudes de citas de los pacientes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Paciente</TableHead>
              <TableHead>Servicio Solicitado</TableHead>
              <TableHead>Fecha Solicitada</TableHead>
              <TableHead>Hora Solicitada</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointmentRequests.length > 0 ? (
              appointmentRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.patientName}</TableCell>
                  <TableCell>{request.service}</TableCell>
                  <TableCell>{request.requestedDate}</TableCell>
                  <TableCell>{request.requestedTime}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-100 hover:text-green-700">
                      <Check className="mr-2 h-4 w-4" />
                      Aprobar
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-100 hover:text-red-700">
                      <X className="mr-2 h-4 w-4" />
                      Rechazar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24">
                  No hay solicitudes de reserva pendientes.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
