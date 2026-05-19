import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { TiltCard } from '@/components/TiltCard';

/**
 * Replaces the original disabled "Hire Me" form. The dedicated /contact page
 * (Calendly + email + socials + CV) supersedes it; this is now a CTA.
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
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 bg-accent-base text-white rounded-xl font-semibold hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(192,123,62,0.4)] active:scale-95 transition-all duration-200 shadow-sm"
        >
          {t('cta')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </TiltCard>
    </section>
  );
}
