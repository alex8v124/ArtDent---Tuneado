"use client";

import React from 'react';
import type { Service } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden group">
      <CardHeader className="flex flex-row items-center gap-4 p-6 bg-card">
        {React.cloneElement(service.icon as React.ReactElement, { className: "h-10 w-10 text-primary group-hover:scale-110 transition-transform" })}
        <CardTitle className="text-xl font-headline text-primary">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
      </CardContent>
      <CardFooter className="p-6 border-t bg-muted/20">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors">Leer Más</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl p-0">
            <ScrollArea className="max-h-[90vh]">
              <div className="p-6 md:p-8">
                <DialogHeader className="mb-6">
                  <div className="flex items-start gap-4">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "h-12 w-12 text-primary flex-shrink-0 mt-1" })}
                    <div className="flex-grow">
                      <DialogTitle className="text-3xl lg:text-4xl font-headline text-primary">{service.title}</DialogTitle>
                    </div>
                  </div>
                </DialogHeader>
                
                {service.image && (
                  <div className="my-6 flex justify-center">
                    <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        width={800} 
                        height={450} 
                        className="w-full h-auto object-cover"
                        data-ai-hint={service.dataAiHint || "servicio dental"}
                      />
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8 mt-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-headline font-semibold text-foreground mb-4 border-b pb-2">
                      Descripción del Tratamiento
                    </h3>
                    <div 
                      className="text-base text-muted-foreground leading-relaxed space-y-4" 
                      dangerouslySetInnerHTML={{ __html: service.longDescription.replace(/\n/g, '<br /><br />') }} 
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <Card className="bg-muted/50 sticky top-8 border-primary/20 shadow-sm">
                      <CardHeader>
                          <CardTitle className="text-xl font-headline text-primary">Información Clave</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div>
                              <p className="text-sm font-medium text-foreground">Precio del Servicio</p>
                              <p className="text-3xl font-bold text-accent mt-1">S/. {service.price.toFixed(2)}</p>
                          </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <DialogFooter className="mt-8 pt-6 border-t">
                  <DialogClose asChild>
                      <Button type="button" variant="outline">
                          Cerrar
                      </Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
