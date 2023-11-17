import React, { useEffect, useState } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { useNavigate } from "react-router";

export const myfirecon = createContext("");

const Contextfirepro = ({ children }) => {
  const [user, setuser] = useState("");
  const navv = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (userr) => {
      if (userr) {
        navv("/");
        setuser(userr);
        localStorage.setItem("user", userr); 
      } else {
        localStorage.removeItem("user");
      }
    });
  }, [user]);
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const sign = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    localStorage.removeItem("user");

    return signOut(auth);
  };
  return (
    <myfirecon.Provider
      value={{ ahmed: "aly", register, sign, signout, setuser, user }}
    >
      {children}
    </myfirecon.Provider>
  );
};
export default Contextfirepro;
