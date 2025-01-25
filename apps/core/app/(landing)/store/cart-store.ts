import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  isAddToCartOpen: boolean;
  cartItems: CartItem[];
  openAddToCart: () => void;
  closeAddToCart: () => void;
  addToCart: (item: CartItem) => void;
  toggleAddToCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  isAddToCartOpen: false,
  cartItems: [],
  openAddToCart: () => set({ isAddToCartOpen: true }),
  closeAddToCart: () => set({ isAddToCartOpen: false }),
  toggleAddToCart: () => set((state) => ({ isAddToCartOpen: !state.isAddToCartOpen })),
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
}));

export default useCartStore;