import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import CarouselCard from "./CarouselCard";
import MovieGrid from "../movieGrid/MovieGrid";
import fisherYatesShuffle from "../../modules/randomizer";
import "./carousel.css";
import { useFetchTmdb } from "../../api/useFetchTmdb";

const MyCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { movies } = useFetchTmdb(
    "https://api.themoviedb.org/3/movie/popular?api_key=e53f552bc2fd0bc32bb1f46eaa99150f&language=en-US&page=1",
    false
  );

  const shuffledMovies = fisherYatesShuffle(movies?.results || []);

  return (
    <section className="carousel__wrapper">
      <Carousel
        withIndicators
        height={550}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {shuffledMovies.slice(0, 5)?.map((movie) => (
          <Carousel.Slide key={movie.id}>
            <CarouselCard
              title={movie.title}
              img={movie.backdrop_path}
              link={movie.Trailer_link}
              desc={movie.overview}
              year={movie.release_date.slice(0, 4)}
              rating={movie.vote_average.toFixed(1)}
              id={movie.id}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default MyCarousel;
