import { useState } from "react";

const AddToFave = ({ id, img, title, year, rating, children, setFaves }) => {
  const getFaves = () => {
    const data = localStorage.getItem("movieTitle");
    return data ? JSON.parse(data) : [];
  };

  const [isFave, setIsFave] = useState(() => {
    const faves = getFaves();
    return faves.some((movie) => movie?.id === id);
  });

  function handleClick() {
    let updated;
    const stored = getFaves();

    if (stored.some((movie) => movie?.id === id)) {
      updated = stored.filter((item) => item?.id !== id);
      setIsFave(false);
    } else {
      updated = [...stored, { id, img, title, year, rating }];
      setIsFave(true);
    }

    localStorage.setItem("movieTitle", JSON.stringify(updated));
    if (setFaves) setFaves(updated);
  }

  return (
    <button onClick={handleClick} className="movie__add">
      {children ? children : isFave ? "-" : "+"}
    </button>
  );
};

export default AddToFave;
