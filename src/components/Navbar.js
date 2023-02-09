import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../assets/images/res-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "../context/context";
import { myfirecon } from "../context/firebasecon";
function Navbar({ check }) {
  const { signout, setuser, user } = useContext(myfirecon);
  const signoutt = () => {
    signout().then((use) => {
      setuser("");
    });
  };
  const { cartonoff, cartnumm } = useContext(mycontext);
  return (
    <div className="mynav">
      <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid" className="bar">
          <a class="navbar-brand thesora" href="#">
            <img src={logo} alt="" style={{ width: "60px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navlinks"
            id="navbarNavAltMarkup"
          >
            <div
              class="navbar-nav"
              style={{  marginRight: "20px" }}
            >
              <Link to="/" class="nav-link">
                Home
              </Link>
              <Link to="/food" class="nav-link">
                Food
              </Link>
              <div
                onClick={() => cartonoff()}
                className="nav-link"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingBasketIcon />
                <span>{cartnumm}</span>
              </div>

              <button onClick={signoutt} class="nav-link" style={{border:"none"}}>
                Signout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
