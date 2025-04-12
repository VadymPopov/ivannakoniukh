import React from 'react';
import { useTranslations } from 'next-intl';

import { Section } from '../ui/section';
import Title from '../ui/title';
import StepsCards from './steps-cards';

export default function StepsSection() {
  const t = useTranslations('StepsSection');
  return (
    <Section bgColor="bg-white" id="about">
      <div className="mx-auto max-w-2xl text-center">
        <Title level="h3" className="mb-5 text-lg font-normal text-[#2997aa]">
          {t('subtitle')}
        </Title>
        <Title className="mb-5 text-[#205b4f] uppercase">{t('title')}</Title>
      </div>
      <StepsCards />
    </Section>
  );
}
