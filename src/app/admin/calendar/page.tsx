"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { appointments } from '@/data/appointments';
import { Badge } from '@/components/ui/badge';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

export default function AdminCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDateString = date ? format(date, 'dd/MM/yyyy') : '';
  
  const appointmentsForSelectedDay = appointments.filter(
    app => app.date === selectedDateString
  ).sort((a, b) => a.time.localeCompare(b.time));

  const appointmentDates = appointments.map(app => 
    parse(app.date, 'dd/MM/yyyy', new Date())
  );

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
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 flex justify-center">
        <Card>
          <CardContent className="p-0 flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
              locale={es}
              modifiers={{
                hasAppointment: appointmentDates,
              }}
              modifiersStyles={{
                hasAppointment: {
                  border: '2px solid hsl(var(--primary))',
                }
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Citas para el {selectedDateString || 'día seleccionado'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointmentsForSelectedDay.length > 0 ? (
                appointmentsForSelectedDay.map(app => (
                  <div key={app.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border">
                    <div>
                      <p className="font-bold text-lg">{app.time}</p>
                      <p className="font-medium text-foreground">{app.patientName}</p>
                      <p className="text-sm text-muted-foreground">{app.reason}</p>
                    </div>
                    <Badge variant={getStatusVariant(app.status)}>{app.status}</Badge>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted-foreground py-16">
                  <p className="text-lg">No hay citas para este día.</p>
                  <p className="text-sm">Seleccione otro día en el calendario.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
