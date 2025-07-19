import { VariantProps, cva } from "class-variance-authority";

import React, { ElementType, PropsWithChildren, useMemo } from "react";

import { cn } from "./../../lib/utils";

/**
 * Variants for Typography component styles.
 */
const typographyVariants = cva("", {
  variants: {
    variant: {
      "display/xs": "font-bold text-[36px] leading-[44px]",
      "display/sm": "font-bold text-[44px] leading-[52px]",
      "display/md": "font-bold text-[52px] leading-[64px]",
      "display/lg": "font-bold text-[96px] leading-[112px]",
      "heading/xs": "font-bold text-[20px] leading-[28px]",
      "heading/sm": "font-bold text-[24px] leading-[32px]",
      "heading/md": "font-bold text-[28px] leading-[36px]",
      "heading/lg": "font-bold text-[32px] leading-[40px]",
      "heading/xl": "font-bold text-[36px] leading-[44px]",
      "heading/xxl": "font-bold text-[40px] leading-[52px]",
      "label/xs": "font-medium text-[12px] leading-[16px]",
      "label/sm": "font-medium text-[14px] leading-[16px]",
      "label/md": "font-medium text-[16px] leading-[20px]",
      "label/lg": "font-medium text-[18px] leading-[24px]",
      "paragraph/xs": "font-medium text-[12px] leading-[16px]",
      "paragraph/sm": "font-medium text-[14px] leading-[16px]",
      "paragraph/md": "font-medium text-[16px] leading-[20px]",
      "paragraph/lg": "font-medium text-[18px] leading-[24px]",
      inherit: "font-inherit",
    },
    weight: {
      thin: "font-thin",
      "extra-thin": "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      "semi-bold": "font-semibold",
      bold: "font-bold",
      "extra-bold": "font-extrabold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    transform: {
      lowercase: "lowercase",
      uppercase: "uppercase",
      capitalize: "capitalize",
    },
    decoration: {
      none: "no-underline",
      underline: "underline",
      lineThrough: "line-through",
      overline: "overline",
      underlineLineThrough: "underline line-through",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
  },
  defaultVariants: {
    variant: "paragraph/md",
    weight: "normal",
    decoration: "none",
    truncate: false,
  },
});

/**
 * Defines supported component types for Typography.
 */
type TypographyComponent = ElementType;

/**
 * Props for the Typography component.
 */
export interface TypographyProps
  extends PropsWithChildren<VariantProps<typeof typographyVariants>> {
  /** The HTML or custom component to render */
  component?: TypographyComponent;
  /** Additional class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * A flexible Typography component that supports various text styles.
 *
 * @example
 * ```tsx
 * <Typography variant="heading/lg" weight="bold">Hello World</Typography>
 * ```
 */
const Typography: React.FC<TypographyProps> = ({
  component: Component = "p",
  variant,
  weight,
  align,
  transform,
  decoration,
  truncate,
  className,
  onClick,
  children,
  ...restProps
}) => {
  // Optimize class computation
  const styles = useMemo(
    () =>
      cn(
        typographyVariants({
          variant,
          weight,
          align,
          transform,
          decoration,
          truncate,
        }),
        className,
      ),
    [variant, weight, align, transform, decoration, truncate, className],
  );

  return (
    <Component className={styles} onClick={onClick} {...restProps}>
      {children}
    </Component>
  );
};

export { Typography, typographyVariants };
