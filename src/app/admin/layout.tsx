import type { Metadata } from 'next';

import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import AdminSidebar from '@/components/admin/admin-sidebar';

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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-gray-50 dark:bg-gray-900">
        <div className="flex min-h-screen">
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
        <Toaster />
      </body>
    </html>
  );
}
