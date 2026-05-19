import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import { getProjectSlugs, getAllPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/blog', '/contact'];
  const projectPaths = getProjectSlugs().map((s) => `/projects/${s}`);
  // getAllPosts() already excludes drafts in production.
  const postPaths = getAllPosts(routing.defaultLocale).map(
    (p) => `/blog/${p.meta.slug}`,
  );

  const allPaths = [...staticPaths, ...projectPaths, ...postPaths];

  return allPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE.url}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
