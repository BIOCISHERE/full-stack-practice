import React, { useContext } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const MensProducts = () => {
  const { store, actions } = useContext(Context);

  const response1 = [
    // we need to decide what are the categories going to be
    {
      id: "25",
      name: "T-Shrit",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "26",
      name: "T-Shrit",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "27",
      name: "Hoodie",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "28",
      name: "Sweater",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "29",
      name: "Pant",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "30",
      name: "Pant",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "31",
      name: "Jean",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "32",
      name: "Jean",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "33",
      name: "Wallet",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "34",
      name: "Wallet",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "35",
      name: "Belt",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "36",
      name: "Belt",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "37",
      name: "Scarf",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "38",
      name: "Scarf",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "39",
      name: "Underpants",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "40",
      name: "Boxer",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "41",
      name: "Sock",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "42",
      name: "Sock",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
  ];

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
                id="hoodieCheck"
                onClick={() => console.log("Hoodie Working")}
              />
              <label className="form-check-label" htmlFor="hoodieCheck">
                Hoodies/Sweaters
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
            <h6>Underwear</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="underpantsCheck"
                onClick={() => console.log("Underpants Working")}
              />
              <label className="form-check-label" htmlFor="underpantsCheck">
                Underpants/Boxers
              </label>
            </div>
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
