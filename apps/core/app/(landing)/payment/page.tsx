"use client";
import {
  BaseInput,
  Button,
  Input,
  Switch,
  Typography,
} from "@repo/ui/components";
import Cartitem from "./_components/cart-item";
import Subtotal from "./_components/ordersummary";
import PaymentOptionsList from "./_components/paymentOption";
import PaymentSettings from "./_components/paymentSettings";

const PixelPayment = () => {
  return (
    <div className="pt-44">
      <div className="">
        <div className="grid grid-cols-2 grid-rows-1 gap-12 p-10 ">
          {/* payment form */}
          <div className=" flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <Typography variant={"label/lg"} weight={"bold"}>
                Payment
              </Typography>
              <Typography variant={"label/sm"} weight={"light"}>
                Complete your purchase by providing your payment details.
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Card Number"
                label="Card Number"
                size={"lg"}
              />
              <div className="flex flex-col gap-4">
                <div>
                  <Typography variant={"label/md"} weight={"normal"}>
                    Select Payment Method{" "}
                  </Typography>
                </div>
                <div className="flex flex-col gap-2 ">
                  <PaymentOptionsList />
                </div>
              </div>
            </div>
            {/* wallet balance */}
            <PaymentSettings />
          </div>
          {/* card details */}
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <Typography variant={"label/lg"} weight={"bold"}>
                Product Information & Review
              </Typography>
              <Typography variant={"label/sm"} weight={"light"}>
                By Placing your order, you agree to storele ins trivacy and
                policy.{" "}
              </Typography>
            </div>
            {/* card section  */}
            <div className="flex flex-col gap-3">
              <Cartitem />
              <Cartitem />
              {/* order summary */}
              <div>
                <Typography variant={"label/lg"} weight={"medium"}>
                  Order Summary
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <Subtotal label="Subtotal" amount="$35" />
                <Subtotal label="Use Wallet " amount="$5" />
                <Subtotal label="Use Pixel " amount="-$5" />
                <Subtotal label="Discount" amount="$30" />
                <div className="rounded-full bg-border h-1 w-full "></div>
                <div className="flex justify-between items-center">
                  <Typography variant={"heading/sm"} weight={"light"}>
                    Total (2 items)
                  </Typography>
                  <Typography variant={"heading/sm"} weight={"bold"}>
                    $35
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelPayment;
