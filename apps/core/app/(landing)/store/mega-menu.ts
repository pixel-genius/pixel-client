import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type MegaMenu = {
  isOpenMegaMenu: boolean;
  setOpenMegaMenu: () => void;
  closeMegaMenu: () => void;
  toggleOpenMegaMenu: () => void;
};

export const useMegaMenuStore = create<MegaMenu>((set) => ({
  isOpenMegaMenu: false,
  setOpenMegaMenu: () => {
    set({ isOpenMegaMenu: true });
  },
  closeMegaMenu() {
    set({ isOpenMegaMenu: false });
  },
  toggleOpenMegaMenu: () => {
    set((state) => ({ isOpenMegaMenu: !state.isOpenMegaMenu }));
  },
}));
