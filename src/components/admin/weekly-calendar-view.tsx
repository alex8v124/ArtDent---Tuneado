"use client";

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  addWeeks, 
  subWeeks,
  isSameDay,
  parse,
  isWithinInterval
} from 'date-fns';
import { es } from 'date-fns/locale';
import type { Appointment } from '@/types';
import { appointments } from '@/data/appointments';
import { ScrollArea } from '../ui/scroll-area';

const START_HOUR = 8;
const END_HOUR = 18; // 6 PM military time

const WeeklyCalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-09-04')); // Default to a week with appointments

  const weekStart = useMemo(() => startOfWeek(currentDate, { weekStartsOn: 1 }), [currentDate]);
  const weekEnd = useMemo(() => endOfWeek(currentDate, { weekStartsOn: 1 }), [currentDate]);

  const days = useMemo(() => eachDayOfInterval({ start: weekStart, end: weekEnd }), [weekStart, weekEnd]);
  const hours = useMemo(() => Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i), []);

  const goToPreviousWeek = () => setCurrentDate(subWeeks(currentDate, 1));
  const goToNextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const goToToday = () => setCurrentDate(new Date());

  const weekAppointments = useMemo(() => {
    return appointments.filter(app => {
      try {
        const appDate = parse(app.date, 'dd/MM/yyyy', new Date());
        return isWithinInterval(appDate, { start: weekStart, end: weekEnd });
      } catch (error) {
        console.error("Error parsing date for appointment:", app);
        return false;
      }
    });
  }, [weekStart, weekEnd]);

  const getAppointmentPosition = (app: Appointment) => {
    try {
      const startTime = parse(app.time, 'HH:mm:ss', new Date());
      const endTime = parse(app.endTime, 'HH:mm:ss', new Date());

      const startMinutes = startTime.getHours() * 60 + startTime.getMinutes();
      const endMinutes = endTime.getHours() * 60 + endTime.getMinutes();

      const totalDayMinutes = (END_HOUR - START_HOUR) * 60;
      const offsetMinutes = startMinutes - (START_HOUR * 60);

      const top = (offsetMinutes / totalDayMinutes) * 100;
      const height = ((endMinutes - startMinutes) / totalDayMinutes) * 100;

      return {
        top: `${top}%`,
        height: `${height}%`,
      };
    } catch (error) {
        console.error("Error calculating position for appointment:", app);
        return { top: '0%', height: '0%'};
    }
  };

  const headerText = `Semana: ${format(currentDate, 'ww', { locale: es, weekStartsOn: 1 })} - Del ${format(weekStart, 'd')} al ${format(weekEnd, 'd \'de\' MMMM', { locale: es })}`;

  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-foreground">
            {format(currentDate, 'yyyy', { locale: es })}
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            {headerText}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={goToToday}>Hoy</Button>
          <Button variant="outline" size="icon" onClick={goToPreviousWeek} aria-label="Semana anterior">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToNextWeek} aria-label="Siguiente semana">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="grid grid-cols-[60px_repeat(7,minmax(140px,1fr))] border-t">
            {/* Time Gutter */}
            <div className="flex flex-col sticky left-0 bg-background z-10 border-r">
              <div className="h-16 flex-shrink-0"></div> {/* Spacer for day headers */}
              {hours.map(hour => (
                <div key={hour} className="h-24 flex items-start justify-end p-2 border-t flex-shrink-0">
                  <span className="text-xs text-muted-foreground -mt-2">
                    {format(new Date(0, 0, 0, hour), 'h aaaa', { locale: es })}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            {days.map((day) => (
              <div key={day.toString()} className="relative flex flex-col border-r last:border-r-0">
                <div className="h-16 flex-shrink-0 sticky top-0 bg-background z-10 flex items-center justify-center p-2 text-center border-b">
                  <span className="font-semibold text-foreground capitalize text-sm">{format(day, 'eee', { locale: es })}</span>
                  <span className="text-2xl font-bold ml-2 text-muted-foreground">{format(day, 'dd')}</span>
                </div>
                
                <div className="relative flex-grow h-[calc(24rem*2)]">
                  {/* Grid lines */}
                  {hours.slice(0, -1).map(hour => (
                    <div key={`line-${hour}`} className="h-24 border-t"></div>
                  ))}
                  
                  {/* Appointments */}
                  {weekAppointments
                    .filter(app => isSameDay(parse(app.date, 'dd/MM/yyyy', new Date()), day))
                    .map(app => {
                      const { top, height } = getAppointmentPosition(app);
                      return (
                        <div
                          key={app.id}
                          className={`absolute w-full p-2 rounded-md text-[11px] leading-tight flex flex-col justify-center overflow-hidden z-20 ${app.color}`}
                          style={{ top, height, left: '2px', right: '2px', width: 'calc(100% - 4px)'}}
                        >
                          <p className="font-bold truncate">{app.reason}</p>
                          <p className="truncate">{format(parse(app.time, 'HH:mm:ss', new Date()), 'p', { locale: es })} - {format(parse(app.endTime, 'HH:mm:ss', new Date()), 'p', { locale: es })}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default WeeklyCalendarView;
