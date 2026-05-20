import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { routing } from '@/i18n/routing';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const PROJECTS_DIR = path.join(CONTENT_DIR, 'projects');

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
  locale: string;
  draft: boolean;
}

export interface LoadedDoc<T> {
  meta: T;
  body: string;
}

function readDoc<T>(dir: string, slug: string, locale: string): LoadedDoc<T> | null {
  const candidates = [
    path.join(dir, `${slug}.${locale}.mdx`),
    // Fall back to the default locale so a missing translation still renders.
    path.join(dir, `${slug}.${routing.defaultLocale}.mdx`),
  ];

  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;

  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);

  return {
    meta: { ...(data as T), slug },
    body: content,
  };
}

function listSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const slugs = new Set<string>();
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(/^(.+)\.[a-z]{2}\.mdx$/);
    if (m) slugs.add(m[1]);
  }
  return [...slugs];
}

/* ── Projects ─────────────────────────────────────────────────────── */

export function getProjectSlugs(): string[] {
  return listSlugs(PROJECTS_DIR);
}

export function getProject(
  slug: string,
  locale: string,
): LoadedDoc<ProjectFrontmatter> | null {
  return readDoc<ProjectFrontmatter>(PROJECTS_DIR, slug, locale);
}
