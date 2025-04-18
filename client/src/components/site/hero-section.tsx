import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';
import { Section } from '../ui/section';
import Title from '../ui/title';

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    <Section
      bgColor="bg-background"
      styles="bg-[url(/hero-bg-small.png)] lg:bg-[url(/hero-bg-lg.png)] bg-no-repeat bg-contain bg-bottom md:bg-[right_200px_top_10px] md:min-h-[calc(100vh-86px)]"
      id="home"
    >
      <div className="text-foreground-light flex h-screen flex-col items-center md:h-auto md:items-start md:py-20 xl:pl-40">
        <p className="mb-5 text-center uppercase md:text-sm lg:text-lg">
          {t('subtitle')}
        </p>
        <Title
          level="h1"
          className="pb-5 text-center uppercase md:max-w-[350px] md:text-left md:text-6xl lg:text-7xl"
        >
          {t('title')}
        </Title>
        <p className="mb-5 text-center md:max-w-[320px] md:text-left md:text-base lg:max-w-md lg:text-lg">
          {t('description')}
        </p>
        <Button
          variant="outline"
          className="text-foreground bg-navbar-primary border-navbar-primary hover:text-foreground-light cursor-pointer px-4 py-2 text-xs font-semibold uppercase hover:bg-transparent"
        >
          {t('button')}
        </Button>
      </div>
    </Section>
  );
}
