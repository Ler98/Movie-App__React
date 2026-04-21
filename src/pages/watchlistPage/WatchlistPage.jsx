import React from "react";
import { useEffect, useState } from "react";
import "./watchlistPage.css";
import "../../components/movieGrid/movieGrid.css";
import MovieGrid from "../../components/movieGrid/MovieGrid.jsx";
import AddToFave from "../../components/localstorage/AddToFave.jsx";

const WatchlistPage = () => {
  // const movies = JSON.parse(localStorage.getItem("movieTitle")) || [];
  const [movies, setFaves] = useState(
    JSON.parse(localStorage.getItem("movieTitle")) || []
  );
  return (
    <section>
      <section className="watchlist__title-section">
        <i className="fa-regular fa-bookmark"></i>
        <h2 className="watchlist__title">Your Watchlist</h2>
      </section>
      <h3 className="watchlist__subtitle">Saved singnals ready for playback</h3>
      <ul className="watchlist__grid">
        {movies?.map((movie) => (
          <li key={movie.id}>
            <MovieGrid
              key={movie.id}
              id={movie.id}
              img={movie.img}
              title={movie.title}
              year={movie.year?.slice(0, 4)}
              rating={movie.rating}
              setFaves={setFaves}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WatchlistPage;
