# Luis Eduardo — software engineering portfolio

A bilingual portfolio presenting real backend and full stack work by **Luis Eduardo Messias de Oliveira**. The case studies distinguish professional deliveries, private repositories, academic reproduction and personal tools. No proprietary code, internal screenshots or invented metrics are included.

**Live site:** [luis-eduardo-portfolio.vercel.app](https://luis-eduardo-portfolio.vercel.app/pt)

## Stack

React, TypeScript, Vite, React Router and custom CSS. Content is static and typed; there is no backend or content database. Vercel serves the built `dist/` directory and rewrites deep links to the client application.

## Local development

Requires Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The default route redirects to `/pt`; `/en` contains the English version.

## Checks and build

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run preview
```

`npm run build` writes a sitemap and robots file, checks TypeScript, then produces `dist/`. The canonical origin defaults to `https://luis-eduardo-portfolio.vercel.app`; set `SITE_URL=https://your-domain.example` to override it.

## Structure

```text
src/content.ts              Typed bilingual case studies, profile and experience
src/main.tsx                 Routes, shared components and interface translations
src/style.css                Design system, layout and responsive rules
scripts/generate-sitemap.mjs Sitemap and robots generation
public/                     Favicon and social image
vercel.json                 SPA fallback for direct case URLs
docs/curation.md            Public content and evidence notes
```

## Add a case

Add a `CaseStudy` object to `cases` in `src/content.ts`. Fill in both `pt` and `en` for every localized field, choose a unique slug and a tone, and include only public links in `links`. The project list, detail route and sitemap then update from the content data. Check ownership, project status and permission to disclose material before publishing a new case.

## Deployment

Import this repository into Vercel as a Vite project. Use `npm run build` and output directory `dist`. The included `vercel.json` supports direct visits to `/pt/cases/:slug`. Verify both language routes and case deep links after deployment.

## Content boundaries

The portfolio does not publish private source, credentials, internal product screens or private documentation. Professional results are described with attribution and uncertainty where appropriate. Contact uses only the confirmed [GitHub](https://github.com/Luis-edubr) and [LinkedIn](https://www.linkedin.com/in/luis-eduardo-messias/) profiles; a public email address and résumé have not been supplied.
