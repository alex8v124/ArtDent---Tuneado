
import type { Metadata } from 'next';
import AdminLayoutClient from '@/components/admin/admin-layout-client';

export const metadata: Metadata = {
  title: {
    template: '%s | Panel de Administración ArtDent',
    default: 'Panel de Administración ArtDent',
  },
  description: 'Panel de control para administradores y secretarias de ArtDent.',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayoutClient>{children}</AdminLayoutClient>
  );
}
