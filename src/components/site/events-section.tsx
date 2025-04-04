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
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Title from "../ui/title";

const events = [
  {
    title: "Therapeutic Consultation",
    description:
      "This session is designed to work on a subconscious level, helping you identify and heal the root causes of inner struggles.",
    price: "60 €",
    location: "Antwerp, Cornelissenlaan",
    date: "5 May 2025",
    time: "11:00 - 12:00",
  },
  {
    title: "Therapeutic Consultation Package (4 Sessions)",
    description:
      "A package of 4 therapeutic consultations to deepen your healing journey.",
    price: "220 €",
    location: "Online",
    date: "5 May 2025",
    time: "11:00 - 12:00",
  },
  {
    title: "Diagnostic Consultation",
    description:
      "This free consultation allows you to discuss your concerns and gain clarity on the best therapeutic approach for you.",
    price: "0 €",
    location: "Antwerp, Cornelissenlaan",
    date: "5 May 2025",
    time: "11:00 - 12:00",
  },
];

function EventsCards() {
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
                  <FaClock />
                  {event.date}, {event.time}
                </CardDescription>
                <CardDescription className='flex gap-2 items-center text-black'>
                  <FaMapMarkerAlt />
                  {event.location}
                </CardDescription>
              </div>
            </CardContent>
          </div>

          <CardFooter className='flex justify-between'>
            <p className='text-lg font-bold mt-2'>{event.price}</p>
            <CardAction className='flex gap-2'>
              <Button variant='ghost' className='hidden sm:block'>
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
