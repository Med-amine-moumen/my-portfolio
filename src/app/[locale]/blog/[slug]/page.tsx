import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ArrowLeft } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { getPost, getPostSlugs } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { Mdx } from '@/components/Mdx';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPostSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const doc = getPost(slug, locale);
  if (!doc) return {};

  return {
    title: doc.meta.title,
    description: doc.meta.description,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        fr: `/fr/blog/${slug}`,
        en: `/en/blog/${slug}`,
        'x-default': `/fr/blog/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      url: `${SITE.url}/${locale}/blog/${slug}`,
      title: doc.meta.title,
      description: doc.meta.description,
      publishedTime: doc.meta.date,
      images: doc.meta.coverImage ? [doc.meta.coverImage] : undefined,
    },
    // Drafts are excluded in production; keep them out of indexes in dev too.
    robots: doc.meta.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const doc = getPost(slug, locale);
  if (!doc) notFound();

  const t = await getTranslations('Blog');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: doc.meta.title,
    description: doc.meta.description,
    datePublished: doc.meta.date,
    inLanguage: locale,
    url: `${SITE.url}/${locale}/blog/${slug}`,
    author: { '@type': 'Person', name: SITE.name, url: SITE.url },
    image: doc.meta.coverImage
      ? `${SITE.url}${doc.meta.coverImage}`
      : undefined,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {t('backToBlog')}
      </a>

      <header className="mb-8" data-animate>
        <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-gray-400">
          <span>{t('publishedOn', { date: formatDate(doc.meta.date, locale) })}</span>
          <span aria-hidden>·</span>
          <span>{t('readingTime', { minutes: doc.readingMinutes })}</span>
          {doc.meta.draft && (
            <span className="px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800 uppercase tracking-wide">
              {t('draftBadge')}
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {doc.meta.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          {doc.meta.description}
        </p>
        {(doc.meta.tags ?? []).length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {doc.meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {doc.meta.coverImage && (
        <div className="relative aspect-[1200/630] overflow-hidden rounded-2xl border border-gray-200 dark:border-dark-border mb-10">
          <Image
            src={doc.meta.coverImage}
            alt={doc.meta.title}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <Mdx source={doc.body} />
    </article>
  );
}
