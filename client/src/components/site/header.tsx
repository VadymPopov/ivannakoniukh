import React from "react";
import { FaInstagram,FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import LanguageSwitcherDropdown from "./language-switcher";
import Navbar from "./navbar";

const links = [
  {
    href: "https://www.instagram.com/ivanna_koniukh/",
    icon: <FaInstagram size={24} />,
    label: "instagram",
  },
  {
    href: "mailto:ivannakoniukh@gmail.com",
    icon: <FaRegEnvelope size={24} />,
    label: "email",
  },
];

export default function Header() {
  return (
    <header className='py-4 px-6 md:px-16 lg:px-20 flex justify-between items-center bg-[#0f5132] flex-col md:flex-row fixed w-full z-50 gap-2.5'>
      <div className='flex items-center gap-2.5 lg:gap-8 flex-col md:flex-row'>
        <Link href='/'>
          {" "}
          <Image width={60} height={60} src='/logo.svg' alt='site-logo' />
        </Link>

        <Navbar />
      </div>

      <div className='flex items-center gap-5'>
        <ul className='flex gap-4 text-[#cba590]'>
          {links.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${label}-page`}
              className='hover:text-white hover:cursor-pointer'>
              {icon}
            </Link>
          ))}
        </ul>
        <LanguageSwitcherDropdown />
      </div>
    </header>
  );
}
