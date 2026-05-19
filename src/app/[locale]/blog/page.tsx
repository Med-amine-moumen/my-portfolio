import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getAllPosts, getAllTags } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { SITE } from '@/lib/site';
import { TagFilter, type PostSummary } from '@/components/blog/TagFilter';

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
    title: t('blog.title'),
    description: t('blog.description'),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        fr: '/fr/blog',
        en: '/en/blog',
        'x-default': '/fr/blog',
      },
    },
    openGraph: {
      type: 'website',
      url: `${SITE.url}/${locale}/blog`,
      title: t('blog.title'),
      description: t('blog.description'),
    },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Blog');
  const tags = getAllTags(locale);
  const posts: PostSummary[] = getAllPosts(locale).map((p) => ({
    slug: p.meta.slug,
    title: p.meta.title,
    description: p.meta.description,
    coverImage: p.meta.coverImage,
    tags: p.meta.tags ?? [],
    readingMinutes: p.readingMinutes,
    draft: Boolean(p.meta.draft),
    dateLabel: formatDate(p.meta.date, locale),
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="text-center mb-14">
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          data-animate
        >
          {t('title')}
        </h1>
        <p
          className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          data-animate
          data-animate-delay="1"
        >
          {t('intro')}
        </p>
      </header>

      <TagFilter posts={posts} tags={tags} />
    </div>
  );
}
