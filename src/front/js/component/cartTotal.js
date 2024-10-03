import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

class CartTotal extends Component {
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      test: "test",
    };
  }

  render() {
    const { store, actions } = this.context;
    return (
      <>
        <div className="container-fluid border border-dark-subtle rounded">
          <h3 className="mb-3">Purchase summary</h3>
          <div className="d-flex mb-1">
            <span className="me-auto fs-5">
              Product
              {actions.getTotalProductInCart() > 0 ? (
                <span>({actions.getTotalProductInCart()})</span>
              ) : (
                ""
              )}
            </span>
            <span className="fs-5 fw-bold">
              ${actions.returnFormated(actions.getTotalCartCost())}
            </span>
          </div>
          <div className="d-flex my-1">
            <span className="me-auto fs-5">
              Shipping
              <span className="fs-6">({returnShippingRegion()})</span>
            </span>
            <span className="fs-5 fw-bold">${returnShipping()}</span>
          </div>
          <div>{/* Continue here */}</div>
        </div>
      </>
    );
  }
}

export default CartTotal;
