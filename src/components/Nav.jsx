import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-300 transition">
            Fashion Store
          </a>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="block md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        {/* Links Section */}
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <li>
            <a href="#" className="block py-2 md:py-0 hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0 hover:text-gray-300 transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0 hover:text-gray-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0 hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition">
            <FaSearch/>
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaHeart/>
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaShoppingBag/>
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaUser/>
          </a>
        </div>
      </div>
    </nav>
  );
}
