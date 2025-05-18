"use client";
import { Button, Input, Typography } from "@repo/ui/components";
import Cartitem from "./_components/cart-item";
import Subtotal from "./_components/ordersummary";
import PaymentOptionsList from "./_components/paymentOption";
import PaymentSettings from "./_components/paymentSettings";
import PaymentForm from "./_components/payment-form";
import { useState } from 'react';

const PixelPayment = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("Paypal");
  const [walletBalance, setWalletBalance] = useState(0);
  const [pixelBalance, setPixelBalance] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "News App UI KIT", price: 35 },
    { id: 2, title: "Dashboard UI KIT", price: 45 }
  ]);

  // Format amount based on payment option
  const formatAmount = (amount: number) => {
    if (selectedPaymentOption === "USDT") {
      return `${amount} USDT`;
    }
    return `$${amount}`;
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-44">
      <div className="">
        <div className="grid grid-cols-2 grid-rows-1 gap-12 p-10 ">
          {/* payment form */}
          <div className=" flex flex-col gap-4 ">
            <div className="flex flex-col gap-2 pb-4">
              <Typography variant={"heading/lg"} className="pb-1" weight={"bold"}>
                Payment
              </Typography>
              <Typography variant={"paragraph/md"} weight={"light"}>
                Complete your purchase by providing your payment details.
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="info@pixel.com"
                disabled={true}
                size={"lg"}
              />
              <div className="flex flex-col gap-4">
                <div>
                  <Typography variant={"label/md"} weight={"normal"}>
                    Select Payment Method{" "}
                  </Typography>
                </div>
                <div className="flex flex-col gap-2 ">
                  <PaymentOptionsList 
                    selectedOption={selectedPaymentOption}
                    onOptionChange={setSelectedPaymentOption} 
                  />
                </div>
              </div>
            </div>
            {/* wallet balance */}
            <PaymentSettings 
              paymentOption={selectedPaymentOption}
              onWalletBalanceChange={setWalletBalance}
              onPixelBalanceChange={setPixelBalance}
              onDiscountChange={setDiscountAmount}
            />
            <div className="pt-4 w-full">
              <PaymentForm paymentOption={selectedPaymentOption} />
            </div>
          </div>
          {/* card details */}
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <Typography variant={"heading/lg"} className="pb-1 " weight={"bold"}>
                Product Information & Review
              </Typography>
              <Typography variant={"label/sm"} className="pb-4" weight={"light"}>
                By Placing your order, you agree to storele ins trivacy and
                policy.{" "}
              </Typography>
            </div>
            {/* card section  */}
            <div className="flex flex-col gap-3">
              {cartItems.length === 0 ? (
                <div className="bg-card p-8 rounded-lg flex flex-col items-center justify-center gap-4">
                  <Typography variant={"heading/sm"} weight={"medium"}>
                    Your cart is empty
                  </Typography>
                  <Typography variant={"label/md"} weight={"light"}>
                    Add some items to your cart to proceed with payment
                  </Typography>
                </div>
              ) : (
                cartItems.map((item) => (
                  <Cartitem 
                    key={item.id}
                    currency={selectedPaymentOption === "USDT" ? "USDT " : "$"}
                    onRemove={() => handleRemoveItem(item.id)}
                    title={item.title}
                    price={item.price}
                  />
                ))
              )}
              {/* order summary */}
              <div>
                <Typography variant={"label/lg"} weight={"medium"}>
                  Order Summary
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <Subtotal
                  items={[
                    { label: "Your Subtotal", amount: subtotal }
                  ]}
                  currency={selectedPaymentOption === "USDT" ? "USDT " : "$"}
                  walletBalance={walletBalance}
                  pixelBalance={pixelBalance}
                  discountAmount={discountAmount}
                  cartItemsCount={cartItems.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelPayment;
