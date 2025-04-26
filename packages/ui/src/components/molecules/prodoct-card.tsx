import { IconEye, IconHeart, IconShoppingBag } from "@tabler/icons-react";
import * as React from "react";
import { Typography } from "../atoms/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";

export interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  username: string;
  see: number;
  like: number;
  className?: string;
  avatar?: string;
}

// TODO: Handle Free Products
const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => {
    const { image, title, price, username, see, like, avatar, className } =
      props;

    return (
      <div
        ref={ref}
        className={cn(
          "bg-card  shrink-0  flex flex-col rounded-xl p-4 pb-4 cursor-pointer",
          className,
        )}
      >
        {/* header - image */}
        <div className="relative flex justify-center items-center rounded-xl h-full overflow-hidden mb-1">
          <Image width={294} height={204} src={image} alt="image" />
          {/* background overlay and shopping bag */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 opacity-0 hover:opacity-100 transition-opacity duration-500 delay-300 rounded-xl flex flex-col justify-end group">
            <div className="gap-2 flex justify-end p-2">
              <div
                style={{
                  transitionTimingFunction: "cubic-bezier(.5,-.75,.7,2)",
                }}
                className="flex justify-center items-center bg-purple-500 transform translate-y-14  group-hover:translate-y-0 printemps in-expo rounded-full p-2 transition duration-200 delay-300 "
              >
                <IconShoppingBag color="white" size={24} />
              </div>
              <div
                style={{
                  transitionTimingFunction: "cubic-bezier(.5,-.75,.7,2)",
                }}
                className="flex justify-center items-center bg-purple-500 transform translate-y-14  group-hover:translate-y-0 printemps in-expo rounded-full p-2 transition duration-200 delay-100"
              >
                <IconHeart color="white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* content container */}
        <div className="px-2.5 shrink-0">
          {/* header - title and price */}
          <div className="flex justify-between text-base  text-foreground py-2">
            {/* <Typography variant="label/md" weight="bold" className="capitalize"> {title.length > 20 ? `${title.slice(0, 20)}...` : title}</Typography> */}
            <Typography
              variant="label/md"
              weight="bold"
              className="capitalize"
              truncate
            >
              {title}
            </Typography>
            <Typography
              variant="label/md"
              weight="bold"
              className="capitalize flex-shrink-0"
            >
              {price}
            </Typography>
          </div>

          {/* footer - username, like and see ana avatar icon  */}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Avatar className="size-4 rounded-full">
                {/* TODO: Add User info */}
                <AvatarImage
                  src={avatar || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Typography
                variant="label/xs"
                weight="normal"
                className="capitalize flex-shrink-0"
              >
                {username}
              </Typography>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <IconEye className="text-primary-500" size={20} />

                <Typography
                  variant="label/sm"
                  weight="normal"
                  className="capitalize flex-shrink-0"
                >
                  {like}
                </Typography>
              </div>
              <div className="flex gap-1 items-center">
                <IconHeart className="text-primary-500" size={20} />
                <Typography
                  variant="label/sm"
                  weight="normal"
                  className="capitalize flex-shrink-0"
                >
                  {see}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ProductCard.displayName = "ProductCard";

export { ProductCard };
