import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../CartItems/CartItems";

const CartComponent = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceFixed = parseFloat(totalPrice.toPrecision(4));
  const tax = parseFloat(((totalPrice * 5) / 100).toPrecision(2));
  const finalPrice = parseFloat((tax + totalPrice).toPrecision(4));


  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate('/inventory');
  }

  return (
    <div className="max-w-md m-auto">
      <div className="">
        <p>
          From{" "}
          <span className="font-semibold text-red-900">
            Gulshan Plaza Restuera GPR
          </span>
        </p>
        <p>Arriving in 20-30min</p>
        <p>Address</p>
      </div>
      <div className="mt-3">
        <CartItems setTotalPrice={setTotalPrice} />
      </div>
      <div className="mt-3">
        <p>Total Price: ${totalPriceFixed}</p>
        <p>Tax: ${tax}</p>
        <p>Finnal Price: ${finalPrice}</p>
      </div>
      <div className="mt-3">
        <button onClick={handlePlaceOrder} className="py-2 px-6 bg-red-900 text-white rounded">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
