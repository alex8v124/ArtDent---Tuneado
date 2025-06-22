"use client"

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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface RescheduleModalProps {
  appointment: Appointment;
}

const DetailRow = ({ label, value }: { label: string; value?: string }) => (
    <div className="grid grid-cols-3 border-b">
        <div className="bg-primary text-primary-foreground font-semibold p-2 col-span-1">{label}</div>
        <div className="bg-muted/30 p-2 col-span-2 text-foreground">{value || 'N/A'}</div>
    </div>
);

const RescheduleModal: React.FC<RescheduleModalProps> = ({ appointment }) => {
  const [date, setDate] = React.useState<Date | undefined>();
  const { toast } = useToast();

  const handleConfirm = () => {
    toast({
        title: "Reprogramación Exitosa",
        description: `La cita de ${appointment.patientName} ha sido reprogramada.`,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Clock className="mr-2 h-4 w-4" />
          Reprogramar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Reprogramar Reserva</DialogTitle>
        </DialogHeader>
        <div className="my-4 text-sm border rounded-lg overflow-hidden">
            <DetailRow label="ID Reserva" value={appointment.id} />
            <DetailRow label="DNI del Paciente" value={appointment.patientDni} />
            <DetailRow label="Nombre del Paciente" value={appointment.patientName} />
            <DetailRow label="Fecha Actual" value={appointment.date} />
            <DetailRow label="Hora Actual" value={appointment.time} />
            <DetailRow label="Servicio" value={appointment.reason} />
        </div>
        
        <div className="grid grid-cols-2 gap-6 items-start mt-6">
            <div className="space-y-2">
                <Label htmlFor="new-date">Nueva Fecha:</Label>
                 <Popover>
                      <PopoverTrigger asChild>
                          <Button
                            id="new-date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-between text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            {date ? (
                              format(date, "dd / MM / yyyy", { locale: es })
                            ) : (
                              <span>dd / mm / aaaa</span>
                            )}
                            <CalendarIcon className="h-4 w-4 opacity-50" />
                          </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date(new Date().setDate(new Date().getDate() -1))
                          }
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
            </div>
             <div className="space-y-2">
                <Label htmlFor="new-time">Nueva Hora:</Label>
                <div className="relative">
                    <Input id="new-time" type="time" placeholder="hh:mm:ss" />
                    <Clock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                </div>
            </div>
        </div>

        <DialogFooter className="mt-8 gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Cancelar
            </Button>
          </DialogClose>
           <DialogClose asChild>
            <Button type="button" variant="default" className="bg-green-600 hover:bg-green-700" onClick={handleConfirm}>
              Confirmar reprogramación
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RescheduleModal;
