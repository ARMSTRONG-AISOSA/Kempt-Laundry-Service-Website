import type { MetadataRoute } from 'next';
import { nav, site } from '@/lib/site';

// Served at /sitemap.xml. Every page in `nav` is listed automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return nav.map((n) => ({
    url: `${site.url}${n.href === '/' ? '' : n.href}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: n.href === '/' ? 1 : 0.8,
  }));
}
