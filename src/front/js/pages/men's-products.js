import React from "react";

export const MensProducts = () => {
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
          men's products part 2
        </div>
      </div>
    </div>
  );
};
