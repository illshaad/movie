import PropTypes from "prop-types";
import Modal from "../components/Modal/Modal";
import Ratings from "../components/Modal/Ratings";
import StartRating from "../components/Modal/StartRating";

import {
  checkNumberPositiveOrNegative,
  roundedNumber,
  roundedRecettes,
} from "../utils/movie.utils";

import "../styles/Home.css";

import { useState } from "react";

export default function Movie({
  title,
  poster_path,
  release_date,
  budget,
  revenue,
  overview,
  vote_average,
}) {
  const img = "https://image.tmdb.org/t/p/w500" + poster_path;

  const year = new Date(release_date).getFullYear();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderModalContent = () => (
    <div className="modal-content">
      <img src={img} alt="poster" />
      <div>
        <div className="modal-titre">
          <div className="title">{title}</div>
          <div className="modal-information">({year})</div>
        </div>

        <div className="modal-content-information-sub">
          <div>
            <div className="modal-information">Budget</div>
            {roundedNumber(budget)} M$
          </div>
          <div>
            <div className="modal-information">Revenus</div>
            {roundedNumber(revenue)} M$
          </div>
          <div>
            <div className="modal-information">Recettes</div>
            {checkNumberPositiveOrNegative(roundedRecettes(budget, revenue))} M$
          </div>
        </div>
        <div className="synopsis">Synopsis</div>
        <div className="detail">{overview}</div>
        <div className="container-ratings">
          <div className="modal-information">
            Commuauté
            <Ratings vote_average={vote_average} />
          </div>
          <div>
            <div className="modal-information">Ma note</div>
            <StartRating />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="card-movies" onClick={handleOpenModal}>
        {img && <img src={img} alt="poster" />}
        <span className="container-card-information">
          {title.substring(0, 12) + " ... "}
          {checkNumberPositiveOrNegative(roundedRecettes(budget, revenue))} M$
        </span>
        <span className="card-date">{year}</span>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        {renderModalContent()}
      </Modal>
    </>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
