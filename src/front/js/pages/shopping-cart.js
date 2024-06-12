import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShoppingCart = () => {
  return (
    <div className="container-fluid">
      <div className="container-fluid text-center my-3">
        <h1>Shopping cart</h1>
        <Link to="/" className="fauxLetters">
          Keep shopping
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h4>Product</h4>
          </div>
          <div className="col-2">
            <h4>Price</h4>
          </div>
          <div className="col-2">
            <h4>Amount</h4>
          </div>
          <div className="col-2">
            <h4>Total</h4>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* Each product in the shopping cart will map a row in wich all the info will be displayed horizontally */}
        <div className="row border border-dark-subtle rounded">
          <div className="col-6">
            <h4>IMG</h4>
          </div>
          <div className="col-2">
            <h4>Product Price</h4>
          </div>
          <div className="col-2">
            <h4>Product Amount</h4>
          </div>
          <div className="col-2">
            <h4>Product Total</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
