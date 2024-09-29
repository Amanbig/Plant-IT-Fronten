import React, { useState, useEffect } from 'react';
import { FaPencil } from 'react-icons/fa6';
import axios from 'axios';

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('/api/users/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        // Set form data with fetched user information
        const { firstname, lastname, email, phone } = response.data;
        setFormData({
          first_name: firstname,
          last_name: lastname,
          email,
          phone,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(
        'http://localhost:5000/api/update',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      console.log('User information updated:', response.data);
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='w-32 mx-auto rounded-xl relative flex items-center justify-center'>
          <img
            src='/image2.png'
            className='w-24 h-24 rounded-full object-cover'
            alt='Profile'
          />
          <div className='absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-md cursor-pointer'>
            <FaPencil className='text-gray-600 text-xl' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4'>
          <div className="flex flex-col w-full">
            <label htmlFor="first_name" className="text-lg pb-2 font-bold">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="border border-black rounded-md p-2 w-full"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="last_name" className="text-lg pb-2 font-bold">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="border border-black rounded-md p-2 w-full"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg pb-2 font-bold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Email Address"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg pb-2 font-bold">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Phone Number"
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
