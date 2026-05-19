import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { routing } from '@/i18n/routing';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const PROJECTS_DIR = path.join(CONTENT_DIR, 'projects');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

const IS_PROD = process.env.NODE_ENV === 'production';

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

export type PostFrontmatter = ProjectFrontmatter;

export interface LoadedDoc<T> {
  meta: T;
  body: string;
  readingMinutes: number;
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
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
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

/* ── Blog ─────────────────────────────────────────────────────────── */

export function getPostSlugs(): string[] {
  return listSlugs(BLOG_DIR);
}

export function getPost(
  slug: string,
  locale: string,
): LoadedDoc<PostFrontmatter> | null {
  const doc = readDoc<PostFrontmatter>(BLOG_DIR, slug, locale);
  if (!doc) return null;
  // Drafts are hidden in production (index + direct access).
  if (IS_PROD && doc.meta.draft) return null;
  return doc;
}

export function getAllPosts(locale: string): LoadedDoc<PostFrontmatter>[] {
  return getPostSlugs()
    .map((slug) => readDoc<PostFrontmatter>(BLOG_DIR, slug, locale))
    .filter((d): d is LoadedDoc<PostFrontmatter> => d !== null)
    .filter((d) => !(IS_PROD && d.meta.draft))
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
    );
}

export function getAllTags(locale: string): string[] {
  const tags = new Set<string>();
  for (const post of getAllPosts(locale)) {
    (post.meta.tags ?? []).forEach((t) => tags.add(t));
  }
  return [...tags].sort();
}
