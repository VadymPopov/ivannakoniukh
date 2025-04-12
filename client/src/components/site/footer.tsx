'use client';
import { FaGithub, FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { useServices } from '@/hooks/useServices';

export default function Footer() {
  const locale = useLocale();
  const { services } = useServices(locale);
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#0f5132] text-white">
      <div className="grid items-start gap-10 border-b border-white px-6 pt-24 pb-14 md:grid-cols-3 md:px-16 lg:px-20">
        <div className="flex flex-col items-center sm:items-start">
          <Link href={`/${locale}`}>
            <Image
              src="/logo.svg"
              alt="logo"
              width="60"
              height="60"
              className="mb-4 max-h-52 max-w-52"
            />
          </Link>
          <p className="text-justify">{t('description')}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {services.length > 0 && (
            <>
              <h2 className="mb-4 text-base font-semibold uppercase">
                {t('services')}
              </h2>
              <nav>
                <ul>
                  {services.map(({ title, slug }) => (
                    <li key={slug} className="tracking-wide hover:scale-110">
                      <Link href={`/${locale}/services/${slug}`}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-4 text-base font-semibold uppercase">
            {t('touch')}
          </h2>
          <div className="mb-2 flex flex-col gap-2.5">
            <Link
              href="https://www.instagram.com/ivanna_koniukh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram-page"
              className="flex list-none items-center gap-2 text-justify tracking-wide hover:scale-110"
            >
              <FaInstagram className="text-2xl" /> <span>@ivanna_koniukh</span>
            </Link>
            <Link
              href="mailto:ivannakoniukh@gmail.com"
              aria-label="email-link"
              className="flex list-none items-center gap-2 text-justify tracking-wide hover:scale-110"
            >
              <FaRegEnvelope className="text-2xl" />{' '}
              <span>ivannakoniukh@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between p-10 px-6 md:flex-row md:px-16 lg:px-20">
        {' '}
        <div className="flex items-center justify-center text-center">
          <span>{t('developer')}</span>
          <Link
            href="https://github.com/VadymPopov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="frontend-developer-github"
            className="inline-block p-1.5 hover:scale-110"
          >
            <FaGithub className="text-2xl transition-colors" />
          </Link>
        </div>
        <span>
          &copy; {new Date().getFullYear()}, {t('author')}.
        </span>
      </div>
    </footer>
  );
}
