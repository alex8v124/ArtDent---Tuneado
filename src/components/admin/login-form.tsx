"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Eye, EyeOff, User, Loader2 } from 'lucide-react';
import Link from 'next/link';
import artDentLogo from '@/components/img/img_logo.png';
import { login } from '@/lib/auth-actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  documentNumber: z.string().min(1, { message: "El número de documento es obligatorio." }),
  password: z.string().min(1, { message: "La contraseña es obligatoria." }),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      documentNumber: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);
    
    const result = await login(data);

    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Error de Autenticación",
        description: result.error,
      });
      setIsLoading(false);
    } else if (result?.success) {
      // On success, redirect the user to the dashboard.
      router.push('/admin/dashboard');
    } else {
      // Handle unexpected cases
      toast({
        variant: "destructive",
        title: "Error",
        description: "Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-card">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="https://placehold.co/800x1000.png"
          alt="Clínica ArtDent"
          width={800}
          height={1000}
          className="object-cover w-full h-full"
          data-ai-hint="dental clinic interior"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
        <Card className="w-full max-w-md mx-auto shadow-none border-none bg-transparent">
          <CardHeader className="text-center mb-6">
            <div className="flex justify-center items-center mb-4">
              <Image src={artDentLogo} alt="ArtDent Logo" width={48} height={48} />
              <h1 className="text-4xl font-headline font-bold text-primary ml-2">ArtDent</h1>
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Inicia Sesión</h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="documentNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="documentNumber">Nro. Documento</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            id="documentNumber"
                            type="text"
                            placeholder="Ingrese su número de documento"
                            {...field}
                            className="pl-10 py-6"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Contraseña</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Ingrese su contraseña"
                            {...field}
                            className="pl-10 pr-10 py-6"
                            disabled={isLoading}
                          />
                        </FormControl>
                         <span className="absolute left-3 top-1/2 -translate-y-1/2">
                           {/* Placeholder for key icon if needed, using Eye icon for password visibility only */}
                         </span>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                          disabled={isLoading}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between text-sm">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            id="rememberMe"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <Label htmlFor="rememberMe" className="font-normal text-muted-foreground">
                          Recordar
                        </Label>
                      </FormItem>
                    )}
                  />
                  <Link href="/admin/forgot-password" className="font-medium text-primary hover:underline">
                    Olvidé mi contraseña
                  </Link>
                </div>
                <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Iniciando Sesión...
                    </>
                  ) : (
                    "INICIAR SESIÓN"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
