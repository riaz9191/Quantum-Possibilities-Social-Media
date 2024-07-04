import React, { useState } from "react";
import { FaGalacticRepublic, FaTextHeight } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const Story = () => {
  const [storyType, setStoryType] = useState("Public");

  return (
    <div className="flex h-[91vh]">
      {/* Left Side */}
      <div className="w-3/12 bg-white p-6 border-r border-gray-200 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Create Your Story</h1>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="storyType"
            >
              Select Story Type
            </label>
            <div className="relative">
              <select
                id="storyType"
                value={storyType}
                onChange={(e) => setStoryType(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#307777] text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300 w-full">
            Create Story
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-3/4 flex justify-center items-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-10 w-9 /12 max-w-8xl">
          <h2 className="text-xl font-bold mb-6 text-center">Select Story Type</h2>
          <div className="flex space-x-6 justify-center">
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-6 text-white cursor-pointer h-[440px]">
              <div className="bg-white text-[#307777] p-4 rounded-full mb-4">
                <GrGallery className="text-4xl" />
              </div>
              <span className="text-lg">Create Your Photo Story</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 text-white cursor-pointer h-[440px]">
              <div className="bg-white text-[#307777] p-4 rounded-full mb-4">
                <FaTextHeight className="text-4xl" />
              </div>
              <span className="text-lg">Create Your Text Story</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
