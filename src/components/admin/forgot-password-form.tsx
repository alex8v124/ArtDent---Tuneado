
"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Mail, Loader2 } from 'lucide-react';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Por favor ingrese un correo electrónico válido." }),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    setIsLoading(true);
    console.log("Forgot password for:", data.email);

    // Simulación de llamada a API
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Enlace de Recuperación Enviado",
      description: "Si existe una cuenta con este correo, se ha enviado un enlace para restablecer la contraseña.",
    });
    form.reset();
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl rounded-xl">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-4">
          <Image src="/img_logo.png" alt="ArtDent Logo" width={48} height={48} />
          <h1 className="text-4xl font-headline font-bold text-primary ml-2">ArtDent</h1>
        </div>
        <CardTitle className="text-2xl font-semibold">¿Olvidó su Contraseña?</CardTitle>
        <CardDescription>Ingrese su correo para recibir un enlace de recuperación.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        {...field}
                        className="pl-10 py-6"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "ENVIAR ENLACE"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardContent className="mt-4 text-center">
        <Button asChild variant="link" className="text-primary">
          <Link href="/admin/login">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Iniciar Sesión
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordForm;
