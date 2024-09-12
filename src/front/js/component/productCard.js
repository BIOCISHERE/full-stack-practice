import React, { Component } from "react";

class ProductCard extends Component {
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
    return (
      <div className="container-fluid">
        <h1>{this.state.card}</h1>
        <h3>Count: {this.state.count}</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.addToCount}
        >
          +1 to count
        </button>
      </div>
    );
  }
}

export default ProductCard;
