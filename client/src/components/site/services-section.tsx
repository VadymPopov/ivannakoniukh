"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
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
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
      {services.map(
        ({ title, price, groupPrice, description, slug, image, badges }) => (
          <Card
            key={slug}
            className='overflow-hidden pt-0 flex flex-col justify-between h-full hover:cursor-pointer hover:shadow-2xl transition-colors relative'
            onClick={() => {
              router.replace(`/services/${slug}`);
            }}>
            <div className='absolute top-5 right-5 flex gap-2'>
              {badges.map(({ documentId, label }) => (
                <Badge
                  key={documentId}
                  variant={label === "group" ? "default" : "secondary"}>
                  {label}
                </Badge>
              ))}
            </div>
            <div className=''>
              <Image
                src={`${strapiBaseUrl}${image.url}`}
                alt={image.alternativeText || title}
                width={400}
                height={300}
                className='w-full md:h-60 lg:h-80 object-cover object-top'
                unoptimized
              />
              <CardContent className='mt-4'>
                <CardTitle className='text-lg font-semibold mb-2'>
                  {title}
                </CardTitle>
                <CardDescription className='text-justify'>
                  {description}
                </CardDescription>
              </CardContent>
            </div>

            <CardFooter className='flex justify-between'>
              <p className='text-base lg:text-lg font-bold'>
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
        <Title level='h3' className='text-[#2997aa] text-lg font-normal mb-5'>
          Elevate Your Well-Being
        </Title>
        <Title className='text-[#205b4f] uppercase mb-5'>Services</Title>
      </div>

      <ServiceCards />
    </Section>
  );
}
