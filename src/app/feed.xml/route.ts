import { Feed } from 'feed';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import { getAllPosts } from '@/lib/content';

// Generated at build time (French-first feed).
export const dynamic = 'force-static';

export function GET() {
  const locale = routing.defaultLocale;

  const feed = new Feed({
    title: `${SITE.name} — Blog`,
    description: 'Notes techniques sur le développement web.',
    id: `${SITE.url}/${locale}/blog`,
    link: `${SITE.url}/${locale}/blog`,
    language: locale,
    favicon: `${SITE.url}/favicon.svg`,
    copyright: `© ${new Date().getFullYear()} ${SITE.name}`,
    feedLinks: { rss: `${SITE.url}/feed.xml` },
    author: { name: SITE.name, link: SITE.url },
  });

  // getAllPosts() excludes drafts in production.
  for (const post of getAllPosts(locale)) {
    const url = `${SITE.url}/${locale}/blog/${post.meta.slug}`;
    feed.addItem({
      title: post.meta.title,
      id: url,
      link: url,
      description: post.meta.description,
      date: new Date(post.meta.date),
      author: [{ name: SITE.name, link: SITE.url }],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
