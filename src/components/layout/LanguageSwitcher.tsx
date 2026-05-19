'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

/**
 * FR / EN switcher. Preserves the current path and switches only the locale
 * segment via next-intl navigation. `compact` is used in the footer.
 */
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const size = compact ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <div
      role="group"
      aria-label={t('label')}
      className="flex items-center gap-0.5 rounded-lg border border-gray-200 dark:border-dark-border-soft bg-gray-100 dark:bg-dark-card p-0.5"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            aria-current={active ? 'true' : undefined}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`${size} font-mono font-semibold rounded-md transition-colors duration-200 ${
              active
                ? 'bg-accent-base text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light'
            }`}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
