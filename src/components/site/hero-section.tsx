import React from "react";
import Image from "next/image";
import { Section } from "../ui/section";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <Section bgColor='bg-[rgb(15,81,50)]'>
      <div className='flex justify-between'>
        <div className='flex flex-col items-start py-40 pl-40'>
          <p className='text-lg text-white mb-5 uppercase'>
            Welcome to the world of transformations
          </p>
          <h1 className='text-7xl text-white pb-5'>Ivanna Koniukh</h1>
          <p className='text-lg text-white max-w-md mb-5'>
            Your personal holistic therapist, committed to enhancing your
            well-being and transforming your life.
          </p>
          <Button
            variant='outline'
            className='uppercase text-[#cba590] border py-2 px-4 text-xs font-semibold hover:bg-white hover:text-black'>
            Free Consultation
          </Button>
        </div>
        <div className='w-[700px] h-[700px] rounded-full overflow-hidden'>
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
