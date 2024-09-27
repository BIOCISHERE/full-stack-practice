import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tShirtUrl from "../../img/t-shirt.png";

class Cart extends Component {
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
        {actions.getTotalCartCost() > 0 ? (
          //This will display when the shopping cart is not empty
          <div
            className="container-fluid border border-dark-subtle rounded"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <div className="container-fluid mt-3">
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
            <div className="container-fluid mb-3">
              {/* Each product in the shopping cart will map a row in wich all the info will be displayed horizontally */}
            </div>
          </div>
        ) : (
          //This will display when the shopping cart is not empty
          <div></div>
        )}
      </>
    );
  }
}

export default Cart;
