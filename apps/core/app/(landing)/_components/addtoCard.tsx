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
import { useCartStore } from "../store/cart-store";
import Typography from "@repo/ui/components/typography";

const Addtocard = () => {
  const { closeAddToCart } = useCartStore();

  const [cards, setCards] = useState([
    { id: 2, title: "Explorer - Adventure Company", price: "$20" },
    { id: 3, title: "Explorer - Adventure Company", price: "$20" },
    { id: 1, title: "Traveler - Travel Agency", price: "$15" },
    { id: 4, title: "Explorer - Adventure Company", price: "$20" },
    { id: 5, title: "Explorer - Adventure Company", price: "$20" },
  ]);

  const temp = [
    { id: 1, title: "temp", price: "t" },
    { id: 1, title: "temp", price: "t" },
    { id: 1, title: "temp", price: "t" },
    { id: 1, title: "temp", price: "t" },
  ];

  const activeTemp = temp.splice(cards.length);

  const handleRemove = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="flex w-full bg-background rounded-b-xl overflow-hidden">
      <div
        className="flex fixed -z-10 inset-0 w-full h-full"
        onClick={closeAddToCart}
      ></div>
      <div className=" h-full min-w-[472px] overflow-auto p-4 flex flex-col gap-2  scrollbar-hide">
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
          <CardSkeleton />
        ))}
      </div>

      <div className=" flex flex-col gap-3 p-4 w-[522px]">
        <Typography variant="heading/xs" component="p" weight="medium">
          Checkout
        </Typography>
        <div className="flex  justify-center gap-3 items-center bg-card p-2 rounded-lg">
          <div className="bg-background p-2 rounded-lg flex flex-col items-center justify-center">
            <Metamaskicon size={33} />
            <Typography variant="label/sm" component="p" weight="medium">
              Metamask
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center grayscale ">
            <Tonconnecticon size={33} />
            <Typography
              variant="label/sm"
              component="p"
              weight="medium"
              className="text-gray-800"
            >
              Tonconnect
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center grayscale">
            <Paypalicon size={33} />
            <Typography
              variant="label/sm"
              component="p"
              weight="medium"
              className="text-gray-800"
            >
              Paypal
            </Typography>
          </div>
        </div>
        <div className=" flex flex-col gap-3 pb-16">
          <div className="relative gap-2 flex items-center">
            <Input
              label="Email"
              placeholder="example@email.com"
              type="email"
            />
          </div>
          <Input label="Full Name" placeholder="Ali Kashef" type="text" />
        </div>
        <div className="pb-3 w-full">
          <Button size="md" className="w-full bg-primary text-white">
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
          <Typography variant="label/sm" component="p" weight="medium">
            Your payment is secured by MetaMask
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Addtocard;
