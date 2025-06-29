'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import AdminSidebar from '@/components/admin/admin-sidebar';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserCircle } from 'lucide-react';
import ChatbotWidget from '@/components/chatbot-widget';

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isAuthRoute = ['/admin/login', '/admin/forgot-password'].includes(pathname);
    const isAdminDashboardRoute = pathname.startsWith('/admin') && !isAuthRoute;

    if (isAdminDashboardRoute) {
        const pageTitles: { [key: string]: string } = {
            '/admin/dashboard': 'Historial de Citas',
            '/admin/requests': 'Solicitudes de Reserva',
            '/admin/calendar': 'Calendario de Citas',
            '/admin/notifications': 'Notificaciones',
            '/admin/reports': 'Reportes',
            '/admin': 'Panel de Administración',
        };
        const title = pageTitles[pathname] || 'Panel de Administración';

        return (
            <div className="flex min-h-screen w-full bg-muted/40">
                <AdminSidebar />
                <div className="flex-1 flex flex-col">
                    <header className="bg-background shadow-sm border-b flex items-center justify-between h-[65px] px-6 shrink-0">
                        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
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

    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <AppFooter />
            <ChatbotWidget />
        </div>
    );
}
