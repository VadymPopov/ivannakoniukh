"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Events", href: "/#events" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-2 md:gap-4 text-sm font-semibold'>
        {navItems.map(({ label, href }) => (
          <NavigationMenuItem key={label}>
            <Link href={href} passHref legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  "uppercase px-4 py-2 rounded-md transition-colors",
                  "text-[#cba590] hover:text-white hover:bg-[#cba590]/20",
                  pathname === href && "text-white bg-[#cba590]/30"
                )}>
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
