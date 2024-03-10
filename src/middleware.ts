import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { GetUser } from './actions/UserActions';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = await GetUser();

  if (request.nextUrl.pathname.startsWith('/login') && !user)
    return NextResponse.next();

  if (user) return NextResponse.next();

  return NextResponse.redirect(new URL('/login', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
