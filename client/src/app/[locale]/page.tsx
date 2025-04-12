import { use } from 'react';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import AboutSection from '@/components/site/about-section';
import EventsSection from '@/components/site/events-section';
import HeroSection from '@/components/site/hero-section';
import MyPathSection from '@/components/site/path-section';
import ServicesSection from '@/components/site/services-section';
import StepsSection from '@/components/site/steps-section';

type Props = {
  params: Promise<{ locale: Locale }>;
};
export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <div className="min-h-screen pt-[178px] font-[family-name:var(--font-geist-sans)] md:pt-[86px]">
      <main>
        <HeroSection />
        <StepsSection />
        <AboutSection />
        <MyPathSection />
        <ServicesSection />
        <EventsSection />
      </main>
    </div>
  );
}
