import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tShirtUrl from "../../img/t-shirt.png";
import { IoIosWarning } from "react-icons/io";

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
                          <div className="col-3 my-auto">
                            {/* This is the product img div */}
                            <img
                              className="img-fluid"
                              src={tShirtUrl}
                              alt="..."
                            />
                          </div>
                          <div className="col-9">
                            {/* This is the product name div */}
                            <h5 className="mt-3 text-break">{product.name}</h5>
                            <span className="fs-6">
                              Size {store.cartSizes[product.id]}
                            </span>{" "}
                            <br />
                            <a
                              className="fs-6 fauxLetters"
                              data-bs-toggle="offcanvas"
                              href="#offcanvasWarning"
                              aria-controls="offcanvasWarning"
                              //onClick={() => setIsSelected(product.id)}
                            >
                              Remove product
                            </a>
                            <div
                              className="offcanvas offcanvas-start"
                              tabIndex="-1"
                              id="offcanvasWarning"
                              aria-labelledby="offcanvasWarningLabel"
                            >
                              <div className="offcanvas-header">
                                <h5
                                  className="offcanvas-title"
                                  id="offcanvasExampleLabel"
                                >
                                  <span
                                    className="fs-4"
                                    style={{ color: "orange" }}
                                  >
                                    <IoIosWarning />
                                  </span>
                                  Warning
                                  <span
                                    className="fs-4"
                                    style={{ color: "orange" }}
                                  >
                                    <IoIosWarning />
                                  </span>
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="offcanvas"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="offcanvas-body">
                                <div>
                                  Do you want to remove this product from your
                                  shopping cart?
                                </div>
                                <div className="d-flex mt-2">
                                  <button
                                    type="button"
                                    className="btn btn-danger me-auto"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() =>
                                      actions.resetIdOnCart(product.id)
                                    }
                                  >
                                    Yes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 border border-dark-subtle text-center">
                        {/* This is the price div */}
                        <h4 className="cartCenterVertically">
                          ${actions.returnFormated(product.cost)}
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
                              className="text-center"
                              style={{ width: "2rem" }}
                              onChange={(e) =>
                                actions.setCustomToCart(
                                  product.id,
                                  e.target.value
                                )
                              }
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
                          ${actions.returnTotal(product.cost, product.id)}
                        </h4>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          //This will display when the shopping cart is empty
          <div className="container-fluid">
            <div
              className="row border border-dark-subtle rounded text-center"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <h2 style={{ marginTop: "8rem", marginBottom: "8rem" }}>
                Your shopping cart is empty
              </h2>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Cart;
