import { getTranslations } from 'next-intl/server';
import { TiltCard } from '@/components/TiltCard';

/**
 * Original "Hire Me" form — disabled, with a "Coming Soon" button.
 * Ported 1:1 from the legacy Vite app.
 */
export async function WorkTogether() {
  const t = await getTranslations('WorkTogether');

  return (
    <section
      id="hire-me"
      className="py-20 px-4 max-w-4xl mx-auto border-t border-gray-200 dark:border-dark-border text-center mt-10"
      data-animate
    >
      <TiltCard className="p-10">
        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          {t('body')}
        </p>
        <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-600 dark:text-gray-400">
              {t('nameLabel')}
            </label>
            <input
              type="text"
              disabled
              placeholder={t('namePlaceholder')}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-primary-black text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-base cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-600 dark:text-gray-400">
              {t('messageLabel')}
            </label>
            <textarea
              rows={4}
              disabled
              placeholder={t('messagePlaceholder')}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-primary-black text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-base cursor-not-allowed resize-none"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full py-3 bg-gray-200 dark:bg-dark-card text-gray-400 font-medium rounded-xl cursor-not-allowed border border-gray-200 dark:border-dark-border"
          >
            {t('comingSoon')}
          </button>
        </form>
      </TiltCard>
    </section>
  );
}
