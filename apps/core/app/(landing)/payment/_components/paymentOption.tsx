import React, { useState } from "react";
import {
  IconCreditCard,
  IconCoinBitcoin,
  IconCheck,
} from "@tabler/icons-react"; // Replace with your actual icon library
import { Typography } from "@repo/ui/components"; // Replace with your actual typography component

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

const PaymentOptionsList: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>("Paypal");

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="flex gap-2">
      <PaymentOption
        icon={IconCreditCard}
        label="Paypal"
        isActive={activeOption === "Paypal"}
        onClick={() => handleOptionClick("Paypal")}
      />
      <PaymentOption
        icon={IconCoinBitcoin}
        label="Bitcoin"
        isActive={activeOption === "Bitcoin"}
        onClick={() => handleOptionClick("Bitcoin")}
      />
    </div>
  );
};

export default PaymentOptionsList;
