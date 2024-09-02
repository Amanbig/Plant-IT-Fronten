// PasswordManager.js
import React, { useState } from 'react';

export default function PasswordManager() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle password change
    console.log('Password updated');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Password Manager</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg text-gray-700 mb-2">Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter current password"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-700 mb-2">New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter new password"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-700 mb-2">Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Confirm new password"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-3 w-full md:w-auto"
        >
          Update
        </button>
      </form>
    </div>
  );
}
