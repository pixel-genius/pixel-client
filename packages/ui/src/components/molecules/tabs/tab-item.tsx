import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export type TabItemProps = {
  title: string;
  idx: number;
  className?: string;
  activeClassName?: string;
  activeIndex: number;
  onClick: () => void;
};

const TabItem = (props: TabItemProps) => {
  const { title, idx, className, activeIndex, onClick, activeClassName } =
    props;
  return (
    <button
      key={title}
      onClick={onClick}
      className={cn("relative px-4 py-2 rounded-full", className)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {activeIndex === idx && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className={cn(
            "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
            activeClassName,
          )}
        />
      )}
      <span className="relative block text-black dark:text-white">{title}</span>
    </button>
  );
};
