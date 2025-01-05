import Shoppingbagicon from "@repo/icons/shopping-bag";
import Link from "next/link";

const FecherNavbarGuest = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="cursor-pointer">
          <Shoppingbagicon size={24} color="white" />
        </div>
        <Link href="/" className="text-sm font-medium text-primary-500">
          Sign Up
        </Link>
        <Link href="/" className="text-sm font-medium text-primary-500">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default FecherNavbarGuest;
