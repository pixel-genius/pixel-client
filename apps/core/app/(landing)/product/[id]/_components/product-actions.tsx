import { Button } from "@repo/ui/components/atoms/button";
import { Typography } from "@repo/ui/components/atoms/typography";
import Shopingcartplusicon from "@repo/icons/shopping-cart-plus";
import {
  IconChevronDown,
  IconHeartFilled,
  IconMessage,
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/atoms/dropdown-menu";

export const ProductActions = () => {
  return (
    <div className="flex gap-2">
      <Button
        variant="primary"
        size="md"
        iconRight={<Shopingcartplusicon size={24} />}
        className="px-10"
      >
        Buy Now
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            iconRight={<IconChevronDown size={24} />}
            size="md"
            className="justify-between px-10"
          >
            Preview
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Extra link</DropdownMenuItem>
          <DropdownMenuItem>Demo link</DropdownMenuItem>
          <DropdownMenuItem>Download Demo link</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-row gap-4 self-center">
        <div className="flex gap-1">
          <IconHeartFilled size={24} className="cursor-pointer text-red-500" />
          <Typography variant="label/lg" weight="medium">
            15
          </Typography>
        </div>
        <div className="flex gap-1">
          <IconMessage size={24} stroke={2} className="cursor-pointer" />
          <Typography variant="label/lg" weight="medium">
            +99
          </Typography>
        </div>
      </div>
    </div>
  );
};
