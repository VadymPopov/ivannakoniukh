"use client";
import { Button } from "../ui/button";
import {
  Card,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "../ui/card";
import { Section } from "../ui/section";
import { FaMapMarkerAlt, FaClock, FaCalendar } from "react-icons/fa";
import Title from "../ui/title";
import { useRouter } from "next/navigation";
import { useEvents } from "@/hooks/useEvents";
import { formatEuro } from "@/utils";
import { format } from "date-fns";

function EventsCards() {
  const router = useRouter();

  const { loading, error, events } = useEvents();

  if (error) {
    return <div>Error loading events</div>;
  }

  if (loading) {
    return <div>...Loading</div>;
  }

  const onDetailsClick = (id: string) => {
    router.replace(`/events/${id}`);
  };

  return (
    <div className='p-6 flex flex-col gap-4'>
      {events.map((event, index) => (
        <Card key={index} className='flex flex-col justify-between h-full'>
          <div className=''>
            <CardContent className='mt-4'>
              <CardTitle className='text-lg font-semibold'>
                {event.title}
              </CardTitle>
              <div className='flex flex-col gap-2'>
                <CardDescription>{event.description}</CardDescription>
                <CardDescription className='flex gap-2 items-center text-black'>
                  <FaCalendar />
                  {format(event.date, "MMM do, yyyy")},{" "}
                  {event.time.substring(0, 5)}
                </CardDescription>
                <CardDescription className='flex gap-2 items-center text-black'>
                  <FaClock />
                  {event.duration} min
                </CardDescription>
                <CardDescription className='flex gap-2 items-center text-black'>
                  <FaMapMarkerAlt />
                  {event.location}
                </CardDescription>
              </div>
            </CardContent>
          </div>

          <CardFooter className='flex justify-between'>
            <p className='text-lg font-bold mt-2'>{formatEuro(event.price)}</p>
            <CardAction className='flex gap-2'>
              <Button
                variant='ghost'
                className='hidden sm:block'
                onClick={() => onDetailsClick(event.documentId)}>
                More Details
              </Button>
              <Button>Book Now</Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function EventsSection() {
  return (
    <Section bgColor='bg-gradient-to-r from-[#d9e8e5] to-[#a8cfc4]' id='events'>
      <div className='text-center max-w-2xl mx-auto'>
        <Title level='h3' className='text-[#2997aa] text-lg font-normal'>
          Explore our upcoming
        </Title>
        <Title className='text-[#205b4f] mt-2 uppercase'>Events</Title>
      </div>

      <EventsCards />
    </Section>
  );
}
