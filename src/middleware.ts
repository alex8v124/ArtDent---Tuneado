import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session-token');
  const { pathname } = request.nextUrl;

  const publicAdminRoutes = ['/admin/login', '/admin/forgot-password'];

  // If the user is trying to access a public admin route
  if (publicAdminRoutes.some(route => pathname.startsWith(route))) {
    // If they are already logged in, redirect them to the dashboard
    if (sessionToken) {
       return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    // Otherwise, allow access to the public route
    return NextResponse.next();
  }

  // For any other /admin route, it's protected.
  // If there's no session token, redirect to the login page.
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If they have a token, allow them to proceed.
  return NextResponse.next();
}

// Match all routes under /admin
export const config = {
  matcher: '/admin/:path*',
}
