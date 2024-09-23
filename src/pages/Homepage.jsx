import React, { useContext } from 'react';
import { FaBox } from 'react-icons/fa';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';

export default function Homepage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  // Handler for the explore button click
  const handleExploreClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/shop');
    }
  };

  // Animation variants for different elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className='grid xl:grid-cols-2 gap-4 w-full h-full bg-slate-200 p-4'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className='flex flex-col text-start order-2 xl:order-none p-4 justify-center w-full'
          variants={slideIn}
        >
          <motion.div
            className='text-gray-800 font-bold rounded-3xl bg-white p-2 xl:text-2xl text-center'
            variants={fadeIn}
          >
            Enjoy 50% OFF in Our Summer Festival Sale!
          </motion.div>
          <motion.div className='m-4 xl:text-5xl text-2xl font-bold text-center' variants={fadeIn}>
            <p className='xl:mb-4'>Step into Fashion at Your</p>
            <p className='xl:mt-4'>Ultimate Style Destination!</p>
          </motion.div>
          <motion.div className='m-3 xl:text-xl text-gray-400 text-center' variants={fadeIn}>
            Explore a World of Fashion Possibilities with Exclusive Discounts - Dive into Your
            Ultimate Style Destination and Elevate Your Wardrobe Today!
          </motion.div>
          <motion.button
            type="button" // Change type to "button"
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-md text-center p-2 w-full sm:w-40 font-bold text-xl border border-black m-4"
            onClick={handleExploreClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore →
          </motion.button>
        </motion.div>
        <motion.div
          className='order-1 xl:order-none flex justify-center items-center text-center'
          variants={zoomIn}
        >
          <img
            src='/image3.png'
            className='xl:h-[500px] xl:w-[45%] w-[80%] h-auto object-contain'
            alt='Fashion Sale'
          />
        </motion.div>
      </motion.div>
      <motion.div
        className='flex flex-col md:flex-row justify-between p-4'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className='text-black flex flex-col md:flex-row items-center mb-4 md:mb-0' variants={slideIn}>
          <FaBox className='xl:text-7xl text-5xl m-2' />
          <div className='m-2 text-center md:text-left'>
            <p className='text-2xl font-bold'>Free Shipping</p>
            <p>Free Shipping for orders above $180</p>
          </div>
        </motion.div>
        <motion.div className='text-black flex flex-col md:flex-row items-center mb-4 md:mb-0' variants={slideIn}>
          <FaBox className='xl:text-7xl text-5xl m-2' />
          <div className='m-2 text-center md:text-left'>
            <p className='text-2xl font-bold'>Flexible Payment</p>
            <p>Multiple secure payment options</p>
          </div>
        </motion.div>
        <motion.div className='text-black flex flex-col md:flex-row items-center' variants={slideIn}>
          <FaBox className='xl:text-7xl text-5xl m-2' />
          <div className='m-2 text-center md:text-left'>
            <p className='text-2xl font-bold'>24*7 Support</p>
            <p>We support online all days</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className='flex flex-col justify-center text-start'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className='m-3 text-2xl text-center'>Our Products</h3>
        <p className='m-3 text-3xl font-bold text-center'>Our Best Selling Products</p>
        <motion.div className='flex flex-col md:flex-row justify-center' variants={fadeIn}>
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
