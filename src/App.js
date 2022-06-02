import React, { useState } from "react";
import Home from "./components/Pages/Home/Home";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breakfast from "./components/Breakfast/Breakfast";
import AppContext from "./context/AppContext";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";
import FoodReview from "./components/Pages/FoodReview/FoodReview";
import NotFound from "./components/Pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import SignUp from "./components/Pages/SignUp/SignUp";
import Login from "./components/Pages/Login/Login";
import Cart from "./components/Pages/Cart/Cart";
import Outletor from "./components/Outletor/Outletor";
import Inventory from "./components/Pages/Inventory/Inventory";

const App = () => {
  const [data, setData] = useState({});
  const [cart, setCart] = useState({});

  return (
    <AppContext data={data} setData={setData} cart={cart} setCart={setCart}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path="/" element={<Breakfast />} />
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="/home" element={<Breakfast />} />
            <Route path="/home/breakfast" element={<Breakfast />} />
            <Route path="/home/lunch" element={<Lunch />} />
            <Route path="/home/dinner" element={<Dinner />} />
          </Route>
          <Route
            path="/breakfast/:foodId"
            element={<FoodReview></FoodReview>}
          ></Route>
          <Route
            path="/lunch/:foodId"
            element={<FoodReview></FoodReview>}
          ></Route>
          <Route
            path="/dinner/:foodId"
            element={<FoodReview></FoodReview>}
          ></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Outletor />}>
            <Route path="cart" element={<Cart />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
