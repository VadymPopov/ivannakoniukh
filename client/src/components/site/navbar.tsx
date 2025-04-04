"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
