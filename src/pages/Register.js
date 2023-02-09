import React from "react";
import "./Register.css";
import { myfirecon } from "../context/firebasecon";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const { register, ahmed } = useContext(myfirecon);
  const [username, setusername] = useState("");
  const [passwo, setpasswo] = useState("");
  const [error, seterror] = useState("");
  const [error1, seterror1] = useState("");
  const navigate = useNavigate();

  const setreg = (e) => {
    e.preventDefault();
    if (!username || !passwo) {
      seterror1("Enter both email and password");

      return;
    }
    register(username, passwo)
      .then((user) => {
        navigate("/login");
         seterror("");
      })
      .catch((err) => {
        seterror("Email used");
        seterror1("");
      });
  };
  return (
    <div className="loginall">
      <div className="loginform">
        <h2>REGISTER FORM</h2>
        <form onSubmit={setreg}>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {error1 && (
            <div class="alert alert-danger" role="alert">
              {error1}
            </div>
          )}
          <div class="mb-3">
            <label hmtlfor="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label htmlfor="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setpasswo(e.target.value);
              }}
            />
          </div>
          <div class="mb-3 form-check"></div>
          <div className="logacc">
            <button type="submit" class="btn btn-outline-info">
              Enter to Login page after register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
