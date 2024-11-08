import { Input } from "@repo/ui/components/input";
import Bellicon from "../../../../packages/icons/src/components/bell";
import Chevrondownicon from "../../../../packages/icons/src/components/chevron-down";
import Infosquareroundedicon from "../../../../packages/icons/src/components/info-square-rounded";


const DashboardPage = () => {
  return (
    <div className="container mx-auto">
      {/* dashbord header */}
      <div className="bg-gray-900 rounded-xl mt-4 ">
        <div className="flex items-center justify-between p-2">
          <div>
            <Input placeholder="Please Search" className="w-full" />
          </div>
          <div className=" flex items-center gap-2">
            <div className="bg-black rounded-lg p-2 cursor-pointer">
              <Bellicon
                size={24}
                height={24}
                width={24}
                className="cursor-pointer rounded-lg "
              />
            </div>
            <div className="flex">
              <img
                src="https://avatar.iran.liara.run/public/35"
                height={40}
                width={40}
                className="rounded-full mr-2"
              />
              <div className="">
                <p className="text-sm font-medium">Ali Ebrahimi Kashef</p>
                <p className="text-xs font-light">Product Designer</p>
              </div>
            </div>
            <div>
              <Chevrondownicon
                size={20}
                height={20}
                width={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <h1 className="text-2xl font-bold"> Dashboard </h1>
        </div>
        {/* item dsaheadboard */}
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-72 h-auto bg-gray-900 rounded-lg p-2 ">
            <div className="flex items-center justify-between ">
              <div className="p-1">
                <p className="text-lg font-normal">Outstanding owed</p>
                <a className="text-xs font-light underline "> View sales</a>
              </div>
              <Infosquareroundedicon />
            </div>
            <div>
              <p className="text-3xl font-bold">$123.00</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-72 h-auto bg-gray-900 rounded-lg p-2 ">
            <div className="flex items-center justify-between ">
              <div className="p-1">
                <p className="text-lg font-normal">Total payout</p>
                <a className="text-xs font-light underline "> View sales</a>
              </div>
              <Infosquareroundedicon />
            </div>
            <div>
              <p className="text-3xl font-bold">$123.00</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-72 h-auto bg-gray-900 rounded-lg p-2 ">
            <div className="flex items-center justify-between ">
              <div className="p-1">
                <p className="text-lg font-normal">Product Count</p>
                <a className="text-xs font-light underline "> View sales</a>
              </div>
              <Infosquareroundedicon />
            </div>
            <div>
              <p className="text-3xl font-bold">$123.00</p>
            </div>
          </div>
        </div>
        {/* earnings history */}
        <div className="w-[935px] h-[325px] bg-gray-900 rounded-xl p-6">
          <div>
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-normal">Earnings history</p>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <p>This week</p>
                  <Chevrondownicon
                    size={20}
                    height={20}
                    width={20}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* chart */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default DashboardPage;
