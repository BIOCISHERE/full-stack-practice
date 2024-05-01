import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const LogIn = () => {
  const { store, actions } = useContext(Context);

  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  //const [isConfirm, setIsConfirm] = useState(""); //this the confirm password state
  const [isShow, setIsShow] = useState(false); // we will use this for the check to hide or show the password

  const sendInfo = () => {
    if (isEmail == "") {
      return alert("Please type your email");
    } else if (isPassword == "") {
      return alert("Please type your password");
    } else {
      console.log(isEmail, isPassword);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-primary mx-auto my-4">
          <h1 className="text-center">Log-in</h1>
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
                placeholder="Type your email"
                value={isEmail}
                onChange={(e) => setIsEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              {isShow ? (
                <input
                  type="text"
                  className="form-control"
                  id="passwordInput"
                  value={isPassword}
                  onChange={(e) => setIsPassword(e.target.value)}
                  placeholder="Type your password"
                />
              ) : (
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  value={isPassword}
                  onChange={(e) => setIsPassword(e.target.value)}
                  placeholder="Type your password"
                />
              )}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkInput"
                onClick={() => setIsShow(!isShow)}
              />
              <label className="form-check-label" htmlFor="checkInput">
                Show password
              </label>
            </div>
            <div className="container-fluid text-center mx-auto">
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={() => sendInfo()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
