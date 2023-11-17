import React from "react";
import "./CartComponents.css";
import { useContext } from "react";
import { mycontext } from "../context/context";
import { Delete } from "@mui/icons-material";
const CartComponents = ({ title, price, image, id, del }) => {
  const { mycart, setcart, cartnuma, cartnumb, cartnumm, setcartnum } =
    useContext(mycontext);
  const delitem = (idd) => {
    const z = mycart.filter((element) => element.item !== idd);
    setcart([...z]);
    setcartnum(cartnumm - mycart[id].quantity);
  };
  const addquan = (which) => {
    mycart.forEach((element, index) => {
      if (index === id) {
        mycart[id].quantity++;
        setcart([...mycart]);
      }
    });
  };
  const subquan = (which, de) => {
    mycart.forEach((element, index) => {
      if (index === id) {
        if (mycart[id].quantity === 1) {
          const z = mycart.filter((element) => element.item !== del);
          setcart([...z]);
        } else {
          mycart[id].quantity--;
          setcart([...mycart]);
        }
      }
    });
  };
  return (
    <div className="component">
      <div className="soraa">
        <img src={image} alt="" />
      </div>
      <div className="informations">
        <div>{title}</div>
        <div>Price: $ {price * mycart[id].quantity}</div>
        <div className="quan">
   
          <button
            onClick={() => {
              subquan(id, del);
              cartnumb();
            }}
            className="btn"
          >
            -
          </button>
          <span>{mycart[id].quantity}</span>
          <button
            className="btn "
            onClick={() => {
              addquan(id);
              cartnuma();
            }}
          >
           +
          </button>
        </div>
      </div>
      <div className="addor">
        <button
          className="btn "
          onClick={() => {
            delitem(del);
          }}
        >
          <Delete/>
        </button>
      </div>
    </div>
  );
};

export default CartComponents;
