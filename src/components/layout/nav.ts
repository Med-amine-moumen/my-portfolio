/**
 * Builds the shared nav model. Home sections stay hash anchors (faithful to
 * the original one-pager); Blog/Contact are real routes.
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
    { label: t('about'), href: `/${locale}#about`, kind: 'anchor' },
    { label: t('projects'), href: `/${locale}#big-projects`, kind: 'anchor' },
    { label: t('blog'), href: '/blog', kind: 'route' },
    { label: t('contact'), href: '/contact', kind: 'route' },
  ];
}
