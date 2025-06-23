"use client";

import React, { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import PayPalLogo from '@/components/img/paypal-logo';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { motion } from 'framer-motion';

const appointmentFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres."),
  dni: z.string().min(8, "El DNI debe tener al menos 8 caracteres.").max(15, "El DNI no debe exceder los 15 caracteres."),
  celular: z.string().min(7, "El celular debe tener al menos 7 dígitos.").regex(/^\+?[0-9\s-()]+$/, "Número de celular inválido."),
  email: z.string().email("Correo electrónico inválido."),
  motivoServicio: z.string({ required_error: "Debe seleccionar un motivo/servicio."}).min(1, "Debe seleccionar un motivo/servicio."),
  fechaCita: z.date({
    required_error: "La fecha de la cita es obligatoria.",
  }),
  horaCita: z.string().min(1, "La hora de la cita es obligatoria.").regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato de hora inválido (HH:MM)."),
  terminos: z.boolean().refine(val => val === true, {
    message: "Debe aceptar los términos y condiciones.",
  }),
});

type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

const PeruFlagIcon = () => (
  <svg width="24" height="18" viewBox="0 0 3 2" className="mr-2 rounded-sm">
    <rect width="1" height="2" x="0" y="0" fill="#D91023" />
    <rect width="1" height="2" x="1" y="0" fill="#FFFFFF" />
    <rect width="1" height="2" x="2" y="0" fill="#D91023" />
  </svg>
);

const AppointmentForm: React.FC = () => {
  const { toast } = useToast();
  const [totalPagar, setTotalPagar] = useState<number>(0);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      dni: "",
      celular: "",
      email: "",
      motivoServicio: "",
      terminos: false,
      horaCita: "",
    },
  });

  const selectedServiceId = form.watch('motivoServicio');

  useEffect(() => {
    if (selectedServiceId) {
      const service = services.find(s => s.id === selectedServiceId);
      if (service) {
        setTotalPagar(service.price);
      } else {
        setTotalPagar(0);
      }
    } else {
        setTotalPagar(0);
    }
  }, [selectedServiceId]);
  
  const onSubmit: SubmitHandler<AppointmentFormData> = (data) => {
    console.log("Datos de la cita:", data);
    toast({
      title: "Cita Reservada (Simulación)",
      description: "Su pago se ha procesado correctamente. ¡Gracias por confiar en ArtDent!",
    });
    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Card className="w-full max-w-4xl mx-auto shadow-none border-none bg-transparent">
        <CardHeader className="text-center p-6">
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary">Reservar cita</CardTitle>
          <CardDescription className="text-muted-foreground max-w-md mx-auto">
            Nuestros clientes son importantes para nosotros, por lo que ahora pueden generar una reserva de cita y pagarlo online.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardContent className="p-6 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Ingrese su nombre" {...field} className="py-6"/>
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
                        <FormControl>
                          <Input placeholder="Ingrese su apellido" {...field} className="py-6"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="dni"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Ingrese su DNI" {...field} className="py-6"/>
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
                      <div className="flex items-center">
                        <div className="flex items-center p-3 rounded-md border border-input bg-background">
                           <PeruFlagIcon />
                           <span className="text-sm text-muted-foreground">+51</span>
                        </div>
                        <FormControl>
                          <Input type="tel" placeholder="Ingrese su celular" {...field} className="py-6 rounded-l-none border-l-0"/>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Ingrese su correo electronico" {...field} className="py-6"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="md:col-span-2">
                   <FormField
                    control={form.control}
                    name="motivoServicio"
                    render={({ field }) => (
                      <FormItem>
                         <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="py-6">
                              <SelectValue placeholder="Seleccione el servicio que desea recibir" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map(service => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Total a pagar</Label>
                  <Input readOnly value={totalPagar > 0 ? `S/. ${totalPagar.toFixed(2)}` : 'S/. 0.00'} className="font-bold text-lg text-right py-6 bg-muted/30" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fechaCita"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                       <FormLabel className="text-xs text-muted-foreground mb-1">Elija el dia que quiere reservar</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-between text-left font-normal py-6",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd-MM-yyyy", { locale: es })
                              ) : (
                                <span>dd-mm-yyyy</span>
                              )}
                              <CalendarIcon className="h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setDate(new Date().getDate() -1))
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
                      <FormLabel className="text-xs text-muted-foreground mb-1">Elija la hora que quiere reservar</FormLabel>
                      <FormControl>
                         <div className="relative">
                          <Input type="time" {...field} className="py-6 pr-8" placeholder="hh:mm:ss"/>
                          <Clock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="terminos"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-muted-foreground">
                        Acepto los{' '}
                        <Link href="/terminos" className="text-primary hover:underline">
                          Términos y Condiciones
                        </Link>
                        {' '}de la reserva en linea.
                      </FormLabel>
                       <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
            </CardContent>
            <div className="px-6">
              <Button type="submit" className="w-full text-lg py-7 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                <PayPalLogo className="h-6 w-auto mr-2 fill-current" />
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </motion.div>
  );
};

export default AppointmentForm;
