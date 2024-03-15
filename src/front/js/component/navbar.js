import React from "react";
import { Link } from "react-router-dom";
import fauxAtelierUrl from "../../img/faux_atelier_logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fauxColor">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="rounded-circle"
            src={fauxAtelierUrl}
            alt="logo"
            style={{ width: 50, height: 50 }}
          ></img>
          <span className="fs-3 fauxText m-1 ">Faux Atelier</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link fauxText" to="/">
              Mujer
            </Link>
            <Link className="nav-link fauxText" to="/">
              Hombre
            </Link>
            <Link className="nav-link fauxText" to="/">
              Calzado
            </Link>
            <Link className="nav-link fauxText" to="/">
              SALE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
