import React from 'react'
import CartItems from '../../CartItems/CartItems'

const Cart = () => {
  return (
    <div className='max-w-screen-2xl m-auto py-14'>
        <div className='grid grid-cols-2'>
            <div className=''>
                <div className='max-w-md m-auto'>
                    <div className='border-b-[1px] border-solid border-red-900 pb-2 mb-4'>
                        <h1 className='font-medium text-lg text-slate-900'>Edit Delivery Details</h1>
                    </div>
                    <div className='px-5 flex flex-col gap-5'>
                        <p>Delivery to Door</p>
                        <input type="text" name="address" id="address" placeholder='Address' />
                        <input type="text" name="home" id="home" placeholder='Flat, suite or floor' />
                        <input type="text" name="businesstype" id="business" placeholder='Business type' />
                        <input type="text" name="details" id="details" placeholder='Add delivery details' />
                    </div>
                    <div className='mt-5'>
                        <button className='bg-red-900 py-2 rounded text-gray-50 text-center w-full'>Save and Continue</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='max-w-md m-auto'>
                    <div className=''>
                        <p>From <span className='font-semibold text-red-900'>Gulshan Plaza Restuera GPR</span></p>
                        <p>Arriving in 20-30min</p>
                        <p>Address</p>
                    </div>
                    <div className='mt-3'>
                        <CartItems />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
