import { useNavigate } from "react-router-dom";

const CarouselButton = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`, {
      state: {
        movie: {
          id: movie.id,
          title: movie.title,
          desc: movie.overview,
          img: movie.poster_path,
          rating: movie.vote_average,
          year: movie.release_date?.slice(0, 4),
        },
      },
    });
  };

  return (
    <button className="card__button" onClick={handleClick}>
      <i className="fa-solid fa-play"></i>
      Play Trailer
    </button>
  );
};

export default CarouselButton;
