import React from "react";
import { FaHandsHelping, FaHeart, FaFlask, FaSpa } from "react-icons/fa";
import Title from "../ui/title";

const cards = [
  {
    icon: <FaSpa className=' text-3xl' />,
    title: "Transformational Healing",
    description:
      "Experience profound healing and energy shifts that bring balance to your life.",
    image: "/healing-one.svg",
  },
  {
    icon: <FaHandsHelping className=' text-3xl' />,
    title: "Holistic Approach",
    description:
      "A personalized healing journey addressing mind, body, and soul for total well-being.",
    image: "/healing-two.svg",
  },
  {
    icon: <FaHeart className=' text-3xl' />,
    title: "Personal Growth",
    description:
      "Unlock your full potential and overcome obstacles with guided support.",
    image: "/healing-three.svg",
  },
  {
    icon: <FaFlask className=' text-3xl' />,
    title: "Scientifically Proven Techniques",
    description:
      "Benefit from healing methods backed by research and energy science.",
    image: "/healing-four.svg",
  },
];

export default function StepsCards() {
  return (
    <div>
      <div className='text-center max-w-2xl mx-auto'>
        <Title level='h3' className='text-[#2997aa] text-lg font-normal'>
          Unlock the potential of your energy with my guidance
        </Title>
        <Title className='text-2xl text-[#205b4f] mt-2 uppercase'>
          Empowering Transformation Through Energy Healing
        </Title>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='bg-[#0f5132] p-6 rounded-lg shadow-md text-center'>
            <div className='mb-4 flex justify-center text-[#cba590]'>
              {card.icon}
            </div>
            <Title level='h3' className='text-lg text-white'>
              {card.title}
            </Title>
            <p className='text-white mt-2'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
