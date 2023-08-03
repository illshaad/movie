import { useStore } from "zustand";

import SelectInput from "./SelectInput";

import chartsStore from "../../stores/charts.store";

import "../../styles/Charts.css";

export default function HeaderStatistic() {
  const { selectedDateStart, selectedDateEnd, fetchMoviesDateRange } =
    useStore(chartsStore);

  return (
    <div className="header-statistic">
      <div className="container-statistics">
        <span className="title-statistics">Statistique par année</span>
        <SelectInput dateRange={"start"} />
        <span className="information">à</span>
        <SelectInput dateRange={"end"} />
      </div>
      <button
        onClick={() => fetchMoviesDateRange(selectedDateStart, selectedDateEnd)}
      >
        Recherche
      </button>
    </div>
  );
}
