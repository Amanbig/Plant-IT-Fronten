import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AccountSideNav({ setActiveSection }) {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/');
  };

  // Animation variants
  const sidebarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const menuItemVariants = {
    hover: { scale: 1.05, backgroundColor: '#4b5563' },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="xl:w-64 xl:h-screen bg-gray-800 text-white p-6"
    >
      <div className="flex items-center mb-4 gap-2">
        <button onClick={handleExploreClick}>
          <FiArrowLeft className="text-white text-2xl" />
        </button>
        <h2 className="text-xl font-bold">Account Settings</h2>
      </div>
      <ul className="space-y-4">
        <li>
          <motion.button
            onClick={() => setActiveSection('personal-info')}
            whileHover="hover"
            whileTap="tap"
            variants={menuItemVariants}
            className="w-full text-left p-2 rounded hover:bg-gray-700 transition"
          >
            <i className="fas fa-user mr-2"></i> Personal Information
          </motion.button>
        </li>
        <li>
          <motion.button
            onClick={() => setActiveSection('addresses')}
            whileHover="hover"
            whileTap="tap"
            variants={menuItemVariants}
            className="w-full text-left p-2 rounded hover:bg-gray-700 transition"
          >
            <i className="fas fa-map-marker-alt mr-2"></i> Addresses
          </motion.button>
        </li>
        <li>
          <motion.button
            onClick={() => setActiveSection('password-manager')}
            whileHover="hover"
            whileTap="tap"
            variants={menuItemVariants}
            className="w-full text-left p-2 rounded hover:bg-gray-700 transition"
          >
            <i className="fas fa-lock mr-2"></i> Password Manager
          </motion.button>
        </li>
        <li>
          <motion.button
            onClick={() => setActiveSection('logout')}
            whileHover="hover"
            whileTap="tap"
            variants={menuItemVariants}
            className="w-full text-left p-2 rounded hover:bg-red-600 transition"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Log Out
          </motion.button>
        </li>
      </ul>
    </motion.div>
  );
}
