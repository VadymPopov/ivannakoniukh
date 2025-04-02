import React from "react";
import Image from "next/image";
import { Section } from "../ui/section";
import StepsCards from "./steps-cards";
import Title from "../ui/title";

export default function AboutSection() {
  return (
    <Section bgColor='bg-white'>
      <div className='grid grid-cols-2 gap-10 mb-10'>
        <div className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='logo'
            className='w-[500px] h-[500px] object-cover rounded-md mb-4'
            width={300}
            height={300}
          />
        </div>

        <div>
          <Title level='h3' className='text-[#2997aa] text-lg font-normal mb-5'>
            Start your journey to a better life today
          </Title>
          <Title className='text-[#205b4f] mb-5 uppercase'>About me</Title>
          <div className='text-justify max-w-[520px] flex flex-col gap-2.5'>
            <p>
              With over a decade of exploring psychology and more than two years
              of deep energy work, including tantric practices and Kundalini
              energy, I’ve transformed my own life and found my true purpose:
              guiding others toward healing and growth.
            </p>
            <p>
              My clients often share how comfortable and natural it feels to
              open up to me, even in our very first session. They experience
              deep shifts, uncover simple yet powerful solutions to their
              challenges, and witness real, positive changes in their lives.
              Even a single session can provide clarity, balance, and a fresh
              outlook where you get rid of your blockages that stop you in life.
            </p>
            <p className='font-semibold text-[#212529]'>
              Are you ready to step into a better version of yourself? Let’s
              begin this journey together.
            </p>
          </div>
        </div>
      </div>
      <StepsCards />
    </Section>
  );
}
