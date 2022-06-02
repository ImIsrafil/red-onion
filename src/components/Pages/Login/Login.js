import React from "react";
import "./Login.css";
import RedOnionLogo from "../../../images/logo2.png";
import GoogleIcon from "../../../images/icons/GoogleLogo.png";
import FacebookIcon from "../../../images/icons/FacebookLogo.webp";
import TwitterIcon from "../../../images/icons/twitter.png";
import useAppContext from "../../../hooks/useAppContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle, setIsLoading} = useAppContext();

  const location = useLocation();
  const navigate = useNavigate();
  const uri = location.state? location.state.from : "/home";

  const handleSignInWithGoogle = () => {
    signInUsingGoogle()
    .then((result) => {
    })
    .finally(() => {
      setIsLoading(false);
      navigate(uri);
    })
  }

  return (
    <div className="max-w-screen-2xl m-auto background-login h-[100vh] py-12">
      <div className="w-full ">
        <div className="max-w-sm m-auto bg-white rounded-md shadow-md">
          <div className="flex justify-center">
            <img className="h-[50px] -mt-2" src={RedOnionLogo} alt="" />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <input
              className="px-5 py-2 w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="px-5 py-2 w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button
              className="w-[150px] py-2 text-center text-base text-gray-50 rounded bg-red-700"
              type="submit"
            >
              Submit
            </button>
          </div>
          <p className="text-center text-gray-500 mt-5">Login with</p>
          <div className="flex justify-center gap-5 py-5">
            <button>
              <img onClick={handleSignInWithGoogle} className="w-[30px]" src={GoogleIcon} alt="" />
            </button>
            <button>
              <img className="w-[30px]" src={FacebookIcon} alt="" />
            </button>
            <button>
              <img className="w-[30px]" src={TwitterIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
