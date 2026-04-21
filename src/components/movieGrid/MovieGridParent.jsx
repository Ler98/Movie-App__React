import { useFetchTmdb } from "../../api/useFetchTmdb";
import fisherYatesShuffle from "../../modules/randomizer";
import MovieGrid from "./MovieGrid";
import "./movieGrid.css";

const MovieGridParent = ({ title, url }) => {
  const { movies } = useFetchTmdb(url, false);

  const shuffledMovies = fisherYatesShuffle(movies?.results || []);

  return (
    <section className="movie__grid">
      <h2 className="movie__grid-title">{title}</h2>
      {shuffledMovies.slice(0, 5)?.map((movie) => (
        <MovieGrid
          key={movie.id}
          title={movie.title}
          img={movie.poster_path}
          year={movie.release_date.slice(0, 4)}
          rating={movie.vote_average.toFixed(1)}
          genre={movie.genre_ids}
          id={movie.id}
        />
      ))}
    </section>
  );
};

export default MovieGridParent;
