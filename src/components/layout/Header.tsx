import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { buildNavItems } from './nav';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

const LINK_CLASS =
  'nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent-base dark:hover:text-accent-light text-gray-600 dark:text-gray-300 rounded-lg hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark';

/**
 * Floating pill navigation. Markup/classes ported 1:1 from the original
 * Vite nav; adds the requested language switcher + mobile hamburger.
 */
export async function Header() {
  const locale = await getLocale();
  const t = await getTranslations('Nav');
  const items = buildNavItems(locale, t);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <div className="flex items-center justify-between h-14 px-5 rounded-2xl border backdrop-blur-xl shadow-lg transition-colors duration-300 bg-white/95 border-gray-200 shadow-gray-200/80 dark:bg-primary-black/95 dark:border-dark-border dark:shadow-black/60">
        <Link
          href="/"
          className="font-mono font-bold text-base tracking-tight shrink-0"
          aria-label={t('home')}
        >
          <span className="text-accent-base">&lt;</span>
          Portfolio
          <span className="text-accent-base"> /&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {items.map((item) =>
            item.kind === 'anchor' ? (
              <a key={item.href} href={item.href} className={LINK_CLASS}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={LINK_CLASS}>
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileMenu items={items} />
          </div>
        </div>
      </div>
    </nav>
  );
}
