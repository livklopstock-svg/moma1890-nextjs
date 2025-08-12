import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://www.moma1890.com'),
  title: 'MOMA1890 Boutique Hotel',
  description: 'Boutique hotel in Munich – Haidhausen. Book direct for best rate.',
  openGraph: {
    title: 'MOMA1890 Boutique Hotel',
    description: '51 individual rooms. Regional breakfast. Personal service 24/7.',
    url: '/',
    siteName: 'MOMA1890',
    images: [{ url: '/og.jpg' }],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'de': '/de',
      'es': '/es',
      'fr': '/fr',
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
