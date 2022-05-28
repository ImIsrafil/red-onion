import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useAppContext from '../../../hooks/useAppContext';
import {BsCart2} from 'react-icons/bs';

const FoodReview = () => {
  const [food, setFood] = useState({});
  const [foodQuantity, setFoodQuantity] = useState(1);
  const {foods} = useAppContext();
  const location = useLocation();
  const {foodId} = useParams();
  useEffect(() => {
    if(location.pathname.includes('breakfast')) {
      if(foods.breakfast?.length) {
        const findedFood = foods.breakfast.find(item => item.id === foodId);
        // console.log(findedFood);
        setFood(findedFood);
      } else {
        setFood({})
      }
    } else if (location.pathname.includes('lunch')) {
      if(foods.lunch?.length) {
        const findedFood = foods.lunch.find(item => item.id === foodId);
        // console.log(findedFood);
        setFood(findedFood);
      } else {
        setFood({})
      }
    } else if (location.pathname.includes('dinner')) {
      if (foods.dinner?.length) {
        const findedFood = foods.dinner.find(item => item.id === foodId);
        // console.log(findedFood);
        setFood(findedFood);
      } else {
        setFood({});
      }
    }
  }, [foods]);


  const minusFoodQuantity = () => {
    if(foodQuantity !== 1 && foodQuantity > 1) {
      setFoodQuantity(foodQuantity - 1);
    }
  }

  const plusFoodQuantity = () => {
    if(foodQuantity < 20) {
      setFoodQuantity(foodQuantity + 1);
    }
  }


  // console.log(foods);
  return (
    <div className='max-w-screen-2xl m-auto flex justify-center items-center gap-14 p-10 flex-wrap'>
      <div className='max-w-md'>
        <h1 className='text-5xl mb-10 text-slate-800 font-semibold'>{food?.name}</h1>
        <p className='text-base leading-7'>{food?.desc}</p>
        <div className='my-5 flex items-center gap-4'>
          <span className='block text-2xl font-bold text-slate-900'>${food?.price}</span>
          <div className='bg-gray-200 rounded-[30px]'>
            <button onClick={minusFoodQuantity} className='text-3xl p-3'>-</button>
            <span className='text-3xl p-3'>{foodQuantity}</span>
            <button onClick={plusFoodQuantity} className='text-3xl p-3'>+</button>
          </div>
        </div>
        <button className='bg-red-700 text-white px-6 py-3 text-xl flex items-center rounded-[30px]'>
          <BsCart2 className='inline mr-2'></BsCart2>
          <span>Add</span>
        </button>
      </div>
      <div className='max-w-md'>
        <img className='w-full' src={food?.img} alt="" />
      </div>
    </div>
  )
}

export default FoodReview

