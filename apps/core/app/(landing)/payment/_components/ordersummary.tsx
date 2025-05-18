"use client";
import { Typography } from "@repo/ui/components";
import React, { useEffect, useState } from "react";

// Props Types
interface Item {
  label: string; // The name or label (e.g., "Your Subtotal", "Use Wallet")
  amount: number; // The amount associated with the item
}

interface SubtotalProps {
  items: Item[]; // List of items
  currency: string; // Currency symbol or code
  walletBalance: number;
  pixelBalance: number;
  discountAmount: number;
  cartItemsCount: number;
}

// Subtotal Component
const Subtotal: React.FC<SubtotalProps> = ({ 
  items, 
  currency = "$",
  walletBalance,
  pixelBalance,
  discountAmount,
  cartItemsCount
}) => {
  const [allItems, setAllItems] = useState<Item[]>(items);

  useEffect(() => {
    const newItems = [...items];
    
    if (walletBalance > 0) {
      newItems.push({ label: "Use Wallet", amount: -walletBalance });
    }
    
    if (pixelBalance > 0) {
      newItems.push({ label: "Use Pixel Balance", amount: -pixelBalance });
    }
    
    if (discountAmount > 0) {
      newItems.push({ label: "Discount", amount: -discountAmount });
    }

    setAllItems(newItems);
  }, [items, walletBalance, pixelBalance, discountAmount]);

  const total = allItems.reduce((acc, item) => acc + item.amount, 0);

  const formatAmount = (amount: number) => {
    return `${currency}${amount.toFixed(2)}`;
  };

  return (
    <div className="space-y-4">
      {/* Items List */}
      {allItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <Typography variant={"label/md"} weight={"light"}>
            {item.label}
          </Typography>
          <Typography variant={"label/md"} weight={"light"}>
            {formatAmount(item.amount)}
          </Typography>
        </div>
      ))}

      {/* Divider */}
      <div className="rounded-full bg-border h-1 w-full"></div>

      {/* Total */}
      <div className="flex justify-between items-center">
        <Typography variant={"heading/sm"} weight={"light"}>
          Total ({cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'})
        </Typography>
        <Typography variant={"heading/sm"} weight={"bold"}>
          {formatAmount(total)}
        </Typography>
      </div>
    </div>
  );
};

export default Subtotal;
