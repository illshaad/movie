import { create } from "zustand";
const searchStore = create((set) => ({
  isBooleanValue: false,
  setToFalse: () => set({ isBooleanValue: false }),
  setToTrue: () => set({ isBooleanValue: true }),
}));

export default searchStore;
