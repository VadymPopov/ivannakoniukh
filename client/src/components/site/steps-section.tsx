import React from "react";
import StepsCards from "./steps-cards";
import { Section } from "../ui/section";
import Title from "../ui/title";

export default function StepsSection() {
  return (
    <Section bgColor='bg-white' id='about'>
      <div className='text-center max-w-2xl mx-auto'>
        <Title level='h3' className='text-[#2997aa] text-lg font-normal mb-5'>
          Unlock the potential of your energy with my guidance
        </Title>
        <Title className='text-[#205b4f] mb-5 uppercase'>
          Empowering Transformation Through Energy Healing
        </Title>
      </div>
      <StepsCards />
    </Section>
  );
}
