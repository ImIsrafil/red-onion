import React from "react";
import "./SignUp.css";
import RedOnionLogo from "../../../images/logo2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-screen-2xl m-auto h-[100vh] background-signup py-14">
      <div className="w-full">
        <div className="bg-white max-w-sm m-auto rounded-md shadow-md">
          <div className="flex justify-center">
            <img className="h-[50px] -mt-2" src={RedOnionLogo} alt="" />
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <input
              className="w-full px-5 py-2"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="w-full px-5 py-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-full px-5 py-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              className="w-full px-5 py-2"
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
            />
            <button
              className="w-full text-center py-3 mt-5 text-base text-gray-50 font-bold bg-red-700 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center py-4">
            <Link to="/login">
              <button className="text-purple-400 font-medium text-xs">
                Already have an Account? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
