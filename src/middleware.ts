import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const nonce = Buffer.from(Math.random().toString()).toString('base64');
  const response = NextResponse.next();
  console.log('nonce:', nonce);
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://directus.ftso.local https://webdata.ftso.eu;`
  );

  response.headers.set('X-NONCE', nonce);

  if (
    process.env.NODE_ENV === 'production' &&
    url.pathname.startsWith('/draft')
  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return response;
}
