import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item"
            }
            end
          >
            HOME
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/watchlist">WATCHLIST</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
