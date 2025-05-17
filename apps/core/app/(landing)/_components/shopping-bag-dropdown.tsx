"use client";

import { Typography } from "@repo/ui/components";
import { useCartStore } from "../store/cart-store";
import Addtocard from "./addtoCard";
import { useRef, useEffect } from "react";

const ShoppingBagDropdown = () => {
  const { isAddToCartOpen, toggleAddToCart } = useCartStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isAddToCartOpen) {
          toggleAddToCart();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAddToCartOpen, toggleAddToCart]);

  return (
    <div className="fixed top-[120px] right-[335px] z-50" ref={dropdownRef}>
      <div className="relative cursor-pointer" onClick={toggleAddToCart}>
        
      </div>
      {isAddToCartOpen && (
        <div className="absolute right-0 mt-2">
          <Addtocard />
        </div>
      )}
    </div>
  );
};

export default ShoppingBagDropdown; 