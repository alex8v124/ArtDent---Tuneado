import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Panel de Administración - ArtDent',
  description: 'Panel de control para administradores y secretarias de ArtDent.',
};

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Panel de Administración</CardTitle>
          <CardDescription>Bienvenido al panel de control de ArtDent.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Este es un marcador de posición para el panel de administración. Aquí se mostrarán las herramientas y funcionalidades para administradores y secretarias.
          </p>
          <div className="flex justify-start">
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Volver a la Página Principal
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
