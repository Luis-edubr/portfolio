import { readFileSync, writeFileSync } from "node:fs";

const content = readFileSync(
  new URL("../src/content.ts", import.meta.url),
  "utf8",
);
const slugs = [...content.matchAll(/slug: '([^']+)'/g)].map(
  (match) => match[1],
);
const host =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:4173";
const origin = host.replace(/\/$/, "");
const paths = [
  "pt",
  "en",
  ...slugs.flatMap((slug) => [`pt/cases/${slug}`, `en/cases/${slug}`]),
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${origin}/${path}</loc></url>`).join("\n")}\n</urlset>\n`;
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
writeFileSync(
  new URL("../public/robots.txt", import.meta.url),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
