import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // The session token check and redirection logic is temporarily disabled
  // to debug a server start-up issue.
  return NextResponse.next();
}

// Match all routes under /admin
export const config = {
  matcher: '/admin/:path*',
}
