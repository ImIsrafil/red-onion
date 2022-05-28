import React from 'react'
import Logo from '../../images/logo2.png';
import { BsCart2 } from 'react-icons/bs'
import {MdHome} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='max-w-screen-2xl m-auto px-10 py-4 flex justify-between items-center'>
        <div className='logo max-w-[150px] md:max-w-[100px]'>
            <img className='w-full' src={Logo} alt="" />
        </div>
        <div className='flex gap-6 items-center'>
            <Link to='/home'><button className='text-xl text-red-700'><MdHome /></button></Link>
            <Link to='/cart'><button className='text-xl'><BsCart2 /></button></Link>
            <Link to='/login'><button className='text-sm font-semibold'>Login</button></Link>
            <Link to='/signup'><button className='text-sm text-gray-50 px-5 py-2 bg-red-700 rounded-3xl'>Sign up</button></Link>
        </div>
    </div>
  )
}

export default Header
