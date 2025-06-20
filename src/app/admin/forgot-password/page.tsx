
import ForgotPasswordForm from '@/components/admin/forgot-password-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recuperar Contraseña - Administración ArtDent',
  description: 'Página de recuperación de contraseña para el personal de ArtDent.',
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <ForgotPasswordForm />
    </div>
  );
}
