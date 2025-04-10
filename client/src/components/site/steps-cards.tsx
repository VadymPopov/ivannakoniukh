import React from "react";
import { FaFlask, FaSpa, FaMountain, FaBattleNet } from "react-icons/fa";
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
    icon: <FaBattleNet className=' text-3xl' />,
    title: "Holistic Approach",
    description:
      "A personalized healing journey addressing mind, body, and soul for total well-being.",
    image: "/healing-two.svg",
  },
  {
    icon: <FaMountain className=' text-3xl' />,
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
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='bg-gradient-to-b from-[#0f5132] via-[rgba(15,81,50,0.9)] to-[rgba(15,81,50,0.7)] backdrop-blur-lg p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-[#0f5132] flex justify-between flex-col'>
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
  );
}
