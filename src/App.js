import Home from "./pages/Home";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import FoodPage from "./pages/FoodPage";
import Funprovider, { mycontext } from "./context/context";
import Cart from "./components/Cart";
import FoodDetails from "./pages/FoodDetails";
import Register from "./pages/Register";
import Contextfirepro from "./context/firebasecon";
import Login from "./pages/Loginn";
import Protected from "./components/Protected";
import Food from "./components/Food";
function App() {
  return (
    <div>
      <Contextfirepro>
        <Funprovider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Protected>
                    <Navbar />
                    <Home />
                  </Protected>
                </>
              }
            />
            <Route
              path="/food"
              element={
                <>
                  <Protected>
                    <Navbar />
                    <FoodPage />
                  </Protected>
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/Register"
              element={
                <>
                  <Register />
                </>
              }
            />
          </Routes>
        </Funprovider>
      </Contextfirepro>
    </div>
  );
}

export default App;
