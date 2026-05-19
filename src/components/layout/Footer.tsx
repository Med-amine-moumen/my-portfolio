import { getLocale, getTranslations } from 'next-intl/server';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SITE } from '@/lib/site';
import { buildNavItems } from './nav';
import { LanguageSwitcher } from './LanguageSwitcher';

/** Footer. Server component so the year is fixed at build time (static). */
export async function Footer() {
  const locale = await getLocale();
  const tNav = await getTranslations('Nav');
  const tFooter = await getTranslations('Footer');
  const tCommon = await getTranslations('Common');
  const items = buildNavItems(locale, tNav);
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-gray-400">
            &copy; {year}{' '}
            <span className="text-accent-base">Mohamed Amine</span> —{' '}
            {tFooter('rights')}
          </p>

          <nav
            aria-label={tFooter('quickNav')}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {items.map((item) =>
              item.kind === 'anchor' ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-accent-base dark:hover:text-accent-light transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-accent-base dark:hover:text-accent-light transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex gap-5">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-125 hover:-rotate-6 transition-all duration-200"
              aria-label={tCommon('github')}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-125 hover:rotate-6 transition-all duration-200"
              aria-label={tCommon('linkedin')}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-125 transition-all duration-200"
              aria-label={tCommon('email')}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100 dark:border-dark-border pt-5">
          <p className="font-mono text-xs text-gray-400">
            {tFooter('builtWith')}
          </p>
          <LanguageSwitcher compact />
        </div>
      </div>
    </footer>
  );
}
