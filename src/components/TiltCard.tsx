'use client';

import { useCallback, type ReactNode } from 'react';

const CARD_BASE =
  'tilt-card rounded-2xl border bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border';

/**
 * 3-D mouse-tilt card. Ported from the original `useTilt` hook in App.tsx.
 * It's a tiny client leaf — server components pass already-rendered children.
 */
export function TiltCard({
  className = '',
  children,
  dataAnimate = false,
  dataAnimateDelay,
}: {
  className?: string;
  children: ReactNode;
  dataAnimate?: boolean;
  dataAnimateDelay?: '1' | '2' | '3' | '4';
}) {
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${
      x * 9
    }deg) translateY(-6px) scale(1.01)`;
  }, []);

  const onLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
  }, []);

  return (
    <div
      className={`${CARD_BASE} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...(dataAnimate ? { 'data-animate': '' } : {})}
      {...(dataAnimateDelay ? { 'data-animate-delay': dataAnimateDelay } : {})}
    >
      {children}
    </div>
  );
}
