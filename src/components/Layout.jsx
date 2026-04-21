import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import "../index.css";

const Layout = () => {
  return (
    <>
      <div className="page">
        <div className="site__wrapper">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
