import React from "react";

export const Payment = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Contact Info</h1>
          <div className="row">
            <div className="col">
              <span>Profile picture</span>
            </div>
            <div className="col">
              <span>Profile name</span> <br />
              <span>Profile mail</span> <br />
              <span>Profile phone</span>
            </div>
          </div>
        </div>
        <div className="col bg-body-secondary">
          <h1>Shopping cart</h1>
          <div className="row">
            <div className="col-3">Product</div>
            <div className="col-3">Price</div>
            <div className="col-3">Amount</div>
            <div className="col-3">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};
