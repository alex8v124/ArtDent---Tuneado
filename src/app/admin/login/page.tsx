import LoginForm from '@/components/admin/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar Sesión - Administración ArtDent',
  description: 'Página de inicio de sesión para el personal de ArtDent.',
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
