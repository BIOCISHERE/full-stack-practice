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
    return <h1>Cart Total</h1>;
  }
}

export default CartTotal;
