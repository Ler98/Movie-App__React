import { Clapperboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="logo-navlink">
      <div className="logo">
        <Clapperboard size={35} strokeWidth={1.5} className="logo__icon" />
        <h1 className="logo__title">Neon Cinema</h1>
      </div>
    </NavLink>
  );
};

export default Logo;
