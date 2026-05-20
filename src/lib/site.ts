/**
 * Single source of truth for non-translatable structured data
 * (URLs, tech tags, icons, ordering). Translatable strings live in
 * messages/{fr,en}.json keyed by the slugs/keys defined here.
 */

export const SITE = {
  name: 'Mohamed Amine Moumen',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mohamedaminemoumen.vercel.app',
  email: 'moumenmohamedamine8@gmail.com',
  github: 'https://github.com/Med-amine-moumen',
  linkedin: 'https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? '',
} as const;

export interface ProjectMeta {
  /** Matches messages Projects.items.<slug> and content/projects/<slug>.<locale>.mdx */
  slug: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Browser-chrome address shown on the card (faithful to the original site). */
  domain?: string;
  tech: string[];
  status?: 'live' | 'wip';
  /** Whether a /projects/<slug> MDX case study exists. */
  caseStudy: boolean;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

/** Display order on the home "My Projects" grid (faithful to the original). */
export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'ecommerce',
    liveUrl: 'https://ecommerce-amine.vercel.app/',
    repoUrl: 'https://github.com/Med-amine-moumen/ecommerce',
    domain: 'ecommerce-amine.vercel.app',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
    caseStudy: true,
    image: '/projects/ecommerce/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
  {
    slug: 'recipe-app',
    liveUrl: 'https://recipe-app-moumen.vercel.app/',
    domain: 'recipe-app-moumen.vercel.app',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    caseStudy: false,
    image: '/projects/recipe-app/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
  {
    slug: 'surf-camp',
    domain: 'surf-camp.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    status: 'wip',
    caseStudy: false,
    image: '/projects/surf-camp/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
  {
    slug: 'poolhomies',
    liveUrl: 'https://poolhomies.vercel.app/',
    domain: 'poolhomies.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    status: 'live',
    caseStudy: false,
    image: '/projects/poolhomies/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
  {
    slug: 'better-call-saul',
    liveUrl: 'https://saul-good-man.vercel.app/',
    domain: 'saul-good-man.vercel.app',
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Three.js'],
    status: 'live',
    caseStudy: false,
    image: '/projects/better-call-saul/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
  {
    slug: 'habit-tracker',
    // TODO: add liveUrl once deployed
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'shadcn/ui'],
    caseStudy: true,
    image: '/projects/habit-tracker/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
  {
    slug: 'portfolio-v2',
    repoUrl: 'https://github.com/Med-amine-moumen/portfolio',
    tech: ['Next.js', 'TypeScript', 'next-intl', 'MDX', 'Tailwind CSS'],
    status: 'live',
    caseStudy: true,
    image: '/projects/portfolio-v2/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
  },
];

export const PROJECTS_WITH_CASE_STUDY = PROJECTS.filter((p) => p.caseStudy).map(
  (p) => p.slug,
);

export type DemoKey = 'todo' | 'rps' | 'calculator' | 'counter';

export interface MiniProjectMeta {
  /** Matches messages MiniProjects.items.<key>. */
  key: string;
  tech: string[];
  demo: DemoKey;
}

export const MINI_PROJECTS: MiniProjectMeta[] = [
  { key: 'task-manager', tech: ['React', 'JavaScript', 'Tailwind CSS', 'Lucide Icons'], demo: 'todo' },
  { key: 'rock-paper-scissors', tech: ['Python', 'CLI', 'Game Dev', 'OOP'], demo: 'rps' },
  { key: 'calculator', tech: ['React', 'JavaScript', 'Tailwind CSS', 'Math.js'], demo: 'calculator' },
  { key: 'counter', tech: ['React', 'JavaScript', 'Tailwind CSS', 'Hooks'], demo: 'counter' },
];

export interface SkillCategory {
  /** Matches messages Skills.categories.<key>. */
  key: string;
  icon: string;
  skills: { name: string; icon: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: 'frontend',
    icon: '🖥️',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '💙' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    key: 'backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Prisma', icon: '🔺' },
      { name: 'Supabase', icon: '🟩' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'REST API', icon: '🔌' },
      { name: 'NextAuth', icon: '🔐' },
    ],
  },
  {
    key: 'tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Vercel', icon: '☁️' },
      { name: 'Figma', icon: '🎯' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Stripe', icon: '💳' },
      { name: 'GSAP', icon: '🎬' },
      { name: 'Three.js', icon: '🧊' },
    ],
  },
];
