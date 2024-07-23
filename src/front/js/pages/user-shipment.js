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
              </form>
            </div>
            <h1>adress</h1>
            <h1>appartment (optional)</h1>
            <h1>city</h1>
            <h1>state/region</h1>
            <h1>postal code (optional)</h1>
            <h1>additional message</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
