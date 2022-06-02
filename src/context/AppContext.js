import React, { createContext, useEffect } from "react";
import useFirebase from "../hooks/useFirebase";
import {
  setDataToDB,
  deleteFromDB,
  getStoredCart,
  clearTheCart,
} from "../utility/fakeDB";


export const Context = createContext({});

const AppContext = ({ children, data, setData, cart, setCart }) => {
  const { user, error, signInUsingGoogle, logOut, isLoading, setIsLoading } = useFirebase();
  useEffect(() => {
    fetch("http://localhost:3000/RedOnionData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
      setCart(getStoredCart());
  }, []);


  return (
    <Context.Provider
      value={{
        // App Data
        foods: data,
        cart,
        setCart,
        setDataToDB,
        deleteFromDB,
        getStoredCart,
        clearTheCart,
        // Handle Authetication
        isLoading,
        setIsLoading,
        user,
        error,
        signInUsingGoogle,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
