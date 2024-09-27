"use client";

import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { MultiSelect } from "@repo/ui/components/multi-select";
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
                <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default settingpage;
