import type { Metadata } from 'next';
import { Montserrat, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisitUs from '@/components/VisitUs';
import CtaBand from '@/components/CtaBand';

const heading = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-heading' });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Kempt Laundry Services — Benin City',
  description: 'Washing, ironing, starching and express delivery in Benin City. Duvets, curtains, rugs, shoes and bulk laundry. Pickup & delivery, back within 72 hours.',
  icons: { icon: '/kempt-mark.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <CtaBand />
        <VisitUs />
        <Footer />
      </body>
    </html>
  );
}
