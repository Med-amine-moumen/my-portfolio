import { getTranslations } from 'next-intl/server';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SITE } from '@/lib/site';

export async function ContactSection() {
  const t = await getTranslations('Contact');

  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-3xl mx-auto text-center border-t border-gray-200 dark:border-dark-border"
    >
      <h2 className="text-3xl font-bold mb-4" data-animate>
        {t('title')}
      </h2>
      <p
        className="text-gray-500 dark:text-gray-400 mb-10"
        data-animate
        data-animate-delay="1"
      >
        {t('intro')}
      </p>
      <div
        className="flex flex-col gap-4 max-w-sm mx-auto"
        data-animate
        data-animate-delay="2"
      >
        <a
          href={`mailto:${SITE.email}`}
          className="flex items-center justify-center gap-3 w-full px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:scale-[1.03] hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          <Mail className="w-4 h-4" /> {SITE.email}
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 w-full px-8 py-3.5 bg-accent-base hover:bg-accent-hover text-white font-medium rounded-xl hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(192,123,62,0.35)] active:scale-95 transition-all duration-200"
        >
          <FaLinkedin className="w-4 h-4" /> {t('linkedinButton')}
        </a>
      </div>
    </section>
  );
}
