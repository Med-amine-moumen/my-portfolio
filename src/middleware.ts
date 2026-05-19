import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip all internal paths (_next), API routes and any path containing a dot
  // (static files, /sitemap.xml, /robots.txt, /feed.xml). The bare "/" is
  // redirected to /fr by next.config.mjs before this matcher is evaluated.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
