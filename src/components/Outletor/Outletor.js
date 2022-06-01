import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext'

const Outletor = () => {

    const {user} = useAppContext();

  return user.uid ? <Outlet /> : <Navigate replace to='/login' /> 
}

export default Outletor
