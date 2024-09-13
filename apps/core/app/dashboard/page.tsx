import { Input } from "@repo/ui/components/input";
import Serchinicon from "../../../../packages/icons/src/components/serach";
import Bellicon from "../../../../packages/icons/src/components/bell";
import Chevrondownicon from "../../../../packages/icons/src/components/chevrondown";
import Infosquareroundedicon from "../../../../packages/icons/src/components/infosquarerounded";
import { Button } from "@repo/ui/components/button";
import { Label } from "@repo/ui/components/label";
import { Textarea } from "@repo/ui/components/textarea";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import { Switch } from "@repo/ui/components/switch";

const DashboardPage = () => {
  return (
    // <div className="container mx-auto">
    //   {/* dashbord header */}
    //   <div className="bg-gray-900 rounded-xl mt-4 ">
    //     <div className="flex items-center justify-between p-2">
    //       <div>
    //         <Input placeholder="Please Search" className="w-full" />
    //       </div>
    //       <div className=" flex items-center gap-2">
    //         <div className="bg-black rounded-lg p-2 cursor-pointer">
    //           <Bellicon
    //             size={24}
    //             height={24}
    //             width={24}
    //             className="cursor-pointer rounded-lg "
    //           />
    //         </div>
    //         <div className="flex">
    //           <img
    //             src="https://avatar.iran.liara.run/public/35"
    //             height={40}
    //             width={40}
    //             className="rounded-full mr-2"
    //           />
    //           <div className="">
    //             <p className="text-sm font-medium">Ali Ebrahimi Kashef</p>
    //             <p className="text-xs font-light">Product Designer</p>
    //           </div>
    //         </div>
    //         <div>
    //           <Chevrondownicon
    //             size={20}
    //             height={20}
    //             width={20}
    //             className="cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-4 mt-4">
    //     <div>
    //       <h1 className="text-2xl font-bold"> Dashboard </h1>
    //     </div>
    //     {/* item dsaheadboard */}
    //     <div className="flex gap-5">
    //       <div className="flex flex-col gap-5 w-72 h-auto bg-gray-900 rounded-lg p-2 ">
    //         <div className="flex items-center justify-between ">
    //           <div className="p-1">
    //             <p className="text-lg font-normal">Outstanding owed</p>
    //             <a className="text-xs font-light underline "> View sales</a>
    //           </div>
    //           <Infosquareroundedicon />
    //         </div>
    //         <div>
    //           <p className="text-3xl font-bold">$123.00</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-5 w-72 h-auto bg-gray-900 rounded-lg p-2 ">
    //         <div className="flex items-center justify-between ">
    //           <div className="p-1">
    //             <p className="text-lg font-normal">Total payout</p>
    //             <a className="text-xs font-light underline "> View sales</a>
    //           </div>
    //           <Infosquareroundedicon />
    //         </div>
    //         <div>
    //           <p className="text-3xl font-bold">$123.00</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-5 w-72 h-auto bg-gray-900 rounded-lg p-2 ">
    //         <div className="flex items-center justify-between ">
    //           <div className="p-1">
    //             <p className="text-lg font-normal">Product Count</p>
    //             <a className="text-xs font-light underline "> View sales</a>
    //           </div>
    //           <Infosquareroundedicon />
    //         </div>
    //         <div>
    //           <p className="text-3xl font-bold">$123.00</p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* earnings history */}
    //     <div className="w-[935px] h-[325px] bg-gray-900 rounded-xl p-6">
    //       <div>
    //         <div className="flex justify-between">
    //           <div>
    //             <p className="text-lg font-normal">Earnings history</p>
    //           </div>
    //           <div>
    //             <div className="flex gap-2 items-center">
    //               <p>This week</p>
    //               <Chevrondownicon
    //                 size={20}
    //                 height={20}
    //                 width={20}
    //                 className="cursor-pointer"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         {/* chart */}
    //         <div className=""></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto">
      <div className="pt-14">
        <div className="flex justify-between">
          <Tabs defaultValue="account" className="w-screen">
            <TabsList>
              <TabsTrigger value="General">General</TabsTrigger>
              <TabsTrigger value="Images">Images</TabsTrigger>
              <TabsTrigger value="file">file</TabsTrigger>
              <TabsTrigger value="Admin Chat">Admin Chat</TabsTrigger>
            </TabsList>
            <TabsContent value="General">
              <div className="bg-gray-900 rounded-lg p-4 mt-4">
                {/* headline */}
                <div>
                  <h1 className="text-base font-bold">Product Details</h1>
                </div>
                {/* inpiut */}
                <div className="flex gap-2 w-full">
                  <div className="w-1/2">
                    <Label className="text-xs font-normal">Product Name</Label>
                    <Input placeholder="Search" className="" />
                  </div>
                  <div className="w-1/2">
                    <Label>Product Name</Label>
                    <Input placeholder="Search" className="" />
                  </div>
                </div>
                {/* textarea */}
                <div className="pb-4">
                  <p className="text-xs font-normal pb-1">
                    Product Description
                  </p>

                  <Textarea
                    placeholder="Heading1"
                    className="w-full h-[186px] text-sm p-4"
                  />
                </div>
                <div className=" flex gap-3">
                  <div className="w-1/2">
                    <div className="pb-5">
                      <p className="text-base font-bold">
                        Choose the right price!
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        Remember, the right pricing can bring you more sales.
                      </p>
                    </div>
                    <div className="pb-4">
                      <Label className="text-xs font-normal text-gray-500">
                        Price
                      </Label>
                      <Input placeholder="0" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between pb-2">
                        <div>
                          <p className="text-xs font-light">Set a discount</p>
                        </div>
                        <div>
                          <Switch/>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <Button variant="secondary" className="w-12 h-9 text-sm font-light bg-primary-500">50%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">55%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">60%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">65%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">70%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">75%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">80%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">85%</Button>
                        <Button variant="outline" className="w-12 h-9 text-sm font-light">90%</Button>
                      </div>
                    </div>
                    <div className="h-0.5 bg-gray-700 w-auto rounded mt-10 mb-10"></div>
                    <div className="">
                      <div className="pb-6">
                        <p className="text-base font-bold">File Formats Included</p>
                        <p className="text-xs font-normal text-gray-500">Specify the file formats that customers can download after purchase.</p>
                      </div>
                      {/* file formats */}
                      <div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">gwojgpow</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Images">Images</TabsContent>
            <TabsContent value="file">file</TabsContent>
            <TabsContent value="Admin Chat">Admin Chat</TabsContent>
          </Tabs>

          <div className="flex gap-2">
            {/* button */}
            <div>
              <Button variant="outline" className="px-4 py-2">
                Save as draft
              </Button>
            </div>
            <div>
              <Button variant="secondary" className="px-4 py-2 bg-primary-600">
                Submit for review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
