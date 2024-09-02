import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [err,SetErr] = useState(true)
  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full h-full">
      <div className="flex flex-col text-start order-2 xl:order-1 p-4">
        <p className="text-start text-2xl font-bold mb-3 text-green-800">Plant IT</p>
        <p className="text-start text-3xl font-bold mb-5">Sign In To Your Account</p>
        <form>
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
