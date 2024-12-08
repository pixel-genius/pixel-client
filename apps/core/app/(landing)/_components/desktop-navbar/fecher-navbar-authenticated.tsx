import Heart1icon from "@repo/icons/heart1";
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
import Useractionpixelicon from "../../../../../../packages/icons/src/components/useractionpixel";
import Settingsicon from "@repo/icons/Settingsicon";
import Doorexiticon from "@repo/icons/Doorexiticon";
import Link from "next/link";

const FecherNavbarAuthenticated = () => {
  return (
    <div className="flex  flex-shrink-0 items-center gap-3">
      <Heart1icon size={24} color="white" />
      <Shoppingbagicon size={24} color="white" />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src="https://avatar.iran.liara.run/public/26"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
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

export default FecherNavbarAuthenticated;
