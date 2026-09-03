import type { MetadataRoute } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const siteUrl = configuredSiteUrl
  || (vercelProductionHost
    ? `https://${vercelProductionHost}`
    : 'http://localhost:3000');

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
