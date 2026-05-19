'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  readingMinutes: number;
  draft: boolean;
  dateLabel: string;
}

export function TagFilter({
  posts,
  tags,
}: {
  posts: PostSummary[];
  tags: string[];
}) {
  const t = useTranslations('Blog');
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? posts.filter((p) => p.tags.includes(active))
    : posts;

  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-16">
        {t('empty')}
      </p>
    );
  }

  return (
    <div>
      {tags.length > 0 && (
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="group"
          aria-label={t('filterLabel')}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-colors duration-200 ${
              active === null
                ? 'bg-accent-base text-white border-accent-base'
                : 'bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border-accent-base/20 dark:border-accent-base/30 hover:border-accent-base'
            }`}
          >
            {t('allTag')}
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-colors duration-200 ${
                active === tag
                  ? 'bg-accent-base text-white border-accent-base'
                  : 'bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border-accent-base/20 dark:border-accent-base/30 hover:border-accent-base'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="tilt-card rounded-2xl border bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border flex flex-col overflow-hidden group"
            data-animate
            data-animate-delay={String((i % 4) + 1)}
          >
            <div className="relative aspect-[1200/630] overflow-hidden bg-gray-50 dark:bg-primary-black-light">
              <Image
                src={p.coverImage}
                alt={p.title}
                width={1200}
                height={630}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-400">
                <span>{p.dateLabel}</span>
                <span aria-hidden>·</span>
                <span>{t('readingTime', { minutes: p.readingMinutes })}</span>
                {p.draft && (
                  <span className="px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800 uppercase tracking-wide">
                    {t('draftBadge')}
                  </span>
                )}
              </div>
              <h2 className="font-bold text-lg mb-1.5 group-hover:text-accent-base dark:group-hover:text-accent-light transition-colors duration-200">
                {p.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
