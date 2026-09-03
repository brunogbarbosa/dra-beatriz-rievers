import type { Metadata } from 'next';
import { Bodoni_Moda, Manrope } from 'next/font/google';
import './globals.css';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const siteUrl = configuredSiteUrl
  || (vercelProductionHost
    ? `https://${vercelProductionHost}`
    : 'https://dra-beatriz-rievers.vercel.app');

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const bodoni = Bodoni_Moda({
  variable: '--font-bodoni',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dra. Beatriz Rievers | Odontologia Estética em Belo Horizonte',
  description: 'Facetas e odontologia estética com naturalidade. Atendimento personalizado com a Dra. Beatriz Rievers no Buritis e Castelo, em Belo Horizonte.',
  keywords: ['facetas em resina', 'odontologia estética', 'dentista no Buritis', 'dentista no Castelo', 'Belo Horizonte', 'Dra. Beatriz Rievers'],
  authors: [{ name: 'Dra. Beatriz Rievers' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dra. Beatriz Rievers',
    title: 'Dra. Beatriz Rievers | Odontologia estética com naturalidade',
    description: 'Facetas e estética dental com planejamento individual no Buritis e Castelo, em Belo Horizonte.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Dra. Beatriz Rievers — Odontologia estética com naturalidade.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Beatriz Rievers | Odontologia estética com naturalidade',
    description: 'Facetas e estética dental com planejamento individual em Belo Horizonte.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${bodoni.variable}`}>
        {children}
      </body>
    </html>
  );
}
