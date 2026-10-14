import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// Served at /manifest.webmanifest. Used when the site is added to a phone's home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: 'Kempt Laundry',
    description: 'Laundry pickup & delivery in Benin City.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0B2A63',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
