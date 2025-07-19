/* eslint-disable no-unused-vars */
"use client";

import { StoreApi, createStore, useStore } from "zustand";

import {
  PropsWithChildren,
  Suspense,
  createContext,
  useContext,
  useRef,
} from "react";

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

// --- Types ---
type Variant = "fill" | "outline";

export type HiddenModeTab = "unmount" | "css";

interface StoreState {
  id: string;
  variant: Variant;
  value: string | null;
  hiddenMode: HiddenModeTab;
  onChange: ((value: string) => void) | null;

  setId: (id: string) => void;
  setVariant: (variant: Variant) => void;
  setValue: (value: string) => void;
}

interface TabProviderProps extends PropsWithChildren {
  id?: string;
  variant?: Variant;
  hiddenMode?: HiddenModeTab;
  defaultValue?: string | null;
  onChange?: ((value: string) => void) | null;
}

// --- Context ---
const StoreContext = createContext<StoreApi<StoreState> | null>(null);

// --- Provider ---
export const TabProvider = ({
  children,
  id = "tab",
  variant = "fill",
  defaultValue = null,
  onChange = null,
  hiddenMode = "unmount",
}: TabProviderProps) => {
  const storeRef = useRef<StoreApi<StoreState> | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createStore<StoreState>((set, get) => ({
      id,
      variant,
      hiddenMode,
      onChange,
      value: defaultValue,

      setId: (newId) => set(() => ({ id: newId })),
      setVariant: (newVariant) => set(() => ({ variant: newVariant })),
      setValue: (newValue) => {
        set(() => ({ value: newValue }));
        const cb = get().onChange;
        if (cb) cb(newValue);
      },
    }));
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      <Suspense>{children}</Suspense>
    </StoreContext.Provider>
  );
};

// --- Hook ---
export const useTabStore = <T,>(selector: (state: StoreState) => T): T => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Missing TabProvider");
  }
  return useStore(store, selector);
};
