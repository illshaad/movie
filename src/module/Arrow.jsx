import PropTypes from "prop-types";

export default function Arrow({
  direction,
  color,
  prevMovies,
  nextMovies,
  currentIndex,
  setCurrentIndex,
  fourElements,
}) {
  const buttonStyle = {
    backgroundColor: color ? "#172C48" : "grey",
    borderRadius: "100%",
    padding: "10px 20px",
    fontSize: "16px",
    color: color ? "#2787f9" : "black",
    cursor: "pointer",
    border: "none",
    width: "60px",
    height: "60px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() =>
        direction === "left"
          ? prevMovies(currentIndex, setCurrentIndex, fourElements)
          : nextMovies(currentIndex, setCurrentIndex, fourElements)
      }
    >
      {direction === "left" ? "\u2190" : "\u2192"}
    </button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  prevMovies: PropTypes.func.isRequired,
  nextMovies: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  fourElements: PropTypes.number.isRequired,
};
