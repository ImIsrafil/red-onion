import React from "react";

const CartItem = ({item}) => {

  const {img, name, price, quantity} = item;

  return (
    <div className="flex items-center mt-4">
      <img
        className="w-14 h-14"
        src={img}
        alt=""
      />
      <div className="w-[200px] ml-2">
        <h6 className="font font-semibold text-slate-700 leading-3">
          {name}
        </h6>
        <p className="font-bold text-lg text-slate-900 leading-7">{price}</p>
        <p className="text-sm text-gray-500 leading-4">Delivery Free</p>
      </div>
      <div className="">
        <button className="px-3 py-2 font-bold">-</button>
        <span className="px-3 py-2 font-bold">{quantity}</span>
        <button className="px-3 py-2 font-bold">+</button>
      </div>
    </div>
  );
};

export default CartItem;
