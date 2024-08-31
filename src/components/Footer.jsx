import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Discover the latest trends in plants and elevate your style with our exclusive collections. Shop with confidence and enjoy the best shopping experience.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500">
        © 2024 Plant IT Store. All rights reserved.
      </div>
    </footer>
  );
}
