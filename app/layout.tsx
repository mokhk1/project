import './globals.css';
import type { Metadata } from 'next';
import { AppProviders } from '@/components/providers/app-providers';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'DETHAR – Geological Digital Museum',
  description:
    'Discover rocks, minerals and Earth geological heritage through an interactive digital museum.',
  openGraph: {
    title: 'DETHAR – Geological Digital Museum',
    description:
      'Discover rocks, minerals and Earth geological heritage through an interactive digital museum.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}