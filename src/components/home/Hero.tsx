import { getLocale, getTranslations } from 'next-intl/server';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SITE } from '@/lib/site';

export async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations('Hero');
  const tc = await getTranslations('Common');
  const cvHref = `/cv/mohamed-amine-moumen-${locale}.pdf`;

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center pt-16 px-4"
    >
      <div className="text-center max-w-3xl mx-auto" data-animate>
        <div className="inline-flex items-center gap-2 font-mono text-xs mb-6 px-4 py-2 rounded-lg border bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border text-gray-500 dark:text-gray-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
          <span>
            <span className="text-accent-base dark:text-accent-light">
              const
            </span>{' '}
            developer ={' '}
            <span className="text-green-500 dark:text-green-400">
              &quot;Mohamed Amine&quot;
            </span>
            ;<span className="blink ml-0.5 text-accent-base">|</span>
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5 leading-tight">
          {t('greeting')}{' '}
          <span className="text-accent-base dark:text-accent-light">
            Mohamed Amine
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('role')}
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href="#big-projects"
            className="px-7 py-3 bg-accent-base text-white rounded-xl font-semibold hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(192,123,62,0.4)] active:scale-95 transition-all duration-200 shadow-sm"
          >
            {t('viewWork')}
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-gray-300 dark:border-dark-border-soft rounded-xl font-semibold hover:border-accent-base dark:hover:border-accent-base hover:text-accent-base dark:hover:text-accent-light hover:scale-105 active:scale-95 transition-all duration-200 text-gray-700 dark:text-gray-200"
          >
            {t('contactMe')}
          </a>
          <a
            href={cvHref}
            download
            className="flex items-center gap-2 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-105 active:scale-95 transition-all duration-200 font-medium"
          >
            <Download className="w-4 h-4" /> {t('resume')}
          </a>
          <div className="flex gap-3">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label={tc('github')}
              className="p-3 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-accent-base dark:hover:border-accent-base hover:scale-110 hover:-rotate-6 active:scale-95 transition-all duration-200"
            >
              <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={tc('linkedin')}
              className="p-3 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-accent-base dark:hover:border-accent-base hover:scale-110 hover:rotate-6 active:scale-95 transition-all duration-200"
            >
              <FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
