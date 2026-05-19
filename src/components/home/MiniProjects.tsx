'use client';

import { useState, type ComponentType } from 'react';
import { Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TiltCard } from '@/components/TiltCard';
import { MINI_PROJECTS, type DemoKey } from '@/lib/site';
import DemoModal from '@/components/demos/DemoModal';
import TodoApp from '@/components/demos/TodoApp';
import RockPaperScissors from '@/components/demos/RockPaperScissors';
import CalculatorApp from '@/components/demos/CalculatorApp';
import CounterApp from '@/components/demos/CounterApp';

const DEMOS: Record<DemoKey, ComponentType> = {
  todo: TodoApp,
  rps: RockPaperScissors,
  calculator: CalculatorApp,
  counter: CounterApp,
};

const DELAYS = ['1', '2', '3', '4'] as const;

export function MiniProjects() {
  const t = useTranslations('MiniProjects');
  const [selected, setSelected] = useState<{
    title: string;
    demo: DemoKey;
  } | null>(null);

  const SelectedDemo = selected ? DEMOS[selected.demo] : null;

  return (
    <section
      id="mini-projects"
      className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border"
    >
      <h2 className="text-3xl font-bold mb-12 text-center" data-animate>
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MINI_PROJECTS.map((p, i) => {
          const title = t(`items.${p.key}.title`);
          const description = t(`items.${p.key}.description`);
          return (
            <TiltCard
              key={p.key}
              className="p-6 flex flex-col h-full"
              dataAnimate
              dataAnimateDelay={DELAYS[i % 4]}
            >
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 flex-grow leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono px-2.5 py-1 text-xs rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/15 dark:border-accent-base/25 hover:border-accent-base transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelected({ title, demo: p.demo })}
                type="button"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent-base hover:bg-accent-hover hover:shadow-[0_0_16px_rgba(192,123,62,0.3)] hover:scale-[1.02] active:scale-95 text-white rounded-xl font-medium transition-all duration-200"
              >
                <Play className="w-4 h-4" /> {t('liveDemo')}
              </button>
            </TiltCard>
          );
        })}
      </div>

      <DemoModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ''}
      >
        {SelectedDemo && <SelectedDemo />}
      </DemoModal>
    </section>
  );
}
