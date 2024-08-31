import React from 'react';

export default function ProductsCard() {
  return (
    <div className='w-84 bg-white shadow-md rounded-lg overflow-hidden m-4'>
      <div className='relative flex'>
        <img
          src='/image2.png'
          className='w-full h-60 object-cover'
          alt='Fashion Sale'
        />
        <p className='absolute top-2 left-2 bg-white w-20 p-2 text-green-600 text-center rounded-md shadow'>
          25% OFF
        </p>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-bold text-gray-800'>Trendy Graphic Tee</h3>
        <p>⭐ 4.8</p>
        <p className='text-xl text-gray-700 font-semibold'>Rs. 1200</p>
        <button className='mt-4 bg-green-600 text-white p-2 w-full rounded-md hover:bg-green-500 transition'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
