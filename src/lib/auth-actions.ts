
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
    // On successful login, redirect to the dashboard.
    // This is the most reliable way to handle navigation after a server action.
    redirect('/admin/dashboard');
  }

  // If credentials don't match, return an error object.
  return { error: 'Número de documento o contraseña incorrectos.' };
}

export async function logout() {
  cookies().delete('session-token');
  redirect('/admin/login');
}
