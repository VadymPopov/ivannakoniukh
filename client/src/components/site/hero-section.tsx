import React from "react";
import Image from "next/image";
import { Section } from "../ui/section";
import { Button } from "../ui/button";
import Title from "../ui/title";

export default function HeroSection() {
  return (
    <Section bgColor='bg-[rgb(15,81,50)]' id='home'>
      <div className='flex justify-between md:flex-row flex-col-reverse'>
        <div className='flex flex-col items-start md:py-40 md:pl-40 py-20'>
          <p className='text-lg text-white mb-5 uppercase'>
            Welcome to the world of transformations
          </p>
          <Title level='h1' className='uppercase text-7xl text-white pb-5'>
            Ivanna Koniukh
          </Title>
          <p className='text-lg text-white max-w-md mb-5'>
            Your personal holistic therapist, committed to enhancing your
            well-being and transforming your life.
          </p>
          <Button
            variant='outline'
            className='uppercase text-black border py-2 px-4 text-xs font-semibold hover:bg-transparent hover:text-white'>
            Free Consultation
          </Button>
        </div>
        <div className='md:w-[700px] md:h-[700px] w-[320px] h-[320px] rounded-full overflow-hidden'>
          <Image
            src='/hero.jpg'
            width={700}
            height={700}
            alt='hero'
            className='object-cover  object-center'
          />
        </div>
      </div>
    </Section>
  );
}
