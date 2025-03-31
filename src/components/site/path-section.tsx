import Image from "next/image";
import { Section } from "../ui/section";

export default function MyPathSection() {
  return (
    <Section bgColor='bg-[#f0f5f3]'>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <p className='text-[#2997aa] text-lg mb-5'>
            Are you ready to step into your power?
          </p>
          <h2 className='text-4xl font-semibold text-black mb-5'>My Path</h2>
          <div className='text-justify max-w-[520px] flex flex-col gap-2.5'>
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
            <p>
              Healing doesn’t have to take years. You don’t have to stay stuck
              in old patterns. Even after just one session, you can feel a
              shift. Your{" "}
              <span className='font-semibold'>
                external world reflects your internal state
              </span>
              , and you attract not what you think, but what you feel. My
              mission is to help you align with your true self—to find balance,
              energy, clarity, confidence, and self-honesty. Because without
              honesty with yourself, nothing in life is truly real.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          {" "}
          <Image
            src='/meditation-white.webp'
            alt='logo'
            className='w-[500px] h-[500px] object-cover rounded-md mb-4'
            width={300}
            height={300}
          />
        </div>
      </div>
    </Section>
  );
}
