import React from "react";
import { FaRegEnvelope, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
import { Button } from "../ui/button";
import LanguageSwitcherDropdown from "./language-switcher";

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
    <header className='py-4 px-8 flex justify-between items-center bg-[#0f5132] flex-col md:flex-row'>
      <div className='flex items-center gap-8 flex-col md:flex-row'>
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
        <Button
          variant='ghost'
          className='uppercase text-[#cba590] border border-[#cba590] py-2 px-4 text-xs font-semibold hover:bg-white hover:text-black'>
          Book now
        </Button>
        <LanguageSwitcherDropdown />
      </div>
    </header>
  );
}
