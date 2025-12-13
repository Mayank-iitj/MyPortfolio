import { writeFileSync } from 'node:fs';

const base = 'https://mayyanks.app';
const today = new Date().toISOString().slice(0, 10);

const staticUrls = [
  '/',
  '/projects',
  '/projects/jwt-auth-vulnerability',
  '/projects/gscc-compatibility-checker',
  '/projects/customer-churn-prediction',
  '/projects/named-entity-linking',
  '/projects/msgpt-llm-frontend',
  '/blog',
  '/blog/production-ready-ml-app',
  '/blog/jwt-security-flaws-explained',
  '/blog/customer-churn-end-to-end'
];

const entries = staticUrls.map(path => `  <url>\n    <loc>${base}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.00' : '0.8'}</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

writeFileSync('public/sitemap.xml', xml, 'utf-8');
console.log('Sitemap generated: public/sitemap.xml');
