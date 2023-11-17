import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import products from "../assets/fake-data/products";
import logo from "../assets/images/hero.png";
import logo1 from "../assets/images/category-01.png";
import logo2 from "../assets/images/category-02.png";
import logo3 from "../assets/images/category-03.png";
import logo4 from "../assets/images/category-04.png";
import Four from "../components/Four";
import Food from "../components/Food";
import { useContext } from "react";
import { mycontext } from "../context/context";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
function Home() {
  const { carton } = useContext(mycontext);
  const [pro, setpro] = useState([...products]);
  const [pro1, setpro1] = useState([...products]);
  const [idd, setid] = useState("");
  const handleclick = (id) => {
    setid(id);
  };
  const handleburger = (Burger) => {
    let x = [];
    x = pro.filter((item) => item.category === Burger);
    setpro1(x);
  };
  const handlepizza = (Pizza) => {
    let x = [];
    x = pro.filter((item) => item.category === Pizza);
    setpro1(x);
  };
  const handlebread = (Bread) => {
    let x = [];
    x = pro.filter((item) => item.category === Bread);
    setpro1(x);
  };
  const handleall = () => {
    setpro1(pro);
  };
  return (
    <div>
      {carton && <Cart />}
      <div className="container heroo ">
        <div className="row ">
          <div className="col-md-6 sora col-12">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-6 col-12 infohome">
            <div>
              <h5>Easy to make Orders</h5>
              <h2>
                <span>Hungry?</span> Just wait food <span>at your door</span>
              </h2>
              <p style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                fugit rerum atque doloribus
              </p>
              <div className="but">
                <button className="btn btn-danger">Order Now</button>
                <button className="btn btn-dark">See All foods</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <Four image={logo1} title="Fast Food" />
          </div>
          <div className="col-12 col-md-3">
            <Four image={logo2} title="Pizza" />
          </div>
          <div className="col-12 col-md-3">
            <Four image={logo3} title="Asian Food" />
          </div>
          <div className="col-12 col-md-3">
            <Four image={logo4} title="Row meat" />
          </div>
        </div>
        <div className="row">
          <h2 style={{ textAlign: "center", marginTop: "60px" }}>
            Popular Foods
          </h2>
        </div>
        <div className="choose">
          <div className="categ">
            <div>
              <button className="btn btn-dark" onClick={handleall}>
                All
              </button>
            </div>
            <div>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleburger("Burger");
                }}
              >
                Burger
              </button>
            </div>
            <div>
              <button
                className="btn btn-info"
                onClick={() => {
                  handlepizza("Pizza");
                }}
              >
                Pizza
              </button>
            </div>
            <div>
              <button
                className="btn btn-light"
                onClick={() => {
                  handlebread("Bread");
                }}
              >
                Bread
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {pro1.map((item) => {
            return (
              <div className="col-md-4 col-12">
                <Food
                  image={item.image01}
                  price={item.price}
                  id={item.id}
                  title={item.title}
                  setft={handleclick}
                  loon={idd === item.id ? "abyad" : ""}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
