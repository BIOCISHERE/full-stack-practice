import React, { Component } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 fauxFooter">
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <span>
            <span className="me-1">
              <FaLocationArrow />
            </span>
            Locate us
          </span>
        </div>
        <div className="col-3">
          <span className="fw-bold">Faux Atelier</span>
          <ul>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Stores
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Privacy policies
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <span className="fw-bold">Information</span>
          <ul>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Frequent questions
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Delivery
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Pick up in store
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Payment policies
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-reset" to="/">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <span>Payments</span>
        </div>
      </div>
    </div>
  </footer>
);
