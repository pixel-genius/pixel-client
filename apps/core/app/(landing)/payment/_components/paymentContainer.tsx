"use client";

import React, { useState, useEffect } from "react";
import PaymentOptionsList from "./paymentOption";
import PaymentSettings from "./paymentSettings";
import Subtotal from "./ordersummary";

const PaymentContainer: React.FC = () => {
  // Payment option state
  const [selectedOption, setSelectedOption] = useState("Paypal");
  
  // Payment settings state
  const [walletBalance, setWalletBalance] = useState(0);
  const [pixelBalance, setPixelBalance] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Initial items for the order summary
  const initialItems = [
    { label: "Subtotal", amount: 100.00 },
    { label: "Tax", amount: 10.00 }
  ];

  // Reset all payment settings when payment option changes
  useEffect(() => {
    setWalletBalance(0);
    setPixelBalance(0);
    setDiscountAmount(0);
  }, [selectedOption]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleWalletBalanceChange = (amount: number) => {
    setWalletBalance(amount);
  };

  const handlePixelBalanceChange = (amount: number) => {
    setPixelBalance(amount);
  };

  const handleDiscountChange = (amount: number) => {
    setDiscountAmount(amount);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Payment Options */}
      <PaymentOptionsList
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />

      {/* Payment Settings */}
      <PaymentSettings
        paymentOption={selectedOption}
        onWalletBalanceChange={handleWalletBalanceChange}
        onPixelBalanceChange={handlePixelBalanceChange}
        onDiscountChange={handleDiscountChange}
      />

      {/* Order Summary */}
      <Subtotal
        items={initialItems}
        currency={selectedOption === "USDT" ? "USDT " : "$"}
        walletBalance={walletBalance}
        pixelBalance={pixelBalance}
        discountAmount={discountAmount}
        cartItemsCount={2}
      />
    </div>
  );
};

export default PaymentContainer; 