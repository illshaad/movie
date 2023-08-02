import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useStore } from "zustand";

import Movie from "../../module/Movie";

import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

import displayMoviesStore from "../../stores/display.store";
import moviesStore from "../../stores/movies.store";

import "../../styles/Home.css";
import { nextMovies, prevMovies } from "../../utils/movie.utils";

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
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                prevMovies(currentIndex, setCurrentIndex, fourElements)
              }
            >
              <img className="arrow" src={leftArrow} alt="Left Arrow" />
            </div>
          ) : null}

          {fourElements[currentIndex]?.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
          <div>
            {currentIndex < fourElements.length - 1 ? (
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  nextMovies(currentIndex, setCurrentIndex, fourElements)
                }
              >
                <img className="arrow" src={rightArrow} alt="Right Arrow" />
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

Movies.propTypes = {
  isBooleanValue: PropTypes.bool.isRequired,
};
