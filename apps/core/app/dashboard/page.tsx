"use client";

import { Button } from "@repo/ui/components";
import { Input } from "@repo/ui/components";
import { Label } from "@repo/ui/components";
import { Textarea } from "@repo/ui/components";
import Infocircleicon from "@repo/icons/info-circle";
import { Switch } from "@repo/ui/components";

import {
  TabProvider,
  TabList,
  TabTrigger,
  TabContent,
} from "@repo/ui/components";

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
        <div className="flex flex-col justify-between">
          <TabProvider
            hiddenMode="unmount"
            defaultValue="General"
            id="productTab"
            onChange={(value: string) => console.log(value)}
          >
            <TabList>
              <TabTrigger value="General">General</TabTrigger>
              <TabTrigger value="Images">Images</TabTrigger>
              <TabTrigger value="file">file</TabTrigger>
              <TabTrigger value="Admin Chat">Admin Chat</TabTrigger>
            </TabList>
            <TabContent value="General">
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
                          <Switch />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <Button
                          // variant="secondary"
                          className="w-12 h-9 text-sm font-light bg-primary-500"
                        >
                          50%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          55%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          60%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          65%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          70%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          75%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          80%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          85%
                        </Button>
                        <Button
                          // variant="outline"
                          className="w-12 h-9 text-sm font-light"
                        >
                          90%
                        </Button>
                      </div>
                    </div>
                    <div className="h-0.5 bg-gray-700 w-auto rounded mt-10 mb-10"></div>
                    <div className="">
                      <div className="pb-6">
                        <p className="text-base font-bold">
                          File Formats Included
                        </p>
                        <p className="text-xs font-normal text-gray-500">
                          Specify the file formats that customers can download
                          after purchase.
                        </p>
                      </div>
                      {/* file formats */}
                      <div></div>
                    </div>
                  </div>
                  <div className="w-1/2">gwojgpow</div>
                </div>
              </div>
            </TabContent>
            <TabContent value="Images">
              <div className="bg-gray-900 flex flex-col gap-4 p-4">
                <div>
                  <div className="flex items-center justify-between pb-2 ">
                    <div>
                      <p className="text-xl font-bold">Thumbnail</p>
                    </div>
                    <div className="flex gap-1 text-gray-500">
                      <Infocircleicon height={18} width={18} color="white" />
                      <p className="text-sm font-light">Required</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className=" flex justify-center items-center border-dashed  border border-gray-500">
                      <div className="flex items-center flex-col justify-center py-12">
                        <div className="">gif upload</div>
                        <div className="flex gap-1">
                          <p className="text-sm font-normal">
                            Drag & drop image to upload, or
                          </p>
                          <p className="text-sm font-bold text-primary-500">
                            Browse
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-normal text-gray-500">
                            Create image at 1800 × 1360 px. Keep images under
                            3MB and JPEG if possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between pb-2 ">
                    <div>
                      <p className="text-xl font-bold">
                        ThumbnailDetail images (4-8 required for approval)
                      </p>
                    </div>
                    <div className="flex gap-1 text-gray-500">
                      <Infocircleicon height={18} width={18} color="white" />
                      <p className="text-sm font-light">Required</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className=" flex justify-center items-center border-dashed  border border-gray-500">
                      <div className="flex items-center flex-col justify-center py-12">
                        <div className="">gif upload</div>
                        <div className="flex gap-1">
                          <p className="text-sm font-normal">
                            Drag & drop image to upload, or
                          </p>
                          <p className="text-sm font-bold text-primary-500">
                            Browse
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-normal text-gray-500">
                            Create image at 1800 × 1360 px. Keep images under
                            3MB and JPEG if possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between pb-2 ">
                    <div>
                      <p className="text-xl font-bold">Full previews</p>
                    </div>
                    <div className="flex gap-1 text-gray-500">
                      <Infocircleicon height={18} width={18} color="white" />
                      <p className="text-sm font-light">Required</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className=" flex justify-center items-center border-dashed  border border-gray-500">
                      <div className="flex items-center flex-col justify-center py-12">
                        <div className="">gif upload</div>
                        <div className="flex gap-1">
                          <p className="text-sm font-normal">
                            Drag & drop image to upload, or
                          </p>
                          <p className="text-sm font-bold text-primary-500">
                            Browse
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-normal text-gray-500">
                            Create image at 1800 × 1360 px. Keep images under
                            3MB and JPEG if possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabContent>
            <TabContent value="file">
              <div className="bg-gray-900 flex flex-col gap-4 p-4">
                <div>
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <p className="text-xl font-bold">Files</p>
                    </div>
                    <div className="flex gap-1 text-gray-500">
                      <Infocircleicon height={18} width={18} color="white" />
                      <p className="text-sm font-light">Required</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className=" flex justify-center items-center border-dashed  border border-gray-500">
                      <div className="flex items-center flex-col justify-center py-12">
                        <div className="">gif upload</div>
                        <div className="flex gap-1">
                          <p className="text-sm font-normal">
                            Drag & drop image to upload, or
                          </p>
                          <p className="text-sm font-bold text-primary-500">
                            Browse
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-normal text-gray-500">
                            Files must be in a ZIP format, with a maximum size
                            of 2 GB.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabContent>
            <TabContent value="Admin Chat">Admin Chat</TabContent>
          </TabProvider>

          <div className="flex gap-2">
            {/* button */}
            <div>
              <Button
                // variant="outline"
                className="px-4 py-2"
              >
                Save as draft
              </Button>
            </div>
            <div>
              <Button
                // variant="secondary"
                className="px-4 py-2 bg-primary-600"
              >
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
