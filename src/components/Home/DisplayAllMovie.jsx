import { useStore } from "zustand";

import displayMoviesStore from "../../stores/display.store";

import "../../styles/Home.css";

export default function DisplayAllMovie() {
  const { display, toggleMovieDisplay } = useStore(displayMoviesStore);

  return (
    <div className="display-all-movie">
      <span
        className="span-display"
        onClick={() => toggleMovieDisplay(display)}
      >
        {display ? "Voir moins de films" : "Voir tous les films"}
      </span>
      <hr className="line-bar" />
    </div>
  );
}
