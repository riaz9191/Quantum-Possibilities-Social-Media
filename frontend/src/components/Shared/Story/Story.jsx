import React from "react";
import { FaTextHeight, FaTimes } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="relative flex h-[91vh] bg-gray-100 justify-center items-center">
      {/* Close Button */}
      <Link to="/" className="absolute top-4 left-4">
        <button className="text-gray-600 text-2xl p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
          <FaTimes />
        </button>
      </Link>

      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-10 mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Story Type</h2>
        <div className="flex space-x-6 justify-center">
          <Link to="/create-photo-story">
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-6 text-white cursor-pointer h-[440px]">
              <div className="bg-white text-[#307777] p-4 rounded-full mb-4">
                <GrGallery className="text-4xl" />
              </div>
              <span className="text-lg">Create Your Photo Story</span>
            </div>
          </Link>
          <Link to="/create-text-story">
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 text-white cursor-pointer h-[440px]">
              <div className="bg-white text-[#307777] p-4 rounded-full mb-4">
                <FaTextHeight className="text-4xl" />
              </div>
              <span className="text-lg">Create Your Text Story</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
