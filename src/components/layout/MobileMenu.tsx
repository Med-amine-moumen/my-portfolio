'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { NavItem } from './nav';

const BTN =
  'p-1.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 shrink-0 bg-gray-100 border border-gray-200 text-accent-dark hover:border-accent-base dark:bg-dark-card dark:border-dark-border-soft dark:text-accent-light dark:hover:border-accent-base';

/**
 * Hamburger menu for narrow screens. Pure controlled React state — no
 * JS-heavy menu library. Closes on navigation, outside click and Escape.
 */
export function MobileMenu({ items }: { items: NavItem[] }) {
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={BTN}
        aria-label={open ? t('closeMenu') : t('openMenu')}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-5 h-5">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </span>
      </button>

      {open && (
        <div
          id="mobile-menu-panel"
          className="absolute right-0 mt-3 w-60 rounded-2xl border backdrop-blur-xl shadow-lg p-2 flex flex-col gap-1 bg-white/95 border-gray-200 shadow-gray-200/80 dark:bg-primary-black/95 dark:border-dark-border dark:shadow-black/60"
        >
          {items.map((item) =>
            item.kind === 'anchor' ? (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:text-accent-base dark:hover:text-accent-light hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:text-accent-base dark:hover:text-accent-light hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark transition-colors duration-200"
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="border-t border-gray-100 dark:border-dark-border mt-1 pt-2 px-1">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
