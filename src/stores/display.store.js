import { create } from "zustand";

const displayMoviesStore = create((set) => ({
  display: false,

  toggleMovieDisplay: (newDisplayValue) => {
    return set({ display: !newDisplayValue });
  },
}));

export default displayMoviesStore;
