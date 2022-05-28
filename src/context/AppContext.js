import React, { createContext, useEffect } from 'react'

export const Context = createContext({});

const AppContext = ({children, data, setData}) => {
  useEffect(() => {
    fetch('http://localhost:3000/RedOnionData.json')
    .then(res => res.json())
    .then(data => setData(data));
  },[]);
  return (
    <Context.Provider value={{foods: data}}>
      {children}
    </Context.Provider>
  )
}

export default AppContext
