import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip all internal paths (_next), API routes and any path containing a dot
  // (static files, /sitemap.xml, /robots.txt). The bare "/" is redirected
  // to /en by next.config.mjs before this matcher is evaluated.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
