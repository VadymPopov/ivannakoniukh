import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Title from "@/components/ui/title";
import { redirect } from "next/navigation";

type serviceType =
  | "therapeutic-consultation"
  | "therapeutic-consultation-package"
  | "tantric-breathwork"
  | "diagnostic-consultation"
  | "breathwork-therapy"
  | "sadhu-boards";

export const services = {
  "therapeutic-consultation": {
    title: "Therapeutic Consultation",
    description:
      "A deep, transformative healing session to identify and heal the root causes of inner limitations.",
    details: [
      "Identify hidden blocks preventing personal and professional growth.",
      "Uncover and release unresolved emotions from past experiences.",
      "Heal deep-seated trauma, including subconscious imprints.",
      "Replace limiting beliefs with empowering ones.",
    ],
    outcomes: [
      "Mental clarity, emotional balance, and lightness.",
      "A renewed understanding of personal and professional aspirations.",
      "Relief from anxiety, stress, and emotional tension.",
      "Increased energy, motivation, and inner resilience.",
    ],
    price: 60.0,
  },

  "therapeutic-consultation-package": {
    title: "Therapeutic Consultation Package (4 Sessions)",
    description:
      "A structured package for deep personal and professional breakthroughs with ongoing support.",
    details: [
      "Continuous support between sessions.",
      "Personalized guidance, additional practices, and insights.",
      "A trusted space for deeper transformation.",
    ],
    outcomes: [
      "Break free from limitations.",
      "Achieve clarity, confidence, and success.",
      "Sustainable personal and professional growth.",
      "Ongoing support ensures lasting transformation.",
    ],
    price: 220.0,
  },

  "diagnostic-consultation": {
    title: "Diagnostic Consultation",
    description:
      "A free consultation to discuss your concerns and gain clarity on the best therapeutic approach.",
    details: [
      "Share your current challenges and goals.",
      "Receive professional guidance on the best approach.",
      "Get a clear action plan to move forward.",
    ],
    outcomes: [
      "Clarity on your next steps.",
      "Guidance on the most effective transformation path.",
      "Confidence in choosing the right service.",
    ],
    price: 0.0,
  },

  "tantric-breathwork": {
    title: "Unlock Energy, Release Tension, and Connect with Your True Self",
    description:
      "A powerful practice that releases emotional and physical blocks, restoring harmony and vitality.",
    details: [
      "Deep relaxation & stress relief.",
      "Increased energy & vitality.",
      "Emotional balance and transformation.",
      "Enhanced sensuality & presence.",
      "Clarity & inner alignment.",
    ],
    outcomes: [
      "Profound relaxation and reduced stress.",
      "Increased awareness of body and emotions.",
      "A deeper connection to self and others.",
      "Enhanced energy and overall well-being.",
    ],
    price: 60.0,
  },

  "breathwork-therapy": {
    title: "Breathwork Therapy Session",
    description:
      "Harness the power of breath to restore balance, mental clarity, and emotional resilience.",
    details: [
      "Stress reduction & mental clarity.",
      "Emotional release & resilience.",
      "Increased energy & focus.",
      "Nervous system regulation.",
      "Enhanced sleep & recovery.",
    ],
    outcomes: [
      "Improved focus and mental clarity.",
      "Emotional relief and inner stability.",
      "Enhanced physical vitality and energy.",
      "Better sleep and recovery from stress.",
    ],
    price: 60.0,
  },

  "sadhu-boards": {
    title: "Sadhu Boards",
    description:
      "Unlock deep resilience, release tension, and expand your limits with nail board standing.",
    details: [
      "Deep relaxation & nervous system reset.",
      "Emotional detox & energy activation.",
      "Subconscious transformation & mental resilience.",
      "Endorphin boost and a sense of well-being.",
    ],
    outcomes: [
      "Profound relaxation and stress relief.",
      "Mental clarity and heightened focus.",
      "A surge of energy, vitality, and inner strength.",
      "Release from emotional patterns and limiting beliefs.",
      "Expanded personal resilience and confidence.",
    ],
    price: 60.0,
  },
};

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = services[slug as serviceType];

  if (!service) {
    redirect("/");
  }

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
