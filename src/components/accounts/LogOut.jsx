// Logout.js
import React from 'react';

export default function Logout() {
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Log Out</h2>
      <p className="mb-4">Are you sure you want to log out?</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Log Out
      </button>
    </div>
  );
}