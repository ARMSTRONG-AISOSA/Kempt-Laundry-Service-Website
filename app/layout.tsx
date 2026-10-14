import type { Metadata, Viewport } from 'next';
import { Montserrat, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisitUs from '@/components/VisitUs';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';
import { keywords, structuredData } from '@/lib/seo';

const heading = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-heading' });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' });

// Defaults for every page. Pages set their own title/description/share image via pageMeta().
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Laundry & Pickup in Benin City`, template: `%s | ${site.name}` },
  description: 'Kempt Laundry Services in Benin City: washing, ironing, starching, duvets, curtains, rugs and shoes. Pickup & delivery, back within 72 hours. Express available.',
  applicationName: site.name,
  keywords,
  creator: site.developer.name,
  category: 'Laundry service',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  // Search Console / Bing Webmaster verification codes, set as Vercel environment variables.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : undefined,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#0B2A63' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, '\\u003c') }}
        />
        <Header />
        <main>{children}</main>
        <CtaBand />
        <VisitUs />
        <Footer />
      </body>
    </html>
  );
}
