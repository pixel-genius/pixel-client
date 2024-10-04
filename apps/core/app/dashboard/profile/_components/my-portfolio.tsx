import Externallinkicon from "@repo/icons/External-link";
import { ProductCard } from "@repo/ui/components/prodoct-card";
import { ProfileCard } from "./profile-card";
import Circlexicon from "@repo/icons/Circle-x";

export const MyPortfolioMinmal = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-xl font-bold">My Portfolio</h2>
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

export const MyPortfolioModal = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">My Portfolio</h2>
        <Circlexicon size={30} className="cursor-pointer" />
      </div>
      <div className="">
        <div className="bg-gray-900 p-6 rounded-lg h-auto">
          <div className="flex gap-2 flex-wrap items-center ">
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
      </div>
    </div>
  );
};

export interface MyPortfolioModalCardProps {
  className?: string;
}

export const MyPortfolioModalCard = (props: MyPortfolioModalCardProps) => {
  return (
    <ProfileCard
      id="my-product"
      className={props.className}
      modal={<MyPortfolioModal />}
    >
      <MyPortfolioMinmal />
    </ProfileCard>
  );
};
