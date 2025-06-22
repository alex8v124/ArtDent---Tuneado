
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogIn, UserCircle } from 'lucide-react';
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
                pathname === item.href ? "text-primary font-semibold" : "text-foreground/70"
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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Returning null on the server and initial client render prevents hydration mismatch.
    // The correct layout will be rendered on the client after the component mounts.
    return null;
  }

  const isProtectedAdminRoute = pathname.startsWith('/admin') && !['/admin/login', '/admin/forgot-password'].includes(pathname);
  
  if (isProtectedAdminRoute) {
    // Render protected admin layout (dashboard)
    const pageTitles: { [key: string]: string } = {
      '/admin/dashboard': 'Historial de Citas',
      '/admin/requests': 'Solicitudes de Reserva',
      '/admin/calendar': 'Calendario de Citas',
      '/admin/notifications': 'Notificaciones',
      '/admin/reports': 'Reportes',
    };
    const title = pageTitles[pathname] || 'Panel de Administración';

    return (
      <div className="flex min-h-screen w-full bg-muted/40">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <header className="bg-background shadow-sm border-b flex items-center justify-between h-[65px] px-6 shrink-0">
            <h1 className="text-xl font-semibold text-foreground">
              {title}
            </h1>
            <div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-7 w-7 text-muted-foreground" />
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    );
  }
  
  // Render public layout for all other pages, including /admin/login and /admin/forgot-password
  return (
    <>
      <AppHeaderComponent />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <AppFooter />
    </>
  );
}

const AppHeader = AppHeaderComponent;
export default AppHeader;
