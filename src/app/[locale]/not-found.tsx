import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function LocaleNotFound() {
  await getLocale();
  const t = await getTranslations('NotFound');

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="font-mono text-7xl font-extrabold text-accent-base mb-4">
        404
      </p>
      <h1 className="text-2xl font-bold mb-2">{t('title')}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        {t('description')}
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-accent-base text-white rounded-xl font-semibold hover:bg-accent-hover hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {t('back')}
      </Link>
    </div>
  );
}
