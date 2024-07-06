import React, { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });

      // after successful login
      console.log(response.data);
      // saving token to local storage
      localStorage.setItem('token', response.data.accessToken);
      // redirect to home page
      navigate('/')
    } catch (err) {
      setError('Invalid email or password');
    }
  };


  return (
    <div className="min-h-screen md:flex bg-[#0B3243] md:p-10">
      {/* Left section */}
      <div className="md:w-1/2 text-white p-6 md:p-16 md:flex md:flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the first decentralised Social Network in the world</h1>
        <p className="text-lg mb-6">
          We are the only decentralised social network that gives opportunity to monetise your time
          even if you are a normal user who doesn’t create any content and use the earning to buy
          any service or goods from the native marketplace.
        </p>
        <button className="bg-[#307777] md:w-1/4 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-700 transition duration-200">
          Register Now!
        </button>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 p-4 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to your Account</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.cl"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              {/* <a href="#" className="absolute right-0 bottom-2 text-blue-500 text-sm">Forgot Password?</a> */}
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700">Remember me</label>
              </div>
              <div className="flex items-center">
                <label htmlFor="remember" className="text-gray-700 font-semibold">Forget Password</label>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#307777] text-white py-2 rounded-lg hover:bg-green-700 transition duration-200">
              Login
            </button>
          </form>
          <div className="my-6 flex items-center justify-center">
            <span className="text-gray-400 mx-2">or sign up with</span>
          </div>
          <p className="text-center text-gray-700 mt-6">
            Don't have an Account? <a href="/signup" className="text-blue-500">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
