import React from 'react'
import Logo from '../../images/logo2.png';
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='max-w-screen-2xl m-auto px-10 py-4 flex justify-between'>
        <div className='logo max-w-[150px] md:max-w-[100]'>
            <img className='w-full' src={Logo} alt="" />
        </div>
        <div className='flex gap-6'>
            <button className='text-xl'><BsCart2  /></button>
            <button className='text-sm font-semibold'>Login</button>
            <button className='text-sm text-gray-50 px-5 py-2 bg-red-700 rounded-3xl'>Sign up</button>
        </div>
    </div>
  )
}

export default Header
