import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const MensProducts = () => {
  const { store, actions } = useContext(Context);

  const [isTShirt, setIsTShirt] = useState(false);
  const [isSweaters, setIsSweaters] = useState(false);
  const [isHoodies, setIsHoodies] = useState(false);
  const [isPants, setIsPants] = useState(false);
  const [isJeans, setIsJeans] = useState(false);
  const [isWallets, setIsWallets] = useState(false);
  const [isBelts, setIsBelts] = useState(false);
  const [isScarfs, setIsScarfs] = useState(false);
  const [isSocks, setIsSocks] = useState(false);
  const [isUnderpants, setIsUnderpants] = useState(false);
  const [isBoxers, setIsBoxers] = useState(false);

  const turnClass = (info) => {
    if (info.category == 1) {
      return isTShirt ? "col" : "d-none";
    } else if (info.category == 2) {
      return isSweaters ? "col" : "d-none";
    } else if (info.category == 3) {
      return isHoodies ? "col" : "d-none";
    } else if (info.category == 4) {
      return isPants ? "col" : "d-none";
    } else if (info.category == 6) {
      return isJeans ? "col" : "d-none";
    } else if (info.category == 8) {
      return isWallets ? "col" : "d-none";
    } else if (info.category == 9) {
      return isBelts ? "col" : "d-none";
    } else if (info.category == 10) {
      return isScarfs ? "col" : "d-none";
    } else if (info.category == 14) {
      return isSocks ? "col" : "d-none";
    } else if (info.category == 15) {
      return isUnderpants ? "col" : "d-none";
    } else if (info.category == 16) {
      return isBoxers ? "col" : "d-none";
    }
  };

  const returnProducts = () => {
    if (
      !isTShirt &&
      !isSweaters &&
      !isHoodies &&
      !isPants &&
      !isJeans &&
      !isWallets &&
      !isBelts &&
      !isScarfs &&
      !isSocks &&
      !isUnderpants &&
      !isBoxers
    ) {
      return store.menProducts.map((item, index) => (
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
                </span>
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
      return store.menProducts.map((item, index) => (
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
                </span>
              </div>
              <span className="card-text fauxLetters">
                {actions - turnRating(item.rating)}
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
          <h4>Menswear</h4>
          <div className="container-fluid my-1">
            <h6>Type of garmnet</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="tshirtCheck"
                onClick={() => console.log("T-Shirt Working")}
              />
              <label className="form-check-label" htmlFor="tshirtCheck">
                T-shirts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="sweatersCheck"
                onClick={() => console.log("Sweaters Working")}
              />
              <label className="form-check-label" htmlFor="sweatersCheck">
                Sweaters
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="hoodieCheck"
                onClick={() => console.log("Hoodies Working")}
              />
              <label className="form-check-label" htmlFor="hoodieCheck">
                Hoodies
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="pantsCheck"
                onClick={() => console.log("Pants Working")}
              />
              <label className="form-check-label" htmlFor="pantsCheck">
                Pants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="jeansCheck"
                onClick={() => console.log("Jeans Working")}
              />
              <label className="form-check-label" htmlFor="jeansCheck">
                Jeans
              </label>
            </div>
          </div>
          <div className="container-fluid my-1">
            <h6>Accessories</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="walletsCheck"
                onClick={() => console.log("Wallets Working")}
              />
              <label className="form-check-label" htmlFor="walletsCheck">
                Wallets
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="beltsCheck"
                onClick={() => console.log("Belts Working")}
              />
              <label className="form-check-label" htmlFor="beltsCheck">
                Belts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="scarfsCheck"
                onClick={() => console.log("Scarfs Working")}
              />
              <label className="form-check-label" htmlFor="scarfsCheck">
                Scarfs
              </label>
            </div>
          </div>
          <div className="container-fluid my-1">
            <h6>Undergarments</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="socksCheck"
                onClick={() => console.log("Socks Working")}
              />
              <label className="form-check-label" htmlFor="socksCheck">
                Socks
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="underpantsCheck"
                onClick={() => console.log("Underpants Working")}
              />
              <label className="form-check-label" htmlFor="underpantsCheck">
                Underpants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="boxersCheck"
                onClick={() => console.log("Boxers Working")}
              />
              <label className="form-check-label" htmlFor="boxersCheck">
                Boxers
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
                    <h5 className="card-title">T-shirt</h5>
                    <div className="d-flex">
                      <span className="card-text me-auto">$4000</span>
                      <span className="card-text fauxLeters fs-5">
                        <FaRegHeart />
                      </span>
                    </div>
                    <span className="card-text fauxLeters">
                      {actions.turnRating(4)}
                    </span>
                    <span className="card-text ms-1">(200)</span> <br />
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
