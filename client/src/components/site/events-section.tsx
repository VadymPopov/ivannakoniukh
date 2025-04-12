'use client';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { format } from 'date-fns';

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

import { useEvents } from '@/hooks/useEvents';
import { formatEuro } from '@/utils';

function EventsCards() {
  const t = useTranslations('EventsSection');
  const router = useRouter();
  const locale = useLocale();

  const { loading, error, events } = useEvents(locale);

  if (error) {
    return <div>Error loading events</div>;
  }

  if (loading) {
    return <div>...Loading</div>;
  }

  const onDetailsClick = (id: string) => {
    router.replace(`${locale}/events/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      {events.map((event, index) => (
        <Card key={index} className="flex h-full flex-col justify-between">
          <div className="">
            <CardContent className="mt-4">
              <CardTitle className="text-lg font-semibold">
                {event.title}
              </CardTitle>
              <div className="flex flex-col gap-2">
                <CardDescription>{event.description}</CardDescription>
                <CardDescription className="flex items-center gap-2 text-black">
                  <FaCalendar />
                  {format(event.date, 'MMM do, yyyy')},{' '}
                  {event.time && event.time.substring(0, 5)}
                </CardDescription>
                <CardDescription className="flex items-center gap-2 text-black">
                  <FaClock />
                  {event.duration} {t('duration')}
                </CardDescription>
                <CardDescription className="flex items-center gap-2 text-black">
                  <FaMapMarkerAlt />
                  {event.location}
                </CardDescription>
              </div>
            </CardContent>
          </div>

          <CardFooter className="flex justify-between">
            <p className="mt-2 text-lg font-bold">{formatEuro(event.price)}</p>
            <CardAction className="flex gap-2">
              <Button
                variant="ghost"
                className="hidden sm:block"
                onClick={() => onDetailsClick(event.documentId)}
              >
                {t('buttons.details')}
              </Button>
              <Button>{t('buttons.book')}</Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function EventsSection() {
  const t = useTranslations('EventsSection');
  return (
    <Section bgColor="bg-[#d9e8e5] h-screen" id="events">
      <div className="mx-auto max-w-2xl text-center">
        <Title level="h3" className="mb-5 text-lg font-normal text-[#2997aa]">
          {t('subtitle')}
        </Title>
        <Title className="mb-5 text-[#205b4f] uppercase">{t('title')}</Title>
      </div>

      <EventsCards />
    </Section>
  );
}
