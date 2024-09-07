import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductsCard() {
  const navigate = useNavigate();

  // Function to handle click and navigate to the product details page
  const handleCardClick = () => {
    navigate('/product_details'); // Adjust the path to match your routing setup
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const cardHoverVariants = {
    hover: { scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="w-84 bg-white shadow-md rounded-lg overflow-hidden m-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative flex">
        <img
          src="/image2.png"
          className="w-full h-60 object-cover"
          alt="Fashion Sale"
        />
        <p className="absolute top-2 left-2 bg-white w-20 p-2 text-green-600 text-center rounded-md shadow">
          25% OFF
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">Trendy Graphic Tee</h3>
        <p>⭐ 4.8</p>
        <p className="text-xl text-gray-700 font-semibold">Rs. 1200</p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="mt-4 bg-green-600 text-white p-2 w-full rounded-md hover:bg-green-500 transition"
          onClick={(e) => { 
            e.stopPropagation(); // Prevents the button click from triggering the card click
            // Add to Cart functionality can be handled here
          }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
