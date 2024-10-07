import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

class CartTotal extends Component {
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      isShowShipping: false,
      isShipping: "1",
      isReturnShipping: 10,
      isShippingRegion: "North america",
      isCartTotal: 0,
    };
  }

  returnShipping = () => {
    if (this.state.isShipping == 1) {
      this.setState({ isReturnShipping: 10 });
    } else if (this.state.isShipping == 2) {
      this.setState({ isReturnShipping: 15 });
    } else if (this.state.isShipping == 3) {
      this.setState({ isReturnShipping: 20 });
    } else if (this.state.isShipping == 4) {
      this.setState({ isReturnShipping: 25 });
    } else if (this.state.isShipping == 5) {
      this.setState({ isReturnShipping: 15 });
    } else if (this.state.isShipping == 6) {
      this.setState({ isReturnShipping: 20 });
    } else {
      this.setState({ isReturnShipping: 15 });
    }
  };

  returnShippingRegion = () => {
    if (this.state.isShipping == 1) {
      this.setState({ isShippingRegion: "North america" });
    } else if (this.state.isShipping == 2) {
      this.setState({ isShippingRegion: "South america" });
    } else if (this.state.isShipping == 3) {
      this.setState({ isShippingRegion: "Antartica" });
    } else if (this.state.isShipping == 4) {
      this.setState({ isShippingRegion: "Africa" });
    } else if (this.state.isShipping == 5) {
      this.setState({ isShippingRegion: "Europe" });
    } else if (this.state.isShipping == 6) {
      this.setState({ isShippingRegion: "Asia" });
    } else {
      this.setState({ isShippingRegion: "Australia" });
    }
  };

  returnShoppingCartTotal = () => {
    if (actions.getTotalProductInCart() > 0) {
      this.setState({
        isCartTotal: actions.getTotalCartCost() + this.state.isReturnShipping,
      });
    } else {
      this.setState({ isCartTotal: 0 });
    }
  };

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
              <span className="fs-6">({this.state.isShippingRegion})</span>
            </span>
            <span className="fs-5 fw-bold">${this.state.isReturnShipping}</span>
          </div>
          <div className="form-check my-1">
            <input
              className="form-check-input border border-dark"
              type="checkbox"
              id="changeShippingInput"
              onChange={() =>
                this.setState({ isShowShipping: !this.state.isShowShipping })
              }
            />
            <label
              className="form-check-label fauxLetters"
              htmlFor="changeShippingInput"
            >
              Change shipping region
            </label>
          </div>
          <div
            className={this.state.isShowShipping ? "container-fluid" : "d-none"}
          >
            <label htmlFor="selectShippingRegion" className="me-1">
              Select region:
            </label>
            <select
              id="selectShippingRegion"
              onChange={(e) => (
                this.setState({ isShipping: e.target.value }),
                actions.changeShippingRegion(e.target.value),
                this.returnShipping,
                this.returnShippingRegion
              )}
            >
              <option value={"1"}>North america</option>
              <option value={"2"}>South america</option>
              <option value={"3"}>Antartica</option>
              <option value={"4"}>Africa</option>
              <option value={"5"}>Europe</option>
              <option value={"6"}>Asia</option>
              <option value={"7"}>Australia</option>
            </select>
          </div>
          <div className="d-flex mt-1 mb-3">
            <span className="me-auto fs-5">Total</span>
            <span className="fs-5 fw-bold">${this.state.isCartTotal}</span>
          </div>
          <div className="container-fluid my-1 mb-2">
            <button
              type="button"
              className="btn btn-dark fauxColor w-100"
              onClick={() => (
                console.log("isShipping", this.state.isShipping),
                console.log("flux", store.shipping)
              )}
            >
              Buy
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CartTotal;
