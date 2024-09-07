// ProductDetailsPage.js
import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import ProductsCard from '../components/ProductsCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductDetailsPage() {
  const navigate = useNavigate();

  // Dummy data for product details, replace with actual data fetching logic
  const product = {
    image: '/image2.png',
    title: 'Stylish Summer Dress',
    description: 'A perfect dress for your summer outings. Comfortable, stylish, and available in multiple colors.',
    price: '$49.99',
    reviews: [
      {
        username: 'Alice',
        rating: 4.5,
        comment: 'Love the dress! It fits perfectly and the material is great for summer.',
        date: '2024-09-05',
      },
      {
        username: 'John',
        rating: 5,
        comment: 'Amazing quality! My wife loved it. Highly recommended!',
        date: '2024-09-01',
      },
      {
        username: 'Sophia',
        rating: 4,
        comment: 'Great value for money, though the color was slightly different than expected.',
        date: '2024-08-28',
      },
    ],
  };

  const handleExploreClick = () => {
    navigate('/login');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className="grid xl:grid-cols-2 gap-4 w-full h-full bg-slate-200 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Product Details Section */}
        <motion.div
          className="flex flex-col text-start p-4 justify-center w-full"
          variants={fadeInUp}
        >
          <motion.img
            src={product.image}
            alt={product.title}
            className="h-auto w-full object-cover rounded-lg mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
          />
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-4 text-2xl font-bold text-red-500">{product.price}</p>
          <motion.button
            type="button"
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-2 w-40 font-bold text-xl border border-black mt-4"
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Customer Reviews Section */}
      <motion.div
        className="bg-white p-6 m-4 rounded-lg shadow-md"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        {product.reviews.map((review, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 pb-4 mb-4"
            variants={fadeInUp}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{review.username}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <p className="text-yellow-500">
              {'⭐'.repeat(Math.floor(review.rating))}
              {review.rating % 1 ? '⭐' : ''}
            </p>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Recommendations Section */}
      <motion.div
        className="flex flex-col justify-center text-start mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className="m-3 text-2xl text-center">You Might Also Like</h3>
        <p className="m-3 text-3xl font-bold text-center">Recommended Products</p>
        <div className="flex flex-col xl:flex-row justify-center">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
