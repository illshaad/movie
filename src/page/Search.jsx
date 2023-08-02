import PropTypes from "prop-types";

import Movies from "../components/Home/Movies";
import "../styles/Home.css";
export default function Search({ isBooleanValue }) {
  return (
    <div className="container">
      <Movies isBooleanValue={isBooleanValue} />
    </div>
  );
}

Search.propTypes = {
  isBooleanValue: PropTypes.bool.isRequired,
};
