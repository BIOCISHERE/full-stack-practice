import React from "react";
import { Link } from "react-router-dom";
import fauxAtelierUrl from "../../img/faux_atelier_logo.png";
import {
  FaTruck,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

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
            <Link className="nav-link" to="/">
              <span>
                <FaTruck
                  className="fauxText"
                  style={{ width: 20, height: 20 }}
                />
              </span>
            </Link>
            <Link className="nav-link" to="/">
              <span>
                <FaSearch
                  className="fauxText"
                  style={{ width: 20, height: 20 }}
                />
              </span>
            </Link>
            <Link className="nav-link" to="/">
              <span>
                <FaHeart
                  className="fauxText"
                  style={{ width: 20, height: 20 }}
                />
              </span>
            </Link>
            <Link className="nav-link" to="/">
              <span>
                <FaShoppingCart
                  className="fauxText"
                  style={{ width: 20, height: 20 }}
                />
              </span>
            </Link>
            <Link className="nav-link" to="/">
              <span>
                <FaUser
                  className="fauxText"
                  style={{ width: 20, height: 20 }}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
