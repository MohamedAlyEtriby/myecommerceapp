import React from "react";
import "./Register.css";
import { myfirecon } from "../context/firebasecon";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { sign, ahmed, setuser } = useContext(myfirecon);
  const [username, setusername] = useState("");
  const [passwo, setpasswo] = useState("");
  const [error, seterror] = useState("");
  const [error1, seterror1] = useState("");
  const navigate = useNavigate();
  const setreg = (e) => {
    e.preventDefault();
    sign(username, passwo)
      .then((user) => {
        setuser(user.user);
        navigate("/");
      })
      .catch((err) => {
        seterror(err.code.substring(5, 25).split("-").join(" "));
      });
  };
  return (
    <div className="loginall">
      <div className="loginform">
        <h2>LOGIN FORM</h2>
        {error && (
          <div class="alert alert-danger capi" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={setreg}>
          <div class="mb-3">
            <label hmtlfor="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <div id="emailHelp" class="form-text" style={{ color: "white" }}>
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
              placeholder="Enter Your"
              onChange={(e) => {
                setpasswo(e.target.value);
              }}
            />
          </div>
          <div class="mb-3 form-check"></div>
          <div className="logacc">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
            <label htmlFor="">Don't have an account?</label>
            <button type="button" class="btn btn-primary">
              <Link to="/Register">Register</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
