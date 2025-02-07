import { motion } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Typography from "../../atoms/typography";

export const tabTriggerVariants = cva("relative px-3 py-3 transition ", {
  variants: {
    variant: {
      fill: "text-muted-foreground rounded-lg hover:bg-secondary",
      outline: "",
    },
    isActive: {
      true: "",
    },
  },

  compoundVariants: [
    {
      variant: "fill",
      isActive: true,
      className: "text-secondary-foreground",
    },
    {
      variant: "outline",
      isActive: true,
      className: "text-primary",
    },
  ],

  defaultVariants: {
    variant: "fill",
  },
});

export const tabActiveTriggerVariants = cva("absolute inset-0", {
  variants: {
    variant: {
      fill: "bg-primary rounded-lg ",
      outline: "border-b-2 border-primary",
    },
  },

  defaultVariants: {
    variant: "fill",
  },
});

export type TabTriggerProps = VariantProps<typeof tabTriggerVariants> & {
  title: string;
  idx: number;
  className?: string;
  activeClassName?: string;
  activeIndex: number;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick: () => void;
};

export const TabTrigger = (props: TabTriggerProps) => {
  const {
    title,
    idx,
    className,
    activeIndex,
    onClick,
    activeClassName,
    variant,
    iconLeft,
    iconRight,
  } = props;

  const isActive = activeIndex === idx;

  return (
    <button
      key={title}
      onClick={onClick}
      className={tabTriggerVariants({ variant, className, isActive })}
    >
      {/* border | background  */}
      {isActive && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className={tabActiveTriggerVariants({
            variant,
            className: activeClassName,
          })}
        />
      )}

      <span className="relative flex  gap-2 items-center justify-center min-h-6">
        {iconLeft && <span>{iconLeft}</span>}
        <span>
          <Typography variant="label/sm" weight="normal">
            {title}
          </Typography>
        </span>
        {iconRight && <span>{iconRight}</span>}
      </span>
    </button>
  );
};
