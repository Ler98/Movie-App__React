import { Search } from "lucide-react";
import { useFetchTmdb } from "../../../api/useFetchTmdb.js";
import Dropdown from "./Dropdown.jsx";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const url = `https://api.themoviedb.org/3/search/movie?query=${query},
  )}`;

  const { movies, isLoading, isError } = useFetchTmdb(url, true);

  {
    /* Ser till att dropdown-menyn stängs genom att klicka utanför menyn */
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="searchbar__container" ref={dropdownRef}>
      <form className="searchbar" onSubmit={handleSubmit}>
        <div className="searchbar__wrapper">
          <Search size={20} strokeWidth={1.5} className="searchbar__icon" />
          <input
            type="text"
            aria-label="Search movies"
            placeholder="Search movies..."
            className="searchbar__input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
          />
        </div>
        <Dropdown movies={movies} isOpen={isOpen} setIsOpen={setIsOpen} />
      </form>
      {/* Meddelande som visar att sökningen laddas */}
      {isLoading && <p className="loading-message">Loading...</p>}

      {/* Felhantering */}
      {isError && <p className="error">Something went wrong while searching</p>}
    </div>
  );
};

export default Searchbar;
