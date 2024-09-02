import React from 'react';
import { FaBox } from 'react-icons/fa';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/login'); 
  };
  return (
    <div>
      <Navbar/>
      <div className='grid xl:grid-cols-2 gap-4 w-full h-full bg-slate-200'>
        <div className='flex flex-col text-start order-2 xl:order-none p-4 justify-center w-full'>
          <div className='text-gray-800 font-bold rounded-3xl bg-white p-2 xl:text-2xl text-center'>
            Enjoy 50% OFF in Our Summer Festival Sale!
          </div>
          <div className='m-4 xl:text-5xl text-2xl font-bold'>
            <p className='xl:mb-4'>Step into Fashion at Your</p>
            <p className='xl:mt-4'>Ultimate Style Destination!</p>
          </div>
          <div className='m-3 xl:text-xl text-gray-400'>
            Explore a World of Fashion Possibilities with Exclusive Discounts - Dive into Your Ultimate Style Destination and Elevate Your Wardrobe Today!
          </div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-md text-center p-2 w-40 font-bold text-xl border border-black m-4"
            onClick={handleExploreClick}
          >
            Explore →
          </button>
        </div>
        <div className='order-1 xl:order-none flex justify-center items-center text-center'>
          <img
            src='/image3.png'
            className='xl:h-[500px] xl:w-[45%] w-[50%] h-auto object-contain'
            alt='Fashion Sale'
          />
        </div>
      </div>
      <div className='flex flex-row justify-between p-4'>
        <div className='text-black flex flex-row'>
          <FaBox className='xl:text-7xl text-5xl m-2' />
          <div className='m-2'>
            <p className='text-2xl font-bold'>Free Shipping</p>
            <p>Free Shipping for order above $180</p>
          </div>
        </div>
        <div className='text-black flex flex-row'>
          <FaBox className='xl:text-7xl text-5xl m-2' />
          <div className='m-2'>
            <p className='text-2xl font-bold'>Flexible Payment</p>
            <p>Multiple secure payment options</p>
          </div>
        </div>
        <div className='text-black flex flex-row'>
          <FaBox className='xl:text-7xl text-5xl m-2' />
          <div className='m-2'>
            <p className='text-2xl font-bold'>24*7 Support</p>
            <p>We Support Online all days</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center text-start'>
        <h3 className='m-3 text-2xl text-center'>Our Products</h3>
        <p className='m-3 text-3xl font-bold text-center'>Our Best Selling Products</p>
        <div className='flex flex-col xl:flex-row justify-center'>
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
