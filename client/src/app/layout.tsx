import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito } from 'next/font/google';

import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import ApolloClientProvider from '@/providers/ApolloClientProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ivanna Koniukh',
  description:
    'Your personal holistic therapist, committed to enhancing your well-being and transforming your life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <ApolloClientProvider>
          <Header />
          {children}
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
