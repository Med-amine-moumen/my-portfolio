'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Re-implements the original Vite scroll-reveal: toggles `.in-view` on every
 * `[data-animate]` element so the CSS transition replays on each scroll.
 * Re-binds when the route changes so newly mounted pages animate too.
 */
export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
          } else {
            e.target.classList.remove('in-view');
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    const els = document.querySelectorAll('[data-animate]');
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
