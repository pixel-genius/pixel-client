import { create } from "zustand";

interface SearchState {
  isSearchMode: boolean;
  setIsSearchMode: (isSearchMode: boolean) => void;
  toggleSearchMode: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  isSearchMode: false,
  setIsSearchMode: (isSearchMode) => set({ isSearchMode }),
  toggleSearchMode: () =>
    set((state) => ({ isSearchMode: !state.isSearchMode })),
}));
