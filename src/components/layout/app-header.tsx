
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import artDentLogo from '@/components/img/img_logo.png';
import { cn } from '@/lib/utils';
import AppFooter from './app-footer';
import AdminSidebar from '../admin/admin-sidebar';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/faq', label: 'FAQ' },
  { href: '/reservar-cita', label: 'Reservar Cita' },
];

const AppHeaderComponent = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-background text-foreground shadow-md sticky top-0 z-50">
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
        
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                isMounted && pathname === item.href ? "text-primary font-semibold" : "text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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


export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (!isAdminRoute) {
    // Render public layout
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <AppHeaderComponent />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <AppFooter />
      </div>
    );
  }

  // It's an admin route, now check if it's public or protected
  const publicAdminRoutes = ['/admin/login', '/admin/forgot-password'];
  if (publicAdminRoutes.includes(pathname)) {
    // Render public admin layout (centered form)
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        {children}
      </div>
    );
  }

  // Render protected admin layout (dashboard)
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Panel de Control - Clínica
            </h1>
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}

const AppHeader = AppHeaderComponent;
export default AppHeader;
