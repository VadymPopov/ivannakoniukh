import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { redirect } from 'next/navigation';

import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import Title from '@/components/ui/title';
import { getEventById } from '@/lib/queries';
import { formatEuro } from '@/utils';

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-[length:50%_auto] bg-[position:150%_50%] bg-no-repeat bg-origin-content pt-[178px] font-[family-name:var(--font-geist-sans)] md:bg-[url(/bg.png)] md:pt-[86px]">
      <main className="mx-auto max-w-2xl p-6 text-justify">
        <Section>
          <Title className="mb-5 text-[#205b4f] uppercase">{event.title}</Title>
          <p className="mb-4">{event.description}</p>

          <Title
            level="h3"
            className="mb-4 text-xl font-semibold text-[#205b4f] uppercase"
          >
            Date & Time:
          </Title>

          <div className="mb-4 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-black">
              <FaCalendar />
              {format(event.date, 'MMM do, yyyy')}, {event.time.substring(0, 5)}
            </p>
            <p className="flex items-center gap-2 text-black">
              <FaClock />
              {event.duration} min
            </p>
            <p className="flex items-center gap-2 text-black">
              <FaMapMarkerAlt />
              {event.location}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="mt-2 text-lg font-bold">{formatEuro(event.price)}</p>
            <Button>Book Now</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
