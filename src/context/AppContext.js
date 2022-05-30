import React, { createContext, useEffect } from 'react'
import { setDataToDB, deleteFromDB, getStoredCart, clearTheCart } from '../utility/fakeDB';
// import useFakeDatabase from '../hooks/useFakeDatabase';

export const Context = createContext({});

const AppContext = ({children, data, setData, cart, setCart}) => {
  useEffect(() => {
    fetch('http://localhost:3000/RedOnionData.json')
    .then(res => res.json())
    .then(data => setData(data));
    setCart(getStoredCart());
  },[]);

  console.log('this is from app context', cart);
  return (
    <Context.Provider value={{foods: data, cart, setCart, setDataToDB, deleteFromDB, getStoredCart, clearTheCart}}>
      {children}
    </Context.Provider>
  )
}

export default AppContext;
