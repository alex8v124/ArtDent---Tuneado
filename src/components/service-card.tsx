"use client";

import React from 'react';
import type { Service } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 p-6 bg-card">
        {service.icon}
        <CardTitle className="text-xl font-headline text-primary">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
      </CardContent>
      <CardFooter className="p-6 border-t">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors">Leer Más</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] p-0">
            <ScrollArea className="max-h-[80vh]">
              <div className="p-6">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "h-12 w-12 text-primary" })}
                    <DialogTitle className="text-2xl font-headline text-primary">{service.title}</DialogTitle>
                  </div>
                </DialogHeader>
                {service.image && (
                  <div className="my-4 rounded-lg overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                      data-ai-hint={service.dataAiHint || "servicio dental"}
                    />
                  </div>
                )}
                <DialogDescription className="text-base text-foreground leading-relaxed">
                  {service.longDescription}
                </DialogDescription>
                <DialogFooter className="mt-6 sm:justify-end">
                   {/* Intencionalmente vacío o agregar un botón de cierre si DialogClose no es suficiente */}
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
