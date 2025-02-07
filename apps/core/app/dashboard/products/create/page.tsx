"use client";

import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Textarea } from "@repo/ui/components/textarea";
import { Switch } from "@repo/ui/components/switch";
import Infocircleicon from "@repo/icons/info-circle";
import { Tabs } from "@repo/ui/components/tabs/tabs";

export function DashboardTabs() {
  const tabs = [
    {
      title: "General",
      value: "general",
      content: (
        <div className="bg-gray-900 rounded-lg p-4 mt-4">
          <h1 className="text-base font-bold">Product Details</h1>
          <div className="flex gap-2 w-full mt-2">
            <div className="w-1/2">
              <Label className="text-xs font-normal">Product Name</Label>
              <Input placeholder="Enter product name" />
            </div>
            <div className="w-1/2">
              <Label>Product Name</Label>
              <Input placeholder="Enter product name" />
            </div>
          </div>
          <div className="pb-4 mt-4">
            <p className="text-xs font-normal pb-1">Product Description</p>
            <Textarea placeholder="Enter product description" className="w-full h-[186px] text-sm p-4" />
          </div>
        </div>
      ),
    },
    {
      title: "Images",
      value: "images",
      content: (
        <div className="bg-gray-900 flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between pb-2">
            <p className="text-xl font-bold">Thumbnail</p>
            <div className="flex gap-1 text-gray-500">
              <Infocircleicon height={18} width={18} color="white" />
              <p className="text-sm font-light">Required</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "File",
      value: "file",
      content: (
        <div className="bg-gray-900 flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between pb-2">
            <p className="text-xl font-bold">Files</p>
            <div className="flex gap-1 text-gray-500">
              <Infocircleicon height={18} width={18} color="white" />
              <p className="text-sm font-light">Required</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Admin Chat",
      value: "admin-chat",
      content: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="text-lg font-bold">Admin Chat Section</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
      <Tabs tabs={tabs} variant="outline" />
      <div className="flex gap-2 mt-4">
        <Button className="px-4 py-2">Save as Draft</Button>
        <Button className="px-4 py-2 bg-primary-600">Submit for Review</Button>
      </div>
    </div>
  );
}

const Page = () => {
  return <DashboardTabs />;
};

export default Page;
