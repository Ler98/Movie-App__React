import { useNavigate } from "react-router-dom";

const Dropdown = ({ movies, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, {
      state: { movie },
    });
    setIsOpen(false);
  };
  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        {movies?.map((movie) => (
          <li
            key={movie.id}
            className="dropdown-item"
            onClick={() => handleClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={movie.original_title}
              className="dropdown-item__poster"
            ></img>
            <span className="dropdown-item__title">{movie.original_title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
