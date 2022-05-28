import React from 'react'
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className='max-w-screen-2xl m-auto relative background h-[500px]'>
      <div className='flex justify-center items-center h-[500px]'>
        <div className=''>
            <h1 className='text-5xl text-center font-sans font-medium'>
                Best food waiting for your belly
            </h1>
            <div className='flex justify-between max-w-sm m-auto bg-gray-50 rounded-3xl mt-8'>
            <input className='border-0 outline-none bg-transparent flex-1 px-5' type="text" placeholder='Search food items' />
            <button className='py-3 px-6 bg-red-600 rounded-3xl text-gray-50'>Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
