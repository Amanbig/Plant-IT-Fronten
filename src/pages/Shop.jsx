// Shop.js
import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import ProductsCard from '../components/ProductsCard';
import Filters from '../components/Filters';
import { motion } from 'framer-motion';

export default function Shop() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-4 gap-4 bg-slate-200 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Filters Section */}
        <motion.div variants={fadeUp}>
          <Filters />
        </motion.div>

        {/* Products Section */}
        <motion.div
          className="col-span-3 flex flex-wrap gap-4 justify-start"
          variants={staggerContainer}
        >
          {/* Product Cards */}
          {[...Array(6)].map((_, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ProductsCard />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
