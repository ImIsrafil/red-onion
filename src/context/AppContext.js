import React, { createContext, useEffect } from 'react'
import useFirebase from '../hooks/useFirebase';
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

  const {user, error, signInUsingGoogle, logOut} = useFirebase();

  return (
    <Context.Provider value={{
      foods: data,
      cart,
      setCart, 
      setDataToDB, 
      deleteFromDB, 
      getStoredCart, 
      clearTheCart,
      user,
      error,
      signInUsingGoogle,
      logOut
      }}
      >
      {children}
    </Context.Provider>
  )
}

export default AppContext;
