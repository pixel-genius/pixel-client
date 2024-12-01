import PixelIcon from "@repo/icons/pxiel";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedNavBar = () => {
  return (
    <motion.div
      className="flex items-center w-full overflow-hidden whitespace-nowrap"
      key="default"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Logo Section */}
      <div className="pr-3">
        <PixelIcon size={43} />
      </div>
      {/* Browse, All Access, Become an Author */}
      <div className="flex items-center gap-2 pr-4">
        <Link href="/" className="text-sm font-normal">
          Browse
        </Link>
        <Link href="/" className="text-sm font-normal">
          All-Access
        </Link>
        <Link href="/" className="text-base font-medium text-primary-500">
          Become an author
        </Link>
      </div>
    </motion.div>
  );
};

export default AnimatedNavBar;
