import React from "react";
import Logo from "../header/header-components/Logo.jsx";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <p className="footer__copy">1984 - 2026 DATABASE. ALL RIGHTS RESERVED</p>
    </footer>
  );
};

export default Footer;
