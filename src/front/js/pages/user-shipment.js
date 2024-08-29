import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserShipment = () => {
  const { store, actions } = useContext(Context);

  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isAdress, setIsAdress] = useState("");
  const [isApartment, setIsApartment] = useState(""); //optional
  const [isCountry, setIsCountry] = useState("");
  const [isState, setIsState] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isPostal, setIsPostal] = useState(0); //optional
  const [isMessage, setIsMessage] = useState(""); //optional

  const [isAlert, setIsAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResponse, setIsResponse] = useState("");

  const redirect = useNavigate();

  const redirectManager = () => {
    setTimeout(() => {
      redirect("/");
    }, "5000");
  };

  const returnPayload = () => {
    if (isApartment != "" && isPostal != 0) {
      return {
        first_name: isFirstName,
        last_name: isLastName,
        adress: isAdress,
        apartment: isApartment,
        country: isCountry,
        state: isState,
        city: isCity,
        postal: isPostal,
      };
    } else if (isApartment != "") {
      return {
        first_name: isFirstName,
        last_name: isLastName,
        adress: isAdress,
        apartment: isApartment,
        country: isCountry,
        state: isState,
        city: isCity,
      };
    } else if (isPostal != 0) {
      return {
        first_name: isFirstName,
        last_name: isLastName,
        adress: isAdress,
        country: isCountry,
        state: isState,
        city: isCity,
        postal: isPostal,
      };
    } else {
      return {
        first_name: isFirstName,
        last_name: isLastName,
        adress: isAdress,
        country: isCountry,
        state: isState,
        city: isCity,
      };
    }
  };

  const updateShipping = async () => {
    try {
      const payload = {
        first_name: isFirstName,
        last_name: isLastName,
        adress: isAdress,
        apartment: isApartment,
        country: isCountry,
        state: isState,
        city: isCity,
        postal: isPostal,
      };

      const shippingOptions = {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };

      const request = await fetch(
        process.env.BACKEND_URL + `/api/shipping/${store.id}`,
        shippingOptions
      );

      if (request.status == 400 || request.status == 404) {
        const responseJson = await request.json();
        const resultJson = new Array(responseJson);
        const resultError = resultJson[0].error;

        setIsResponse(resultError);
        setIsAlert(true);
        return false;
      }

      const response = await request.json();
      const temporal = new Array(response);
      const temporalMessage = await temporal[0].message;

      setIsResponse(
        `${temporalMessage}, you will be redirected in 5 seconds to the main page`
      );
      setIsAlert(false);
      setIsSuccess(true);

      redirectManager();
    } catch (error) {
      console.log(error);
      setIsResponse(error);
      setIsAlert(true);
      return false;
    }
  };

  const shippingAlertManager = () => {
    if (isFirstName == "") {
      setIsAlert(true);
      setIsResponse("Please type your first name");
      return false;
    } else if (isLastName == "") {
      setIsAlert(true);
      setIsResponse("Please type your last name");
      return false;
    } else if (isAdress == "") {
      setIsAlert(true);
      setIsResponse("Please type tour adress");
      return false;
    } else if (isCountry == "") {
      setIsAlert(true);
      setIsResponse("Please type your country");
      return false;
    } else if (isState == "") {
      setIsAlert(true);
      setIsResponse("Please type your state");
      return false;
    } else if (isCity == "") {
      setIsAlert(true);
      setIsResponse("Please type your city");
      return false;
    } else {
      updateShipping();
    }
  };

  const alertManager = () => {
    if (isAlert) {
      return (
        <div
          className="alert alert-danger container-fluid text-center mt-1"
          role="alert"
        >
          {isResponse}
        </div>
      );
    } else if (isSuccess) {
      return (
        <div
          className="alert alert-success container-fluid text-center mt-1"
          role="alert"
        >
          {isResponse}
        </div>
      );
    } else {
      return (
        <div
          className="alert alert-secondary container-fluid text-center mt-3"
          role="alert"
        >
          Type your info
        </div>
      );
    }
  };

  useEffect(() => {
    if (store.user != null) {
      actions.getID();
      return console.log("id storaged");
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="container-fluid text-center my-2">
        <h1>Shipping Info</h1>
        <Link to="/" className="fauxLetters">
          Keep shopping
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 border border-dark rounded mx-auto">
            <div className="container-fluid">
              {alertManager()}
              <form>
                <div className="d-flex">
                  <div className="my-3 me-auto">
                    <label htmlFor="firtsNameInput" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark-subtle"
                      id="firtsNameInput"
                      style={{ width: "22rem" }}
                      value={isFirstName}
                      onChange={(e) => setIsFirstName(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="lastNameInput" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark-subtle"
                      id="lastNameInput"
                      style={{ width: "22rem" }}
                      value={isLastName}
                      onChange={(e) => setIsLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="userAdressInput" className="form-label">
                    Adress
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark-subtle"
                    id="userAdressInput"
                    value={isAdress}
                    onChange={(e) => setIsAdress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userApartmentInput" className="form-label">
                    Apartment Info (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark-subtle"
                    id="userApartmentInput"
                    value={isApartment}
                    onChange={(e) => setIsApartment(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userCountryInput" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark-subtle"
                    id="userCountryInput"
                    value={isCountry}
                    onChange={(e) => setIsCountry(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRegionInput" className="form-label">
                    State/Region
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark-subtle"
                    id="userRegionInput"
                    value={isState}
                    onChange={(e) => setIsState(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userCityInput" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark-subtle"
                    id="userCityInput"
                    value={isCity}
                    onChange={(e) => setIsCity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userPostalInput" className="form-label">
                    Postal Code (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark-subtle"
                    id="userPostalInput"
                    value={isPostal}
                    onChange={(e) => setIsPostal(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userMessageInput" className="form-label">
                    Additional Message (optional)
                  </label>
                  <textarea
                    className="form-control border border-dark-subtle"
                    id="userMessageInput"
                    rows="3"
                    value={isMessage}
                    onChange={(e) => setIsMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="container-fluid mb-3 text-center">
                  <button
                    type="button"
                    className="btn btn-dark fauxColor"
                    onClick={() => shippingAlertManager()}
                  >
                    Save Shipping Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
