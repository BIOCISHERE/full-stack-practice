import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const ProductView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [isSize, setIsSize] = useState("S");
  const [isAmount, setIsAmount] = useState("1");

  const manageLinks = () => {
    if (store.fullResponse[id - 1].productFor == "Women") {
      return (
        <span>
          <Link to="/" className="mx-1">
            Home
          </Link>
          {">"}
          <Link to="/women-products" className="mx-1">
            Women
          </Link>
          {">"}
          <Link to="#" className="mx-1">
            {store.fullResponse[id - 1].name}
          </Link>
        </span>
      );
    } else if (store.fullResponse[id - 1].productFor == "Men") {
      return (
        <span>
          <Link to="/" className="mx-1">
            Home
          </Link>
          {">"}
          <Link to="/men-products" className="mx-1">
            Men
          </Link>
          {">"}
          <Link to="#" className="mx-1">
            {store.fullResponse[id - 1].name}
          </Link>
        </span>
      );
    } else {
      return <span>Fail</span>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="container-fluid my-2">{manageLinks()}</div>
              <div className="col-8 text-center">
                <img className="img-fluid" src={tShirtUrl} alt="..." />
              </div>
              <div className="col-4 border border-dark-subtle rounded">
                <div className="d-flex mt-2">
                  <span className="fs-2 me-auto text-break">
                    {store.fullResponse[id - 1].name}
                  </span>
                  <span className="fauxLetters fs-2">
                    <FaRegHeart />
                  </span>
                </div>
                <div className="d-flex">
                  <span className="mx-1 fs-5">
                    {store.fullResponse[id - 1].rating}
                  </span>
                  <span className="fauxLetters mx-1">
                    {actions.turnRating(store.fullResponse[id - 1].rating)}
                  </span>
                  <span className="mx-1 fs-5">
                    ({store.fullResponse[id - 1].ratingVotes})
                  </span>
                </div>
                <div className="d-flex mt-2">
                  <span className="fs-1">
                    $ {store.fullResponse[id - 1].cost}
                  </span>
                </div>
                <div className="container-fluid mt-2">
                  <label htmlFor="selectSize">Select size:</label>
                  <select
                    id="selectSize"
                    className="form-select border border-dark fauxBorder w-50"
                    aria-label="Select your size"
                    name="selectedSize"
                    onChange={(e) => setIsSize(e.target.value)}
                  >
                    <option defaultValue>S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="container-fluid mt-2 mb-4">
                  <label htmlFor="selectAmount">Select amount:</label>
                  <select
                    id="selectAmount"
                    className="form-select border border-dark fauxBorder w-50"
                    aria-label="Select how many"
                    name="selectedAmount"
                    onChange={(e) => setIsAmount(e.target.value)}
                  >
                    <option defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="container-fluid mt-2">
                  <button
                    type="button"
                    className="btn btn-dark fauxColor w-100"
                    onClick={() => console.log(isSize, isAmount)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
