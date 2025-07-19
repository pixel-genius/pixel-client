import Image from "next/image";

import BecomeAnAuthorimage from "../../_assets/be.svg";
import logoBrand from "../../_assets/logo-brand.svg";
import { CardBody, CardContainer, CardItem } from "./3d-card";

const Vector3d = () => {
  return (
    <div className=" ">
      <CardContainer className="pt-36">
        <CardBody className=" relative group/card mx-auto  rounded-xl  ">
          <CardItem
            translateZ="100"
            className="w-full duration-800 flex items-center justify-center"
          >
            <Image
              className=" object-contain w-[600px]"
              src={BecomeAnAuthorimage}
              alt="Become an Author illustration"
              priority
            />
          </CardItem>
          <CardItem
            id="logoBrand"
            translateZ="200"
            className=" flex items-center duration-500 justify-center absolute top-20 left-20"
          >
            <Image
              className=" object-cover hidden md:block"
              width={500}
              height={500}
              src={logoBrand}
              alt="logoBrand"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* <AutherResult /> */}
    </div>
  );
};

export default Vector3d;
