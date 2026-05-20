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
  image: string;
  imageWidth: number;
  imageHeight: number;
  /** Unsplash fallback shown if the microlink screenshot fails to load. */
  fallbackImage: string;
}

/** Display order on the home "My Projects" grid (faithful to the original). */
export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'ecommerce',
    liveUrl: 'https://ecommerce-amine.vercel.app/',
    repoUrl: 'https://github.com/Med-amine-moumen/ecommerce',
    domain: 'ecommerce-amine.vercel.app',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
    image: '/projects/ecommerce/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
    fallbackImage:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
  },
  {
    slug: 'recipe-app',
    liveUrl: 'https://recipe-app-moumen.vercel.app/',
    domain: 'recipe-app-moumen.vercel.app',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    image: '/projects/recipe-app/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
    fallbackImage:
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&q=80',
  },
  {
    slug: 'surf-camp',
    domain: 'surf-camp.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    status: 'wip',
    image: '/projects/surf-camp/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
    fallbackImage:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'poolhomies',
    liveUrl: 'https://poolhomies.vercel.app/',
    domain: 'poolhomies.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    status: 'live',
    image: '/projects/poolhomies/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
    fallbackImage:
      'https://images.unsplash.com/photo-1611095970980-20f304cfe37b?w=1200&q=80',
  },
  {
    slug: 'better-call-saul',
    liveUrl: 'https://saul-good-man.vercel.app/',
    domain: 'saul-good-man.vercel.app',
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Three.js'],
    status: 'live',
    image: '/projects/better-call-saul/cover.png',
    imageWidth: 1200,
    imageHeight: 675,
    fallbackImage:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80',
  },
];

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
