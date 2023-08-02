import { create } from "zustand";

const nextStepStore = create((set) => ({
  step: 0,

  nextStep: (step) => {
    return set({ step });
  },
}));

export default nextStepStore;
