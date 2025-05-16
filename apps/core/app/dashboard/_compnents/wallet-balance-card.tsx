import React from "react";
import { IconWallet } from "@tabler/icons-react";

export function WalletBalanceCard() {
  return (
    <div className="bg-[#E7E3F6] rounded-lg p-4 flex flex-col gap-2 w-full max-w-xs shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <IconWallet className="w-5 h-5 text-gray-700" />
        <span className="text-gray-700 font-medium text-base">Wallet Balance</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">$2,560.00</div>
      <div className="text-xs text-[#8B7BB9] mb-3">≈ 250.00 USDT</div>
      <button className="self-end bg-[#7C5CFA] hover:bg-[#6842e6] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
        Withdraw
      </button>
    </div>
  );
} 