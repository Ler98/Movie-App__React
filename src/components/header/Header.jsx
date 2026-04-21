import React from "react";
import "./header.css";
import Searchbar from "./header-components/Searchbar";
import Logo from "./header-components/Logo";
import Nav from "./header-components/Nav";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Searchbar />
      <Nav />
    </header>
  );
};

export default Header;
