import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminCalendarPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendario de Citas</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Aquí se mostrará el calendario con todas las citas agendadas.</p>
      </CardContent>
    </Card>
  );
}
