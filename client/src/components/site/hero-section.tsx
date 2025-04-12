import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';
import { Section } from '../ui/section';
import Title from '../ui/title';

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    <Section
      bgColor="bg-[rgb(15,81,50)] bg-[url(/hero-bg-small.png)] lg:bg-[url(/hero-bg-lg.png)] bg-no-repeat bg-contain bg-bottom md:bg-right"
      id="home"
    >
      <div className="flex h-screen flex-col items-center md:h-auto md:items-start md:py-20 xl:pl-40">
        <p className="mb-5 text-center text-white uppercase md:text-sm lg:text-lg">
          {t('subtitle')}
        </p>
        <Title
          level="h1"
          className="pb-5 text-center text-white uppercase md:max-w-[350px] md:text-left md:text-6xl lg:text-7xl"
        >
          {t('title')}
        </Title>
        <p className="mb-5 text-center text-white md:max-w-[320px] md:text-left md:text-base lg:max-w-md lg:text-lg">
          {t('description')}
        </p>
        <Button
          variant="outline"
          className="border px-4 py-2 text-xs font-semibold text-black uppercase hover:bg-transparent hover:text-white"
        >
          {t('button')}
        </Button>
      </div>
    </Section>
  );
}
