import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { TiltCard } from '@/components/TiltCard';
import { PROJECTS } from '@/lib/site';

const DELAYS = ['1', '2', '3', '4'] as const;

export async function Projects() {
  const t = await getTranslations('Projects');

  return (
    <section
      id="big-projects"
      className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border"
    >
      <h2 className="text-3xl font-bold mb-2 text-center" data-animate>
        {t('title')}
      </h2>
      <p
        className="text-center text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase mb-12 font-medium"
        data-animate
        data-animate-delay="1"
      >
        {t('subtitle')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => {
          const isWip = p.status === 'wip';
          const title = t(`items.${p.slug}.title`);
          const description = t(`items.${p.slug}.description`);
          const delay = i > 0 ? DELAYS[(i - 1) % 4] : undefined;

          return (
            <TiltCard
              key={p.slug}
              className="flex flex-col overflow-hidden group relative"
              dataAnimate
              dataAnimateDelay={delay}
            >
              {/* browser chrome */}
              <div className="bg-gray-100 dark:bg-dark-card border-b border-gray-200 dark:border-dark-border flex flex-col">
                {p.status === 'live' || !isWip ? (
                  <div className="h-7 flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    {p.domain && (
                      <span className="ml-3 font-mono text-[9px] text-gray-400 dark:text-gray-500 truncate">
                        {p.domain}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="h-7 flex items-center px-3 gap-1.5 opacity-60">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    {p.domain && (
                      <span className="ml-3 font-mono text-[9px] text-gray-400 dark:text-gray-500">
                        {p.domain}
                      </span>
                    )}
                  </div>
                )}
                <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-primary-black-light">
                  <Image
                    src={p.image}
                    alt={title}
                    width={p.imageWidth}
                    height={p.imageHeight}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out ${
                      isWip ? 'opacity-30 blur-[1px] grayscale' : ''
                    }`}
                  />
                  {isWip && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200 dark:border-dark-border text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm">
                        {t('inDevelopment')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {isWip && (
                <div className="absolute top-4 right-4 z-10 font-mono px-2 py-0.5 text-[10px] rounded bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/30 font-bold uppercase tracking-wider">
                  {t('badgeWip')}
                </div>
              )}

              {/* content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-bold text-lg">{title}</h3>
                  {p.status === 'live' && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 uppercase tracking-wide">
                      {t('badgeLive')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-dark-border">
                  {p.caseStudy && (
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-base hover:text-accent-hover dark:text-accent-light transition-colors duration-200"
                    >
                      {t('caseStudy')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark transition-all duration-200"
                      title={t('visitLive')}
                      aria-label={t('visitLive')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    isWip && (
                      <span
                        className="ml-auto p-2 rounded-lg text-gray-300 dark:text-gray-600 cursor-not-allowed"
                        title={t('comingSoon')}
                        aria-label={t('comingSoon')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )
                  )}
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
