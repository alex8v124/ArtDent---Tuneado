"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ClipboardList,
  CalendarDays,
  History,
  Bell,
  LineChart,
  LogOut,
} from 'lucide-react';
import artDentLogo from '@/components/img/img_logo.png';
import { cn } from '@/lib/utils';
import { logout } from '@/lib/auth-actions';

const navItems = [
  { href: '/admin/requests', label: 'Solicitudes de Reserva', icon: ClipboardList },
  { href: '/admin/calendar', label: 'Calendario de citas', icon: CalendarDays },
  { href: '/admin/dashboard', label: 'Historial de Reservas', icon: History },
  { href: '/admin/notifications', label: 'Notificaciones', icon: Bell },
  { href: '/admin/reports', label: 'Reportes', icon: LineChart },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex-col border-r border-sidebar-border hidden md:flex">
      <div className="p-4 flex items-center gap-3 border-b border-sidebar-border h-[65px]">
        <Image src={artDentLogo} alt="ArtDent Logo" width={36} height={36} />
        <span className="text-xl font-bold text-foreground">ArtDent</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:translate-x-1',
              pathname.startsWith(item.href)
                ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold'
                : 'text-sidebar-foreground/80'
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="px-3 py-4 border-t border-sidebar-border">
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <LogOut className="h-5 w-5" />
            Cerrar Sesión
          </button>
        </form>
      </div>
    </aside>
  );
};

export default AdminSidebar;
