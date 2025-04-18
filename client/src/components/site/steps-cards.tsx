import React from 'react';
import { FaBattleNet, FaFlask, FaMountain, FaSpa } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

import Title from '../ui/title';

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
          <div className="text-navbar-primary mb-4 flex justify-center">
            {icon}
          </div>
          <Title level="h3" className="text-foreground-light text-lg">
            {t(`${index}.title`)}
          </Title>
          <p className="text-foreground-light mt-2">
            {t(`${index}.description`)}
          </p>
        </div>
      ))}
    </div>
  );
}
