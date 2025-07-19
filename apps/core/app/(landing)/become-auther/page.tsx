// accordion imports
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "./_components/3d-card";
import BecomeAnAuthorimage from "../_assets/be.svg";
import AutherForm from "./_components/auther-form";
import logoBrand from "../_assets/logo-brand.svg";
import Vector3d from "./_components/vector3d";

const BecomeAuther = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <AutherForm />
        <Vector3d />

        {/* <AutherResult /> */}
      </div>

      {/* <div className="flex flex-col gap-5 pb-11">
          <div className="">
            <Accordion
              collapsible
              type="single"
              className="w-full flex gap-9 flex-col"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-medium">
                  How long does the application review process take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  The review process typically takes between 1 to 3 business
                  days. You will receive an email once our team has made a
                  decision.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium">
                  Can I check the status of my application?{" "}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  Currently, we do not offer a live status check for
                  applications. However, you will be notified via email once
                  your application has been reviewed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium">
                  How long does the application review process take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  The review process typically takes between 1 to 3 business
                  days. You will receive an email once our team has made a
                  decision.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium">
                  How long does the application review process take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  The review process typically takes between 1 to 3 business
                  days. You will receive an email once our team has made a
                  decision.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-medium">
                  How long does the application review process take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  The review process typically takes between 1 to 3 business
                  days. You will receive an email once our team has made a
                  decision.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-base font-medium">
                  How long does the application review process take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  The review process typically takes between 1 to 3 business
                  days. You will receive an email once our team has made a
                  decision.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-base font-medium">
                  How long does the application review process take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-gray-500">
                  The review process typically takes between 1 to 3 business
                  days. You will receive an email once our team has made a
                  decision.{" "}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div> */}
    </div>
  );
};

export default BecomeAuther;
