// MyAccount.js
import React, { useState } from 'react';
import PersonalInfo from '../components/accounts/PersonelInfo';
import Addresses from '../components/accounts/Addresses';
import PasswordManager from '../components/accounts/PasswordManager';
import Logout from '../components/accounts/LogOut';
import AccountSideNav from '../components/accounts/AccountSideNav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function MyAccount() {
  const [activeSection, setActiveSection] = useState('personal-info');

  // Animation variants for transitions
  const slideIn = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'personal-info':
        return <PersonalInfo />;
      case 'addresses':
        return <Addresses />;
      case 'password-manager':
        return <PasswordManager />;
      case 'logout':
        return <Logout />;
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  return (
    <div>
      <motion.div
        className="flex h-full bg-gray-100 flex-col xl:flex-row"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Animated Side Navigation */}
        <motion.div variants={slideIn}>
          <AccountSideNav setActiveSection={setActiveSection} />
        </motion.div>

        {/* Animated Content Area */}
        <motion.div
          className="flex-1 p-6"
          variants={fadeIn}
          key={activeSection} // Key prop to trigger animation on section change
        >
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            Account Settings
          </motion.h1>
          {renderContent()}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
