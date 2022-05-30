import React, { useEffect, useState } from 'react'
import Logo from '../../images/logo2.png';
import { BsCart2 } from 'react-icons/bs'
import {MdHome} from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext';

const Header = () => {
  const {cart} = useAppContext();
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const cartArr = []
    for(let key in cart) {
      cartArr.push(key);
    }
    setCartQuantity(cartArr.length);
    // console.log('this is cart length', cartArr.length);
  }, [cart]);

  return (
    <div className='max-w-screen-2xl m-auto px-10 py-4 flex justify-between items-baseline'>
        <div className='logo max-w-[150px] md:max-w-[100px]'>
            <img className='w-full' src={Logo} alt="" />
        </div>
        <div className='flex gap-6 items-center'>
            <Link to='/home'><button className='text-xl text-red-700'><MdHome /></button></Link>
            <Link to='/cart'><button className='text-xl relative'><span className='absolute -top-3 text-red-600 right-0 text-xs font-semibold'>{cartQuantity}</span><BsCart2 /></button></Link>
            <Link to='/login'><button className='text-sm font-semibold'>Login</button></Link>
            <Link to='/signup'><button className='text-sm text-gray-50 px-5 py-2 bg-red-700 rounded-3xl'>Sign up</button></Link>
        </div>
    </div>
  )
}

export default Header
