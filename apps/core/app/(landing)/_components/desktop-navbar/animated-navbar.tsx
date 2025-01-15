import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/ui/components/navigation-menu";
import Link from "next/link";
import { BrowseMegaMenu } from "../browseMegaMenu/browseMegaMenu";

const AnimatedNavBar = () => {
  return (
    <NavigationMenuList className="flex items-center gap-2 pr-4">
      <NavigationMenuItem className="!m-0">
        <NavigationMenuTrigger className="!bg-[transparent]">
          Browse
        </NavigationMenuTrigger>
        <NavigationMenuContent asChild className="w-full">
          <BrowseMegaMenu />
        </NavigationMenuContent>
      </NavigationMenuItem>
      <Link href="/" className="text-sm font-normal">
        All-Access
      </Link>
      <Link href="/" className="text-base font-medium text-primary-500">
        Become an author
      </Link>
    </NavigationMenuList>
  );
};

export default AnimatedNavBar;
