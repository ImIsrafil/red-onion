import React, { useState } from 'react'
import Home from './components/Pages/Home/Home'
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Breakfast from './components/Breakfast/Breakfast';
import AppContext from './context/AppContext';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import FoodReview from './components/Pages/FoodReview/FoodReview';


const App = () => {
  const [data, setData] = useState({});

  return (
    <AppContext data={data} setData={setData}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} >
            <Route path='/'element={<Breakfast/>} />
            <Route path='breakfast' element={<Breakfast />} />
            <Route path='/lunch' element={<Lunch/>} />
            <Route path='/dinner' element={<Dinner />} />
        </Route>
        <Route path='/breakfast/:foodId' element={<FoodReview></FoodReview>}></Route>
        <Route path='/lunch/:foodId' element={<FoodReview></FoodReview>}></Route>
        <Route path='/dinner/:foodId' element={<FoodReview></FoodReview>}></Route>
    </Routes>
    </BrowserRouter>
    </AppContext>
  )
}

export default App
