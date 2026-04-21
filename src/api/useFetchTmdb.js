import { useState, useEffect } from "react";
import Searchbar from "../components/header/header-components/Searchbar";
import axios from "axios";

export const useFetchTmdb = (url, search = true) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) {
      setMovies([]);
      return;
    }
    setIsLoading(true);
    setIsError(false);

    {
      /* Hämta data från TMDB API via en query */
    }
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTNmNTUyYmMyZmQwYmMzMmJiMWY0NmVhYTk5MTUwZiIsIm5iZiI6MTc3NjA3Nzg5My4yMzQsInN1YiI6IjY5ZGNjYzQ1ZThlMTc4NTNkMTM1OGM5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4h66VaZKmnbPEvU9GqNlHWKY1rjsN2DkD6eVQY5G3Kc",
        },
      })
      .then((response) => {
        if (search) {
          setMovies(response.data.results);
        } else {
          setMovies(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, search]);

  return { movies, isLoading, isError };
};
