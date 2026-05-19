import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { getProject, getProjectSlugs } from '@/lib/content';
import { Mdx } from '@/components/Mdx';
import { PROJECTS, SITE } from '@/lib/site';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const doc = getProject(slug, locale);
  if (!doc) return {};

  const url = `${SITE.url}/${locale}/projects/${slug}`;
  return {
    title: doc.meta.title,
    description: doc.meta.description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        fr: `/fr/projects/${slug}`,
        en: `/en/projects/${slug}`,
        'x-default': `/fr/projects/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      url,
      title: doc.meta.title,
      description: doc.meta.description,
      images: doc.meta.coverImage ? [doc.meta.coverImage] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const doc = getProject(slug, locale);
  if (!doc) notFound();

  const t = await getTranslations('ProjectPage');
  const meta = PROJECTS.find((p) => p.slug === slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: doc.meta.title,
    description: doc.meta.description,
    url: `${SITE.url}/${locale}/projects/${slug}`,
    author: { '@type': 'Person', name: SITE.name, url: SITE.url },
    inLanguage: locale,
    datePublished: doc.meta.date,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href={`/${locale}#big-projects`}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {t('backToProjects')}
      </a>

      <header className="mb-8" data-animate>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          {doc.meta.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-5">
          {doc.meta.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {(meta?.tech ?? doc.meta.tags ?? []).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {(meta?.liveUrl || meta?.repoUrl) && (
          <div className="flex flex-wrap gap-3 mt-6">
            {meta?.liveUrl && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-base text-white rounded-xl font-medium hover:bg-accent-hover hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" /> {t('liveSite')}
              </a>
            )}
            {meta?.repoUrl && (
              <a
                href={meta.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-dark-border-soft rounded-xl font-medium hover:border-accent-base hover:text-accent-base dark:hover:text-accent-light hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Github className="w-4 h-4" /> {t('sourceCode')}
              </a>
            )}
          </div>
        )}
      </header>

      {doc.meta.coverImage && (
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-dark-border mb-10">
          <Image
            src={doc.meta.coverImage}
            alt={doc.meta.title}
            width={1200}
            height={675}
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
