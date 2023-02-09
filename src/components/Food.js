import React, { useState } from "react";
import products from "../assets/fake-data/products";
import "./food.css";
import { useContext } from "react";
import { mycontext } from "../context/context";
function Food({ image, price, id, title, setft, sahwla, loon }) {
  const { addtocart, mycart, cartnuma } = useContext(mycontext);
  const incartor = () => {
    const x = mycart.find((element) => element.item === id);
    if (x) {
      return true;
    } else return false;
  };
  return (
    <div className="fod">
      <img src={image} alt="" />
      <h6 className="tittle">{title}</h6>
      <div className="foodinfo">
        <p>Price $ : {price}</p>
        {incartor() ? (
          <button className={`btn btn-danger`} disabled={true}>
            In cart
          </button>
        ) : (
          <button
            className={`btn btn-danger`}
            onClick={() => {
              addtocart(id, price);
              cartnuma();
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Food;
