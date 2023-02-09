import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const mycontext = createContext(null);

const Funprovider = ({ children }) => {
  const [mycart, setcart] = useState([]);
  const [carton, setcarton] = useState(false);
  const [total, settotal] = useState(0);
  const [cartnumm, setcartnum] = useState(0);
  let z = 0;
  useEffect(() => {
    mycart.forEach((element, index) => {
      z += element.quantity * element.price;
    });
    settotal(z);
  }, [mycart]);
  const cartnuma = () => {
    setcartnum(cartnumm + 1);
  };
  const cartnumb = () => {
    setcartnum(cartnumm - 1);
  };
  const addtocart = (item, price) => {
    setcart([...mycart, { item, quantity: 1, price }]);
  };
  const cartonoff = () => {
    setcarton(!carton);
  };
  return (
    <mycontext.Provider
      value={{
        addtocart,
        setcart,
        mycart,
        cartonoff,
        cartnuma,
        cartnumb,
        setcartnum,
        carton,
        total,
        cartnumm,
      }}
    >
      {children}
    </mycontext.Provider>
  );
};

export default Funprovider;
