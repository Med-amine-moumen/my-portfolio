import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { routing, type Locale } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Background } from '@/components/layout/Background';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import { ScrollToTop } from '@/components/ScrollToTop';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t('home.title'),
      template: `%s · ${t('siteName')}`,
    },
    description: t('home.description'),
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: '/fr',
        en: '/en',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      siteName: t('siteName'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `${SITE.url}/${locale}`,
      title: t('home.title'),
      description: t('home.description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen relative bg-primary-beige text-gray-900 dark:bg-primary-black dark:text-white transition-colors duration-300 antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            themes={['light', 'dark']}
          >
            <Background />
            <ParticleBackground />
            <div className="relative z-10">
              <Header />
              <main className="pt-24 pb-16">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
            <ScrollAnimations />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
