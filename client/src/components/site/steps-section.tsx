import React from 'react';
import { useTranslations } from 'next-intl';

import { Section } from '../ui/section';
import Title from '../ui/title';
import StepsCards from './steps-cards';

export default function StepsSection() {
  const t = useTranslations('StepsSection');
  return (
    <Section bgColor="bg-background-light" id="about">
      <div className="mx-auto max-w-2xl text-center">
        <Title
          level="h3"
          className="text-title-secondary mb-5 text-lg font-normal"
        >
          {t('subtitle')}
        </Title>
        <Title className="text-title-primary mb-5 text-3xl uppercase sm:text-4xl">
          {t('title')}
        </Title>
      </div>
      <StepsCards />
    </Section>
  );
}
