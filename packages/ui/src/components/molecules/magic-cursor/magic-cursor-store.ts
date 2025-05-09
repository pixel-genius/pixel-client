import { create } from "zustand";

type CursorTask = {
  type: "move" | "click" | "type" | "fill";
  target: string;
  text?: string;
  delay?: number;
  typingSpeed?: number;
  offsetX?: number;
  offsetY?: number;
};

type MagicCursorStore = {
  targetId: string | null;
  setTargetId: (id: string | null) => void;
  resetTargetId: () => void;
  tasks: CursorTask[];
  setTasks: (tasks: CursorTask[]) => void;
};

export const useMagicCursorStore = create<MagicCursorStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  targetId: null,
  setTargetId: (id) => set({ targetId: id }),
  resetTargetId: () => set({ targetId: null }),
}));
