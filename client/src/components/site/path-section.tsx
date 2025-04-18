import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Section } from '../ui/section';
import Title from '../ui/title';

export default function MyPathSection() {
  const t = useTranslations('PathSection');

  const RichText = (textKey: string) =>
    t.rich(textKey, {
      strong: (chunks) => <span className="font-semibold">{chunks}</span>,
    });

  return (
    <Section
      bgColor="bg-background-secondary"
      styles="md:min-h-[calc(100vh-86px)] md:bg-[url(/path-bg-lg.png)] bg-no-repeat bg-contain bg-bottom md:bg-[right_200px_top_0px] relative"
    >
      <div className="flex justify-center pb-[600px] md:grid md:grid-cols-12 md:pb-0">
        <div className="col-span-7 col-start-1">
          <Title
            level="h3"
            className="text-title-secondary mb-5 text-lg font-normal"
          >
            {t('subtitle')}
          </Title>
          <Title className="text-title-primary mb-5 uppercase">
            {t('title')}
          </Title>
          <div className="flex max-w-2xl flex-col gap-2.5 text-justify">
            <p>{RichText('description.paragraph1')}</p>
            <p>{RichText('description.paragraph2')}</p>
            <p>{RichText('description.paragraph3')}</p>
            <p>{RichText('description.paragraph4')}</p>
            <p className="font-semibold">{t('action')}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 md:hidden">
          <Image
            alt="logo"
            src="/path-bg-small.png"
            width={300}
            height={300}
            className="h-[500px] w-[500px] object-contain sm:h-[600px] sm:w-[600px]"
          />
        </div>
      </div>
    </Section>
  );
}
