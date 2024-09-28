"use client";

import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { MultiSelect } from "@repo/ui/components/multi-select";
import { Textarea } from "@repo/ui/components/textarea";
import { useState } from "react";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

const settingpage = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([
    "react",
    "angular",
  ]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="pt-14">
          <div className="pb-5">
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>
          <div className="bg-gray-900 p-5 rounded-lg">
            {/* account details */}
            <div className="pb-5">
              <h2 className="text-2xl font-medium pb-1">Account details</h2>
              <p className="text-sm font-light">
                Tip: For better sales performance, we recommend you use a
                thoughtful and unique store name for your shop.
              </p>
            </div>
            {/* avatar */}
            <div className=" ">
              <h2 className="text-xl font-medium pb-6">Avatar</h2>
              {/* logo avatar */}
              <div className=" flex gap-3 items-center pb-6">
                <div>
                  <img
                    src="https://avatar.iran.liara.run/public/42"
                    height="64"
                    width="64"
                    className="rounded-full"
                  />
                </div>
                <div className="w-1/3">
                  <p className="text-sm font-light">
                    Update your avatar by clicking the image beside. 288x288 px
                    size recommended in PNG or JPG format only.
                  </p>
                </div>
              </div>
              {/* Details */}
              <div>
                <h2 className="text-xl font-medium pb-6">Details</h2>
                <div className="flex gap-4 items-center pb-6">
                  <div className="w-1/2">
                    <Input placeholder="Name" label="First Name" />
                    <Input
                      placeholder="Product Design, Web Design"
                      label="job title"
                    />
                  </div>
                  <div className="w-1/2">
                    <Input placeholder="Last Name" label="Last Name" />
                    <Input placeholder="Email" label="Email" />
                  </div>
                </div>
                <div className="pb-4">
                  <Label className="text-xs font-normal text-gray-500">
                    skills
                  </Label>
                  <MultiSelect
                    options={frameworksList}
                    onValueChange={setSelectedFrameworks}
                    defaultValue={selectedFrameworks}
                    placeholder="Select frameworks"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                  />
                </div>
                {/* textarea */}
                <div className="pb-11">
                  <Label className="text-xs font-normal text-gray-500">
                    biography
                  </Label>
                  <Textarea
                    placeholder="Heading1"
                    className="w-full h-[186px] text-sm p-4"
                  />
                </div>
                <div className="bg-gray-700 h-0.5 rounded-full w-full mb-7"></div>
                <div className="mb-7">
                  <h2 className="text-2xl font-medium pb-5">Security</h2>
                  <div className="">
                    <h2 className="pb-6">Reset Password</h2>
                    <div className=" flex gap-4">
                      <div className="w-1/2">
                        <Label className="text-xs font-normal text-gray-500">
                          Current password
                        </Label>
                        <Input placeholder="Password" />
                      </div>
                      <div className="w-1/2">
                        <Label className="text-xs font-normal text-gray-500">
                          New password
                        </Label>
                        <Input placeholder="Password" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 h-0.5 rounded-full w-full mb-7"></div>
                {/* Payment */}
                <div className="pb-5">
                  <h2 className="text-2xl font-bold pb-7">Payment</h2>
                  <div className="">
                    <h2 className="text-xl font-medium pb-2">Wallet address</h2>
                    <div className="flex gap-2 items-center">
                      <div className="w-1/2">
                        <Label className="text-xs font-normal text-gray-500">
                          address code
                        </Label>
                        <Input placeholder="Name" />
                      </div>
                      <div className="w-1/2">
                        <Label className="text-xs font-normal text-gray-500">
                          Choose your network
                        </Label>
                        <Input placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Preview and preview */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="px-4 py-2 text-primary-600"
                  >
                    Preview
                  </Button>

                  <Button
                    variant="outline"
                    className="px-4 py-2 bg-primary-600 text-foreground"
                  >
                    Publish
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default settingpage;
