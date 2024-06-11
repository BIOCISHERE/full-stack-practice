import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShoppingCart = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Shopping cart</h1>
        </div>
      </div>
    </div>
  );
};
