import { create } from "zustand";

const url = "https://api.themoviedb.org/3/movie/popular";
const urlDetail = "https://api.themoviedb.org/3/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTY4YmNjMzkyMjQ4ZmU0MWZmNDNjMzVkNDZlMmVhYiIsInN1YiI6IjVjNWQ4NmQ2MGUwYTI2MWRlMTY3YzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9XIsZZb1Qfrq5R5Re29iXeBBvgvXhQhmJFME6DfdVjo",
  },
};

const moviesStore = create((set, get) => ({
  allMoviesFilter: [],
  fourMovies: [],
  loading: false,
  error: null,

  fetchMoviesPromisAll: async () => {
    try {
      set({ loading: true });
      const response = await fetch(url, options);
      const movies = await response.json();
      const listMoviesPromis = movies.results.map(async (movie) => {
        const fetchDetailMovie = await fetch(
          `${urlDetail}/${movie.id}`,
          options
        );
        return fetchDetailMovie.json();
      });
      const responses = await Promise.all(listMoviesPromis);
      set({ allMoviesFilter: responses, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  chunkMovies: () => {
    const { allMoviesFilter } = get();
    const chunk = [];
    for (let i = 0; i < allMoviesFilter?.length; i += 4) {
      chunk.push(allMoviesFilter?.slice(i, i + 4));
    }
    set({ fourMovies: chunk });
  },

  findMovies: (event) => {
    const { allMoviesFilter } = get();
    const searchValue = event.target.value.toLowerCase();

    const filteredMovies = allMoviesFilter.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );
    set({ allMoviesFilter: filteredMovies });
  },
}));

export default moviesStore;
