"use client";
import { Typography } from "@repo/ui/components";
import React from "react";

// Props Types
interface Item {
  label: string; // The name or label (e.g., "Your Subtotal", "Use Wallet")
  amount: number; // The amount associated with the item
}

interface SubtotalProps {
  items: Item[]; // List of items
}

// Subtotal Component
const Subtotal: React.FC<SubtotalProps> = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="space-y-4">
      {/* Items List */}
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center  ">
          <Typography variant={"label/md"} weight={"light"}>
            {item.label}
          </Typography>
          <Typography variant={"label/md"} weight={"light"}>
            ${item.amount.toFixed(2)}
          </Typography>
        </div>
      ))}

      {/* Divider */}
      <div className="rounded-full bg-border h-1 w-full "></div>

      {/* Total */}
      <div className="flex justify-between items-center">
        <Typography variant={"heading/sm"} weight={"light"}>
          Total ({items.length} items)
        </Typography>
        <Typography variant={"heading/sm"} weight={"bold"}>
          ${total.toFixed(2)}
        </Typography>
      </div>
    </div>
  );
};

export default Subtotal;
