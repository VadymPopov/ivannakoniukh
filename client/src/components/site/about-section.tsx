import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Section } from '../ui/section';
import Title from '../ui/title';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  return (
    <Section
      bgColor="bg-white md:bg-[url(/about-bg-lg.png)] bg-no-repeat bg-contain bg-bottom md:bg-left relative"
      id="about"
    >
      <div className="flex justify-center pb-[600px] md:grid md:grid-cols-12 md:pb-0">
        <div className="col-span-7 col-start-6">
          <Title level="h3" className="mb-5 text-lg font-normal text-[#2997aa]">
            {t('subtitle')}
          </Title>
          <Title className="mb-5 text-[#205b4f] uppercase">{t('title')}</Title>
          <div className="flex max-w-2xl flex-col gap-2.5 text-justify">
            <p>{t('description.0')}</p>
            <p>{t('description.1')}</p>
            <p className="font-semibold text-[#212529]">{t('action')}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 md:hidden">
          <Image
            alt="logo"
            src="/about-bg-small.png"
            width={300}
            height={300}
            className="h-[500px] w-[500px] object-contain sm:h-[600px] sm:w-[600px]"
          />
        </div>
      </div>
    </Section>
  );
}
