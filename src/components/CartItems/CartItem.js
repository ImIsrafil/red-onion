import React, { useEffect, useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import {ImCross} from 'react-icons/im'
import {BiMinus, BiPlus} from 'react-icons/bi'

const CartItem = ({item}) => {

  const {img, name, price, quantity, id} = item;
  const [itemQuantity, setItemQuantity] = useState(0);
  const {setDataToDB, setCart, getStoredCart, deleteFromDB} = useAppContext();

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

  const handleRemoveItem = (id) => {
    let itemToDelete = {};
    itemToDelete['foodId'] = id;
    deleteFromDB(itemToDelete);
    setCart(getStoredCart());
  }

  return (
    <div className="flex items-center mt-4">
      <img
        className="w-14 h-14"
        src={img}
        alt=""
      />
      <div className="w-[100px] ml-2">
        <h6 className="font font-semibold text-slate-700 leading-4">
          {name}
        </h6>
        <p className="font-bold text-lg text-slate-900 leading-7">{price}</p>
        <p className="text-sm text-gray-500 leading-4">Delivery Free</p>
      </div>
      <div className="mr-3">
        <button onClick={handleMinusQuantity} className="px-3 py-2 font-bold"><BiMinus /></button>
        <span className="px-3 py-2 font-bold">{itemQuantity}</span>
        <button onClick={handlePlusQuantity} className="px-3 py-2 font-bold"><BiPlus /></button>
      </div>
      <button onClick={() => handleRemoveItem(id)}><ImCross className="text-gray-500 text-xs font-light" /></button>
    </div>
  );
};

export default CartItem;
