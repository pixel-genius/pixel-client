import { create } from "zustand";

export type CursorTask = {
  type: "move" | "click" | "type" | "fill";
  target: string;
  text?: string;
  delay?: number;
  typingSpeed?: number;
  offsetX?: number;
  offsetY?: number;
  id?: string; // Optional unique identifier for the task
};

type CursorStatus = "idle" | "busy" | "completed";

type MagicCursorStore = {
  // Core state
  tasks: CursorTask[];
  status: CursorStatus;
  targetId: string | null;
  currentTaskId: string | null;

  // Task management methods
  setTasks: (tasks: CursorTask[]) => void;
  addTask: (task: CursorTask) => void;
  addTasks: (tasks: CursorTask[]) => void;
  removeTask: (taskIndex: number) => void;
  clearTasks: () => void;
  completeCurrentTask: () => void;

  // Status management
  setStatus: (status: CursorStatus) => void;
  setBusy: () => void;
  setIdle: () => void;

  // Target management
  setTargetId: (id: string | null) => void;
  resetTargetId: () => void;
  setCurrentTaskId: (id: string | null) => void;
};

// Generate a simple unique ID for tasks
const generateTaskId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const useMagicCursorStore = create<MagicCursorStore>((set, get) => ({
  // Initial state
  tasks: [],
  status: "idle",
  targetId: null,
  currentTaskId: null,

  // Task methods
  setTasks: (tasks) => {
    // Add unique IDs to tasks if they don't have one
    const tasksWithIds = tasks.map((task) => ({
      ...task,
      id: task.id || generateTaskId(),
    }));
    set({ tasks: tasksWithIds });
  },

  addTask: (task) => {
    const taskWithId = { ...task, id: task.id || generateTaskId() };
    set((state) => ({ tasks: [...state.tasks, taskWithId] }));
  },

  addTasks: (tasks) => {
    const tasksWithIds = tasks.map((task) => ({
      ...task,
      id: task.id || generateTaskId(),
    }));
    set((state) => ({ tasks: [...state.tasks, ...tasksWithIds] }));
  },

  removeTask: (taskIndex) => {
    set((state) => ({
      tasks: state.tasks.filter((_, index) => index !== taskIndex),
    }));
  },

  clearTasks: () => set({ tasks: [] }),

  completeCurrentTask: () => {
    set((state) => {
      if (state.tasks.length > 0) {
        return {
          tasks: state.tasks.slice(1),
          currentTaskId:
            state.tasks.length > 1 ? state.tasks[1]?.id || null : null,
          status: state.tasks.length > 1 ? "busy" : "idle",
        };
      }
      return { status: "idle", currentTaskId: null };
    });
  },

  // Status methods
  setStatus: (status) => set({ status }),
  setBusy: () => set({ status: "busy" }),
  setIdle: () => set({ status: "idle" }),

  // Target methods
  setTargetId: (id) => set({ targetId: id }),
  resetTargetId: () => set({ targetId: null }),
  setCurrentTaskId: (id) => set({ currentTaskId: id }),
}));
