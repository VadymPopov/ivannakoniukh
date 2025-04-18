'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../ui/card';
import { Section } from '../ui/section';
import Title from '../ui/title';

import { useServices } from '@/hooks/useServices';
import { formatEuro } from '@/utils';

function ServiceCards() {
  const t = useTranslations('ServicesSection');
  const locale = useLocale();
  const router = useRouter();
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const { loading, error, services } = useServices(locale);

  if (error) {
    return <div>Error loading services</div>;
  }

  if (loading) {
    return <div>...Loading</div>;
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map(
        ({ title, price, groupPrice, description, slug, image, badges }) => (
          <Card
            key={slug}
            className="relative flex h-full flex-col justify-between overflow-hidden pt-0 transition-colors hover:cursor-pointer hover:shadow-2xl"
            onClick={() => {
              router.replace(`${locale}/services/${slug}`);
            }}
          >
            <div className="absolute top-5 right-5 flex gap-2">
              {badges.map(({ documentId, label }) => (
                <Badge
                  key={documentId}
                  variant={label === 'group' ? 'default' : 'secondary'}
                >
                  {label}
                </Badge>
              ))}
            </div>
            <div className="">
              <Image
                src={`${strapiBaseUrl}${image.url}`}
                alt={image.alternativeText || title}
                width={400}
                height={300}
                className="w-full object-cover object-top md:h-60 lg:h-80"
                unoptimized
              />
              <CardContent className="mt-4">
                <CardTitle className="mb-2 text-lg font-semibold">
                  {title}
                </CardTitle>
                <CardDescription className="text-justify">
                  {description}
                </CardDescription>
              </CardContent>
            </div>

            <CardFooter className="flex justify-between">
              <p className="text-base font-bold lg:text-lg">
                {groupPrice ? (
                  <>
                    {formatEuro(price)} - {formatEuro(groupPrice)}
                  </>
                ) : (
                  formatEuro(price)
                )}
              </p>
              <CardAction>
                <Button onClick={(e) => handleButtonClick(e)}>
                  {t('button')}
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        ),
      )}
    </div>
  );
}

export default function ServicesSection() {
  const t = useTranslations('ServicesSection');
  return (
    <Section bgColor="bg-background-light" id="services">
      <div className="mx-auto max-w-2xl text-center">
        <Title
          level="h3"
          className="text-title-secondary mb-5 text-lg font-normal"
        >
          {t('subtitle')}
        </Title>
        <Title className="text-title-primary mb-5 uppercase">
          {t('title')}
        </Title>
      </div>

      <ServiceCards />
    </Section>
  );
}
