"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Typography } from "@repo/ui/components/atoms/typography";
import { Button } from "@repo/ui/components/atoms/button";
import SecurityIcon from "@repo/icons/security";

import { CartItemSkeleton } from "./cart-item-skeleton";
import { useCartStore } from "../store/cart-store";
import { CartItem } from "./cart-item";

const AddToCard = () => {
  const { closeAddToCart } = useCartStore();
  const router = useRouter();

  const [cards, setCards] = useState([
    {
      id: 2,
      title: "Traveler - Travel Agency",
      price: 15,
      image: "/cart-1.png",
    },
    {
      id: 3,
      title: "Traveler - Travel Agency",
      price: 15,
      image: "/cart-2.png",
    },
  ]);

  const temp = [1, 2, 3];
  const activeTemp = temp.splice(cards.length);

  const handleRemove = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const subtotal = cards.reduce((sum, card) => sum + card.price, 0);

  return (
    <div className="relative bg-background w-[450px] rounded-2xl border p-6 flex flex-col   gap-4">
      {/* Cart Items */}
      <div className="flex flex-col gap-3">
        {cards.map((card) => (
          <CartItem
            key={card.id}
            id={card.id}
            title={card.title}
            price={`$${card.price}`}
            onRemove={handleRemove}
          />
        ))}
        {activeTemp.map((_, idx) => (
          <CartItemSkeleton key={idx} />
        ))}
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center mt-2">
        <Typography variant="label/md" className="text-white opacity-80">
          Your Subtotal
        </Typography>
        <Typography variant="label/md" weight="bold" className="text-white">
          ${subtotal}
        </Typography>
      </div>

      {/* Pay Now Button */}

      <Button
        size="lg"
        className="w-full bg-primary text-white text-lg font-semibold rounded-xl mt-2"
        onClick={() => router.push("/payment")}
      >
        Pay Now
      </Button>

      {/* Secure Payment Message */}
      <div className="flex justify-center items-center gap-2 mt-2">
        <SecurityIcon className="text-white" size={20} />
        <Typography variant="label/sm" className="text-white opacity-80">
          Your payment is secured
        </Typography>
      </div>
    </div>
  );
};

export default AddToCard;
