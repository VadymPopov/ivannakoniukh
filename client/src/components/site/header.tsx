import React from 'react';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

import LanguageSwitcherDropdown from './language-switcher';
import Navbar from './navbar';

const links = [
  {
    href: 'https://www.instagram.com/ivanna_koniukh/',
    icon: <FaInstagram size={24} />,
    label: 'instagram',
  },
  {
    href: 'mailto:ivannakoniukh@gmail.com',
    icon: <FaRegEnvelope size={24} />,
    label: 'email',
  },
];

export default function Header() {
  const locale = useLocale();
  return (
    <header className="bg-background fixed z-50 flex w-full flex-col items-center justify-between gap-2.5 px-6 py-4 md:flex-row md:px-16 lg:px-20">
      <div className="flex flex-col items-center gap-2.5 md:flex-row lg:gap-8">
        <Link href={`/${locale}`}>
          {' '}
          <Image width={60} height={60} src="/logo.svg" alt="site-logo" />
        </Link>

        <Navbar />
      </div>

      <div className="flex items-center gap-5">
        <ul className="text-navbar-primary flex gap-4">
          {links.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}-page`}
              className="hover:cursor-pointer hover:text-white"
            >
              {icon}
            </Link>
          ))}
        </ul>
        <LanguageSwitcherDropdown />
      </div>
    </header>
  );
}
