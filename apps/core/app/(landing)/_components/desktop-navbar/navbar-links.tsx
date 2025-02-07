import Typography from "@repo/ui/components/typography";
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
    <div className="flex items-center gap-4">
      <Typography onClick={onClick} variant="label/xs">
        Browse
      </Typography>
      <Typography component="a" href="/browse" variant="label/xs">
        Become an author
      </Typography>
    </div>
  );
};

export default NavbarLinks;
