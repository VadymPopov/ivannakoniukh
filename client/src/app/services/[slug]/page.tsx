import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import Title from '@/components/ui/title';
import { getServiceBySlug } from '@/lib/queries';
import { formatEuro } from '@/utils';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-[length:50%_auto] bg-[position:150%_50%] bg-no-repeat bg-origin-content pt-[178px] font-[family-name:var(--font-geist-sans)] md:bg-[url(/bg.png)] md:pt-[86px]">
      <main className="mx-auto max-w-2xl p-6 text-justify">
        <Section>
          <Title className="mb-5 text-[#205b4f] uppercase">
            {service.title}
          </Title>
          <p className="mb-4">{service.description}</p>

          <Title
            level="h3"
            className="mb-4 text-xl font-semibold text-[#205b4f] uppercase"
          >
            What You&apos;ll Get:
          </Title>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            {service.details.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>

          <Title
            level="h3"
            className="mb-4 text-xl font-semibold text-[#205b4f] uppercase"
          >
            Expected Outcomes:
          </Title>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            {service.outcomes.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            {service.groupPrice ? (
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Price:</p>
                <p>
                  individual
                  <span className="ml-2 text-lg font-semibold">
                    {formatEuro(service.price)}
                  </span>
                </p>
                {service.groupPrice && (
                  <p>
                    group
                    <span className="ml-2 text-lg font-semibold">
                      {formatEuro(service.groupPrice)}
                    </span>
                  </p>
                )}
              </div>
            ) : (
              <p className="text-lg font-semibold">
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
