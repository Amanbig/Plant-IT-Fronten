// AccountSideNav.js
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function AccountSideNav({ setActiveSection }) {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/'); 
  };
  return (
    <div className="xl:w-64 xl:h-screen bg-gray-800 text-white p-6">
      <div className="flex items-center mb-4 gap-2">
        <button onClick={handleExploreClick}>
        <FiArrowLeft className="text-white text-2xl" />
        </button>
            <h2 className="text-xl font-bold">Account Settings</h2>
      </div>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActiveSection('personal-info')}
            className="w-full text-left p-2 rounded hover:bg-gray-700"
          >
            <i className="fas fa-user mr-2"></i> Personal Information
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('addresses')}
            className="w-full text-left p-2 rounded hover:bg-gray-700"
          >
            <i className="fas fa-map-marker-alt mr-2"></i> Addresses
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('password-manager')}
            className="w-full text-left p-2 rounded hover:bg-gray-700"
          >
            <i className="fas fa-lock mr-2"></i> Password Manager
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('logout')}
            className="w-full text-left p-2 rounded hover:bg-red-600"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}
