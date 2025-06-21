
import type { Metadata } from 'next';

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
  // El layout visual ahora es aplicado por el LayoutProvider en el root layout.
  // Este archivo solo pasa los hijos y provee metadatos.
  return <>{children}</>;
}
