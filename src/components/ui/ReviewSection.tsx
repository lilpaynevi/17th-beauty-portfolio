

import React from "react";
import '../../app/page.css'
const reviews = [
  {
    stars: 4,
    comment:
      "Très bonne expérience comme d’habitude. Petit bémol, la prothésiste a été très longue donc je n’ai pas pu faire ma pause en entier… Dommage",
    author: "Apolline Nosten",
    since: "hier",
  },
  {
    stars: 5,
    comment: "Super",
    author: "Sara",
    since: "il y a 2 jours",
  },
  {
    stars: 5,
    comment: "Top comme toujours",
    author: "Elodie",
    since: "il y a 3 jours",
  },
  {
    stars: 5,
    comment: "Je recommande",
    author: "Dan",
    since: "il y a 4 jours",
  },
  {
    stars: 5,
    comment:
      "Très agréable, accueil chaleureux! Je remercie la coiffeuse qui m’a soigneusement fais mon dégradé!",
    author: "Giuliana",
    since: "il y a 5 jours",
  },
  // Ajoutez plus d'avis ici...
];

const Stars = ({ count }) => {
  return (
    <div className={`Reviews--stars color-1`}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  );
};

const ReviewItem = ({ stars, comment, author, since }) => (
  <li className="BrainhubCarouselItem">
    <div className="Reviews--quote">
      <Stars count={stars} />
      <div className="Reviews--comment">{comment}</div>
      <div className="Reviews--from">Avis de :</div>
      <div className="Reviews--footer">
        <span className="Reviews--author">{author}</span>
        <i className="fa fa-check color-1"></i>・
        <span className="Reviews--since">{since}</span>
      </div>
    </div>
  </li>
);

const ReviewsSection = () => {
  return (
    <section className="Reviews">
      <h2 className="Reviews--title">Les mots de nos clients</h2>
      <div className="Reviews--carousel--container">
        <div className="BrainhubCarousel__container">
          <div className="BrainhubCarousel">
            <div className="BrainhubCarousel__trackContainer">
              <ul className="BrainhubCarousel__track">
                {reviews.map((review, index) => (
                  <ReviewItem key={index} {...review} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ul className="BrainhubCarousel__dots">
          {reviews.map((_, index) => (
            <li key={index}>
              <button
                className={`BrainhubCarousel__dot ${
                  index === 0 ? "BrainhubCarousel__dot--selected" : ""
                }`}
                type="button"
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReviewsSection;
