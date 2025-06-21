"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ClipboardList,
  CalendarDays,
  History,
  Bell,
  LineChart,
  LogOut,
} from 'lucide-react';
import ToothIcon from '@/components/img/tooth-icon';
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
    <aside className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="p-6 flex items-center gap-3 border-b border-slate-700">
        <ToothIcon className="h-8 w-8" />
        <span className="text-xl font-bold">ArtDent</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              'hover:bg-slate-700 text-slate-300',
              pathname.startsWith(item.href) && 'bg-slate-900 text-white'
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-slate-700">
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Salir
          </button>
        </form>
      </div>
    </aside>
  );
};

export default AdminSidebar;
