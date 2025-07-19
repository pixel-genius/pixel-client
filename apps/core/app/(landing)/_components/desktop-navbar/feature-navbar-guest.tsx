import Link from "next/link";

import IconShoppingBag from "@repo/icons/shopping-bag";
import { Typography } from "@repo/ui/components/atoms/typography";

import { useCartStore } from "./../../store/cart-store";

const FeatureNavbarGuest = () => {
  const { toggleAddToCart } = useCartStore();

  const onClick = () => {
    toggleAddToCart();
  };

  return (
    <div className="flex items-center gap-3 shrink-0 ">
      <Link
        href="/auth/signup"
        className="text-primary-500 flex-shrink-0"
        aria-label="sign up"
      >
        <Typography variant="label/sm" weight="light">
          Sign Up
        </Typography>
      </Link>

      <Link
        href="/auth/login"
        className="text-primary-500 flex-shrink-0"
        aria-label="log in"
      >
        <Typography variant="label/sm" weight="light">
          Log in
        </Typography>
      </Link>
      <div className="relative cursor-pointer" onClick={onClick}>
        <IconShoppingBag size={24} strokeWidth={1.5} color="white" />

        {/* TODO: add badge #erfan*/}
        <div className="bg-error rounded-full flex items-center justify-center absolute top-0 right-0 w-3 h-3 text-white text-xs">
          3
        </div>
      </div>
    </div>
  );
};

export default FeatureNavbarGuest;
