'use client';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { usePathname, useRouter } from '@/i18n/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: newLocale },
    );
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'uk', name: 'Українська' },
  ];

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="border-navbar-primary text-navbar-primary border uppercase hover:bg-transparent hover:text-white">
        <span>{locale === 'en' ? 'en' : 'uk'}</span>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
