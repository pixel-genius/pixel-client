"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import tronWeb from "./utills";

export default function Dashboard() {
  const [userAddress, setUserAddress] = useState<string>("");

  const onClick = async () => {
    try {
      const result = await tronWeb.transactionBuilder.sendTrx(
        "TJpZa14QpFAV3K7yA2A2nMTEPqkvp9XWaC",
        10,
        "TT9M2F8FBHZAU2JUbP3djPTdrYyF6YxyqX",
      );

      console.log("result", result);
    } catch (error) {
      console.log("errrrr", error);
    }
  };

  // React Query Mutation for fetching balance
  const fetchBalanceMutation = useMutation({
    mutationFn: async (address: string) => {
      const response = await fetch("/api/tron", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method: "transfer",
          params: { to: "TT9M2F8FBHZAU2JUbP3djPTdrYyF6YxyqX", amount: 10 },
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.error);
      return data.result.toString();
    },
  });

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Tron Smart Contract Interaction
      </h1>

      {/* Input Field for User Address */}
      <Input
        type="text"
        placeholder="Enter Tron Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        className="mb-4"
      />

      {/* Fetch Balance Button */}
      <Button
        onClick={() => fetchBalanceMutation.mutate(userAddress)}
        disabled={!userAddress || fetchBalanceMutation.isPending}
      >
        {fetchBalanceMutation.isPending ? "Fetching..." : "Get Balance"}
      </Button>

      <Button onClick={onClick}>Transaction</Button>

      {/* Display Balance */}
      {fetchBalanceMutation.isSuccess && (
        <p className="mt-4 text-lg font-semibold">
          Balance: {fetchBalanceMutation.data}
        </p>
      )}

      {/* Display Error Message */}
      {fetchBalanceMutation.isError && (
        <p className="mt-4 text-red-500">
          Error: {fetchBalanceMutation.error.message}
        </p>
      )}
    </div>
  );
}
