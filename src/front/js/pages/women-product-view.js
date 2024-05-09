import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const WomenProductView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <h1>The id is: {id}</h1>
    </div>
  );
};
