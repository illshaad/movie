import PropTypes from "prop-types";

export default function Arrow({
  direction,
  color,
  prevMovies,
  nextMovies,
  currentIndex,
  setCurrentIndex,
  fourMovies,
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
          ? prevMovies(currentIndex, setCurrentIndex, fourMovies)
          : nextMovies(currentIndex, setCurrentIndex, fourMovies)
      }
    >
      {direction === "left" ? "\u2190" : "\u2192"}
    </button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  color: PropTypes.bool,
  prevMovies: PropTypes.func,
  nextMovies: PropTypes.func,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
  fourMovies: PropTypes.array,
};
