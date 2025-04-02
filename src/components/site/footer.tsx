import { FaGithub, FaInstagram, FaRegEnvelope } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=' bg-[#0f5132] text-white'>
      <div className='pt-24 pb-14 px-10 grid  md:grid-cols-3  border-b border-white items-start gap-10'>
        <div className='flex flex-col items-center sm:items-start'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='logo'
              width='60'
              height='60'
              className='max-w-52 max-h-52 mb-4'
            />
          </Link>
          <p className='text-justify'>
            Your personal holistic therapist, committed to enhancing your
            well-being and transforming your life.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-base uppercase font-semibold mb-4'>Services</h2>
          <nav>
            <ul>
              <li className='hover:scale-110 tracking-wide'>
                <Link href='/'>Therapeutic Consultation</Link>
              </li>
              <li className='hover:scale-110 tracking-wide'>
                <Link href='/'>Diagnostic Consultation</Link>
              </li>
              <li className='hover:scale-110 tracking-wide'>
                <Link href='/'>Breathwork Therapy Session</Link>
              </li>
              <li className='hover:scale-110 tracking-wide'>
                <Link href='/'>Tantric Breathwork Session</Link>
              </li>
              <li className='hover:scale-110 tracking-wide'>
                <Link href='/'>Sadhu Boards</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-base uppercase font-semibold mb-4'>
            Get in touch
          </h2>
          <div className='flex flex-col mb-2 gap-2.5 '>
            <Link
              href='https://www.instagram.com/ivanna_koniukh'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='instagram-page'
              className='list-none text-justify tracking-wide hover:scale-110 flex items-center gap-2'>
              <FaInstagram className='text-2xl' /> <span>@ivanna_koniukh</span>
            </Link>
            <Link
              href='mailto:ivannakoniukh@gmail.com'
              aria-label='email-link'
              className='flex items-center gap-2 list-none text-justify tracking-wide hover:scale-110'>
              <FaRegEnvelope className='text-2xl' />{" "}
              <span>ivannakoniukh@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>

      <div className='p-10 flex justify-between items-center flex-col md:flex-row'>
        {" "}
        <div className='flex items-center justify-center text-center'>
          <span>Developed by</span>
          <Link
            href='https://github.com/VadymPopov'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='frontend-developer-github'
            className='inline-block p-1.5 hover:scale-110'>
            <FaGithub className='text-2xl transition-colors' />
          </Link>
        </div>
        <span>&copy; {new Date().getFullYear()}, Ivanna Koniukh.</span>
      </div>
    </footer>
  );
}
