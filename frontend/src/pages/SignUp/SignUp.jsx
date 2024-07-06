import React, { useState } from 'react';
import axios from 'axios';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: '01', name: 'January' },
  { value: '02', name: 'February' },
  { value: '03', name: 'March' },
  { value: '04', name: 'April' },
  { value: '05', name: 'May' },
  { value: '06', name: 'June' },
  { value: '07', name: 'July' },
  { value: '08', name: 'August' },
  { value: '09', name: 'September' },
  { value: '10', name: 'October' },
  { value: '11', name: 'November' },
  { value: '12', name: 'December' },
];
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
const countries = [
  { code: 'US', name: 'United States' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'GB', name: 'United Kingdom' },
  // Add more countries as needed
];
const genders = ['Male', 'Female'];

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    month: '',
    day: '',
    year: '',
    phone: '',
    countryCode: '',
    gender: '',
    acceptTerms: false,
  });
  console.log(formData)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert('You must accept the terms and conditions to register.');
      return;
    }

    try {
      const response = await axios.post('https://quantumpossibilities.eu:82/api/signup', {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        month: formData.month,
        day: formData.day,
        year: formData.year,
        phone: formData.phone,
        gender: "65018b21577b4590853ef574",
        user_role: 1, // assuming user role is required and is 1 for a normal user
      });
      console.log(response)

      if (response.status === 200) {
        console.log(response)
        alert('Registration successful!');
        // Redirect to login page or another page
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <div className="flex space-x-2">
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">MM</option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.name}
                    </option>
                  ))}
                </select>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">DD</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">YYYY</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-l-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-2/3 px-4 py-2 border rounded-r-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Choose Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-gray-700">
                  I accept the{' '}
                  <a href="#" className="text-blue-500">
                    Terms and Conditions
                  </a>{' '}
                  of the website
                </span>
              </label>
            </div>
            <button className="w-full bg-[#307777] text-white py-2 rounded-lg hover:bg-green-700 transition duration-200">
              Complete Registration!
            </button>
          </form>
          <p className="text-center text-gray-700 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
