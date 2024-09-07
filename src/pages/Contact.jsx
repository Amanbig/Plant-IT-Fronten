// ContactPage.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';
import { motion } from 'framer-motion';

export default function ContactPage() {
  // Animation variants for different elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
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
        className="bg-slate-200 py-8 px-4 xl:px-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="flex flex-col xl:flex-row items-center gap-8"
          variants={fadeIn}
        >
          {/* Contact Form Section */}
          <motion.div
            className="w-full xl:w-1/2 bg-white p-6 rounded-lg shadow-md"
            variants={slideIn}
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
              Get in Touch
            </h1>
            <form className="space-y-4">
              <motion.div variants={fadeIn}>
                <label className="block text-gray-700 text-xl mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <label className="block text-gray-700 text-xl mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <label className="block text-gray-700 text-xl mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-500 transition duration-200 font-bold text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="w-full xl:w-1/2 flex flex-col items-start text-start p-4"
            variants={zoomIn}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Contact Information
            </h2>
            <motion.div
              className="flex flex-col gap-4 text-gray-700 text-xl"
              variants={fadeIn}
            >
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-600 text-2xl mr-4" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-600 text-2xl mr-4" />
                <span>support@plantit.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-600 text-2xl mr-4" />
                <span>123 Green Street, Plant City, Earth</span>
              </div>
            </motion.div>
            <motion.div className="mt-8 text-gray-600" variants={fadeIn}>
              <p className="mb-2">
                We would love to hear from you! Whether you have a question
                about plants, need support, or just want to chat, feel free to
                reach out to us through the form or contact details provided.
              </p>
              <p>
                Our customer support team is available 24/7 to assist you with
                anything you need. Your feedback and suggestions are always
                welcome!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
