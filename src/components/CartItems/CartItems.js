import React, { useEffect, useState } from 'react'
import useAppContext from '../../hooks/useAppContext';
import CartItem from './CartItem';

const CartItems = ({setTotalPrice}) => {
  const [cartItems, setCartItems] = useState([]);
  const {cart, foods} = useAppContext();

  useEffect(() => {
    let breakfastLunchDinner = [...foods.breakfast, ...foods.lunch, ...foods.dinner];
    const findedCartItems = [];
    for(let key in cart) {
      for (let item of breakfastLunchDinner) {
        if(item.id === key) {
          item.quantity = cart[key];
          findedCartItems.push(item);
        }
      }
    }
    setCartItems(findedCartItems);
    let totalPrice = findedCartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);

  },[cart, foods]);

  return (
    <div>
      {
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      }
    </div>
  )
}

export default CartItems
