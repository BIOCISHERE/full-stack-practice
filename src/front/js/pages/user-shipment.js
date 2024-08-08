import React, { useState } from "react";
import { Link } from "react-router-dom";

export const UserShipment = () => {
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isAdress, setIsAdress] = useState("");
  const [isApartment, setIsApartment] = useState("");
  const [isCountry, setIsCountry] = useState("");
  const [isState, setIsState] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isPostal, setIsPostal] = useState("");
  const [isMessage, setIsMessage] = useState("");

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
                    onClick={() => console.log("Working")}
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
