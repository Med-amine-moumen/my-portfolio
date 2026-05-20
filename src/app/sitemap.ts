import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import { getProjectSlugs } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [''];
  const projectPaths = getProjectSlugs().map((s) => `/projects/${s}`);

  const allPaths = [...staticPaths, ...projectPaths];

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
