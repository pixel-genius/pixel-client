import Shoppingbagicon from "@repo/icons/shopping-bag";
import Link from "next/link";

const FecherNavbarGuest = () => {
  return (
    <div className="flex items-center gap-3">
      <Shoppingbagicon size={24} color="white" />
      <Link href="/" className="text-sm font-medium text-primary-500">
        Sign Up
      </Link>
      <Link href="/" className="text-sm font-medium text-primary-500">
        Log in
      </Link>
    </div>
  );
};

export default FecherNavbarGuest;
