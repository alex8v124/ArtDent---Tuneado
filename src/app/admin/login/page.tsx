import LoginForm from '@/components/admin/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar Sesión - Administración ArtDent',
  description: 'Página de inicio de sesión para el personal de ArtDent.',
};

export default function AdminLoginPage() {
    return (
    <div className="flex-grow flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
