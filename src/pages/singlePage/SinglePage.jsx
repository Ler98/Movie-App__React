import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./singlePage.css";
import { Calendar, Clock, Film, Sparkle } from "lucide-react";
import SinglePageButton from "./singlePageButton";
import AddToFave from "../../components/localstorage/AddToFave";

const SinglePage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState(state?.movie || null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e53f552bc2fd0bc32bb1f46eaa99150f`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie((prev) => ({
          ...prev,
          ...data,
        }));
        console.log(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e53f552bc2fd0bc32bb1f46eaa99150f`,
    )
      .then((res) => res.json())
      .then((data) => {
        const actors = data.cast.filter(
          (person) => person.known_for_department === "Acting",
        );
        setCast(actors);

        const director = data.crew.find(
          (person) => person.known_for_department === "Directing",
        );
        setDirector(director);
      });
  }, [id]);

  if (!movie) return <p>No data was found</p>;

  const title = movie.title;
  const image = movie.img || movie.poster_path;
  const rating = movie.vote_average ?? movie.rating;
  const year = movie.release_date?.slice(0, 4) || movie.year;
  const runtime = movie.runtime;
  const genres = movie.genres;

  return (
    <div className="single-page">
      <section className="single-movie__card">
        <AddToFave
          id={id}
          img={movie.poster_path}
          title={title}
          year={year}
          rating={rating}
        />
        <div className="single-movie__image-container">
          <img
            className="single-movie__img"
            src={`https://image.tmdb.org/t/p/original/${image}`}
            alt={movie.title}
            key={movie.id}
          />
        </div>
        <div className="single-movie__text-container">
          <section className="single-movie__genres">
            {genres?.map((genre) => (
              <p className="single-movie__genre" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </section>

          <h2 className="single-movie__title">{movie.title}</h2>
          <section className="single-movie__info-section">
            <section className="single-movie__ratings-section">
              <i className="fa-solid fa-star"></i>
              <p className="single-movie__ratings">
                {typeof rating === "number" && rating > 0
                  ? rating.toFixed(1)
                  : rating}
              </p>
            </section>
            <p className="single-movie__decoration">•</p>
            <p className="single-movie__year">
              <Calendar
                size={20}
                strokeWidth={1.5}
                className="single-movie__icon"
              />
              {movie.release_date}
            </p>
            <p className="single-movie__decoration">•</p>
            <p className="single-movie__runtime">
              <Clock
                size={20}
                strokeWidth={1.5}
                className="single-movie__icon"
              />
              {runtime ? `${runtime} min` : ""}
            </p>
          </section>

          <p className="single-movie__desc">{movie.overview || movie.desc}</p>
          <section className="single-movie__cast-directors-container">
            <section className="single-movie__directors">
              <h3 className="single-movie__directors-title">
                <Film
                  size={20}
                  strokeWidth={1.5}
                  className="single-movie__icon"
                />
                DIRECTOR
              </h3>
              {director && (
                <p className="single-movie__director">{director.name}</p>
              )}
            </section>

            <section className="single-movie__cast">
              <h3 className="single-movie__cast-title">
                <Sparkle
                  size={20}
                  strokeWidth={1.5}
                  className="single-movie__icon"
                />
                STARRING
              </h3>
              {cast.slice(0, 5).map((actor) => (
                <p key={actor.id} className="single-movie__actor">
                  {actor.name}
                </p>
              ))}
            </section>
          </section>
          {/* <div className="singlepage__button-container">
            <SinglePageButton movie={movie} className="single-page-button" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
