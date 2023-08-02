import { create } from "zustand";

const url = "https://api.themoviedb.org/3/movie/popular";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTY4YmNjMzkyMjQ4ZmU0MWZmNDNjMzVkNDZlMmVhYiIsInN1YiI6IjVjNWQ4NmQ2MGUwYTI2MWRlMTY3YzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9XIsZZb1Qfrq5R5Re29iXeBBvgvXhQhmJFME6DfdVjo",
  },
};

const SortAndGroupByYear = (movies) => {
  const compareDates = (a, b) => {
    const releaseDateA = new Date(a.release_date);
    const releaseDateB = new Date(b.release_date);
    return releaseDateA - releaseDateB;
  };

  const movieSort = movies.sort(compareDates);
  const MovieByYear = [];
  let currentYear = null;
  let currentMovie = [];

  for (const movies of movieSort) {
    const year = new Date(movies.release_date).getFullYear();

    if (year !== currentYear) {
      if (currentMovie.length > 0) {
        MovieByYear.push({ year: currentYear, movies: currentMovie });
        currentMovie = [];
      }
      currentYear = year;
    }
    currentMovie.push(movies);
  }

  if (currentMovie.length > 0) {
    MovieByYear.push({ year: currentYear, movies: currentMovie });
  }

  return MovieByYear;
};

const chartsStore = create((set, get) => ({
  movieDateRange: [],
  selectedDateStart: 0,
  selectedDateEnd: 0,

  handleChangeStart: (event) => {
    const parse = parseInt(event.target.value, 10);
    set({ selectedDateStart: parse });
  },

  handleChangeEnd: (event) => {
    const parse = parseInt(event.target.value, 10);
    set({ selectedDateEnd: parse });
  },

  fetchMoviesDateRange: async () => {
    const { selectedDateStart, selectedDateEnd } = get();

    try {
      const response = await fetch(
        `${url}?primary_release_date.gte=${selectedDateStart}&primary_release_date.lte=${selectedDateEnd}`,
        options
      );

      const movies = await response.json();
      const finalMoviesSortByYear = SortAndGroupByYear(movies.results);
      set({ movieDateRange: finalMoviesSortByYear });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default chartsStore;
