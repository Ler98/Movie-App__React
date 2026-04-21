import { useFetchTmdb } from "../../api/useFetchTmdb";
import { useLocation } from "react-router-dom";
import MovieGrid from "../../components/movieGrid/MovieGrid";
import "./searchResultPage.css";
import "../../components/movieGrid/movieGrid.css";

const SearchResultPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const url = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}`
    : null;

  const { movies, isLoading, isError } = useFetchTmdb(url, !!query);

  return (
    <div className="search-result">
      <h2 className="search-result__title">Search Results</h2>
      <h3 className="search-result__sub-title">
        Found{" "}
        <span className="search-result__length">{movies?.length || 0}</span>{" "}
        results for "{query}"
      </h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading movies</p>}

      <ul className="search-result__list">
        {movies?.map((movie) => (
          <li key={movie.id} className="search-result__item">
            <MovieGrid
              id={movie.id}
              img={movie.poster_path}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={movie.vote_average}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultPage;
