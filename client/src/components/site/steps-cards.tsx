import React from 'react';
import { FaBattleNet, FaFlask, FaMountain, FaSpa } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

import Title from '../ui/title';

// const cards = [
//   {
//     icon: <FaSpa className=' text-3xl' />,
//     title: "Transformational Healing",
//     description:
//       "Experience profound healing and energy shifts that bring balance to your life.",
//     image: "/healing-one.svg",
//   },
//   {
//     icon: <FaBattleNet className=' text-3xl' />,
//     title: "Holistic Approach",
//     description:
//       "A personalized healing journey addressing mind, body, and soul for total well-being.",
//     image: "/healing-two.svg",
//   },
//   {
//     icon: <FaMountain className=' text-3xl' />,
//     title: "Personal Growth",
//     description:
//       "Unlock your full potential and overcome obstacles with guided support.",
//     image: "/healing-three.svg",
//   },
//   {
//     icon: <FaFlask className=' text-3xl' />,
//     title: "Scientifically Proven Techniques",
//     description:
//       "Benefit from healing methods backed by research and energy science.",
//     image: "/healing-four.svg",
//   },
// ];

const icons = [
  <FaSpa key="FaSpa" className="text-3xl" />,
  <FaBattleNet key="FaBattleNet" className="text-3xl" />,
  <FaMountain key="FaMountain" className="text-3xl" />,
  <FaFlask key="FaFlask" className="text-3xl" />,
];
export default function StepsCards() {
  const t = useTranslations('StepsSection.cards');
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col justify-between rounded-lg bg-gradient-to-b from-[#0f5132] via-[rgba(15,81,50,0.9)] to-[rgba(15,81,50,0.7)] p-6 text-center shadow-md backdrop-blur-lg transition-all duration-300 hover:bg-[#0f5132]"
        >
          <div className="mb-4 flex justify-center text-[#cba590]">{icon}</div>
          <Title level="h3" className="text-lg text-white">
            {t(`${index}.title`)}
          </Title>
          <p className="mt-2 text-white">{t(`${index}.description`)}</p>
        </div>
      ))}
    </div>
  );
}
