import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import BreakfastFood from './BreakfastFood.js/BreakfastFood';

const Breakfast = () => {
  const {foods} = useAppContext();
  return (
    <div className='grid grid-cols-3'>
      {
          foods.breakfast?.map((breakfastFood) => <BreakfastFood breakfastFood={breakfastFood} key={breakfastFood.id}></BreakfastFood>)
      }
    </div>
  )
}

export default Breakfast
