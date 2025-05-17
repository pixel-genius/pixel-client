"use client";

import { BaseInput, Button, Switch, Typography } from "@repo/ui/components";
import { useState } from "react";

interface WalletBalanceProps {
  onSwitchChange: (checked: boolean) => void;
}

export const WalletBalance = ({ onSwitchChange }: WalletBalanceProps) => {
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
          $10.00
        </Typography>
      </div>
      <Switch onCheckedChange={onSwitchChange} />
    </div>
  );
};

interface PixelBalanceProps {
  onSwitchChange: (checked: boolean) => void;
}

export const PixelBalance = ({ onSwitchChange }: PixelBalanceProps) => {
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
          120 PIXEL (~ $5.00)
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
}

export const DiscountCode = ({
  onApply,
  onRemove,
  isVisible,
}: DiscountCodeProps) => {
  const [isApplied, setIsApplied] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <BaseInput size="sm" placeholder="Enter Discount Code" />
        {isApplied ? (
          <Button
            variant="secondary"
            size="sm"
            className="bg-destructive"
            onClick={() => {
              setIsApplied(false);
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

const PaymentSettings = () => {
  const [showWalletBalance, setShowWalletBalance] = useState(true);
  const [showPixelBalance, setShowPixelBalance] = useState(true);
  const [showDiscountCode, setShowDiscountCode] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Wallet Balance */}
      <WalletBalance onSwitchChange={setShowWalletBalance} />

      {/* Pixel Balance */}
      <PixelBalance onSwitchChange={setShowPixelBalance} />

      {/* Discount Code Switch */}
      <div className="flex justify-between items-center">
        <Typography variant="label/md" weight="medium">
          Apply Discount Code
        </Typography>
        <Switch onCheckedChange={setShowDiscountCode} />
      </div>

      {/* Discount Code Form */}
      <DiscountCode
        isVisible={showDiscountCode}
        onApply={() => console.log("Discount applied")}
        onRemove={() => console.log("Discount removed")}
      />
    </div>
  );
};

export default PaymentSettings;
