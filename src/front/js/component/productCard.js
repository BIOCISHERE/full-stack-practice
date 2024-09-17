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
      <div className={this.props.cardClass}>
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
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <div className="d-flex">
                <span className="card-text me-auto">
                  ${actions.returnFormated(this.props.cost)}
                </span>
              </div>
              <span className="card-text fauxLetters">
                {actions.turnRating(this.props.rating)}
              </span>
              <span className="card-text ms-1">({this.props.ratingVotes})</span>
              <br />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
