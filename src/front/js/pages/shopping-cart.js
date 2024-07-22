import React, { useContext, useEffect, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { IoIosWarning } from "react-icons/io";

export const ShoppingCart = () => {
  const { store, actions } = useContext(Context);

  const [isShowShipping, setIsShowShipping] = useState(false);
  const [isShipping, setIsShipping] = useState(1);

  const [isSelected, setIsSelected] = useState();

  const returnShipping = () => {
    if (isShipping == 1) {
      return 10;
    } else if (isShipping == 2) {
      return 15;
    } else if (isShipping == 3) {
      return 20;
    } else if (isShipping == 4) {
      return 25;
    } else if (isShipping == 5) {
      return 15;
    } else if (isShipping == 6) {
      return 20;
    } else {
      return 15;
    }
  };

  const returnShippingRegion = () => {
    if (isShipping == 1) {
      return "North america";
    } else if (isShipping == 2) {
      return "South america";
    } else if (isShipping == 3) {
      return "Antartica";
    } else if (isShipping == 4) {
      return "Africa";
    } else if (isShipping == 5) {
      return "Europe";
    } else if (isShipping == 6) {
      return "Asia";
    } else {
      return "Australia";
    }
  };

  const returnShoppingCartTotal = () => {
    if (actions.getTotalProductInCart() > 0) {
      return actions.getTotalCartCost() + returnShipping();
    } else {
      return 0;
    }
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
          <div className="col-8">
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
                                <h5 className="mt-3 text-break">
                                  {product.name}
                                </h5>
                                <span className="fs-6">
                                  Size {store.cartSizes[product.id]}
                                </span>{" "}
                                <br />
                                {/*
                                <Link
                                  to="#"
                                  className="fs-6 text-decoration-underline fauxLetters"
                                  onClick={() =>
                                    actions.resetIdOnCart(product.id)
                                  }
                                >
                                  Remove
                                </Link>
                                 */}
                                <a
                                  className="fs-6 fauxLetters"
                                  data-bs-toggle="offcanvas"
                                  href="#offcanvasWarning"
                                  aria-controls="offcanvasWarning"
                                  onClick={() => setIsSelected(product.id)}
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
                                    ></button>
                                  </div>
                                  <div className="offcanvas-body">
                                    <div>
                                      Do you want to remove this product from
                                      your shopping cart?
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
                                  onClick={() =>
                                    actions.minus1ToCart(product.id)
                                  }
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
                                  onClick={() =>
                                    actions.plus1ToCart(product.id)
                                  }
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
          </div>
          <div
            className="col-4"
            style={{ marginTop: "1rem", marginBottom: "5rem" }}
          >
            {/* This is the total, shipping and subtotal div */}
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
              <div className="form-check my-1">
                <input
                  className="form-check-input border border-dark"
                  type="checkbox"
                  id="changeShippingInput"
                  onChange={() => setIsShowShipping(!isShowShipping)}
                />
                <label
                  className="form-check-label fauxLetters"
                  htmlFor="changeShippingInput"
                >
                  Change shipping region
                </label>
              </div>
              <div className={isShowShipping ? "container-fluid" : "d-none"}>
                <label htmlFor="selectShippingRegion" className="me-1">
                  Select region:
                </label>
                <select
                  id="selectShippingRegion"
                  onChange={(e) => (
                    setIsShipping(e.target.value),
                    actions.changeShippingRegion(e.target.value)
                  )}
                >
                  <option value={1}>North america</option>
                  <option value={2}>South america</option>
                  <option value={3}>Antartica</option>
                  <option value={4}>Africa</option>
                  <option value={5}>Europe</option>
                  <option value={6}>Asia</option>
                  <option value={7}>Australia</option>
                </select>
              </div>
              <div className="d-flex mt-1 mb-3">
                <span className="me-auto fs-5">Total</span>
                <span className="fs-5 fw-bold">
                  ${returnShoppingCartTotal()}
                </span>
              </div>
              <div className="container-fluid my-1 mb-2">
                <button
                  type="button"
                  className="btn btn-dark fauxColor w-100"
                  onClick={() => (
                    console.log("isShipping", isShipping),
                    console.log("flux", store.shipping)
                  )}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
