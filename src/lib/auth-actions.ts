'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login() {
  // In a real app, you'd verify credentials here.
  // For this simulation, we assume credentials are correct and proceed.
  cookies().set('session-token', 'dummy-token-for-artdent-admin', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });
  redirect('/admin/dashboard');
}

export async function logout() {
  cookies().delete('session-token');
  redirect('/admin/login');
}
