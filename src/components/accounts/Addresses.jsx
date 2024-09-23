import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);  // Initialize as an empty array
  const [newAddress, setNewAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // Fetch addresses on component mount
  useEffect(() => {
    const fetchAddresses = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:5000/api/addresses', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        // Ensure the response data is an array
        const fetchedAddresses = Array.isArray(response.data) ? response.data : [];
        setAddresses(fetchedAddresses);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        setError('Failed to fetch addresses');
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  const handleAddAddress = async () => {
    if (!newAddress) return;

    setLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(
        'http://localhost:5000/api/addresses/add',
        { combinedAddress: newAddress }, // Send combined address string
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      // Add the new address to the state
      setAddresses([...addresses, response.data.address]);
      setNewAddress(''); // Clear the input after adding
    } catch (error) {
      console.error('Error adding address:', error);
      setError('Failed to add address');
    } finally {
      setLoading(false);
    }
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
          placeholder="Enter new address (e.g., 123 Main St, Springfield, IL, USA, 62704)"
        />
        <button
          type="button"
          onClick={handleAddAddress}
          className="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-3 w-full md:w-auto"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      <ul className="space-y-2">
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <li key={address._id} className="p-2 border border-gray-300 rounded bg-white shadow-sm">
              {`${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.postalCode}`}
            </li>
          ))
        ) : (
          <p>No addresses found</p>
        )}
      </ul>
    </div>
  );
}
