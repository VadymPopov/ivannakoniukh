import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Title from "@/components/ui/title";
import { redirect } from "next/navigation";
import { getEventById } from "@/lib/queries";
import { formatEuro } from "@/utils";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { format } from "date-fns";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    redirect("/");
  }

  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] pt-[190px] md:pt-[68px]'>
      <main className='max-w-2xl mx-auto p-6 text-justify'>
        <Section>
          <Title className='text-[#205b4f] mb-5 uppercase'>{event.title}</Title>
          <p className='mb-4'>{event.description}</p>

          <Title
            level='h3'
            className='text-xl text-[#205b4f] mb-4 uppercase font-semibold'>
            Date & Time:
          </Title>

          <div className='flex flex-col gap-2 mb-4'>
            <p className='flex gap-2 items-center text-black'>
              <FaCalendar />
              {format(event.date, "MMM do, yyyy")}, {event.time.substring(0, 5)}
            </p>
            <p className='flex gap-2 items-center text-black'>
              <FaClock />
              {event.duration} min
            </p>
            <p className='flex gap-2 items-center text-black'>
              <FaMapMarkerAlt />
              {event.location}
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='text-lg font-bold mt-2'>{formatEuro(event.price)}</p>
            <Button>Book Now</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
