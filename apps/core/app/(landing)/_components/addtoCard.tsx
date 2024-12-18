import Metamaskicon from "@repo/icons/metamask";
import Card from "./card";
import Tonconnecticon from "@repo/icons/tonconnect";
import Paypalicon from "@repo/icons/paypal";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import Securityicon from "@repo/icons/security";
import { Label } from "@repo/ui/components/label";

const Addtocard = () => {
  return (
    <div className="flex ">
      <div className="bg-gray-600 w-[411px] p-4">
        <Card />
      </div>
      <div className="bg-green-600 p-4 w-[522px]">
        <p className="text-xl font-medium pb-5">Checkout</p>
        <div className="flex justify-center gap-3 items-center bg-red-500 p-2 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <Metamaskicon size={33} />
            <p className="text-sm font-medium">Metamask</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Tonconnecticon size={33} />
            <p className="text-sm font-medium">Tonconnect</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Paypalicon size={33} />
            <p className="text-sm font-medium">Paypal</p>
          </div>
        </div>
        <div className=" pb-16">
          <Label>Email</Label>
          <div className="relative flex items-center">
            {/* to do : # label container */}
            <Input placeholder="ali.kashef29@yahoo.com" type="email" />
            <span
              className="underline absolute right-2 text-xs text-gray-400 cursor-pointer"
              onClick={() => {
                // to do : # sign out
              }}
            >
              Sign out
            </span>
          </div>
          <Input label="full name" placeholder="Ali Kashef" type="text" />
        </div>
        <div className="pb-3 w-full">
          <Button size={"lg"} className="w-full bg-primary-500 text-white">
            Pay $40
          </Button>
        </div>
        <div className="flex justify-center gap-1 items-center">
          <Securityicon size={24} />
          <p className="text-sm font-medium text-gray-700">
            Your payment is secured by MetaMask
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addtocard;
