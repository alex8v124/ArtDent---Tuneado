'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface LoginCredentials {
  documentNumber: string;
  password?: string;
}

export async function login(credentials: LoginCredentials) {
  // In a real app, you'd verify credentials against a database.
  // For this simulation, we check for specific hardcoded values.
  if (
    credentials.documentNumber === 'admin' &&
    credentials.password === 'password'
  ) {
    cookies().set('session-token', 'dummy-token-for-artdent-admin', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    // Instead of redirecting from the server, we return a success status.
    // The redirect will be handled on the client side.
    return { success: true };
  }

  // If credentials don't match, return an error.
  return { error: 'Número de documento o contraseña incorrectos.' };
}

export async function logout() {
  cookies().delete('session-token');
  redirect('/admin/login');
}
