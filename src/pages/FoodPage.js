import React, { useContext, useState } from "react";
import "./FoodPage.css";
import products from "../assets/fake-data/products";
import Food from "../components/Food";
import { useEffect } from "react";
import { useRef } from "react";
import Cart from "../components/Cart";
import { mycontext } from "../context/context";
const FoodPage = () => {
  const [selects, setselects] = useState("");
  const { carton } = useContext(mycontext);
  const [inputt, setinputt] = useState("");
  const [prod, setprod] = useState([...products]);
  let prod1 = JSON.parse(JSON.stringify(products));
  useEffect(() => {
    if (selects === "Lower Price") {
      const zamalek = prod.sort((a, b) => {
        return a.price - b.price;
      });
      setprod([...zamalek]);
      console.log(prod);
    } else if (selects === "Higher Price") {
      const zamalek = prod.sort((a, b) => {
        return a.price - b.price;
      });
      setprod([...zamalek.reverse()]);
      console.log(prod);
    } else if (selects === "Default") {
      prod1.forEach((item) => {
        item.title = item.title.toLocaleLowerCase();
      });
      const newarr = prod1.filter((item) => {
        return item.title.includes(inputt);
      });
      setprod([...newarr]);
    }
  }, [selects]);
  useEffect(() => {
    prod1.forEach((item) => {
      item.title = item.title.toLocaleLowerCase();
    });
    const newarr = prod1.filter((item) => {
      return item.title.includes(inputt);
    });
    if (selects === "Lower Price") {
      const zamalek = newarr.sort((a, b) => {
        return a.price - b.price;
      });
      setprod([...zamalek]);
    } else if (selects === "Higher Price") {
      const zamalek = newarr.sort((a, b) => {
        return a.price - b.price;
      });
      setprod([...zamalek.reverse()]);
    } else {
      console.log(newarr);
      setprod([...newarr]);
    }
  }, [inputt]);

  return (
    <div>
      {carton && <Cart />}
      <div className="backimg">
        <img
          src="https://www.shutterstock.com/image-photo/summer-bbq-food-corner-border-260nw-1765546103.jpg"
          alt=""
        />
      </div>
      <div className="container x">
        <div className="searching">
          <div className="searchin">
            <input
              type="text"
              placeholder="i am looking for"
              onChange={(e) => {
                setinputt(e.target.value);
              }}
              value={inputt}
            />
          </div>
          <div>
            <span>Sort By: </span>
            <select
              className="selectss btn-danger"
              onChange={(e) => {
                setselects(e.target.value);
              }}
            >
              <option>Default</option>
              <option>Higher Price</option>
              <option>Lower Price</option>
            </select>
          </div>
        </div>
        <div className="row">
          {prod.length > 0 ? (
            prod.map((item) => {
              return (
                <div className="col-md-4 col-12">
                  <Food
                    image={item.image01}
                    price={item.price}
                    id={item.id}
                    title={item.title}
                  />
                </div>
              );
            })
          ) : (
            <h2>No Product With this Name</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
