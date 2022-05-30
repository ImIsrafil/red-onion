import React from "react";
import useAppContext from "../../hooks/useAppContext";
import DinnerFood from "./DinnerFood/DinnerFood";

const Dinner = () => {
  const { foods } = useAppContext();

  return (
    <div className="grid grid-cols-3">
      {foods.dinner?.map((dinnerFood) => (
        <DinnerFood key={dinnerFood.id} dinnerFood={dinnerFood} />
      ))}
    </div>
  );
};

export default Dinner;
