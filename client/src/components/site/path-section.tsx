import Image from "next/image";
import { Section } from "../ui/section";
import Title from "../ui/title";

export default function MyPathSection() {
  return (
    <Section bgColor='bg-[#d9e8e5] md:bg-[url(/path-bg-lg.png)] bg-no-repeat bg-contain bg-bottom md:bg-right relative'>
      <div className='flex justify-center md:grid md:grid-cols-12 pb-[600px] md:pb-0'>
        <div className='col-start-1 col-span-7'>
          <Title level='h3' className='text-[#2997aa] text-lg font-normal mb-5'>
            Are you ready to step into your power?
          </Title>
          <Title className='text-[#205b4f] mb-5 uppercase'>My Path</Title>
          <div className='text-justify max-w-2xl flex flex-col gap-2.5'>
            <p>
              I know what it feels like to be at rock bottom—to question your
              purpose, to feel lost, unsure of how to change your life. I was
              there. I didn’t know where to turn until I discovered{" "}
              <span className='font-semibold'>quantum psychology</span>, and
              that was my turning point. It was a game-changer. Instead of
              spending years in therapy, I realized true healing could happen in
              just one session.
            </p>
            <p>
              But my journey didn’t stop there. As I grew, I sensed deeper
              blockages—layers of emotions and patterns that still held me back.
              That’s when <span className='font-semibold'>energy work</span>{" "}
              found me. I immersed myself in{" "}
              <span className='font-semibold'>breathwork</span>,{" "}
              <span className='font-semibold'>tantric breathing</span>
              <span className='font-semibold'>
                tantric diamond healing
              </span>,{" "}
              <span className='font-semibold'>Kundalini energy activation</span>
              , and other transformative practices. This was the missing
              piece—the connection between the body, energy, and unconscious
              mind.
            </p>
            <p>
              Now, I bring this powerful combination to my clients. You can work
              <span className='font-semibold'> through the body </span>
              with energy practices like Tantra and Kundalini, or you can work
              <span className='font-semibold'>
                {" "}
                through the unconscious
              </span>{" "}
              with quantum psychology. But when you merge both, the results are
              profound. This unique integration has not only transformed me—from
              someone afraid to stand up for herself to building a business in a
              foreign country—but has also helped my clients achieve rapid and
              lasting breakthroughs.
            </p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0  md:hidden'>
          <Image
            alt='logo'
            src='/path-bg-small.png'
            width={300}
            height={300}
            className='w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] object-contain'
          />
        </div>
      </div>
    </Section>
  );
}
