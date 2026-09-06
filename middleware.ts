import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames, avoiding static assets, api routes, images
  matcher: ['/', '/(ar|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
