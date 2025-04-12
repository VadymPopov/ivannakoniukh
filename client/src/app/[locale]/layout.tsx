import '../globals.css';

import { ReactNode } from 'react';
import { Geist, Geist_Mono, Nunito } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import { routing } from '@/i18n/routing';
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

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: 'Layout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ApolloClientProvider>
            <Header />
            {children}
            <Footer />
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
