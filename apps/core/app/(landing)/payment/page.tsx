import {
  BaseInput,
  Button,
  Input,
  Switch,
  Typography,
} from "@repo/ui/components";
import {
  IconCheck,
  IconCoinBitcoin,
  IconCreditCard,
} from "@tabler/icons-react";
import Cartitem from "./_components/cart-item";
import Subtotal from "./_components/ordersummary";

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
                <div className="flex gap-2 ">
                  <div className="rounded-lg border border-primary bg-card px-4 py-2 flex items-center w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col gap-1">
                        <IconCreditCard size={24} />
                        <Typography variant={"label/xs"} weight={"light"}>
                          Paypal
                        </Typography>
                      </div>
                      <div>
                        <IconCheck size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-primary bg-card px-4 py-2 flex items-center w-full">
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex flex-col gap-1">
                        <IconCoinBitcoin size={24} />
                        <Typography variant={"label/xs"} weight={"light"}>
                          Paypal
                        </Typography>
                      </div>
                      <div>
                        <IconCheck size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* wallet balance */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 ">
                <Typography variant={"label/md"} weight={"medium"}>
                  Use Wallet Balance{" "}
                </Typography>
                <Typography
                  variant={"label/xs"}
                  weight={"medium"}
                  className="text-muted-foreground"
                >
                  $10.00
                </Typography>
              </div>
              <div>
                <Switch />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 ">
                <Typography variant={"label/md"} weight={"medium"}>
                  Use Pixel Balance
                </Typography>
                <Typography
                  variant={"label/xs"}
                  weight={"medium"}
                  className="text-muted-foreground"
                >
                  120 PIXEL (~ $5.00)
                </Typography>
              </div>
              <div>
                <Switch />
              </div>
            </div>
            {/* Apply Discount Code */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 ">
                <Typography variant={"label/md"} weight={"medium"}>
                  Apply Discount Code
                </Typography>
              </div>
              <div>
                <Switch />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center justify-center">
                <BaseInput size={"sm"} placeholder="Enter Discount Code" />
                <Button variant="secondary" size="sm">
                  Apply
                </Button>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <BaseInput size={"sm"} placeholder="Enter Discount Code" />
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-destructive"
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className="w-full">
              <Button variant="primary" size="md" className="w-full font-bold">
                Go To Pay
              </Button>
            </div>
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
