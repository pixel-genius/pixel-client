import { IconEye, IconHeart, IconShoppingBag ,} from "@tabler/icons-react";
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
      <div ref={ref} className="bg-gray-800 w-full  rounded-xl p-2 pb-4z">
        {/* header - image */}
        <div className="relative flex justify-center items-center rounded-xl h-full overflow-hidden mb-1">
          <img className="w-full h-full" src={image} alt="image" />
          {/* background overlay and shopping bag */}
          <div className="absolute inset-0 bg-slate-600/40 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <div className="w-full h-full gap-2 flex justify-center items-center">
              <div className=" flex justify-center items-center bg-primary-500 rounded-full p-4">
                <IconShoppingBag color="white" size={30} />
              </div>
              <div className=" flex justify-center items-center bg-primary-500 rounded-full p-4">
                <IconEye color="white" size={30} />
              </div>
            </div>
          </div>
        </div>

        {/* content container */}
        <div className="px-2.5">
          {/* header - title and price */}
          <div className="flex justify-between text-base font-semibold text-foreground mb-3">
            <div>
              <p>{title}</p>
            </div>
            <div className="">
              <p>{price}</p>
            </div>
          </div>

          {/* footer - username, like and see ana avatar icon  */}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <img
                src="https://avatar.iran.liara.run/public/34"
                alt=""
                className="w-4 h-4 rounded-full"
              />
              <p className="text-sm">{username}</p>
            </div>
            <div className="flex gap-1">
              <IconEye className="text-primary-500" size={20} />
              <p className="text-sm">{like}</p>
              <IconHeart className="text-primary-500" size={20} />
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
