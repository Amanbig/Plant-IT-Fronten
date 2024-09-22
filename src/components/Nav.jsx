import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition">
            PlantIT
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="fas fa-times">✕</i> // You can replace with an icon library if desired
          ) : (
            <FiMenu /> // You can replace with an icon library if desired
          )}
        </button>

        {/* Links Section */}
        <ul
          className={`absolute top-14 left-0 w-full md:w-auto md:static bg-gray-800 md:flex md:items-center md:space-x-6 transition-transform ${
            isOpen ? 'block' : 'hidden'
          } md:block z-50`}
        >
          <li className="border-none">
            <Link
              to="/"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-none">
            <Link
              to="/shop"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li className="border-none">
            <Link
              to="/about"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-none xl:hidden">
            <Link
              to="/myaccount"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              My Account
            </Link>
          </li>
          <li className="border-none">
            <Link
              to="/contact"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="hidden xl:flex items-center space-x-4">
          <Link to="#" className="hover:text-gray-300 transition">
            <FaShoppingBag />
          </Link>
          <Link to="/myaccount" className="hover:text-gray-300 transition">
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
}
