"use client";

import React, { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, CreditCard, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import type { Service } from '@/types';
import PayPalLogo from '@/components/img/paypal-logo';

const appointmentFormSchema = z.object({
  dni: z.string().min(8, "El DNI debe tener al menos 8 caracteres.").max(15, "El DNI no debe exceder los 15 caracteres."),
  email: z.string().email("Correo electrónico inválido."),
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres."),
  celular: z.string().min(7, "El celular debe tener al menos 7 dígitos.").regex(/^\+?[0-9\s-()]+$/, "Número de celular inválido."),
  fechaCita: z.date({
    required_error: "La fecha de la cita es obligatoria.",
  }),
  horaCita: z.string().min(1, "La hora de la cita es obligatoria.").regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato de hora inválido (HH:MM)."),
  motivoServicio: z.string({ required_error: "Debe seleccionar un motivo/servicio."}),
});

type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

const AppointmentForm: React.FC = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [totalPagar, setTotalPagar] = useState<number>(0);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      dni: "",
      email: "",
      nombre: "",
      apellido: "",
      celular: "",
      horaCita: "",
      motivoServicio: undefined,
    },
  });

  const handleServiceChange = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(service);
      setTotalPagar(service.price);
      form.setValue("motivoServicio", serviceId);
    } else {
      setSelectedService(null);
      setTotalPagar(0);
    }
  };
  
  const onSubmit: SubmitHandler<AppointmentFormData> = (data) => {
    console.log("Datos de la cita:", data);
    toast({
      title: "Cita Reservada (Simulación)",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Aquí iría la lógica para enviar los datos al backend
    // Por ahora, solo reiniciamos el formulario y el total
    form.reset();
    setSelectedService(null);
    setTotalPagar(0);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl rounded-xl">
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-headline text-primary">Reservar Cita</CardTitle>
        <CardDescription>Complete el formulario para agendar su cita en ArtDent.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="dni"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DNI del Paciente</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese el DNI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico del Paciente</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Ingrese el correo electrónico" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apellido"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="celular"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Ingrese su celular" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="motivoServicio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motivo (Servicio)</FormLabel>
                    <Select onValueChange={handleServiceChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar servicio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.title} - S/.{service.price.toFixed(2)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fechaCita"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha de Cita</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: es })
                            ) : (
                              <span>dd/mm/aaaa</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setDate(new Date().getDate() -1)) // Disable past dates
                          }
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="horaCita"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hora de Cita</FormLabel>
                    <FormControl>
                       <div className="relative">
                        <Input type="time" placeholder="--:--" {...field} className="pr-8"/>
                        <Clock className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormItem>
              <FormLabel>Total a pagar</FormLabel>
              <FormControl>
                <Input readOnly value={totalPagar > 0 ? `S/. ${totalPagar.toFixed(2)}` : 'S/. 0.00'} className="font-bold text-lg" />
              </FormControl>
            </FormItem>
            
            <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
              Reservar Cita y Proceder al Pago
            </Button>
          </CardContent>
        </form>
      </Form>
      <CardFooter className="p-6 flex-col space-y-4">
        <Button variant="outline" className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white py-6 text-lg" disabled>
          <PayPalLogo className="h-6 w-auto mr-2 fill-current" />
          Pagar con PayPal
        </Button>
        <Button variant="outline" className="w-full border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white py-6 text-lg" disabled>
          <CreditCard className="mr-2 h-6 w-6" />
          Tarjeta de débito o crédito
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Simulación de pago. Desarrollado por ArtDent.
        </p>
      </CardFooter>
    </Card>
  );
};

export default AppointmentForm;
