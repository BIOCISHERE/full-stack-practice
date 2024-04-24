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

  const test = [
    {
      id: 1,
      name: "Urban sneakers",
      cost: 10000,
      rating: 4,
      ratingVotes: 200,
    },
  ];

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
          <div className="card my-1">
            <img
              className="card-image-top img-fluid"
              src={tShirtUrl}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <div className="d-flex">
                <span className="card-text me-auto">${item.cost}</span>
                <span className="card-text fauxLetters fs-5">
                  <FaRegHeart />
                </span>{" "}
                <br />
              </div>
              <span className="card-text fauxLetters">
                {actions.turnRating(item.rating)}
              </span>
              <span className="card-text ms-1">({item.ratingVotes})</span>{" "}
              <br />
              <Link to="/" className="btn btn-primary mt-1">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      ));
    } else {
      return store.footwearProducts.map((item, index) => (
        <div className={turnClass(item)} key={index}>
          <div className="card my-1">
            <img
              className="card-image-top img-fluid"
              src={tShirtUrl}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <div className="d-flex">
                <span className="card-text me-auto">${item.cost}</span>
                <span className="card-text fauxLetters fs-5">
                  <FaRegHeart />
                </span>{" "}
                <br />
              </div>
              <span className="card-text fauxLetters">
                {actions.turnRating(item.rating)}
              </span>
              <span className="card-text ms-1">({item.ratingVotes})</span>{" "}
              <br />
              <Link to="/" className="btn btn-primary mt-1">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      ));
    }
  };

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
        <div className="col-10 border border-primary">
          <div className="container-fluid">
            <div className="row row-cols-xm-1 row-cols-sm-2 row-cols-md-4 g-4">
              <div className="col">
                <div className="card my-1">
                  <img
                    className="card-image-top img-fluid"
                    src={tShirtUrl}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{test[0].name}</h5>
                    <div className="d-flex">
                      <span className="card-text me-auto">${test[0].cost}</span>
                      <span className="card-text fauxLetters fs-5">
                        <FaRegHeart />
                      </span>
                    </div>
                    <span className="card-text fauxLetters">
                      {actions.turnRating(test[0].rating)}
                    </span>
                    <span className="card-text ms-1">
                      ({test[0].ratingVotes})
                    </span>{" "}
                    <br />
                    <Link to="/" className="btn btn-primary mt-1">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
