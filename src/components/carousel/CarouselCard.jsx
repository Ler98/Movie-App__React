import { section } from "motion/react-client";
import CarouselButton from "./CarouselButton";

const CarouselCard = ({
  img,
  title,
  year,
  length,
  rating,
  description,
  link,
  desc,
  id,
}) => {
  return (
    <section className="card__grid">
      <article className="card__container">
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          alt=""
          className="card__background"
        />
        <section className="card__text-section">
          <h1 className="card__title">{title}</h1>
          <section className="card__info-section">
            <p className="card__year">{year}</p>
            <div className="card__icon-section">
              <i className="fa-solid fa-diamond"></i>
            </div>
            <div className="card__rating-container">
              <i className="fa-solid fa-star"></i>
              <p className="card__rating">{rating}</p>
            </div>
            <div className="card__icon-section">
              <i className="fa-solid fa-diamond"></i>
            </div>
          </section>
          <p className="card__description">{desc}</p>

          <CarouselButton
            movie={{
              id,
              title,
              desc,
              img,
              rating,
            }}
          />
        </section>
      </article>
    </section>
  );
};

export default CarouselCard;
