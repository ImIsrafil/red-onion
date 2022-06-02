import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import LoadingIcon from "../../images/Loading.gif";

const Outletor = () => {
  const location = useLocation();
  const { user, isLoading } = useAppContext();

  if(isLoading) {
    return (
      <div className="w-screen h-[100vh] flex justify-center items-center">
        <img src={LoadingIcon} alt="" />
      </div>
    )
  } else {
    return user.uid ? (
      <Outlet />
    ) : (
      <Navigate replace to="/login" state={{ from: location }} />
    );

  }
};

export default Outletor;
