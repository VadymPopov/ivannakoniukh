"use client";
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
import Title from "../ui/title";
import { useRouter } from "next/navigation";
import { useServices } from "@/hooks/useServices";
import { formatEuro } from "@/utils";

function ServiceCards() {
  const router = useRouter();
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const { loading, error, services } = useServices();

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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {services.map(
        ({ title, price, groupPrice, description, slug, image }) => (
          <Card
            key={slug}
            className='overflow-hidden pt-0 flex flex-col justify-between h-full hover:cursor-pointer hover:shadow-2xl transition-colors'
            onClick={() => {
              router.replace(`/services/${slug}`);
            }}>
            <div className=''>
              <Image
                src={`${strapiBaseUrl}${image.url}`}
                alt={image.alternativeText || title}
                width={400}
                height={300}
                className='w-full h-80 object-cover object-top'
              />
              <CardContent className='mt-4'>
                <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
                <CardDescription className='text-justify'>
                  {description}
                </CardDescription>
              </CardContent>
            </div>

            <CardFooter className='flex justify-between'>
              <p className='text-lg font-bold mt-2'>
                {groupPrice ? (
                  <>
                    {formatEuro(price)} - {formatEuro(groupPrice)}
                  </>
                ) : (
                  formatEuro(price)
                )}
              </p>
              <CardAction>
                <Button onClick={(e) => handleButtonClick(e)}>Book Now</Button>
              </CardAction>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <Section bgColor='bg-white' id='services'>
      <div className='text-center max-w-2xl mx-auto'>
        <Title level='h3' className='text-[#2997aa] text-lg font-normal'>
          Elevate Your Well-Being
        </Title>
        <Title className='text-[#205b4f] mt-2 uppercase'>Services</Title>
      </div>

      <ServiceCards />
    </Section>
  );
}
