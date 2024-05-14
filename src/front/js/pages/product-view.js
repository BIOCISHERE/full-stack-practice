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
                <div className="d-flex">
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
                <div className="d-flex">
                  <span className="fs-1">
                    $ {store.fullResponse[id - 1].cost}
                  </span>
                </div>
                <select
                  className="form-select border border-primary"
                  aria-label="Select your size"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option defaultValue>Choose size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
