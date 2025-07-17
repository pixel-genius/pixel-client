"use client";

import { BaseInput } from "@repo/ui/components/atoms/base-input";
import { Button } from "@repo/ui/components/atoms/button";
import { Switch } from "@repo/ui/components/atoms/switch";
import { Typography } from "@repo/ui/components/atoms/typography";
import { useState } from "react";

interface WalletBalanceProps {
  onSwitchChange: (checked: boolean) => void;
  currency: string;
}

export const WalletBalance = ({
  onSwitchChange,
  currency,
}: WalletBalanceProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Typography variant="label/md" weight="medium">
          Use Wallet Balance
        </Typography>
        <Typography
          variant="label/xs"
          weight="medium"
          className="text-muted-foreground"
        >
          {currency}10.00
        </Typography>
      </div>
      <Switch onCheckedChange={onSwitchChange} />
    </div>
  );
};

interface PixelBalanceProps {
  onSwitchChange: (checked: boolean) => void;
  currency: string;
}

export const PixelBalance = ({
  onSwitchChange,
  currency,
}: PixelBalanceProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Typography variant="label/md" weight="medium">
          Use Pixel Balance
        </Typography>
        <Typography
          variant="label/xs"
          weight="medium"
          className="text-muted-foreground"
        >
          120 PIXEL (~ {currency}5.00)
        </Typography>
      </div>
      <Switch onCheckedChange={onSwitchChange} />
    </div>
  );
};

interface DiscountCodeProps {
  onApply: () => void;
  onRemove: () => void;
  isVisible: boolean;
  currency: string;
}

export const DiscountCode = ({
  onApply,
  onRemove,
  isVisible,
  currency,
}: DiscountCodeProps) => {
  const [isApplied, setIsApplied] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  if (!isVisible) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <BaseInput
          size="sm"
          placeholder={
            isApplied
              ? `Discount 10% (~ ${currency}5.00)`
              : "Enter Discount Code"
          }
          value={isApplied ? `Discount 10% (~ ${currency}5.00)` : discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          disabled={isApplied}
        />
        {isApplied ? (
          <Button
            variant="secondary"
            size="sm"
            className="bg-destructive"
            onClick={() => {
              setIsApplied(false);
              setDiscountCode("");
              onRemove();
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setIsApplied(true);
              onApply();
            }}
          >
            Apply
          </Button>
        )}
      </div>
    </div>
  );
};

interface PaymentSettingsProps {
  paymentOption: string;
  onWalletBalanceChange: (amount: number) => void;
  onPixelBalanceChange: (amount: number) => void;
  onDiscountChange: (amount: number) => void;
}

const PaymentSettings: React.FC<PaymentSettingsProps> = ({
  paymentOption,
  onWalletBalanceChange,
  onPixelBalanceChange,
  onDiscountChange,
}) => {
  const [showWalletBalance, setShowWalletBalance] = useState(false);
  const [showPixelBalance, setShowPixelBalance] = useState(false);
  const [showDiscountCode, setShowDiscountCode] = useState(false);

  const currency = paymentOption === "USDT" ? "USDT " : "$";

  // Handle wallet balance switch
  const handleWalletSwitch = (checked: boolean) => {
    setShowWalletBalance(checked);
    onWalletBalanceChange(checked ? 10.0 : 0);
  };

  // Handle pixel balance switch
  const handlePixelSwitch = (checked: boolean) => {
    setShowPixelBalance(checked);
    onPixelBalanceChange(checked ? 5.0 : 0);
  };

  // Handle discount code switch
  const handleDiscountSwitch = (checked: boolean) => {
    setShowDiscountCode(checked);
    if (!checked) {
      onDiscountChange(0);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Wallet Balance */}
      <WalletBalance onSwitchChange={handleWalletSwitch} currency={currency} />

      {/* Pixel Balance */}
      <PixelBalance onSwitchChange={handlePixelSwitch} currency={currency} />

      {/* Discount Code Switch */}
      <div className="flex justify-between items-center">
        <Typography variant="label/md" weight="medium">
          Apply Discount Code
        </Typography>
        <Switch onCheckedChange={handleDiscountSwitch} />
      </div>

      {/* Discount Code Form */}
      <DiscountCode
        isVisible={showDiscountCode}
        onApply={() => {
          onDiscountChange(5.0);
        }}
        onRemove={() => {
          onDiscountChange(0);
        }}
        currency={currency}
      />
    </div>
  );
};

export default PaymentSettings;
