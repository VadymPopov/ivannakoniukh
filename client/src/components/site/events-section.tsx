"use client";
import { FaCalendar,FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { format } from "date-fns";

import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Section } from "../ui/section";
import Title from "../ui/title";

import { useEvents } from "@/hooks/useEvents";
import { formatEuro } from "@/utils";

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
    <div className='flex flex-col gap-4'>
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
    <Section bgColor='bg-[#d9e8e5] h-screen' id='events'>
      <div className='text-center max-w-2xl mx-auto'>
        <Title level='h3' className='text-[#2997aa] text-lg font-normal mb-5'>
          Explore our upcoming
        </Title>
        <Title className='text-[#205b4f] mb-5 uppercase'>Events</Title>
      </div>

      <EventsCards />
    </Section>
  );
}
