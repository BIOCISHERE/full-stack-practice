import React, { useContext } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
  FaRegHeart,
} from "react-icons/fa6";

export const WomensProducts = () => {
  const turnRating = (info) => {
    if (info == 0) {
      return (
        <>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    } else if (info == 1) {
      return (
        <>
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    } else if (info == 2) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    } else if (info == 3) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    } else if (info == 4) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </>
      );
    } else if (info == 5) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    } else {
      return info;
    }
  };

  const response = [
    {
      id: "1",
      name: "T-Shrit",
      cost: "10.000",
      rating: "3",
      ratingVotes: "100",
      category: "1",
      amount: "10",
    },
    {
      id: "2",
      name: "T-Shrit",
      cost: "10.000",
      rating: "4",
      ratingVotes: "155",
      category: "1",
      amount: "10",
    },
    {
      id: "3",
      name: "Sweater",
      cost: "15.000",
      rating: "4",
      ratingVotes: "321",
      category: "2",
      amount: "10",
    },
    {
      id: "4",
      name: "Sweater",
      cost: "15.000",
      rating: "4",
      ratingVotes: "123",
      category: "2",
      amount: "10",
    },
    {
      id: "5",
      name: "Pant",
      cost: "5.000",
      rating: "4",
      ratingVotes: "50",
      category: "3",
      amount: "10",
    },
    {
      id: "6",
      name: "Pant",
      cost: "5.000",
      rating: "4",
      ratingVotes: "40",
      category: "3",
      amount: "10",
    },
    {
      id: "7",
      name: "Jean",
      cost: "7.500",
      rating: "4",
      ratingVotes: "20",
      category: "4",
      amount: "10",
    },
    {
      id: "8",
      name: "Jean",
      cost: "7.500",
      rating: "3",
      ratingVotes: "10",
      category: "4",
      amount: "10",
    },
    {
      id: "9",
      name: "Dress",
      cost: "15.000",
      rating: "3",
      ratingVotes: "89",
      category: "5",
      amount: "10",
    },
    {
      id: "10",
      name: "Dress",
      cost: "15.000",
      rating: "3",
      ratingVotes: "15",
      category: "5",
      amount: "10",
    },
    {
      id: "11",
      name: "Purse",
      cost: "20.000",
      rating: "5",
      ratingVotes: "64",
      category: "6",
      amount: "10",
    },
    {
      id: "12",
      name: "Purse",
      cost: "20.000",
      rating: "5",
      ratingVotes: "46",
      category: "6",
      amount: "10",
    },
    {
      id: "13",
      name: "Wallet",
      cost: "5.000",
      rating: "4",
      ratingVotes: "98",
      category: "7",
      amount: "10",
    },
    {
      id: "14",
      name: "Wallet",
      cost: "5.000",
      rating: "4",
      ratingVotes: "89",
      category: "7",
      amount: "10",
    },
    {
      id: "15",
      name: "Belt",
      cost: "4.000",
      rating: "4",
      ratingVotes: "34",
      category: "8",
      amount: "10",
    },
    {
      id: "16",
      name: "Belt",
      cost: "4.000",
      rating: "4",
      ratingVotes: "22",
      category: "8",
      amount: "10",
    },
    {
      id: "17",
      name: "Scarf",
      cost: "3.000",
      rating: "5",
      ratingVotes: "164",
      category: "9",
      amount: "10",
    },
    {
      id: "18",
      name: "Scarf",
      cost: "3.000",
      rating: "4",
      ratingVotes: "56",
      category: "9",
      amount: "10",
    },
    {
      id: "19",
      name: "Panties",
      cost: "4.500",
      rating: "5",
      ratingVotes: "57",
      category: "10",
      amount: "10",
    },
    {
      id: "20",
      name: "Panties",
      cost: "4.500",
      rating: "3",
      ratingVotes: "46",
      category: "10",
      amount: "10",
    },
    {
      id: "21",
      name: "Bra",
      cost: "4.500",
      rating: "5",
      ratingVotes: "457",
      category: "11",
      amount: "10",
    },
    {
      id: "22",
      name: "Bra",
      cost: "4.500",
      rating: "4",
      ratingVotes: "455",
      category: "11",
      amount: "10",
    },
    {
      id: "23",
      name: "Sock",
      cost: "3.000",
      rating: "4",
      ratingVotes: "100",
      category: "12",
      amount: "10",
    },
    {
      id: "24",
      name: "Panty",
      cost: "3.000",
      rating: "4",
      ratingVotes: "34",
      category: "12",
      amount: "10",
    },
  ];
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
              {response.map((item, index) => (
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
                        {turnRating(item.rating)}
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
