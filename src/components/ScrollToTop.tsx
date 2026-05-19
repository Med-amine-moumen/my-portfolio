'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

/** Floating scroll-to-top button. Ported 1:1 from the original Vite site. */
export function ScrollToTop() {
  const t = useTranslations('Common');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scroll-top-btn p-3 rounded-xl bg-accent-base hover:bg-accent-hover text-white shadow-lg hover:shadow-[0_0_20px_rgba(192,123,62,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 ${
        visible ? 'visible' : ''
      }`}
      aria-label={t('scrollToTop')}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
