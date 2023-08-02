import PropTypes from "prop-types";

import "../../styles/Modal.css";
export default function Ratings({ vote_average }) {
  const elements = 5;

  const noteScale = Math.round((vote_average * 5) / 10);

  const displayRatings = (elements) => {
    const ratingElements = [];

    for (let i = 0; i < elements; i++) {
      const color = i < noteScale ? "#EFE0AE" : "#A4B8CE";

      ratingElements.push(
        <div key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={color}
            stroke="currentColor"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      );
    }

    return ratingElements;
  };

  return <div className="ratings">{displayRatings(elements)}</div>;
}

Ratings.propTypes = {
  vote_average: PropTypes.number.isRequired,
};
