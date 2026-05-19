'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

const BTN =
  'p-1.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 shrink-0 bg-gray-100 border border-gray-200 text-accent-dark hover:border-accent-base dark:bg-dark-card dark:border-dark-border-soft dark:text-accent-light dark:hover:border-accent-base';

/**
 * Dark-mode toggle. Replaces the original localStorage+useState hack with
 * next-themes (SSR-safe, no flash). Same sun/moon icons + spin animation.
 */
export function ThemeToggle() {
  const t = useTranslations('Theme');
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={BTN}
      aria-label={t('toggle')}
      type="button"
    >
      {/* Render the theme-dependent icon only after mount to avoid a
          hydration mismatch; the box keeps its size so there's no shift. */}
      <span
        key={mounted ? resolvedTheme : 'placeholder'}
        className="theme-icon-enter block w-5 h-5"
      >
        {mounted &&
          (isDark ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                className="text-yellow-400"
              />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ))}
      </span>
    </button>
  );
}
