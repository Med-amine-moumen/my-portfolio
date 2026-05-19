import type { ReactNode } from 'react';
import './globals.css';

/**
 * Pass-through root layout. The real <html>/<body> live in
 * app/[locale]/layout.tsx so the `lang` attribute is locale-aware.
 * (Standard next-intl App Router pattern.)
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
