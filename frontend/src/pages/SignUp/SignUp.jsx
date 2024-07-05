import React from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen md:flex bg-[#0B3243] md:p-10">
      {/* Left section */}
      <div className="md:w-1/2 text-white p-6 md:p-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the first decentralised Social Network in the world</h1>
        <p className="text-lg mb-6">
          We are the only decentralised social network that gives opportunity to monetise your time
          even if you are a normal user who doesn’t create any content and use the earning to buy
          any service or goods from the native marketplace.
        </p>
        <button className="bg-[#307777] w-1/4 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-700 transition duration-200">
          Login Now!
        </button>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 p-6 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register your Account</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <div className="flex space-x-2">
                <select className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                  <option>MM</option>
                  {/* Add more months */}
                </select>
                <select className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                  <option>DD</option>
                  {/* Add more days */}
                </select>
                <select className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                  <option>YYYY</option>
                  {/* Add more years */}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <div className="flex">
                <select className="w-1/3 px-4 py-2 border rounded-l-lg focus:outline-none focus:border-blue-500">
                  <option>US</option>
                  {/* Add more country codes */}
                </select>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  className="w-2/3 px-4 py-2 border rounded-r-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Gender</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>Choose Gender</option>
                {/* Add more gender options */}
              </select>
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">I accept the <a href="#" className="text-blue-500">Terms and Conditions</a> of the website</span>
              </label>
            </div>
            <button className="w-full bg-[#307777] text-white py-2 rounded-lg hover:bg-green-700 transition duration-200">
              Complete Registration!
            </button>
          </form>
          <p className="text-center text-gray-700 mt-6">
            Already have an account? <a href="/login" className="text-blue-500">
              Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
