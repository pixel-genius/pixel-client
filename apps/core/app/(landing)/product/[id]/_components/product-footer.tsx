import Heart1icon from "@repo/icons/heart";
import Messagecircleicon from "@repo/icons/message-circle";
import Shopingcartplusicon from "@repo/icons/shopping-cart-plus";
import { SCROLL_TOP_RANGE } from "@repo/ui/components";
import { Button } from "@repo/ui/components";
import { Typography } from "@repo/ui/components";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { IconChevronDown, IconHeartFilled, IconMessage } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components";

const ProductFooter = () => {
  const { scrollYProgress } = useScroll();

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0006,
  });

  const transform = useTransform(
    scrollSpring,
    [SCROLL_TOP_RANGE + 0.1, SCROLL_TOP_RANGE + 0.2],
    ["translate(0px, 100px)", "translate(0px, 0px)"],
  );

  return (
    <motion.div
      style={{
        transform: transform,
      }}
      className="fixed left-0 right-0 bottom-0 h-auto bg-[#181818]"
    >
      <div className="flex px-7 py-4 justify-between items-center">
        <div className="space-y-1">
          <Typography variant="heading/sm" weight="medium">
            Dyser - Finance Admin Dashboard UI Kit
          </Typography>
          <Typography variant="paragraph/sm" className="text-gray-400">
            Payment and Subscription Management Web App
          </Typography>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex  flex-row gap-4 self-center">
          <div className="flex gap-1">
              <IconHeartFilled
              size={24}
              className="cursor-pointer text-red-500"
            />
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
         
          
          <div className="flex gap-2 items-center">
            <Button
              variant="primary"
              size="md"
              iconRight={<Shopingcartplusicon size={24} />}
            >
              Buy Now
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="secondary"
                  size="md"
                  iconRight={<IconChevronDown size={24} />}
                  className="justify-between"
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFooter;
