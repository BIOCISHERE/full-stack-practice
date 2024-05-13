import React, { useContext, useState } from "react";
import tShirtUrl from "../../img/t-shirt.png";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 border border-primary text-center">
                <img className="img-fluid" src={tShirtUrl} alt="..." />
              </div>
              <div className="col-4 border border-primary">
                <h1>The id is: {store.fullResponse[id - 1].id}</h1>
                <h1>The name is: {store.fullResponse[id - 1].name}</h1>
                <h1>The cost is: {store.fullResponse[id - 1].cost}</h1>
                <h1>The rating is: {store.fullResponse[id - 1].rating}</h1>
                <h1>
                  The ratingVotes is : {store.fullResponse[id - 1].ratingVotes}
                </h1>
                <h1>The category is: {store.fullResponse[id - 1].category}</h1>
                <h1>The amount is: {store.fullResponse[id - 1].amount}</h1>
                <h1>
                  This product is for: {store.fullResponse[id - 1].productFor}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
