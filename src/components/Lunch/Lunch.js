import React from 'react'
import useAppContext from '../../hooks/useAppContext';
import LunchFood from './LunchFood.js/LunchFood';

const Lunch = () => {
  const {foods} = useAppContext();
  return (
    <div className='grid grid-cols-3'>
      {
          foods.lunch?.map((lunchFood) => <LunchFood key={lunchFood.id} lunchFood={lunchFood}></LunchFood>)
      }
    </div>
  )
}

export default Lunch
