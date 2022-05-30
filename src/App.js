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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
