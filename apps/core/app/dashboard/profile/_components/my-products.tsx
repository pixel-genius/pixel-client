import Externallinkicon from "@repo/icons/External-link";
import { ProductCard } from "@repo/ui/components/prodoct-card";
import { ProfileCard } from "./profile-card";
import Circlexicon from "@repo/icons/Circle-x";
import { Button } from "@repo/ui/components/button";
import Figmaicon from "@repo/icons/figma";

export const MyProductsMinmal = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-xl font-bold">My Products</h2>
        <Externallinkicon size={30} className="cursor-pointer" />
      </div>
      <div className="flex gap-2 items-center ">
        <div>
          {" "}
          <ProductCard
            image="https://picsum.photos/id/10/400/300"
            title="title"
            price="price"
            username="username"
            see={10}
            like={10}
          />
        </div>

        <div>
          {" "}
          <ProductCard
            image="https://picsum.photos/id/10/400/300"
            title="title"
            price="price"
            username="username"
            see={10}
            like={10}
          />
        </div>
      </div>
    </div>
  );
};

export const MyProductsModal = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg h-auto">
      <div className="flex justify-between pb-4">
        <div>
          <h2 className="text-xl font-bold">My Products</h2>
        </div>
        <div>
          <Circlexicon size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-2 items-center pb-4 ">
        <Button
          variant="default"
          className="px-4 py-2 text-foreground bg-primary-500"
        >
          All
        </Button>
        <Button variant="secondary" className="px-4 py-2 ">
          <Figmaicon size={16} className="mr-2" />
          Figma
        </Button>
      </div>
      <div className="flex gap-5 items-center flex-wrap">
        <ProductCard
          image="https://picsum.photos/id/10/400/300"
          title="title"
          price="price"
          username="username"
          see={10}
          like={10}
        />
        <ProductCard
          image="https://picsum.photos/id/10/400/300"
          title="title"
          price="price"
          username="username"
          see={10}
          like={10}
        />
        <ProductCard
          image="https://picsum.photos/id/10/400/300"
          title="title"
          price="price"
          username="username"
          see={10}
          like={10}
        />
        <ProductCard
          image="https://picsum.photos/id/10/400/300"
          title="title"
          price="price"
          username="username"
          see={10}
          like={10}
        />
        <ProductCard
          image="https://picsum.photos/id/10/400/300"
          title="title"
          price="price"
          username="username"
          see={10}
          like={10}
        />
        <ProductCard
          image="https://picsum.photos/id/10/400/300"
          title="title"
          price="price"
          username="username"
          see={10}
          like={10}
        />
      </div>
    </div>
  );
};

export interface MyProductsModalCardProps {
  className?: string;
}

export const MyProductsModalCard = (props: MyProductsModalCardProps) => {
  return (
    <ProfileCard
      id="my-product"
      className={props.className}
      modal={<MyProductsModal />}
    >
      <MyProductsMinmal />
    </ProfileCard>
  );
};
