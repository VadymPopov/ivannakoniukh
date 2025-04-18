import { redirect } from 'next/navigation';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import Title from '@/components/ui/title';
import { getServiceBySlug } from '@/lib/queries';
import { formatEuro } from '@/utils';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const service = await getServiceBySlug(decodedSlug, locale);
  const t = await getTranslations({ locale, namespace: 'ServicePage' });

  if (!service) {
    redirect('/');
  }

  return (
    <div className="bg-background-light min-h-screen bg-[length:50%_auto] bg-[position:150%_50%] bg-no-repeat bg-origin-content pt-[178px] font-[family-name:var(--font-geist-sans)] md:bg-[url(/bg.png)] md:pt-[86px]">
      <main className="max-w-3xl p-6 text-justify lg:ml-20 xl:max-w-4xl">
        <Section>
          <Title className="text-background mb-5 text-2xl uppercase sm:text-4xl">
            {service.title}
          </Title>
          <div className="mb-4 flex justify-end gap-2">
            {service.badges.map(({ documentId, label }) => (
              <Badge
                key={documentId}
                variant={label === 'group' ? 'default' : 'secondary'}
              >
                {label}
              </Badge>
            ))}
          </div>
          <p className="mb-4 font-semibold">{service.pageDetails.intro}</p>
          <p className="mb-4">{service.pageDetails.description}</p>

          {service.pageDetails.why && (
            <>
              <Title
                level="h3"
                className="text-background mb-4 text-xl font-semibold uppercase"
              >
                {service.pageDetails.why.title}
              </Title>
              {service.pageDetails.why.description && (
                <p className="mb-4">{service.pageDetails.why.description}</p>
              )}
              <ul className="mb-6 list-disc space-y-2 pl-5">
                {service.pageDetails.why.items.map(({ id, label }) => (
                  <li key={id}>{label}</li>
                ))}
              </ul>
            </>
          )}

          <Title
            level="h3"
            className="text-background mb-4 text-xl font-semibold uppercase"
          >
            {service.pageDetails.details.title}
          </Title>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            {service.pageDetails.details.items.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>

          {service.pageDetails.what && (
            <>
              <Title
                level="h3"
                className="text-background mb-4 text-xl font-semibold uppercase"
              >
                {service.pageDetails.what.title}
              </Title>
              {service.pageDetails.what.description && (
                <p className="mb-4">{service.pageDetails.what.description}</p>
              )}
              <ul className="mb-6 list-disc space-y-2 pl-5">
                {service.pageDetails.what.items.map(({ id, label }) => (
                  <li key={id}>{label}</li>
                ))}
              </ul>
            </>
          )}

          <Title
            level="h3"
            className="text-background mb-4 text-xl font-semibold uppercase"
          >
            {service.pageDetails.outcomes.title}
          </Title>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            {service.pageDetails.outcomes.items.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>

          <p className="mb-4 font-semibold">{service.pageDetails.cta}</p>

          <div className="flex items-center justify-between">
            {service.groupPrice ? (
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{t('price')}</p>
                <p>
                  {t('badge.individual')}
                  <span className="ml-2 text-lg font-semibold">
                    {formatEuro(service.price)}
                  </span>
                </p>
                {service.groupPrice && (
                  <p>
                    {t('badge.group')}
                    <span className="ml-2 text-lg font-semibold">
                      {formatEuro(service.groupPrice)}
                    </span>
                  </p>
                )}
              </div>
            ) : (
              <p className="text-lg font-semibold">
                {t('price')} {formatEuro(service.price)}
              </p>
            )}

            <Button>{t('button')}</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
