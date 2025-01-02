import React, { forwardRef, ReactNode } from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

export type StyleType = "heading" | "display" | "label" | "paragraph";
export type Variant = "01" | "02" | "03" | "04" | "05";

type TypographyProps = {
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"  | "a"  ; // HTML tag (e.g., h1, p, span)
  styleType: StyleType; 
  variant?: Variant; 
  children: ReactNode; 
  className?: string; 
};

const Typography = forwardRef<HTMLAnchorElement, TypographyProps>(
  ({ tag: Tag = "p", styleType, variant = "01", children, className }, ref) => {
    const baseStyles: Record<StyleType, Record<string, string>> = {
      heading: {
        "01": "text-4xl font-bold leading-[52px]",
        "02": "text-3xl font-bold leading-[44px]",
        "03": "text-2xl font-bold leading-[40px]",
        "04": "text-xl font-bold leading-[36px]",
        "05": "text-lg font-bold leading-[32px]",
      },
      display: {
        "01": "text-6xl font-bold leading-[112px]",
        "02": "text-5xl font-bold leading-[64px]",
        "03": "text-4xl font-bold leading-[52px]",
      },
      label: {
        "01": "text-lg font-medium leading-[24px]",
        "02": "text-base font-medium leading-[20px]",
        "03": "text-sm font-medium leading-[18px]",
        "04": "text-xs font-medium leading-[16px]",
      },
      paragraph: {
        "01": "text-lg font-medium leading-[24px]",
        "02": "text-base font-medium leading-[20px]",
        "03": "text-sm font-medium leading-[18px]",
        "04": "text-xs font-medium leading-[16px]",
      },
    };

    // Combine styles and custom classes
    const styles = clsx(
      baseStyles[styleType]?.[variant],
      className // Allow overrides with custom classes
    );
    

    return (
      <Tag ref={ref} className={styles}>
        {children}
      </Tag>
    );
  }
);

Typography.displayName = "Typography"; // Helpful for debugging

export default Typography;
