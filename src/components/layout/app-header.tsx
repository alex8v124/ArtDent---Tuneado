
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import artDentLogo from '@/components/img/img_logo.png';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/faq', label: 'FAQ' },
  { href: '/reservar-cita', label: 'Reservar Cita' },
];

const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-sm text-foreground shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src={artDentLogo} 
            alt="ArtDent Logo" 
            width={40} 
            height={40} 
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            ArtDent
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
                <Link href="/admin/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Iniciar Sesión
                </Link>
            </Button>
        </div>
        {/* Aquí se podría agregar un menú hamburguesa para móviles si se desea más adelante */}
      </div>
    </header>
  );
};

export default AppHeader;
