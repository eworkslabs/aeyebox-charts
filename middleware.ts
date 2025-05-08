import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get('cookie') || '';

  const response = await fetch(new URL('/api/auth/verify', request.url), {
    headers: { cookie: cookie },
  });

  if (response.status === 200) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/sign-in', request.url));
}

export const config = {
  matcher: ['/app/:path*'],
};
