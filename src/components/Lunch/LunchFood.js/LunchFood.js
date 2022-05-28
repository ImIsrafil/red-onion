import React from 'react'
import { Link } from 'react-router-dom';

const LunchFood = ({lunchFood}) => {
    const {name, img, price, desc, id} = lunchFood;
  return (
    <Link to={`/lunch/${id}`}>
      <div className='flex flex-col items-center'>
        <img className='h-44' src={img} alt="" />
      <div className='text-center'>
        <p className='text-base font-medium text-slate-900'>{name}</p>
        <small className='text-[0.7rem] text-gray-500'>{desc?.slice(0, 45)}</small>
        <p className='text-lg font-bold text-slate-900'>${price}</p>
      </div>
    </div>
    </Link>
  )
}

export default LunchFood
