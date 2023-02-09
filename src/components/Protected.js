import React, { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { myfirecon } from "../context/firebasecon";
const Protected = ({ children }) => {
  const { user } = useContext(myfirecon);
  useEffect(() => {
    console.log(user);
  }, [user]);
  if (user) {
    return children;
  } else return <Navigate to="/login" />;
};

export default Protected;
