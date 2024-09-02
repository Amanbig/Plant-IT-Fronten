// Addresses.js
import React, { useState } from 'react';

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    { id: 1, address: '123 Main St, City, Country' },
    { id: 2, address: '456 Another Ave, City, Country' },
  ]);
  const [newAddress, setNewAddress] = useState('');

  const handleAddAddress = () => {
    setAddresses([...addresses, { id: Date.now(), address: newAddress }]);
    setNewAddress('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Addresses</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-auto"
          placeholder="Enter new address"
        />
        <button
          type="button"
          onClick={handleAddAddress}
          className="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-3 w-full md:w-auto"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {addresses.map((address) => (
          <li key={address.id} className="p-2 border border-gray-300 rounded bg-white shadow-sm">
            {address.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
