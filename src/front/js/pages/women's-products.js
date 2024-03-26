import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const WomensProducts = () => {
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
              <label className="form-check-label" for="t-shirtsCheck">
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
              <label className="form-check-label" for="sweatersCheck">
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
              <label className="form-check-label" for="pantsCheck">
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
              <label className="form-check-label" for="jeansCheck">
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
              <label className="form-check-label" for="dressesCheck">
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
              <label className="form-check-label" for="pursesCheck">
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
              <label className="form-check-label" for="walletsCheck">
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
              <label className="form-check-label" for="beltsCheck">
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
              <label className="form-check-label" for="scarfsCheck">
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
              <label className="form-check-label" for="pantiesCheck">
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
              <label className="form-check-label" for="brasCheck">
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
              <label className="form-check-label" for="pantysCheck">
                Pantys/Socks
              </label>
            </div>
          </div>
        </div>
        <div className="col-10 border border-primary">
          <span>women's products 2</span>
        </div>
      </div>
    </div>
  );
};
