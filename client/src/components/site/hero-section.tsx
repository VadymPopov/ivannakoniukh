import React from "react";
import { Section } from "../ui/section";
import { Button } from "../ui/button";
import Title from "../ui/title";

export default function HeroSection() {
  return (
    <Section
      bgColor='bg-[rgb(15,81,50)] bg-[url(/hero-bg-small.png)] lg:bg-[url(/hero-bg-lg.png)] bg-no-repeat bg-contain bg-bottom md:bg-right'
      id='home'>
      <div className='flex flex-col items-center md:items-start xl:pl-40 md:py-20 h-screen md:h-auto'>
        <p className='md:text-sm lg:text-lg text-white mb-5 uppercase text-center'>
          Welcome to the world of transformations
        </p>
        <Title
          level='h1'
          className='uppercase md:text-6xl lg:text-7xl text-white pb-5 md:max-w-[350px] text-center md:text-left'>
          Ivanna Koniukh
        </Title>
        <p className='md:text-base lg:text-lg text-white md:max-w-[320px] lg:max-w-md mb-5 text-center md:text-left'>
          Your personal holistic therapist, committed to enhancing your
          well-being and transforming your life.
        </p>
        <Button
          variant='outline'
          className='uppercase text-black border py-2 px-4 text-xs font-semibold hover:bg-transparent hover:text-white'>
          Free Consultation
        </Button>
      </div>
    </Section>
  );
}
