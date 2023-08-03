import PropTypes from "prop-types";

import "../../styles/Home.css";

import InputSearch from "../Search/InputSearch";
export default function Information({ isBooleanValue }) {
  const title = isBooleanValue
    ? "Tous les films"
    : "Les 20 films populaires du moment";
  const content = isBooleanValue ? <InputSearch /> : <div>{""}</div>;

  return (
    <div className="information">
      <h3>{title}</h3>
      {content}
    </div>
  );
}

Information.propTypes = {
  isBooleanValue: PropTypes.bool.isRequired,
};
