import PropTypes from "prop-types";

import { useStore } from "zustand";
import "../../styles/Home.css";
import Logo from "../../assets/movie-finder.png";
import nextStepStore from "../../stores/header.store";

export default function Header({ isBooleanValue, setToTrue, setToFalse }) {
  const { nextStep } = useStore(nextStepStore);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      <div className="header-links">
        <span
          className={` ${!isBooleanValue ? "active" : "not-active"}`}
          onClick={() => {
            nextStep(0), setToFalse();
          }}
        >
          Accueil
        </span>
        <span className="vertical-span" />
        <span
          className={` ${isBooleanValue ? "active" : "not-active"}`}
          onClick={() => {
            {
              nextStep(1), setToTrue();
            }
          }}
        >
          Recherche
        </span>
      </div>
    </div>
  );
}

Header.propTypes = {
  isBooleanValue: PropTypes.bool.isRequired,
  setToTrue: PropTypes.func.isRequired,
  setToFalse: PropTypes.func.isRequired,
};
