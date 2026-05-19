import { getTranslations } from 'next-intl/server';
import { TiltCard } from '@/components/TiltCard';
import { SKILL_CATEGORIES } from '@/lib/site';

const DELAYS = ['1', '2', '3', '4'] as const;

export async function Skills() {
  const t = await getTranslations('Skills');

  return (
    <section
      id="skills"
      className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border"
    >
      <h2 className="text-3xl font-bold mb-12 text-center" data-animate>
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, i) => (
          <TiltCard
            key={cat.key}
            className="p-6"
            dataAnimate
            dataAnimateDelay={DELAYS[i % 4]}
          >
            <h3 className="text-lg font-bold mb-5 text-center border-b border-gray-100 dark:border-dark-border pb-3">
              <span className="mr-2">{cat.icon}</span>
              {t(`categories.${cat.key}`)}
            </h3>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 font-mono text-xs rounded-lg flex items-center gap-1.5 bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30 hover:scale-110 hover:-translate-y-0.5 hover:bg-accent-base hover:text-white dark:hover:bg-accent-base dark:hover:text-white hover:border-accent-base hover:shadow-[0_4px_12px_rgba(192,123,62,0.35)] transition-all duration-200 cursor-default"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
