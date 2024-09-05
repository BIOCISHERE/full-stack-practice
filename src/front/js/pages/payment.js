import React from "react";

export const Payment = () => {
  const test = "example@gmail.com";
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
          <div className="container-fluid my-3">
            <div className="border border-dark">
              <span className="ms-3">Contact Info: {test}</span>
            </div>
            <div className="border border-dark">
              <span className="ms-3">Send to: {test}</span>
            </div>
          </div>
          <div className="container-fluid">
            <h2>Payment</h2>
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
