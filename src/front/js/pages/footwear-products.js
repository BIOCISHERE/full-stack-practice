import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const FootwearProducts = () => {
  return (
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-primary">
          <h4>Footwear</h4>
          <div className="container-fluid my-1">
            <h6>Type of footwear</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="urbanCheck"
                onClick={() => console.log("Urban Working")}
              />
              <label className="form-check-label" htmlFor="urbanCheck">
                Urban Sneakers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="sportCheck"
                onClick={() => console.log("Sport Working")}
              />
              <label className="form-check-label" htmlFor="sportCheck">
                Sport Sneakers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="shoesCheck"
                onClick={() => console.log("Shoes Working")}
              />
              <label className="form-check-label" htmlFor="shoesCheck">
                Shoes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="sandalsCheck"
                onClick={() => console.log("Sandals Working")}
              />
              <label className="form-check-label" htmlFor="sandalsCheck">
                Sandals
              </label>
            </div>
          </div>
        </div>
        <div className="col-10 border border-primary">Footwear part 2</div>
      </div>
    </div>
  );
};
