
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, AlertTriangle } from 'lucide-react';
import artDentLogo from '@/components/img/img_logo.png';

export const metadata: Metadata = {
  title: '404: Página no encontrada - ArtDent',
  description: 'La página que busca no existe.',
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-background">
      <Card className="w-full max-w-lg mx-auto text-center shadow-2xl rounded-xl p-4">
        <CardHeader>
          <div className="flex justify-center items-center mb-4">
             <Image src={artDentLogo} alt="ArtDent Logo" width={48} height={48} />
             <h1 className="text-4xl font-headline font-bold text-primary ml-2">ArtDent</h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <AlertTriangle className="h-16 w-16 text-destructive" />
            <p className="text-8xl font-bold text-destructive">404</p>
          </div>
          <CardTitle className="text-3xl font-headline mt-6">Página No Encontrada</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Lo sentimos, pero la página que estás buscando no existe o ha sido movida.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-8">
            Puedes volver a la página de inicio para encontrar lo que necesitas.
          </p>
          <Button asChild size="lg" className="text-lg py-6">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Volver a la Página Principal
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
