/**
 * Builds the shared nav model. Mirrors the original Vite one-pager:
 * every link is a hash anchor to a section on the home page.
 */
export interface NavItem {
  label: string;
  href: string;
  /** 'anchor' = plain <a> hash link to the home page; 'route' = next-intl Link */
  kind: 'anchor' | 'route';
}

export function buildNavItems(
  locale: string,
  t: (key: string) => string,
): NavItem[] {
  return [
    { label: t('home'), href: `/${locale}#home`, kind: 'anchor' },
    { label: t('about'), href: `/${locale}#about`, kind: 'anchor' },
    { label: t('projects'), href: `/${locale}#big-projects`, kind: 'anchor' },
    { label: t('skills'), href: `/${locale}#skills`, kind: 'anchor' },
    { label: t('contact'), href: `/${locale}#contact`, kind: 'anchor' },
    { label: t('hireMe'), href: `/${locale}#hire-me`, kind: 'anchor' },
  ];
}
