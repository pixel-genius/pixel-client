import Doorexiticon from "@repo/icons/Doorexiticon";
import Heart1icon from "@repo/icons/heart";
import Settingsicon from "@repo/icons/Settingsicon";
import Shoppingbagicon from "@repo/icons/shopping-bag";
import Usercircleicon from "@repo/icons/Usercircleicon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../../store/cart-store";
import Useractionpixelicon from "@repo/icons/useractionpixel";
import {
  AvatarImage,
  AvatarFallback,
  Avatar,
} from "@repo/ui/components/avatar";
import { useMegaMenuStore } from "./../../store/mega-menu";

const FeatureNavbarAuthenticated = () => {
  const { toggleAddToCart } = useCartStore();
  const { closeMegaMenu } = useMegaMenuStore();

  const onClick = () => {
    toggleAddToCart();
    closeMegaMenu();
  };

  return (
    <div className="flex  flex-shrink-0 items-center gap-3">
      <Heart1icon size={24} color="white" />

      <div className="relative cursor-pointer" onClick={onClick}>
        <Shoppingbagicon size={24} color="white" />

        {/* TODO: add badge #erfan*/}
        <div className="bg-error rounded-full flex items-center justify-center absolute top-0 right-0 w-3 h-3 text-white text-xs">
          3
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="size-8">
            {/* TODO: Add User info */}
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-50">
          <DropdownMenuLabel className="text-white text-base font-medium">
            Ali Ebrahimi Kashef
            <p className="text-xs font-light text-gray-600">
              alikashef27@gmail.com
            </p>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Usercircleicon size={16} className="text-gray-300" />
            <Link href="/" className="pl-1 text-gray-300">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Shoppingbagicon size={16} className="text-gray-300" />
            <Link href="/" className="pl-1 text-gray-300">
              Purchases
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Useractionpixelicon size={16} className="text-gray-300" />

            <Link href="/" className="pl-1 text-gray-300">
              Author dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settingsicon size={16} className="text-gray-300" />
            <Link href="/" className="pl-1 text-gray-300">
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Doorexiticon size={16} className="text-error-500" />
            <Link href="/" className="pl-1 text-error-500">
              Sing Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FeatureNavbarAuthenticated;
