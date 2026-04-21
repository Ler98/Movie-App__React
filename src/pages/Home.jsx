import React from "react";
import MovieGridParent from "../components/movieGrid/MovieGridParent.jsx";
import MovieGrid from "../components/movieGrid/MovieGrid.jsx";
import CategoryGrid from "../components/categoryGrid/CategoryGrid.jsx";
import Carousel from "../components/carousel/Carousel";
import "../index.css";

const Home = (title, url) => {
  return (
    // <div className="home">
    //   <MovieGridParent />
    //   <CategoryGrid />
    // </div>
    <div className="home">
      <Carousel />
      <MovieGridParent
        title="Top Picks"
        url="https://api.themoviedb.org/3/movie/popular?api_key=e53f552bc2fd0bc32bb1f46eaa99150f&language=en-US&page=1"
      />
      <MovieGridParent
        title="Comedy"
        url="https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=e53f552bc2fd0bc32bb1f46eaa99150f"
      />
      {/* <CategoryGrid /> */}
    </div>
  );
};

export default Home;
