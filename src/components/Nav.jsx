import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="hover:text-gray-300 transition">
            Fashion Store
          </Link>
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
            <Link to="/" className="block py-2 md:py-0 hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block py-2 md:py-0 hover:text-gray-300 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 md:py-0 hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 md:py-0 hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="#" className="hover:text-gray-300 transition">
            <FaSearch/>
          </Link>
          <Link to="#" className="hover:text-gray-300 transition">
            <FaHeart/>
          </Link>
          <Link to="#" className="hover:text-gray-300 transition">
            <FaShoppingBag/>
          </Link>
          <Link to="/myaccount" className="hover:text-gray-300 transition">
            <FaUser/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
