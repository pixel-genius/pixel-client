import Externallinkicon from "@repo/icons/External-link";
import { ProductCard } from "@repo/ui/components/prodoct-card";
import { ProfileCard } from "./profile-card";
import Circlexicon from "@repo/icons/Circle-x";
import { Button } from "@repo/ui/components/button";
import Star1icon from "@repo/icons/Star-1";

export const BiographyMinmal = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center pb-10">
        <div className="flex gap-2 items-center">
          <div>
            {" "}
            <img
              src="https://avatar.iran.liara.run/public/44"
              height={69}
              width={69}
            />
          </div>
          <div>
            <p className="text-2xl font-medium ">Ali Ebrahimi Kashef</p>
            <p className="text-base font-light text-gray-400">
              Product Design, Web Design
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="default" className="bg-primary-600 text-foreground ">
            Contact Me
          </Button>
          <div>
            <Externallinkicon size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-lg font-bold">Biography</h2>
          <p className="text-sm font-normal">
            A freelance graphic and UI/UX designer. I specialise in Web Design ,
            logo and brand development, motion graphics, and offer design
            services to business of all sizes ....
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold pb-4">Skills</h2>
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-[#181818] rounded">
              <p className="text-sm font-medium">UI/UX</p>
            </div>
            <div className="p-3 bg-[#181818] rounded">
              <p className="text-sm font-medium">Logo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BiographyModal = () => {
  return (
    <div className="">
      <div className=" bg-gray-900 p-6 rounded-lg h-auto">
        <div className="flex justify-between items-center pb-10">
          <div className="flex gap-2 items-center">
            <div>
              {" "}
              <img
                src="https://avatar.iran.liara.run/public/44"
                height={69}
                width={69}
              />
            </div>
            <div>
              <p className="text-2xl font-medium ">Ali Ebrahimi Kashef</p>
              <p className="text-base font-light text-gray-400">
                Product Design, Web Design
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              variant="default"
              className="bg-primary-600 text-foreground "
            >
              Contact Me
            </Button>
            <div>
              <Circlexicon size={30} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4 pb-4">
            <h2 className="text-lg font-bold">Biography</h2>
            <p className="text-sm font-normal">
              A freelance graphic and UI/UX designer. I specialise in Web Design
              , logo and brand development, motion graphics, and offer design
              services to business of all sizes ....
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-4">Skills</h2>
            <div className="flex gap-2 items-center">
              <div className="p-3 bg-[#181818] rounded">
                <p className="text-sm font-medium">UI/UX</p>
              </div>
              <div className="p-3 bg-[#181818] rounded">
                <p className="text-sm font-medium">Logo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface BiographyModalCardProps {
  className?: string;
}

export const BiographyModalCard = (props: BiographyModalCardProps) => {
  return (
    <ProfileCard
      id="my-product"
      className={props.className}
      modal={<BiographyModal />}
    >
      <BiographyMinmal />
    </ProfileCard>
  );
};
