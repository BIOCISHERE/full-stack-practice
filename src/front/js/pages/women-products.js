import React, { useContext, useEffect, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ProductCard from "../component/productCard";

export const WomenProducts = () => {
  const { store, actions } = useContext(Context);

  const [isTShirt, setIsTShirt] = useState(false);
  const [isSweaters, setIsSweaters] = useState(false);
  const [isPants, setIsPants] = useState(false);
  const [isJeans, setIsJeans] = useState(false);
  const [isDresses, setIsDresses] = useState(false);
  const [isPurses, setIsPurses] = useState(false);
  const [isWallets, setIsWallets] = useState(false);
  const [isBelts, setIsBelts] = useState(false);
  const [isScarfs, setIsScarfs] = useState(false);
  const [isPanties, setIsPanties] = useState(false);
  const [isBras, setIsBras] = useState(false);
  const [isPantys, setIsPantys] = useState(false);
  const [isSocks, setIsSocks] = useState(false);

  const turnClass = (info) => {
    if (info.category == 1) {
      return isTShirt ? "col" : "d-none";
    } else if (info.category == 2) {
      return isSweaters ? "col" : "d-none";
    } else if (info.category == 4) {
      return isPants ? "col" : "d-none";
    } else if (info.category == 6) {
      return isJeans ? "col" : "d-none";
    } else if (info.category == 5) {
      return isDresses ? "col" : "d-none";
    } else if (info.category == 7) {
      return isPurses ? "col" : "d-none";
    } else if (info.category == 8) {
      return isWallets ? "col" : "d-none";
    } else if (info.category == 9) {
      return isBelts ? "col" : "d-none";
    } else if (info.category == 10) {
      return isScarfs ? "col" : "d-none";
    } else if (info.category == 11) {
      return isPanties ? "col" : "d-none";
    } else if (info.category == 12) {
      return isBras ? "col" : "d-none";
    } else if (info.category == 13) {
      return isPantys ? "col" : "d-none";
    } else if (info.category == 14) {
      return isSocks ? "col" : "d-none";
    }
  };

  const returnProducts = () => {
    if (
      !isTShirt &&
      !isSweaters &&
      !isPants &&
      !isJeans &&
      !isDresses &&
      !isPurses &&
      !isWallets &&
      !isBelts &&
      !isScarfs &&
      !isPanties &&
      !isBras &&
      !isPantys &&
      !isSocks
    ) {
      return store.womenProducts.map((item, index) => (
        <ProductCard
          key={index}
          cardClass="col"
          cardId={item.id}
          name={item.name}
          cost={item.cost}
          rating={item.rating}
          ratingVotes={item.ratingVotes}
        />
      ));
    } else {
      return store.womenProducts.map((item, index) => (
        <ProductCard
          key={index}
          cardClass={turnClass(item)}
          cardId={item.id}
          name={item.name}
          cost={item.cost}
          rating={item.rating}
          ratingVotes={item.ratingVotes}
        />
      ));
    }
  };

  return (
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-dark-subtle rounded-end">
          <h4>Womenswear</h4>
          <div className="container-fluid my-1">
            <h6>Type of garment</h6>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="t-shirtsCheck"
                onClick={() => setIsTShirt(!isTShirt)}
              />
              <label className="form-check-label" htmlFor="t-shirtsCheck">
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
                id="dressesCheck"
                onClick={() => setIsDresses(!isDresses)}
              />
              <label className="form-check-label" htmlFor="dressesCheck">
                Dresses
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
                id="pursesCheck"
                onClick={() => setIsPurses(!isPurses)}
              />
              <label className="form-check-label" htmlFor="pursesCheck">
                Purses
              </label>
            </div>
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
                id="pantiesCheck"
                onClick={() => setIsPanties(!isPanties)}
              />
              <label className="form-check-label" htmlFor="pantiesCheck">
                Panties
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="brasCheck"
                onClick={() => setIsBras(!isBras)}
              />
              <label className="form-check-label" htmlFor="brasCheck">
                Bras
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="pantysCheck"
                onClick={() => setIsPantys(!isPantys)}
              />
              <label className="form-check-label" htmlFor="pantysCheck">
                Pantys
              </label>
            </div>
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
