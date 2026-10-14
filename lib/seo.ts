import type { Metadata } from 'next';
import { services, site } from './site';

// Search phrases people use. Google ignores the keywords tag, so these also have to
// appear in titles, descriptions and page copy; Bing still reads the tag.
export const keywords = [
  'Kempt Laundry Services', 'Kempt Laundry Service', 'Kempt Laundry', 'Kempt Laundry Benin',
  'laundry Benin City', 'laundry service in Benin City', 'laundry near me Benin City',
  'laundry pickup and delivery Benin City', 'express laundry Benin City',
  'washing and ironing Benin City', 'ironing service Benin City', 'starching service',
  'duvet cleaning Benin City', 'bedspread washing', 'curtain cleaning Benin City', 'rug cleaning Benin City',
  'shoe cleaning Benin City', 'sneaker cleaning Benin City',
  'bulk laundry Benin City', 'school uniform laundry', 'choir robe cleaning', 'academic gown cleaning',
  'laundry Uselu', 'laundry Edo State',
  ...site.areas.map((a) => `laundry ${a}`),
];

export type OgImage = { url: string; alt: string };

export const ogImages = {
  home: { url: '/og/home.jpg', alt: 'Kempt Laundry Services, Benin City. Cleaner clothes, better care.' },
  services: { url: '/og/services.jpg', alt: 'Kempt Laundry services: washing, ironing, duvets, curtains, rugs and shoes in Benin City' },
  pricing: { url: '/og/pricing.jpg', alt: 'Kempt Laundry prices: clear prices per item in Benin City' },
} satisfies Record<string, OgImage>;

/**
 * Builds full metadata for a page. Next.js replaces (not merges) nested objects like
 * openGraph, so every page goes through this helper to keep siteName, locale and images.
 */
export function pageMeta({ title, absoluteTitle, description, path, shareTitle, image }: {
  title: string;
  absoluteTitle?: boolean;
  description: string;
  path: string;
  shareTitle?: string;
  image: OgImage;
}): Metadata {
  const ogTitle = shareTitle ?? title;
  const img = { url: image.url, width: 1200, height: 630, alt: image.alt, type: 'image/jpeg' };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_NG',
      siteName: site.name,
      url: path,
      title: ogTitle,
      description,
      images: [img],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: [img] },
  };
}

const days = site.openingHours.map((h) => ({
  '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes,
}));

/** schema.org data for Google: the business (local search, Maps) and the website (site name in results). */
export function structuredData() {
  const sameAs = [site.google, ...Object.values(site.socials).filter(Boolean)];
  const areaServed = [
    { '@type': 'City', name: 'Benin City', containedInPlace: { '@type': 'State', name: 'Edo State' } },
    ...site.areas.map((name) => ({ '@type': 'Place', name: `${name}, Benin City` })),
  ];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DryCleaningOrLaundry',
        '@id': `${site.url}/#business`,
        name: site.name,
        alternateName: site.altNames,
        description: 'Laundry service in Benin City: washing, ironing, starching and express delivery for clothes, duvets, bedspreads, curtains, rugs and shoes, plus bulk laundry for schools and churches. Pickup and delivery, returned within 72 hours.',
        slogan: site.tagline,
        url: site.url,
        telephone: site.phone.replace(/\s/g, ''),
        image: `${site.url}${ogImages.home.url}`,
        logo: `${site.url}/icon.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.postal.street,
          addressLocality: site.postal.city,
          addressRegion: site.postal.region,
          postalCode: site.postal.postcode,
          addressCountry: site.postal.country,
        },
        hasMap: site.google,
        openingHoursSpecification: days,
        areaServed,
        currenciesAccepted: 'NGN',
        sameAs,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Laundry services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.t, description: s.d, areaServed: 'Benin City' },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.name,
        alternateName: site.altNames,
        url: site.url,
        inLanguage: 'en-NG',
        publisher: { '@id': `${site.url}/#business` },
      },
    ],
  };
}
