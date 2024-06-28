import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const FootwearProducts = () => {
  const { store, actions } = useContext(Context);

  const [isUrban, setIsUrban] = useState(false);
  const [isSport, setIsSport] = useState(false);
  const [isShoe, setIsShoe] = useState(false);
  const [isSandals, setIsSandals] = useState(false);

  const turnClass = (info) => {
    if (info.category == 17) {
      return isUrban ? "col" : "d-none";
    } else if (info.category == 18) {
      return isSport ? "col" : "d-none";
    } else if (info.category == 19) {
      return isShoe ? "col" : "d-none";
    } else if (info.category == 20) {
      return isSandals ? "col" : "d-none";
    }
  };

  const returnProducts = () => {
    if (!isUrban && !isSport && !isShoe && !isSandals) {
      return store.footwearProducts.map((item, index) => (
        <div className="col" key={index}>
          <Link
            to={actions.linkManager(item.id)}
            className="text-decoration-none"
          >
            <div className="card my-1">
              <img
                className="card-image-top img-fluid"
                src={tShirtUrl}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex">
                  <span className="card-text me-auto">
                    ${actions.returnFormated(item.cost)}
                  </span>
                </div>
                <span className="card-text fauxLetters">
                  {actions.turnRating(item.rating)}
                </span>
                <span className="card-text ms-1">({item.ratingVotes})</span>
              </div>
            </div>
          </Link>
        </div>
      ));
    } else {
      return store.footwearProducts.map((item, index) => (
        <div className={turnClass(item)} key={index}>
          <Link
            to={actions.linkManager(item.id)}
            className="text-decoration-none"
          >
            <div className="card my-1">
              <img
                className="card-image-top img-fluid"
                src={tShirtUrl}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex">
                  <span className="card-text me-auto">
                    ${actions.returnFormated(item.cost)}
                  </span>
                </div>
                <span className="card-text fauxLetters">
                  {actions.turnRating(item.rating)}
                </span>
                <span className="card-text ms-1">({item.ratingVotes})</span>
              </div>
            </div>
          </Link>
        </div>
      ));
    }
  };

  return (
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-dark-subtle rounded-end">
          <h4>Footwear</h4>
          <div className="container-fluid my-1">
            <h6>Type of footwear</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="urbanCheck"
                onClick={() => setIsUrban(!isUrban)}
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
                onClick={() => setIsSport(!isSport)}
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
                onClick={() => setIsShoe(!isShoe)}
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
                onClick={() => setIsSandals(!isSandals)}
              />
              <label className="form-check-label" htmlFor="sandalsCheck">
                Sandals
              </label>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="container-fluid">
            <div className="row row-cols-xm-1 row-cols-sm-2 row-cols-md-4 g-4">
              {returnProducts()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
