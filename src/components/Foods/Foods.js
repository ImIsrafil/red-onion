import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Foods.css";

const Foods = () => {
  const [active, setActive] = useState("breakfast");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("breakfast")) {
      setActive("breakfast");
    } else if (location.pathname.includes("lunch")) {
      setActive("lunch");
    } else if (location.pathname.includes("dinner")) {
      setActive("dinner");
    } else {
      setActive("breakfast");
    }
  }, [location]);

  return (
    <div className="max-w-screen-2xl m-auto p-10 min-h-screen">
      <div className="flex justify-center gap-6 mb-12">
        <Link to="/home/breakfast">
          <button
            onClick={() => setActive("breakfast")}
            className={`font-semibold bg-transparent ${
              active === "breakfast" ? "border" : ""
            }`}
          >
            Breakfast
          </button>
        </Link>
        <Link to="/home/lunch">
          <button
            onClick={() => setActive("lunch")}
            className={`font-semibold bg-transparent ${
              active === "lunch" ? "border" : ""
            }`}
          >
            Lunch
          </button>
        </Link>
        <Link to="/home/dinner">
          <button
            onClick={() => setActive("dinner")}
            className={`font-semibold bg-transparent ${
              active === "dinner" ? "border" : ""
            }`}
          >
            Dinner
          </button>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Foods;
