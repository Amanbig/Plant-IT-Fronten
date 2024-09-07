// AboutPage.js
import React from 'react';
import { FaSeedling, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className="bg-slate-200 py-8 px-4 xl:px-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="flex flex-col xl:flex-row items-center gap-8"
          variants={staggerContainer}
        >
          {/* About Section */}
          <motion.div
            className="flex flex-col text-start p-4 justify-center w-full xl:w-1/2"
            variants={fadeUp}
          >
            <h1 className="text-4xl xl:text-6xl font-bold mb-4 text-gray-800">
              About Plant It
            </h1>
            <p className="text-xl xl:text-2xl text-gray-700 mb-4">
              At Plant It, we believe in the power of nature to transform lives.
              Our mission is to bring the joy of plants into every home, one leaf at a time.
              We are passionate about sustainability and aim to provide the best quality plants and eco-friendly gardening solutions.
            </p>
            <p className="text-xl xl:text-2xl text-gray-700">
              From beginner gardeners to seasoned plant enthusiasts, our goal is to make plant care accessible,
              enjoyable, and rewarding. Join us on this green journey and let’s grow together!
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full xl:w-1/2 flex justify-center items-center"
            variants={fadeUp}
          >
            <img
              src="/image.png" // Replace with the actual path to your image
              className="xl:h-[400px] h-[250px] w-auto object-contain rounded-lg shadow-md"
              alt="About Plant It"
            />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={fadeUp}>
            <FaSeedling className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To connect people with nature, promote sustainability, and inspire a greener world through the love of plants.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={fadeUp}>
            <FaHandsHelping className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Community Focused</h2>
            <p className="text-gray-600">
              We believe in giving back. Through partnerships, workshops, and community events, we empower plant lovers everywhere.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={fadeUp}>
            <FaLeaf className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Eco-Friendly</h2>
            <p className="text-gray-600">
              Our commitment to sustainability extends to our products, packaging, and operations. Together, we can make a difference.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
