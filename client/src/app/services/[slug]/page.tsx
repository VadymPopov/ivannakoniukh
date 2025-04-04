import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Title from "@/components/ui/title";
import { services, serviceType } from "@/lib/services";
import { redirect } from "next/navigation";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.keys(services).includes(slug)) {
    redirect("/");
  }

  const service = services[slug as serviceType];

  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] '>
      <main className='max-w-2xl mx-auto p-6 text-justify'>
        <Section>
          <Title className='text-[#205b4f] mb-5 uppercase'>
            {service.title}
          </Title>
          <p className='mb-4'>{service.description}</p>

          <Title
            level='h3'
            className='text-xl text-[#205b4f] mb-4 uppercase font-semibold'>
            What You&apos;ll Get:
          </Title>
          <ul className='list-disc pl-5 space-y-2 mb-6'>
            {service.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <Title
            level='h3'
            className='text-xl text-[#205b4f] mb-4 uppercase font-semibold'>
            Expected Outcomes:
          </Title>
          <ul className='list-disc pl-5 space-y-2 mb-6'>
            {service.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>

          <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>Price: {service.price} €</p>
            <Button>Book Now</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
