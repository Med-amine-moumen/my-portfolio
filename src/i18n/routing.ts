import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  // Every locale is prefixed (/fr, /en). The bare root "/" is handled by a
  // 308 redirect in next.config.mjs that runs before this middleware.
  localePrefix: 'always',
  // French-first: never auto-switch based on the Accept-Language header.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
