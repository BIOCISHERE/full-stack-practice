import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
  const { store, actions } = useContext(Context);

  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isConfirm, setIsConfirm] = useState("");
  const [isShow, setIsShow] = useState(false);

  const [isAlert, setIsAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMessage, setIsMessage] = useState("");

  const redirect = useNavigate();

  const redirectManager = () => {
    setTimeout(() => {
      redirect("/");
    }, "5000");
  };

  const signUpRequest = async () => {
    try {
      const request = await fetch(process.env.BACKEND_URL + "/api/sign-up", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: isEmail,
          password: isPassword,
        }),
      });

      if (request.status === 400) {
        const responseJSON = await request.json();

        const response = new Array(responseJSON);

        const responseError = response[0].error;

        setIsAlert(true);
        setIsMessage(responseError);
        return false;
      }

      const result = await request.json();

      const temporal = new Array(result);
      const temporalMessage = temporal[0].message;

      setIsAlert(false);
      setIsSuccess(true);
      setIsMessage(
        `${temporalMessage}, you will be redirected in 5 seconds to the main page`
      );

      const resultToken = await temporal[0].token;
      const resultUser = await temporal[0].user;

      sessionStorage.setItem("token", resultToken);
      sessionStorage.setItem("user", resultUser);

      actions.saveToken();

      redirectManager();
    } catch (error) {
      setIsAlert(true);
      setIsMessage(error);
      return false;
    }
  };

  const registerInfo = () => {
    if (isEmail == "") {
      setIsAlert(true);
      setIsMessage("Please type a email");
      return false;
    } else if (isPassword == "") {
      setIsAlert(true);
      setIsMessage("Please type a password");
      return false;
    } else if (isConfirm == "") {
      setIsAlert(true);
      setIsMessage("Please confirm yout password");
      return false;
    } else if (isPassword != isConfirm) {
      setIsAlert(true);
      setIsMessage("The passwords don't match");
      return false;
    } else {
      signUpRequest();
    }
  };

  const alertManager = () => {
    if (isAlert) {
      return (
        <div
          className="alert alert-danger container-fluid text-center"
          role="alert"
        >
          {isMessage}
        </div>
      );
    } else if (isSuccess) {
      return (
        <div
          className="alert alert-success container-fluid text-center"
          role="alert"
        >
          {isMessage}
        </div>
      );
    } else {
      return (
        <div
          className="alert alert-secondary container-fluid text-center"
          role="alert"
        >
          Type your info
        </div>
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-dark-subtle rounded mx-auto my-4">
          <h1 className="text-center">Sign-up</h1>
          {alertManager()}
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
                  onChange={(e) => setIsPassword(e.target.value)}
                />
              ) : (
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  onChange={(e) => setIsPassword(e.target.value)}
                />
              )}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input border border-dark"
                id="checkboxInput"
                onClick={() => setIsShow(!isShow)}
              />
              <label className="form-check-label" htmlFor="checkboxInput">
                Show password
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmInput" className="form-label">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmInput"
                onChange={(e) => setIsConfirm(e.target.value)}
              />
            </div>
            <div className="container-fluid text-center mx-auto">
              <button
                type="button"
                className="btn btn-dark fauxColor mb-2"
                onClick={() => {
                  setIsAlert(false);
                  setIsSuccess(false);
                  registerInfo();
                }}
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
