import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Mail, Download, CalendarClock } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';

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
    title: t('contact.title'),
    description: t('contact.description'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        fr: '/fr/contact',
        en: '/en/contact',
        'x-default': '/fr/contact',
      },
    },
    openGraph: {
      type: 'website',
      url: `${SITE.url}/${locale}/contact`,
      title: t('contact.title'),
      description: t('contact.description'),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ContactPage');
  const tc = await getTranslations('Common');

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    t('emailSubject'),
  )}`;
  const calendly = SITE.calendlyUrl;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <header className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          data-animate
        >
          {t('title')}
        </h1>
        <p
          className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
          data-animate
          data-animate-delay="1"
        >
          {t('intro')}
        </p>
      </header>

      {/* Calendly inline embed (plain iframe; URL via env var) */}
      <section className="mb-10" data-animate>
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <CalendarClock className="w-5 h-5 text-accent-base" />
          {t('scheduleTitle')}
        </h2>
        {calendly ? (
          <div className="rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden bg-white dark:bg-dark-card">
            <iframe
              src={calendly}
              title="Calendly"
              loading="lazy"
              className="w-full"
              style={{ height: 680, border: 0 }}
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 dark:border-dark-border-soft p-8 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-card">
            {t('calendlyMissing')}
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <section
          className="rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-6"
          data-animate
          data-animate-delay="1"
        >
          <h2 className="flex items-center gap-2 text-lg font-bold mb-4">
            <Mail className="w-5 h-5 text-accent-base" />
            {t('emailTitle')}
          </h2>
          <a
            href={mailto}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:scale-[1.03] hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            <Mail className="w-4 h-4" /> {t('emailButton')}
          </a>
        </section>

        {/* Socials */}
        <section
          className="rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-6"
          data-animate
          data-animate-delay="2"
        >
          <h2 className="text-lg font-bold mb-4">{t('socialTitle')}</h2>
          <div className="flex gap-3">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label={tc('github')}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border hover:border-accent-base dark:hover:border-accent-base hover:text-accent-base dark:hover:text-accent-light transition-all duration-200"
            >
              <FaGithub className="w-5 h-5" /> GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={tc('linkedin')}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border hover:border-accent-base dark:hover:border-accent-base hover:text-accent-base dark:hover:text-accent-light transition-all duration-200"
            >
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </section>
      </div>

      {/* CV download */}
      <section
        className="rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-6 mt-6"
        data-animate
        data-animate-delay="3"
      >
        <h2 className="flex items-center gap-2 text-lg font-bold mb-4">
          <Download className="w-5 h-5 text-accent-base" />
          {t('cvTitle')}
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/cv/mohamed-amine-moumen-fr.pdf"
            download
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-base text-white rounded-xl font-medium hover:bg-accent-hover hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <Download className="w-4 h-4" /> {t('downloadCvFr')}
          </a>
          <a
            href="/cv/mohamed-amine-moumen-en.pdf"
            download
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 dark:border-dark-border-soft rounded-xl font-medium hover:border-accent-base hover:text-accent-base dark:hover:text-accent-light hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <Download className="w-4 h-4" /> {t('downloadCvEn')}
          </a>
        </div>
      </section>
    </div>
  );
}
