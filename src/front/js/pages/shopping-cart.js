import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShoppingCart = () => {
  const { store, actions } = useContext(Context);

  const returnFormated = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const retunTotal = (cost, id) => {
    const total = cost * store.cart[id];
    return returnFormated(total);
  };

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
          <div className="col-6 text-center">
            <h4>Product</h4>
          </div>
          <div className="col-2 text-center">
            <h4>Price</h4>
          </div>
          <div className="col-2 text-center">
            <h4>Amount</h4>
          </div>
          <div className="col-2 text-center">
            <h4>Total</h4>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* Each product in the shopping cart will map a row in wich all the info will be displayed horizontally */}
        {store.fullResponse.map((product, index) => {
          if (store.cart[product.id] !== 0) {
            return (
              <div
                className="row border border-dark-subtle rounded"
                key={index}
              >
                <div className="col-6">
                  {/* This is the product div */}
                  <div className="row border border-dark-subtle">
                    <div className="col-3">
                      {/* This is the product img div */}
                      <img className="img-fluid" src={tShirtUrl} alt="..." />
                    </div>
                    <div className="col-9">
                      {/* This is the product name div */}
                      <h5 className="mt-3 text-break">{product.name}</h5>
                      <span className="fs-6">Size</span> <br />
                      <Link
                        to="#"
                        className="fs-6 text-decoration-underline fauxLetters"
                        onClick={() => actions.resetIdOnCart(product.id)}
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-2 border border-dark-subtle text-center">
                  {/* This is the price div */}
                  <h4 className="cartCenterVertically">
                    ${returnFormated(product.cost)}
                  </h4>
                </div>
                <div className="col-2 border border-dark-subtle">
                  {/* This is the amount div */}
                  <div className="container-fluid cartCenterVertically">
                    <div className="d-flex mx-auto">
                      <button
                        type="button"
                        className="btn btn-dark fauxColor btn-sm me-1"
                        onClick={() => actions.minus1ToCart(product.id)}
                      >
                        -
                      </button>
                      <input
                        value={store.cart[product.id]}
                        className="w-75 text-center"
                        readOnly
                      />
                      <button
                        type="button"
                        className="btn btn-dark fauxColor btn-sm ms-1"
                        onClick={() => actions.plus1ToCart(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-2 border border-dark-subtle text-center">
                  {/* This is the total div */}
                  <h4 className="cartCenterVertically">
                    ${retunTotal(product.cost, product.id)}
                  </h4>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
