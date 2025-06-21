
import ForgotPasswordForm from '@/components/admin/forgot-password-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recuperar Contraseña - Administración ArtDent',
  description: 'Página de recuperación de contraseña para el personal de ArtDent.',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
