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
    return <h1>Cart class component</h1>;
  }
}

export default Cart;
