'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bell, CheckCircle, UserPlus } from 'lucide-react';

const notifications = [
  {
    id: 1,
    icon: <UserPlus className="h-5 w-5 text-blue-500" />,
    title: "Nueva solicitud de cita",
    description: "Ana García ha solicitado una cita para Limpieza Dental.",
    time: "Hace 5 minutos",
    read: false,
  },
  {
    id: 2,
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    title: "Cita Confirmada",
    description: "La cita de Carlos Méndez ha sido completada.",
    time: "Hace 2 horas",
    read: false,
  },
  {
    id: 3,
    icon: <Bell className="h-5 w-5 text-yellow-500" />,
    title: "Recordatorio de Cita",
    description: "Recordatorio: Jorge Herrera tiene una cita mañana a las 14:00.",
    time: "Hace 1 día",
    read: true,
  },
  {
    id: 4,
    icon: <UserPlus className="h-5 w-5 text-blue-500" />,
    title: "Nueva solicitud de cita",
    description: "Luis Fernandez ha solicitado una cita.",
    time: "Hace 2 días",
    read: true,
  },
];


export default function AdminNotificationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificaciones</CardTitle>
        <CardDescription>Centro de notificaciones sobre citas y actividades de pacientes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start gap-4 p-4 rounded-lg border ${
                !notification.read ? 'bg-primary/5' : 'bg-transparent'
              }`}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                  {notification.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </div>
               {!notification.read && <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
