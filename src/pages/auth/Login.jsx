import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios'

export default function Login() {
  const [err, SetErr] = useState(false); // Set initial error state to false
  const [errorMessage, setErrorMessage] = useState(''); // To store error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', { email, password })
      .then(response => {
        // Handle successful login
        console.log('User logged in:', email);
        login(response.data.token); // Use the login function from context
        SetErr(false); // Clear any previous errors on success
      })
      .catch(error => {
        const errorMessage = error.response?.data?.error || 'An error occurred. Please try again.';
        setErrorMessage(errorMessage); // Set the error message
        SetErr(true); // Display the error
        console.error('Error logging in:', errorMessage);
      });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full h-full">
      <motion.div
        className="flex flex-col text-start order-2 xl:order-1 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <p className="text-start text-2xl font-bold mb-3 text-green-800">Plant IT</p>
        <p className="text-start text-3xl font-bold mb-5">Sign In To Your Account</p>
        <form onSubmit={handleLogin}>
          <motion.div className="mb-4 flex flex-col" variants={slideUp}>
            <label htmlFor="email" className="text-xl pb-2 font-bold">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              className="border border-black rounded-md p-3"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div className="mb-4 flex flex-col" variants={slideUp}>
            <label htmlFor="password" className="text-xl pb-2 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-black rounded-md p-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <div className="text-right mb-4">
            <a className="font-bold" href="#">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-3 w-full border border-black"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            Don't Have an Account?{' '}
            <Link className="font-bold" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
        {err && (
          <motion.div
            className="text-center p-2 m-2 bg-red-500 text-white flex flex-row justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{errorMessage}</p>
            <button className="font-bold" onClick={() => SetErr(false)}>
              X
            </button>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="h-full order-1 xl:order-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="xl:h-[750px] xl:w-[98%] h-full w-full object-cover"
          src="image2.png"
          alt="Decorative plant shop"
        />
      </motion.div>
    </div>
  );
}
