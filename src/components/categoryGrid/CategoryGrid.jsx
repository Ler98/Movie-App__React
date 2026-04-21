import "../movieGrid/movieGrid.css";
import movieImg from "../movieGrid/MovieTestImg.jpg";

function MovieGrid() {
  return (
    <section className="movie__grid">
      <h2 className="movie__grid-title">Comedy</h2>
      <section className="movie__card">
        <button className="movie__add">+</button>
        <img className="movie__img" src={movieImg} alt="MovieImg" />
        <h3 className="movie__title">Title</h3>
        <section className="movie__info-section">
          <section className="movie__ratings-section">
            <i className="fa-solid fa-star"></i>
            <p className="movie__ratings">8,7</p>
          </section>
          <p className="movie__year"> 1998</p>
        </section>
      </section>
      <section className="movie__card">
        <button className="movie__add">+</button>
        <img className="movie__img" src={movieImg} alt="MovieImg" />
        <h3 className="movie__title">Title</h3>
        <section className="movie__info-section">
          <section className="movie__ratings-section">
            <i className="fa-solid fa-star"></i>
            <p className="movie__ratings">8,7</p>
          </section>
          <p className="movie__year"> 1998</p>
        </section>
      </section>
      <section className="movie__card">
        <button className="movie__add">+</button>
        <img className="movie__img" src={movieImg} alt="MovieImg" />
        <h3 className="movie__title">Title</h3>
        <section className="movie__info-section">
          <section className="movie__ratings-section">
            <i className="fa-solid fa-star"></i>
            <p className="movie__ratings">8,7</p>
          </section>
          <p className="movie__year"> 1998</p>
        </section>
      </section>
      <section className="movie__card">
        <button className="movie__add">+</button>
        <img className="movie__img" src={movieImg} alt="MovieImg" />
        <h3 className="movie__title">Title</h3>
        <section className="movie__info-section">
          <section className="movie__ratings-section">
            <i className="fa-solid fa-star"></i>
            <p className="movie__ratings">8,7</p>
          </section>
          <p className="movie__year"> 1998</p>
        </section>
      </section>
      <section className="movie__card">
        <button className="movie__add">+</button>
        <img className="movie__img" src={movieImg} alt="MovieImg" />
        <h3 className="movie__title">Title</h3>
        <section className="movie__info-section">
          <section className="movie__ratings-section">
            <i className="fa-solid fa-star"></i>
            <p className="movie__ratings">8,7</p>
          </section>
          <p className="movie__year"> 1998</p>
        </section>
      </section>
    </section>
  );
}

export default MovieGrid;
