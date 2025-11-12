import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/ui/components/atoms/navigation-menu";
import { Typography } from "@repo/ui/components/atoms/typography";

import { useMegaMenuStore } from "./../../store/mega-menu";
import { useCartStore } from "./../../store/cart-store";

const NavbarLinks = () => {
  const { toggleOpenMegaMenu } = useMegaMenuStore();
  const { closeAddToCart } = useCartStore();

  const onClick = () => {
    closeAddToCart();
    toggleOpenMegaMenu();
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={onClick}>
            <Typography variant="label/sm">Browse</Typography>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/become-auther"
            aria-label="become an author"
          >
            <Typography variant="label/sm">Become an author</Typography>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarLinks;
