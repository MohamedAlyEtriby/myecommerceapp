import React, { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { myfirecon } from "../context/firebasecon";
const Protected = ({ children }) => {
  const { user } = useContext(myfirecon);
  const user1=localStorage.getItem("user")
  useEffect(() => {
    console.log(user);
  }, [user]);
  if (user1) {
    return children;
  } else return <Navigate to="/login" />;
};

export default Protected;
