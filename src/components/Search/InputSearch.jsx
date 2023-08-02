import { useStore } from "zustand";

import "../../styles/Input.css";
import moviesStore from "../../stores/movies.store";

export default function InputSearch() {
  const { findMovies } = useStore(moviesStore);

  return (
    <div className="search-container">
      <input
        onChange={(e) => findMovies(e)}
        type="text"
        placeholder="Rechercher un film..."
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C16.41 12.53 17 11.11 17 9.5 17 5.91 14.09 3 10.5 3S4 5.91 4 9.5 6.91 16 10.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49L16.99 14zm-5 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
      </svg>
    </div>
  );
}
