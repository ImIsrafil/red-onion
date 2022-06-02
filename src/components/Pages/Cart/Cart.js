import React from 'react'
import CartComponent from '../../CartComponent/CartComponent';
import EditDetails from '../../EditDetails/EditDetails';

const Cart = () => {
  return (
    <div className='max-w-screen-2xl m-auto py-14'>
        <div className='grid grid-cols-2'>
            <div>
                <EditDetails />
            </div>
            <div>
                <CartComponent />
            </div>
        </div>
    </div>
  )
}

export default Cart
