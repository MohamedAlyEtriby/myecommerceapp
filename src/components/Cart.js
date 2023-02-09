import React from "react";
import { useContext } from "react";
import { mycontext } from "../context/context";
import CartComponents from "./CartComponents";
import products from "../assets/fake-data/products";
import "./Cart.css";
const Cart = () => {
  const { mycart, cartonoff, total } = useContext(mycontext);
  return (
    <div className="zamalekk">
      <div className="leftz" onClick={() => cartonoff()}></div>
      <div className="rightz">
        <h2>YOUR Cart:</h2>
        <hr style={{height:"4px"}} />
        {total !== 0 ? (
          mycart.map((element, index) => {
            return (
              <CartComponents
                image={products[element.item].image01}
                title={products[element.item].title}
                price={products[element.item].price}
                id={index}
                del={element.item}
              />
            );
          })
        ) : (
          <h2>NO ITEMS IN YOUR CART</h2>
        )}
        <div className="totalle">
          <div>Total:{total}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
