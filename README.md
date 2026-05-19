# Portfolio — Mohamed Amine Moumen (v2)

Bilingual (FR / EN) personal portfolio built with **Next.js 15 (App Router)**,
**TypeScript (strict)**, **Tailwind CSS v4**, **next-intl**, and **MDX**-driven
content. Migrated from the original Vite + React SPA (kept for reference in
`_legacy_vite/`).

## Stack

- Next.js 15 · React 19 · App Router · Server Components by default
- `next-intl` — `app/[locale]/…` routing, FR default, `/` → 308 → `/fr`
- `next-themes` — SSR-safe dark mode (no flash)
- MDX via `next-mdx-remote` + `gray-matter` + `reading-time`
- `feed` — RSS at `/feed.xml`
- Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`)

## Commands

```bash
npm run dev        # local dev server (http://localhost:3000 → /fr)
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit (strict)
```

## Environment variables

Copy `.env.example` → `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (sitemap, RSS, OG, hreflang). |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly link for the inline embed on `/contact`. Empty → a placeholder notice is shown. |

## Project structure

```
src/
  app/[locale]/        home, projects/[slug], blog, blog/[slug], contact, OG image
  app/sitemap.ts robots.ts feed.xml/route.ts
  components/          layout (Header/Footer/switchers), home sections, demos, MDX
  i18n/                next-intl routing / request / navigation
  lib/                 site.ts (structured data), content.ts (MDX loader), format.ts
messages/              fr.json · en.json (UI strings)
content/
  projects/<slug>.<locale>.mdx
  blog/<slug>.<locale>.mdx
public/                cv/ · projects/<slug>/cover.png · blog/<slug>/cover.png
_legacy_vite/          original Vite site (reference only — safe to delete later)
```

## Content authoring

### Add a project case study

1. Create `content/projects/<slug>.fr.mdx` and `<slug>.en.mdx`.
2. Frontmatter: `title, slug, description, date, tags, coverImage, locale, draft`.
3. Use the standard sections (H2):
   *Le problème*, *L'architecture*, *Décisions techniques*, *Résultat*,
   *Ce que je referais différemment* (English equivalents in the `.en.mdx`).
4. Add a `<slug>` entry to `PROJECTS` in `src/lib/site.ts`
   (`caseStudy: true`, tech tags, optional `liveUrl`/`repoUrl`).
5. Add translated card `title`/`description` under `Projects.items.<slug>` in
   **both** `messages/fr.json` and `messages/en.json`.
6. Drop a cover at `public/projects/<slug>/cover.png` (1200×675).

### Add a blog post

1. Create `content/blog/<slug>.fr.mdx` (FR-first).
2. Frontmatter as above; set `draft: true` while writing
   (drafts are hidden in production, visible in `npm run dev`).
3. Cover at `public/blog/<slug>/cover.png` (1200×630).
4. Reading time is computed automatically; tags power the index filter;
   non-draft posts are added to `/feed.xml` and the sitemap on build.

### Add / edit a translation

- UI strings: edit `messages/fr.json` and `messages/en.json` (same key tree).
- A missing translated MDX file falls back to the French (`defaultLocale`) file.
- To add a locale: extend `locales` in `src/i18n/routing.ts`, add
  `messages/<locale>.json`, and translate the MDX files.

## Deployment (Vercel)

- Framework preset: **Next.js** (no `vercel.json` needed — the legacy SPA
  rewrite was removed).
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CALENDLY_URL` in Project Settings
  → Environment Variables.
- `main` → production; every PR gets a preview deploy.

## Migration notes

- Original Vite app preserved in `_legacy_vite/` (delete once the Next.js site
  is confirmed in a Vercel preview).
- Dark mode moved from a `localStorage` hook to `next-themes`.
- Project screenshots are static PNGs in `public/projects/**` (replace the
  generated placeholders with real screenshots) — keeps CLS at 0 and
  Lighthouse Performance high.
- CV files in `public/cv/` are placeholders — replace with the real PDFs.
