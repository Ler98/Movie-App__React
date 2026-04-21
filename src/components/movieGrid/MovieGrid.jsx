import "./movieGrid.css";
import AddToFave from "../localstorage/AddToFave";
import MovieTestImg from "./MovieTestImg.jpg";
import { useNavigate } from "react-router-dom";

function MovieGrid({ img, title, year, rating, id, setFaves }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`, {
      state: {
        movie: {
          id: id,
          title: title,
          desc: "",
          img: img,
          rating: rating,
          year: year?.slice(0, 4),
        },
      },
    });
  };

  return (
    <section className="movie__card">
      <AddToFave
        id={id}
        img={img}
        title={title}
        year={year}
        rating={rating}
        setFaves={setFaves}
      />
      <img
        className="movie__img"
        onClick={handleClick}
        src={img ? `https://image.tmdb.org/t/p/original/${img}` : MovieTestImg}
        alt={title}
      />
      <h3 className="movie__title">{title}</h3>
      <section className="movie__info-section">
        <section className="movie__ratings-section">
          <i className="fa-solid fa-star"></i>
          <p className="movie__ratings">
            {typeof rating === "number" && rating > 0
              ? rating.toFixed(1)
              : rating}
          </p>
        </section>
        <p className="movie__year"> {year}</p>
      </section>
    </section>
  );
}

export default MovieGrid;
