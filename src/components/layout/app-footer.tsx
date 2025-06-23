"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, MapPin, Star, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { Progress } from '../ui/progress';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const LegalContentModal = ({ triggerText, title, children }: { triggerText: string, title: string, children: React.ReactNode }) => (
    <Dialog>
        <DialogTrigger asChild>
            <button className="hover:text-white transition-colors text-sm text-left">{triggerText}</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl bg-[#111827] text-gray-300 border-gray-700">
            <DialogHeader>
                <DialogTitle className="text-2xl text-white">{title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] pr-4">
                <div className="space-y-4 text-gray-400">
                    {children}
                </div>
            </ScrollArea>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="outline" className="bg-gray-700 border-gray-600 hover:bg-gray-600">
                        Cerrar
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);

const AppFooter = () => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    const ratingDistribution = [
      { stars: 5, percentage: 82, count: 1250 },
      { stars: 4, percentage: 11, count: 168 },
      { stars: 3, percentage: 4, count: 61 },
      { stars: 2, percentage: 2, count: 30 },
      { stars: 1, percentage: 1, count: 15 },
    ];
  
    const totalRatings = ratingDistribution.reduce((acc, curr) => acc + curr.count, 0);

    const handleRating = (rate: number) => {
        setSelectedRating(rate);
        // In a real app, you would send this rating to a server and update the distribution.
        // For this simulation, the percentages are static.
    };

    return (
        <footer className="bg-[#111827] text-gray-300">
            <div className="container mx-auto px-6 py-16">
                <div className="md:flex md:justify-between">
                    {/* Columnas de Enlaces */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:flex-1">
                        <div>
                            <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Sobre ArtDent</h3>
                            <ul className="space-y-3">
                                <li><Link href="/nosotros" className="hover:text-white transition-colors text-sm">Nosotros</Link></li>
                                <li><Link href="/servicios" className="hover:text-white transition-colors text-sm">Servicios</Link></li>
                                <li><Link href="/faq" className="hover:text-white transition-colors text-sm">Preguntas Frecuentes</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Legal</h3>
                            <ul className="space-y-3 flex flex-col items-start">
                                <li>
                                    <LegalContentModal triggerText="Términos y Condiciones" title="Términos y Condiciones">
                                        <h4 className="text-xl font-semibold text-white pt-4">1. Propósito del Sistema</h4>
                                        <p>Este sistema está diseñado para facilitar la programación de citas para los servicios dentales ofrecidos por ArtDent.</p>
                                        <h4 className="text-xl font-semibold text-white pt-4">2. Pago de la Reserva</h4>
                                        <p>Para confirmar su cita, se requiere el pago completo del servicio seleccionado a través de nuestra plataforma de pago segura (PayPal). Este pago corresponde al costo total del tratamiento reservado.</p>
                                        <h4 className="text-xl font-semibold text-white pt-4">3. Política de Cancelación y Reembolso</h4>
                                        <p>Actualmente, las reservas realizadas y pagadas a través de este sistema no son reembolsables. No se realizarán devoluciones por cancelaciones o inasistencias. Agradecemos su comprensión.</p>
                                        <h4 className="text-xl font-semibold text-white pt-4">4. Exactitud de la Información</h4>
                                        <p>Usted es responsable de proporcionar información precisa y completa al momento de la reserva, incluyendo su nombre, información de contacto y detalles de la cita.</p>
                                        <h4 className="text-xl font-semibold text-white pt-4">5. Confirmación de la Cita</h4>
                                        <p>Recibirá una confirmación por correo electrónico una vez que su reserva y pago hayan sido procesados exitosamente. Si no recibe una confirmación, por favor póngase en contacto con nuestra clínica.</p>
                                    </LegalContentModal>
                                </li>
                                <li>
                                    <LegalContentModal triggerText="Política de Privacidad" title="Política de Privacidad">
                                        <p>En ArtDent, estamos comprometidos a proteger la privacidad de nuestros pacientes. Esta política describe cómo manejamos su información personal. Recopilamos información como nombre, contacto y historial médico para proporcionar atención dental de calidad. Esta información se mantiene confidencial y no se comparte con terceros sin su consentimiento, excepto cuando lo exija la ley. Utilizamos medidas de seguridad para proteger sus datos. Al utilizar nuestros servicios, usted acepta esta política.</p>
                                    </LegalContentModal>
                                </li>
                                <li className="mt-4">
                                     <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="border border-gray-400 rounded-md p-2 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors text-sm w-full">
                                                <BookOpen className="h-5 w-5 flex-shrink-0" />
                                                <span className="text-center">Libro de Reclamaciones</span>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md bg-[#111827] text-gray-300 border-gray-700">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl text-white">Libro de Reclamaciones</DialogTitle>
                                            </DialogHeader>
                                            <p className="text-sm text-gray-400">Este es un espacio para que nuestros pacientes puedan registrar sus quejas o reclamos formalmente. Por favor, complete el formulario correspondiente en nuestra clínica o contáctenos directamente para asistirlo.</p>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button type="button" variant="outline" className="bg-gray-700 border-gray-600 hover:bg-gray-600">Cerrar</Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Contáctanos</h3>
                            <ul className="space-y-3 text-sm">
                                <li><p>Av. Sonrisa 123, Miraflores, Lima</p></li>
                                <li><p>(01) 555-1234</p></li>
                                <li><p>contacto@artdent.com</p></li>
                            </ul>
                        </div>
                    </div>
                    {/* Redes Sociales */}
                    <div className="mt-8 md:mt-0 md:ml-12">
                        <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/artdent._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></a>
                            <a href="https://www.facebook.com/ARTDENT000" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-gray-700" />
                
                {/* Indicadores de Confianza */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
                    <div className="flex items-center justify-center gap-3">
                        <ShieldCheck className="h-7 w-7 text-green-400"/>
                        <span>Pagos 100% Seguros</span>
                    </div>
                    <a href="https://maps.app.goo.gl/XKP4sGXNDNKpaZMb6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                        <MapPin className="h-7 w-7 text-blue-400"/>
                        <span>Ubicación Conveniente</span>
                    </a>
                    {/* Sistema de Calificación */}
                     <Dialog>
                        <DialogTrigger asChild>
                            <button className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                                <Star className="h-7 w-7 text-yellow-400"/>
                                <span>Servicio de Calidad</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-[#111827] text-gray-300 border-gray-700">
                             <DialogHeader>
                                <DialogTitle className="text-2xl text-white">Calidad de Servicio</DialogTitle>
                                <p className="text-sm text-gray-400">Basado en {totalRatings.toLocaleString('es-PE')} opiniones.</p>
                            </DialogHeader>
                            <div className="space-y-4 my-4">
                                <div className="flex items-center justify-center gap-1" onMouseLeave={() => setHoveredRating(0)}>
                                    {[...Array(5)].map((_, index) => {
                                        const ratingValue = index + 1;
                                        return (
                                            <Star
                                                key={ratingValue}
                                                className={cn(
                                                    "h-8 w-8 cursor-pointer transition-colors",
                                                    ratingValue <= (hoveredRating || selectedRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                                                )}
                                                onMouseEnter={() => setHoveredRating(ratingValue)}
                                                onClick={() => handleRating(ratingValue)}
                                            />
                                        );
                                    })}
                                </div>
                                <div className="space-y-2 text-xs">
                                    {ratingDistribution.map(item => (
                                        <div key={item.stars} className="flex items-center gap-2">
                                            <span className="text-gray-400 w-16">{item.stars} estrellas</span>
                                            <Progress value={item.percentage} className="w-full h-2 bg-gray-600" indicatorClassName="bg-yellow-400"/>
                                            <span className="text-gray-400 w-8 text-right">{item.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                                {selectedRating > 0 && <p className="text-center text-green-400 text-sm pt-2">¡Gracias por tu calificación de {selectedRating} estrellas!</p>}
                            </div>
                             <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="outline" className="bg-gray-700 border-gray-600 hover:bg-gray-600">Cerrar</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Métodos de Pago */}
                <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4 my-10">
                    <p className="text-sm w-full text-center md:w-auto">Operamos con:</p>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa Logo" width={80} height={26} className="h-auto object-contain" />
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal Logo" width={95} height={26} className="h-auto object-contain" />
                </div>

                <hr className="my-10 border-gray-700" />

                <div className="text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Clínica ArtDent. Todos los derechos reservados. | RUC: 20100123763</p>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
