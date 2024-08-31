import React, { useState } from 'react';

export default function SignUp() {
  const [err,SetErr] = useState(true)
  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full h-full">
      <div className="flex flex-col text-start order-2 xl:order-1 p-4">
        <p className="text-start text-2xl font-bold mb-3 text-green-800">Plant IT</p>
        <p className="text-start text-3xl font-bold mb-5">Create Your New Account</p>
        <form>
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="text-xl pb-2 font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-black rounded-md p-3"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="text-xl pb-2 font-bold">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              className="border border-black rounded-md p-3"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="text-xl pb-2 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-black rounded-md p-3"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-3 w-full border border-black"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            Already Have an Account?{' '}
            <a className="font-bold" href="#">
              Sign In
            </a>
          </div>
        </form>
        {err?
        <div className='text-center p-2 m-2 bg-red-500 text-white flex flex-row justify-between'>
          <p>
            Error: User Not Authenticated
          </p>
          <button className='font-bold' onClick={()=>SetErr(false)}>
            X
          </button>
        </div>
        :null
        }
      </div>
      <div className="h-full order-1 xl:order-2">
        <img
          className="xl:h-[750px] xl:w-[98%] h-full w-full object-cover"
          src="image2.png"
          alt="Decorative plant shop"
        />
      </div>
    </div>
  );
}
