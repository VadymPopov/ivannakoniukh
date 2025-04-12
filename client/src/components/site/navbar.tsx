'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Navbar');
  const navItems = t.raw('items') as {
    key: string;
    label: string;
    href: string;
  }[];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2 text-sm font-semibold md:gap-4">
        {navItems.map(({ key, label, href }) => (
          <NavigationMenuItem key={key}>
            <Link href={`${locale}/${href}`} passHref legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  'rounded-md px-4 py-2 uppercase transition-colors',
                  'text-[#cba590] hover:bg-[#cba590]/20 hover:text-white',
                  pathname === href && 'bg-[#cba590]/30 text-white',
                )}
              >
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
