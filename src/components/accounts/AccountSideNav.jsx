// AccountSideNav.js
import React from 'react';

export default function AccountSideNav({ setActiveSection }) {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-4">Account Settings</h2>
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
