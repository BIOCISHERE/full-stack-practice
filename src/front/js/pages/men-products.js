import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";
import ProductCard from "../component/productCard";

export const MenProducts = () => {
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
        <ProductCard
          key={index}
          cardClass="col"
          cardId={item.id}
          name={item.name}
          cost={item.cost}
          rating={item.rating}
          ratingVotes={item.ratingVotes}
        />
        /*<div className="col" key={index}>
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
        </div>*/
      ));
    } else {
      return store.menProducts.map((item, index) => (
        <ProductCard
          key={index}
          cardClass={turnClass(item)}
          cardId={item.id}
          name={item.name}
          cost={item.cost}
          rating={item.rating}
          ratingVotes={item.ratingVotes}
        />
        /*<div className={turnClass(item)} key={index}>
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
        </div>*/
      ));
    }
  };

  return (
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-dark-subtle rounded-end">
          <h4>Menswear</h4>
          <div className="container-fluid my-1">
            <h6>Type of garmnet</h6>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="tshirtCheck"
                onClick={() => setIsTShirt(!isTShirt)}
              />
              <label className="form-check-label" htmlFor="tshirtCheck">
                T-shirts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="sweatersCheck"
                onClick={() => setIsSweaters(!isSweaters)}
              />
              <label className="form-check-label" htmlFor="sweatersCheck">
                Sweaters
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="hoodieCheck"
                onClick={() => setIsHoodies(!isHoodies)}
              />
              <label className="form-check-label" htmlFor="hoodieCheck">
                Hoodies
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="pantsCheck"
                onClick={() => setIsPants(!isPants)}
              />
              <label className="form-check-label" htmlFor="pantsCheck">
                Pants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="jeansCheck"
                onClick={() => setIsJeans(!isJeans)}
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
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="walletsCheck"
                onClick={() => setIsWallets(!isWallets)}
              />
              <label className="form-check-label" htmlFor="walletsCheck">
                Wallets
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="beltsCheck"
                onClick={() => setIsBelts(!isBelts)}
              />
              <label className="form-check-label" htmlFor="beltsCheck">
                Belts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="scarfsCheck"
                onClick={() => setIsScarfs(!isScarfs)}
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
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="socksCheck"
                onClick={() => setIsSocks(!isSocks)}
              />
              <label className="form-check-label" htmlFor="socksCheck">
                Socks
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="underpantsCheck"
                onClick={() => setIsUnderpants(!isUnderpants)}
              />
              <label className="form-check-label" htmlFor="underpantsCheck">
                Underpants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="boxersCheck"
                onClick={() => setIsBoxers(!isBoxers)}
              />
              <label className="form-check-label" htmlFor="boxersCheck">
                Boxers
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
