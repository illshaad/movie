import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useStore } from "zustand";

import Movie from "../../module/Movie";

import displayMoviesStore from "../../stores/display.store";
import moviesStore from "../../stores/movies.store";

import "../../styles/Home.css";
import { nextMovies, prevMovies } from "../../utils/movie.utils";
import Arrow from "../../module/Arrow";

export default function Movies({ isBooleanValue }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    allMoviesFilter,
    fetchMoviesPromisAll,
    fourElements,
    loading,
    error,
    chunkMovies,
  } = useStore(moviesStore);

  const { display } = useStore(displayMoviesStore);

  useEffect(() => {
    const fetchData = async () => {
      await fetchMoviesPromisAll();
      await chunkMovies();
    };
    fetchData();
  }, [chunkMovies, fetchMoviesPromisAll]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-movies">
      {display || isBooleanValue ? (
        allMoviesFilter?.map((movie) => (
          <div key={movie.id}>
            <Movie {...movie} />
          </div>
        ))
      ) : (
        <>
          {currentIndex > 0 ? (
            <Arrow
              direction={"left"}
              color={true}
              prevMovies={prevMovies}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              fourElements={fourElements}
            />
          ) : (
            <Arrow direction={"left"} />
          )}

          {fourElements[currentIndex]?.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}

          {currentIndex < fourElements.length - 1 ? (
            <Arrow
              direction={"right"}
              color={true}
              nextMovies={nextMovies}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              fourElements={fourElements}
            />
          ) : (
            <Arrow direction={"right"} />
          )}
        </>
      )}
    </div>
  );
}

Movies.propTypes = {
  isBooleanValue: PropTypes.bool.isRequired,
};
