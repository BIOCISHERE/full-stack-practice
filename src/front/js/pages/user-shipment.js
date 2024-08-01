import React from "react";
import { Link } from "react-router-dom";

export const UserShipment = () => {
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
