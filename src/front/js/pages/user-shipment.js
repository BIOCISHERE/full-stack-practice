import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
  const [isPostal, setIsPostal] = useState(""); //optional
  const [isMessage, setIsMessage] = useState(""); //optional

  const [isAlert, setIsAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResponse, setIsResponse] = useState("");

  const getID = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: store.user,
        }),
      };

      const requestID = await fetch(
        process.env.BACKEND_URL + "/api/user-id",
        requestOptions
      );

      if (requestID.status == 400 || requestID.status == 401) {
        const responseJson = await requestID.json();
        const resultJson = new Array(responseJson);
        const resultError = resultJson[0].error;

        console.log(resultError);
        return false;
      }

      const response = await requestID.json();
      const temporal = new Array(response);
      const temporalMsg = await temporal[0].message;
      console.log("message", temporalMsg);

      const resultID = await temporal[0].id;
      console.log("id", resultID);
      return true;
    } catch (error) {
      console.log(error);
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
      console.log("All good");
      return true;
    }
  };

  const updateShipping = async () => {
    try {
      const shippingOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: isFirstName,
          last_name: isLastName,
          adress: isAdress,
          apartment: isApartment,
          country: isCountry,
          state: isState,
          city: isCity,
          postal: isPostal,
        }),
      };

      const request = await fetch(
        process.env.BACKEND_URL + `/shipping/${"replace-with-id"}`,
        shippingOptions
      );
    } catch (error) {}
  };

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
                    onClick={() => updateShipping()}
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
