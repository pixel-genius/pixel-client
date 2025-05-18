import { Typography } from "@repo/ui/components";
import { useMegaMenuStore } from "./../../store/mega-menu";
import { useCartStore } from "./../../store/cart-store";
import Link from "next/link";

const NavbarLinks = () => {
  const { toggleOpenMegaMenu } = useMegaMenuStore();
  const { closeAddToCart } = useCartStore();

  const onClick = () => {
    closeAddToCart();
    toggleOpenMegaMenu();
  };

  return (
    <div className="flex items-center gap-4">
      <Typography onClick={onClick} variant="label/sm">
        Browse
      </Typography>
      <Link href="/become-auther">
        <Typography variant="label/sm">Become an author</Typography>
      </Link>
    </div>
  );
};

export default NavbarLinks;
