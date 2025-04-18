import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import Title from '@/components/ui/title';
import { getEventById } from '@/lib/queries';
import { formatEuro } from '@/utils';

type Props = {
  params: Promise<{ locale: Locale; id: string }>;
};

export default async function EventPage({ params }: Props) {
  const { locale, id } = await params;
  const event = await getEventById(id, locale);
  const t = await getTranslations({ locale, namespace: 'EventPage' });

  if (!event) {
    redirect('/');
  }

  return (
    <div className="bg-background-light min-h-screen bg-[length:50%_auto] bg-[position:150%_50%] bg-no-repeat bg-origin-content pt-[178px] font-[family-name:var(--font-geist-sans)] md:bg-[url(/bg.png)] md:pt-[86px]">
      <main className="mx-auto max-w-3xl p-6 text-justify lg:ml-20 xl:max-w-4xl">
        <Section>
          <Title className="text-background mb-5 uppercase">
            {event.title}
          </Title>
          <p className="mb-4">{event.description}</p>

          <Title
            level="h3"
            className="text-background mb-4 text-xl font-semibold uppercase"
          >
            {t('title')}
          </Title>

          <div className="mb-4 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <FaCalendar />
              {format(event.date, 'MMM do, yyyy')}, {event.time.substring(0, 5)}
            </p>
            <p className="flex items-center gap-2">
              <FaClock />
              {event.duration} {t('duration')}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {event.location}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="mt-2 text-lg font-bold">{formatEuro(event.price)}</p>
            <Button>{t('button')}</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
