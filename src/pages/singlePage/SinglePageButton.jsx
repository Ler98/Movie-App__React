import AddToFave from "../../components/localstorage/AddToFave";
import "./singlePage.css";

const SinglePageButton = ({ movie }) => {
  return (
    <AddToFave
      id={movie.id}
      img={movie.poster_path || movie.img}
      title={movie.title}
      year={movie.release_date?.slice(0, 4)}
      rating={movie.vote_average}
      className="single-page-button"
    >
      ADD TO WATCHLIST
    </AddToFave>
  );
};

export default SinglePageButton;
