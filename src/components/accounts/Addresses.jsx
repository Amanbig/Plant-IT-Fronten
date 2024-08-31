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
    <div>
      <h2 className="text-2xl font-semibold mb-4">Addresses</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter new address"
        />
        <button
          onClick={handleAddAddress}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Add Address
        </button>
      </div>
      <ul className="space-y-2">
        {addresses.map((address) => (
          <li key={address.id} className="p-2 border border-gray-300 rounded">
            {address.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
