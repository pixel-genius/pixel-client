import React, { useState } from "react";
import {
  IconCreditCard,
  IconCoinBitcoin,
  IconCheck,
} from "@tabler/icons-react"; // Replace with your actual icon library
import { Typography } from "@repo/ui/components/atoms/typography";

type PaymentOptionProps = {
  icon: React.FC<{ size: number }>; // Icon type with size prop
  label: string; // Label for the option
  isActive: boolean; // Whether the option is active
  onClick: () => void; // Click handler
};

const PaymentOption: React.FC<PaymentOptionProps> = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border ${
        isActive ? "border-primary" : "border-border"
      } bg-card px-4 py-2 flex items-center w-full cursor-pointer`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <Icon size={24} />
          <Typography variant={"label/xs"} weight={"light"}>
            {label}
          </Typography>
        </div>
        {isActive && (
          <div>
            <IconCheck size={24} />
          </div>
        )}
      </div>
    </div>
  );
};

type PaymentOptionsListProps = {
  onOptionChange: (option: string) => void;
  selectedOption: string;
};

const PaymentOptionsList: React.FC<PaymentOptionsListProps> = ({
  onOptionChange,
  selectedOption,
}) => {
  const handleOptionClick = (option: string) => {
    onOptionChange(option);
  };

  return (
    <div className="flex gap-2">
      <PaymentOption
        icon={IconCreditCard}
        label="Paypal"
        isActive={selectedOption === "Paypal"}
        onClick={() => handleOptionClick("Paypal")}
      />
      <PaymentOption
        icon={IconCoinBitcoin}
        label="USDT"
        isActive={selectedOption === "USDT"}
        onClick={() => handleOptionClick("USDT")}
      />
    </div>
  );
};

export default PaymentOptionsList;
