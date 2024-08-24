import { IconEye, IconHeart } from "@tabler/icons-react";
import * as React from "react";

export interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  username: string;
  see: number;
  like: number;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => {
    const { image, title, price, username, see, like } = props;

    return (
      <div ref={ref} className="bg-[#181818] w-[286px]  rounded-xl p-2 pb-4">
        {/* header - image */}
        <div className="relative flex justify-center items-center rounded-xl h-full overflow-hidden  ">
          <img className="w-full h-full" src={image} alt="image" />
          <div className="absolute inset-0 bg-slate-600/40 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <div className="w-full h-full flex justify-center items-center">
              icon
            </div>
          </div>
        </div>

        {/* content container */}
        <div className="px-2.5">
          {/* header - title and price */}
          <div className="flex justify-between px-2.5 text-base font-semibold text-foreground mb-3">
            <div>
              <p>{title}</p>
            </div>
            <div className="">
              <p>{price}</p>
            </div>
          </div>

          {/* footer - username, like and see */}
          <div className="flex justify-between  px-2.5">
            <div className="flex gap-2">
              <p className="text-sm">{username}</p>
            </div>
            <div className="flex gap-1">
              <IconEye color="purple" size={20} />
              <p className="text-sm">{like}</p>
              <IconHeart color="purple" size={20} />
              <p className="text-sm">{see}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ProductCard.displayName = "ProductCard";

export { ProductCard };
