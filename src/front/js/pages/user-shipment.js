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
          <div className="col">
            <h1>UserShipment</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
