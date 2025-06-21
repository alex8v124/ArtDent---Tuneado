'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/admin-sidebar';

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const publicAdminRoutes = ['/admin/login', '/admin/forgot-password'];

  if (publicAdminRoutes.includes(pathname)) {
    // Layout for public pages like login and forgot password.
    // This centers the form component on the page.
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    );
  }

  // Layout for authenticated admin pages.
  return (
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
  );
}
