import PropTypes from "prop-types";

import { useStore } from "zustand";

import chartsStore from "../../stores/charts.store";

export default function SelectInput({ dateRange }) {
  const options = [
    { value: "Date", label: "Date" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const {
    selectedDateStart,
    selectedDateEnd,
    handleChangeStart,
    handleChangeEnd,
  } = useStore(chartsStore);

  return (
    <div>
      <select
        className={"select-date"}
        value={dateRange === "start" ? selectedDateStart : selectedDateEnd}
        onChange={dateRange === "start" ? handleChangeStart : handleChangeEnd}
      >
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  dateRange: PropTypes.string.isRequired,
};
