import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { Projects } from '@/components/home/Projects';
import { MiniProjects } from '@/components/home/MiniProjects';
import { Skills } from '@/components/home/Skills';
import { ContactSection } from '@/components/home/ContactSection';
import { WorkTogether } from '@/components/home/WorkTogether';
import { SITE } from '@/lib/site';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tAbout = await getTranslations('About');
  const tMeta = await getTranslations('Metadata');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: SITE.name,
        jobTitle: tMeta('jobTitle'),
        url: `${SITE.url}/${locale}`,
        email: `mailto:${SITE.email}`,
        sameAs: [SITE.github, SITE.linkedin],
      },
      {
        '@type': 'WebSite',
        name: tMeta('siteName'),
        url: SITE.url,
        inLanguage: locale,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section
        id="about"
        className="py-20 px-4 max-w-5xl mx-auto text-center border-t border-gray-200 dark:border-dark-border"
      >
        <h2 className="text-3xl font-bold mb-6" data-animate>
          {tAbout('title')}
        </h2>
        <p
          className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          data-animate
          data-animate-delay="1"
        >
          {tAbout('body')}
        </p>
      </section>

      <Projects />
      <MiniProjects />
      <Skills />
      <ContactSection />
      <WorkTogether />
    </>
  );
}
