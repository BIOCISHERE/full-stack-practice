import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa6";

export const LogIn = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Log In</h1>
      </div>
    </div>
  );
};
