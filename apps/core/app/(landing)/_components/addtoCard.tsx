"use client";

import Metamaskicon from "@repo/icons/metamask";
import Card from "./card";
import Tonconnecticon from "@repo/icons/tonconnect";
import Paypalicon from "@repo/icons/paypal";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import Securityicon from "@repo/icons/security";
import { Label } from "@repo/ui/components/label";
import { useState } from "react";
import CardSkeleton from "./card-cart-skeleton";
import useCartStore from "../store/cart-store";

const Addtocard = () => {
  const { isAddToCartOpen, closeAddToCart, addToCart } = useCartStore();

  const [cards, setCards] = useState([
    { id: 1, title: "Traveler - Travel Agency", price: "$15" },
    { id: 2, title: "Explorer - Adventure Company", price: "$20" },
    // می‌توانی کارت‌های دیگری اضافه کنی
  ]);

  const temp = [
    { id: 1, title: "temp", price: "t" },
    { id: 1, title: "temp", price: "t" },
    { id: 1, title: "temp", price: "t" },
    { id: 1, title: "temp", price: "t" },
  ];

  const activeTemp = temp.splice(cards.length - 4);

  const handleRemove = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  if (!isAddToCartOpen) return null;

  return (
    <div className="flex w-full bg-background rounded-b-xl">
      <div
        className="flex fixed -z-10 inset-0 w-full h-full"
        onClick={closeAddToCart}
      ></div>
      <div className=" max-h-[433px] min-w-[472px] overflow-auto p-4 flex flex-col gap-2  scrollbar-hide">
        {cards.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            key={card.id}
            id={card.id}
            onRemove={handleRemove}
          />
        ))}

        {activeTemp.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            key={card.id}
            id={card.id}
            onRemove={handleRemove}
          />
        ))} */}
        <CardSkeleton />
      </div>

      <div className=" p-4 w-[522px]">
        <p className="text-xl font-medium pb-5">Checkout</p>
        <div className="flex  justify-center gap-3 items-center bg-card p-2 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <Metamaskicon size={33} />
            <p className="text-sm font-medium">Metamask</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Tonconnecticon size={33} />
            <p className="text-sm font-medium text-gray-800">Tonconnect</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Paypalicon size={33} />
            <p className="text-sm font-medium  text-gray-800">Paypal</p>
          </div>
        </div>
        <div className=" pb-16">
          <Label>Email</Label>
          <div className="relative flex items-center">
            {/* to do : # label container */}
            <Input
              placeholder="ali.kashef29@yahoo.com"
              type="email"
              className="bg-input text-muted-foreground"
            />
            <span
              className="underline absolute right-2 text-sm text-foreground cursor-pointer"
              onClick={() => {
                // to do : # sign out
              }}
            >
              Sign out
            </span>
          </div>
          <Input
            label="full name"
            placeholder="Ali Kashef"
            type="text"
            className="bg-input text-muted-foreground"
          />
        </div>
        <div className="pb-3 w-full">
          <Button size={"lg"} className="w-full bg-primary-500 text-white">
            Pay $40
          </Button>
        </div>
        <div className="flex justify-center gap-1 items-center">
          <Securityicon
            className="text-foreground"
            size={24}
            color="white"
            onClick={() => {
              closeAddToCart();
            }}
          />
          <p className="text-sm font-medium text-foreground">
            Your payment is secured by MetaMask
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addtocard;
