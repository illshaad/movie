import Up from "../assets/up.png";
import Down from "../assets/down.png";
export const checkNumberPositiveOrNegative = (number) => {
  return number > 0 ? (
    <>
      <img src={Up} className="logo-number" alt="Up Arrow" />
      {number}
    </>
  ) : (
    <>
      <img src={Down} className="logo-number" alt="down Arrow" />
      {number}
    </>
  );
};

export const roundedNumber = (number) => Math.round(number / 1_000_000);

export const calculedBudget = (budget, revenue) => revenue - budget;
export const roundedRecettes = (budget, revenue) =>
  roundedNumber(calculedBudget(budget, revenue));

export const nextMovies = (currentIndex, setCurrentIndex, fourMovies) => {
  const newIndex = currentIndex + 1;
  setCurrentIndex(newIndex >= fourMovies.length ? 0 : newIndex);
};

export const prevMovies = (currentIndex, setCurrentIndex, fourMovies) => {
  const newIndex = currentIndex - 1;
  setCurrentIndex(newIndex < 0 ? fourMovies.length - 1 : newIndex);
};
