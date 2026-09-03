import type { MetadataRoute } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const siteUrl = configuredSiteUrl
  || (vercelProductionHost
    ? `https://${vercelProductionHost}`
    : 'http://localhost:3000');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
