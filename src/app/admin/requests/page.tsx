import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminRequestsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solicitudes de Reserva</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Aquí se mostrarán las solicitudes de reserva pendientes.</p>
      </CardContent>
    </Card>
  );
}
