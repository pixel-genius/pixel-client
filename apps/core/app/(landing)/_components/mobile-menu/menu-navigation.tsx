"use client";

import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui/components/atoms/avatar";
import {
  IconShoppingCart,
  IconSearch,
  IconGridDots,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@repo/ui/components/atoms/sheet";
import BrowseSheet from "./BrowseSheet";

const navItems = [
  {
    label: "Account",
    href: "/account",
    // icon: (
    //   <Avatar className="w-8 h-8">
    //     <AvatarImage src="/images/user.jpg" alt="User" />
    //     <AvatarFallback>A</AvatarFallback>
    //   </Avatar>
    // ),
    icon: <IconUser stroke={1.5} size={28} />,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: <IconShoppingCart stroke={1.5} size={28} />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <IconSearch stroke={1.5} size={28} />,
  },
  {
    label: "Browse",
    href: "#",
    icon: <IconGridDots stroke={1.5} size={28} />,
    isSheet: true,
  },
  {
    label: "Home",
    href: "/",
    icon: <Image src="/images/logo.svg" alt="Logo" width={28} height={28} />,
  },
];

const MenuNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#18171B] border-t border-[#232228] flex justify-around items-center py-2 md:hidden">
      {navItems.map((item) => {
        if (item.isSheet) {
          return (
            <Sheet key={item.label}>
              <SheetTrigger asChild>
                <button className="flex flex-col items-center text-xs text-[#E6E1E5] hover:text-primary transition-colors">
                  {item.icon}
                  <span
                    className="mt-1 font-medium"
                    style={{ fontFamily: "inherit" }}
                  >
                    {item.label}
                  </span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="pb-12 bg-background border-t border-[#232228]"
              >
                <BrowseSheet />
              </SheetContent>
            </Sheet>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center text-xs text-[#E6E1E5] hover:text-primary transition-colors"
            aria-label={item.label}
          >
            {item.icon}
            <span
              className="mt-1 font-medium"
              style={{ fontFamily: "inherit" }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MenuNavigation;
