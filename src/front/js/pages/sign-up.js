import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-primary mx-auto my-4">
          <h1 className="text-center">Sign-up</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmInput" className="form-label">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmInput"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkboxInput"
              />
              <label className="form-check-label" htmlFor="checkboxInput">
                Check me out
              </label>
            </div>
            <div className="container-fluid text-center mx-auto">
              <button type="button" className="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
