import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React, { forwardRef, ReactNode } from "react";

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
      default: "",
      thin: "font-thin",
      "extra-thin": "font-extra-light",
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
      none: "text-none",
      lowercase: "text-lowercase",
      uppercase: "text-uppercase",
      capitalize: "text-capitalize",
    },
    decoration: {
      none: "no-underline",
      underline: "underline",
      lineThrough: "line-through",
      overline: "overline-through",
      underlineLineThrough: "underline line-through",
    },
    truncate: {
      true: "truncate",
      false: "truncate-none",
    },
  },
  defaultVariants: {
    variant: "paragraph/md",
    weight: "default",
    transform: "none",
    decoration: "none",
    truncate: false,
  },
});

type TypographyBaseProps = VariantProps<typeof typographyVariants> & {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

type TypographyProps =
  | (TypographyBaseProps & {
      component?:
        | "p"
        | "span"
        | "div"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6";
      href?: never;
    })
  | (TypographyBaseProps &
      LinkProps & {
        component: "a";
      });

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      component: Component = "p",
      variant,
      children,
      className,
      href,
      weight,
      align,
      transform,
      decoration,
      truncate,
      onClick,
    },
    ref,
  ) => {
    const styles = typographyVariants({
      variant,
      className,
      weight,
      align,
      transform,
      decoration,
      truncate,
    });

    if (Component === "a") {
      return (
        <Link
          href={href!}
          className={styles}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }

    return (
      <Component
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={styles}
        onClick={onClick}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
