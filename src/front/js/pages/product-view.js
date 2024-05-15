import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const ProductView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 border border-primary text-center">
                <img className="img-fluid" src={tShirtUrl} alt="..." />
              </div>
              <div className="col-4 border border-primary">
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
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <option defaultValue>S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="container-fluid mt-2">
                  <label htmlFor="selectAmount">Select amount:</label>
                  <select
                    id="selectAmount"
                    className="form-select border border-dark fauxBorder w-50"
                    aria-label="Select how many"
                    name="selectedAmount"
                    onChange={(e) => console.log(e.target.value)}
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
                    onClick={() => console.log("test")}
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
