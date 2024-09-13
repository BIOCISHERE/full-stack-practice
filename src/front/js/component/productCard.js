import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tShirtUrl from "../../img/t-shirt.png";

class ProductCard extends Component {
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      card: "Product card",
      count: 1,
    };
  }

  addToCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { store, actions } = this.context;

    return (
      <div className={this.props.cardClass} key={this.props.cardIndex}>
        <Link
          to={actions.linkManager(this.props.cardId)}
          className="text-decoration-none"
        >
          <div className="card my-1">
            <img
              className="card-image-top img-fluid"
              src={tShirtUrl}
              alt="..."
            />
            <div className="card-body"></div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
