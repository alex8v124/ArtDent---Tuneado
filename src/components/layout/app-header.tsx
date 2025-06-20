
import React from 'react';
import Link from 'next/link';
import ToothIcon from '@/components/icons/tooth-icon';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <ToothIcon className="h-8 w-8 text-primary-foreground group-hover:text-accent transition-colors duration-300" />
          <h1 className="text-2xl font-headline font-bold group-hover:text-accent transition-colors duration-300">
            Centro de Información ArtDent
          </h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-2 md:space-x-3">
          <Link href="/servicios" className="text-sm font-medium hover:text-accent transition-colors px-3 py-2 rounded-md">
            Servicios
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-accent transition-colors px-3 py-2 rounded-md">
            Preguntas Frecuentes
          </Link>
          <Link href="/asistente-ia" className="text-sm font-medium hover:text-accent transition-colors px-3 py-2 rounded-md">
            Asistente IA
          </Link>
          <Link href="/reservar-cita" className="text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors px-4 py-2 rounded-md shadow-sm">
            Reservar Cita
          </Link>
          <Button asChild className="text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors px-4 py-2 rounded-md shadow-sm">
            <Link href="/admin/login">
              <LogIn className="mr-2 h-4 w-4" />
              Iniciar Sesión
            </Link>
          </Button>
        </nav>
        {/* Aquí se podría agregar un menú hamburguesa para móviles si se desea más adelante */}
      </div>
    </header>
  );
};

export default AppHeader;
