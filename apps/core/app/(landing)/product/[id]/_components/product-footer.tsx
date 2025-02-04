import Heart1icon from "@repo/icons/heart";
import Messagecircleicon from "@repo/icons/message-circle";
import Shopingcartplusicon from "@repo/icons/shopping-cart-plus";
import { SCROLL_TOP_RANGE } from "@repo/ui/components/parallax-scroll-effect"; 
import { Button } from "@repo/ui/components/button";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

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
      className="fixed left-0 right-0 bottom-0 h-auto bg-[#181818] "
    >
      <div className="flex px-7 py-4 justify-between">
        <div>
          <p className="text-2xl font-medium">
            Dyser - Finance Admin Dashboard UI Kit
          </p>
          <p className="text-sm font-normal">
            Payment and Subscription Management Web App
          </p>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center gap-1">
            <Heart1icon size={28} className="cursor-pointer" />
            <p>15</p>
          </div>
          <div className="flex items-center gap-1 mr-2">
            <Messagecircleicon size={28} className="cursor-pointer" />
            <p>+99</p>
          </div>
          {/* button */}
          <div className=" flex gap-2 items-center">
            <Button
              // variant="default"
              className="bg-primary-600 text-foreground py-4 "
            >
              Buy Now
              <Shopingcartplusicon size={24} className=" ml-2" />
            </Button>
            <Button 
            // variant="default"
             className="py-4 ">
              Preview
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductFooter;
