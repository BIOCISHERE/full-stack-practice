import React, { useContext, useEffect, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const WomensProducts = () => {
  const { store, actions } = useContext(Context);

  const [isResponse, setIsResponse] = useState([]);

  useEffect(() => {
    setIsResponse(store.response);
  }, []);

  return (
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-primary">
          <h4>Womenswear</h4>
          <div className="container-fluid my-1">
            <h6>Type of garment</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="t-shirtsCheck"
              />
              <label className="form-check-label" htmlFor="t-shirtsCheck">
                T-shirts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="sweatersCheck"
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
                id="pantsCheck"
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
              />
              <label className="form-check-label" htmlFor="jeansCheck">
                Jeans
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="dressesCheck"
              />
              <label className="form-check-label" htmlFor="dressesCheck">
                Dresses
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
                id="pursesCheck"
              />
              <label className="form-check-label" htmlFor="pursesCheck">
                Purses
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="walletsCheck"
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
              />
              <label className="form-check-label" htmlFor="scarfsCheck">
                Scarfs
              </label>
            </div>
          </div>
          <div className="container-fluid my-1">
            <h6>Underwear</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="pantiesCheck"
              />
              <label className="form-check-label" htmlFor="pantiesCheck">
                Panties
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="brasCheck"
              />
              <label className="form-check-label" htmlFor="brasCheck">
                Bras
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="pantysCheck"
              />
              <label className="form-check-label" htmlFor="pantysCheck">
                Pantys/Socks
              </label>
            </div>
          </div>
        </div>
        <div className="col-10 border border-primary">
          <div className="container-fluid">
            <div className="row">
              {isResponse.map((item, index) => (
                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
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
                        <span className="card-text fauxLeters fs-5">
                          <FaRegHeart />
                        </span>
                      </div>
                      <span className="card-text fauxLeters">
                        {actions.turnRating(item.rating, FaRegStar, FaStar)}
                      </span>
                      <span className="card-text ms-1">
                        ({item.ratingVotes})
                      </span>
                      <br />
                      <Link to="/" className="btn btn-primary mt-1">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
