import React, { useEffect, useState } from "react";
import useAppContext from "../../hooks/useAppContext";

const CartItem = ({item}) => {

  const {img, name, price, quantity, id} = item;
  const [itemQuantity, setItemQuantity] = useState(0);
  const {setDataToDB, setCart, getStoredCart} = useAppContext();

  useEffect(() => {
    setItemQuantity(quantity);
  }, []);

  const handleMinusQuantity = () => {
    if(itemQuantity > 1) {
      let qt = itemQuantity - 1;
      setItemQuantity(itemQuantity - 1);
      let sendCartItem = {}
      sendCartItem["foodId"] = id;
      sendCartItem["quantity"] = qt;
      setDataToDB(sendCartItem);
      setCart(getStoredCart());
    }
    
  }

  const handlePlusQuantity = () => {
    if(itemQuantity < 20) {
      let qt = itemQuantity + 1
      setItemQuantity(itemQuantity + 1);
      let sendCartItem = {}
      sendCartItem["foodId"] = id;
      sendCartItem["quantity"] = qt;
      setDataToDB(sendCartItem);
      setCart(getStoredCart());
    }
    
  }

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
        <button onClick={handleMinusQuantity} className="px-3 py-2 font-bold">-</button>
        <span className="px-3 py-2 font-bold">{itemQuantity}</span>
        <button onClick={handlePlusQuantity} className="px-3 py-2 font-bold">+</button>
      </div>
    </div>
  );
};

export default CartItem;
