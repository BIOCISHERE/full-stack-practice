import React from "react";
import { Link } from "react-router-dom";
import fauxAtelierUrl from "../../img/faux_atelier_logo.png";
import { FaTruck, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fauxColor">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="rounded-circle"
            src={fauxAtelierUrl}
            alt="logo"
            style={{ width: 50, height: 50 }}
          ></img>
          <span className="fauxText fs-3 ms-1">Faux Atelier</span>
        </Link>
        <form className="d-flex me-1" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link fauxText"
                aria-current="page"
                to="/women-products"
              >
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fauxText" to="/men-products">
                Men
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link fauxText" to="/footwear-products">
                Footwear
              </Link>
            </li>
            <li className="nav-item dropdown me-1">
              <a
                className="nav-link dropdown-toggle fauxText"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-1">
                  <FaUser />
                </span>
                User
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/log-in">
                    Log-in
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sign-up">
                    Sign-up
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link fauxText" to="/">
                <span className="me-1">
                  <FaTruck />
                </span>
                My orders
              </Link>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link fauxText" to="/">
                <span className="me-1">
                  <FaHeart />
                </span>
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fauxText" to="/">
                <span className="me-1">
                  <FaShoppingCart />
                </span>
                Shopping cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
