"use client";
import { Typography } from "@repo/ui/components";
import React from "react";

// Props Types
interface SubtotalProps {
  label: string;
  amount: string;
}

// Subtotal Component
const Subtotal: React.FC<SubtotalProps> = ({ label, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Typography
          variant={"label/md"}
          weight={"light"}
          className="text-muted-foreground"
        >
          {label}
        </Typography>
      </div>
      <div>
        <Typography
          variant={"label/md"}
          weight={"light"}
          className="text-muted-foreground"
        >
          {amount}
        </Typography>
      </div>
    </div>
  );
};

export default Subtotal;
