import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Title from "@/components/ui/title";
import { redirect } from "next/navigation";
import { getServiceBySlug } from "@/lib/queries";
import { formatEuro } from "@/utils";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    redirect("/");
  }

  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] pt-[190px] md:pt-[68px]'>
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
            {service.details.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>

          <Title
            level='h3'
            className='text-xl text-[#205b4f] mb-4 uppercase font-semibold'>
            Expected Outcomes:
          </Title>
          <ul className='list-disc pl-5 space-y-2 mb-6'>
            {service.outcomes.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>

          <div className='flex justify-between items-center'>
            {service.groupPrice ? (
              <div className='flex flex-col'>
                <p className='text-lg font-semibold'>Price:</p>
                <p>
                  individual
                  <span className='text-lg font-semibold ml-2'>
                    {formatEuro(service.price)}
                  </span>
                </p>
                {service.groupPrice && (
                  <p>
                    group
                    <span className='text-lg font-semibold ml-2'>
                      {formatEuro(service.groupPrice)}
                    </span>
                  </p>
                )}
              </div>
            ) : (
              <p className='text-lg font-semibold'>
                Price: {formatEuro(service.price)}
              </p>
            )}

            <Button>Book Now</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
