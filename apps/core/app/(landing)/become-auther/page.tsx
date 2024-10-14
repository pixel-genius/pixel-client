// accordion imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/accordion";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Textarea } from "@repo/ui/components/textarea";
import Image from "next/image";

const BecomeAuther = () => {
  return (
    <div className="container mx-auto">
      <div className="pb-[200px] ">
        {/* <Image
          src="/images/test.png"
          alt="Description of the image for SEO"
          layout="fill" // Makes the image fill its parent container
          objectFit="cover" // Ensures the image scales nicely
          priority={true} // Preload the image for better performance
        /> */}
        <div className="w-1/2">
          {/* Become an Author */}
          <div className="pb-7">
            <h1 className="text-2xl font-bold pb-3">Become an Author</h1>
            <p className="text-xl font-medium text-gray-500">
              Join the talented community of designers at PixelGenius by
              invitation or by submitting your application using the form below.
            </p>
          </div>
          {/* information */}
          <div className="flex flex-col gap-1 w-3/4">
            <h2 className="text-lg font-medium pb-4">Apply to Open a Shop</h2>
            {/* input email */}
            <div>
              <Input
                placeholder="exm@gmail.com"
                type="email"
                className=""
                label="Email"
              />
            </div>
            {/* input name and last name */}
            <div className="flex gap-2">
              <Input placeholder="Pixel" className="" label="First Name" />
              <Input placeholder="Genius" className="" label="Last Name" />
            </div>
            {/* Portfolio Link */}
            <div>
              <Input
                placeholder="https://www.myportfolio.com"
                className=""
                label="Portfolio Link"
              />
            </div>
            {/* chose your file  */}
            <div className="">
              <Input
                placeholder="Choose your file"
                type="file"
                label="Upload Your CV and Portfolio"
              />
            </div>
            {/* Additional information */}
            <div>
              <Label className="font-normal text-gray-400">
                Additional Information
              </Label>
              <Textarea
                placeholder="write a short message about yourself"
                className="resize-none p-3 "
              />
            </div>
            {/* submit button */}
            <div>
              <Button variant="outline" className="w-full bg-primary-600">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      {/* iteam section */}
      <div className="">
        <div className="text-center pb-10">
          <p className="text-4xl font-bold">Frequently asked Questions!</p>
        </div>
        <div className="flex flex-col gap-5 ">
          {/* accordion item */}
          <div className="pb-10">
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
        </div>
      </div>
    </div>
  );
};

export default BecomeAuther;
