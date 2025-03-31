import Image from "next/image";
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

const services = [
  {
    title: "Therapeutic Consultation",
    description:
      "This session is designed to work on a subconscious level, helping you identify and heal the root causes of inner struggles.",
    price: "60 €",
    image: "/therapeutic.svg",
  },
  {
    title: "Therapeutic Consultation Package (4 Sessions)",
    description:
      "A package of 4 therapeutic consultations to deepen your healing journey.",
    price: "220 €",
    image: "/therapeutic-package.svg",
  },
  {
    title: "Diagnostic Consultation",
    description:
      "This free consultation allows you to discuss your concerns and gain clarity on the best therapeutic approach for you.",
    price: "0 €",
    image: "/diagnostic.svg",
  },
  {
    title: "Tantric Breathwork Session (Group or Individual)",
    description:
      "Tantric breathwork is a powerful practice that helps release emotional and physical blocks, restoring a deep sense of connection.",
    price: "40-60 €",
    image: "/tantric-breathwork.svg",
  },
  {
    title: "Breathwork Therapy Session (Group or Individual)",
    description:
      "Breathwork is a scientifically backed practice that uses controlled breathing techniques to enhance mental clarity and emotional balance.",
    price: "40-60 €",
    image: "/breathwork-therapy.svg",
  },
  {
    title: "Sadhu Boards",
    description:
      "Sadhu Boards is a powerful somatic and energetic practice designed to help you break free from limitations and release tension.",
    price: "80 €",
    image: "/sadhu-boards.svg",
  },
];

function ServiceCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {services.map((service, index) => (
        <Card
          key={index}
          className='overflow-hidden pt-0 flex flex-col justify-between h-full'>
          <div className=''>
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className='w-full h-80 object-cover object-top'
            />
            <CardContent className='mt-4'>
              <CardTitle className='text-lg font-semibold'>
                {service.title}
              </CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </div>

          <CardFooter className='flex justify-between'>
            <p className='text-lg font-bold mt-2'>{service.price}</p>
            <CardAction className='flex gap-2'>
              <Button variant='ghost'>More Details</Button>
              <Button>Book Now</Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <Section bgColor='bg-white'>
      <div className='text-center max-w-2xl mx-auto'>
        <p className='text-[#2997aa] text-lg'>Elevate Your Well-Being</p>
        <h2 className='text-4xl font-semibold text-black mt-2'>Services</h2>
      </div>

      <ServiceCards />
    </Section>
  );
}
