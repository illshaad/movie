import { useStore } from "zustand";
import "../../styles/Charts.css";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import chartsStore from "../../stores/charts.store";

//Donnée en dur si jamais la requet n'est pas faites et si il ne trouve pas de donnée

const data = [
  { name: "2018", "Nombres de films": 10, "Notes moyenne": 20 },
  { name: "2019", "Nombres de films": 20, "Notes moyenne": 25 },
  { name: "2020", "Nombres de films": 30, "Notes moyenne": 15 },
  { name: "2021", "Nombres de films": 25, "Notes moyenne": 10 },
  { name: "2022", "Nombres de films": 15, "Notes moyenne": 30 },
];

export default function Charts() {
  const { movieDateRange } = useStore(chartsStore);

  const dataMovieRange = movieDateRange.map(({ movies, year }) => ({
    name: year,
    "Nombres de films": movies.length,
    "Notes moyenne":
      movies.reduce((sum, movie) => sum + movie.vote_average, 0) /
      movies.length,
  }));

  dataMovieRange.forEach((movie) => {
    movie["Notes moyenne"] = parseFloat(movie["Notes moyenne"].toFixed(2));
  });

  return (
    <div className="charts">
      <ComposedChart
        width={600}
        height={400}
        data={dataMovieRange.length === 0 ? data : dataMovieRange}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Nombres de films" fill="#2787f9" yAxisId="left" />
        <Line
          type="monotone"
          dataKey="Notes moyenne"
          stroke="#D46F46"
          yAxisId="right"
        />
      </ComposedChart>
    </div>
  );
}
