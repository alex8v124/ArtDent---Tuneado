import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - ArtDent',
  description: 'Términos y condiciones para la reserva de citas en línea en ArtDent.',
};

export default function TerminosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Términos y Condiciones</CardTitle>
          <CardDescription>Uso del sistema de reservas en línea.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Bienvenido al sistema de reservas en línea de ArtDent. Al utilizar este servicio, usted acepta los siguientes términos y condiciones.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">1. Propósito del Sistema</h3>
          <p>
            Este sistema está diseñado para facilitar la programación de citas para los servicios dentales ofrecidos por ArtDent.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">2. Pago de la Reserva</h3>
          <p>
            Para confirmar su cita, se requiere el pago completo del servicio seleccionado a través de nuestra plataforma de pago segura (PayPal). Este pago corresponde al costo total del tratamiento reservado.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">3. Política de Cancelación y Reembolso</h3>
          <p>
            Actualmente, las reservas realizadas y pagadas a través de este sistema no son reembolsables. No se realizarán devoluciones por cancelaciones o inasistencias. Agradecemos su comprensión.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">4. Exactitud de la Información</h3>
          <p>
            Usted es responsable de proporcionar información precisa y completa al momento de la reserva, incluyendo su nombre, información de contacto y detalles de la cita.
          </p>
           <h3 className="text-xl font-semibold text-foreground pt-4">5. Confirmación de la Cita</h3>
          <p>
            Recibirá una confirmación por correo electrónico una vez que su reserva y pago hayan sido procesados exitosamente. Si no recibe una confirmación, por favor póngase en contacto con nuestra clínica.
          </p>
          <div className="flex justify-start pt-6">
            <Button asChild variant="outline">
              <Link href="/reservar-cita">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Reservar Cita
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
