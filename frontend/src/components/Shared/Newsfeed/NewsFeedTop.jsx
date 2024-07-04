import React from 'react';
import { FaVideo, FaImages, FaSmile } from 'react-icons/fa';
import profileImg from '../../../assets/images/user/profile.jpg'; 
import post1 from '../../../assets/images/posts/post1.png';  
import post2 from '../../../assets/images/posts/post2.png';
import post3 from '../../../assets/images/posts/post3.png';
// import post4 from '../../../assets/images/posts/post4.png';
import user1 from '../../../assets/images/user/userr1.png';
import user2 from '../../../assets/images/user/userr2.png';
import user3 from '../../../assets/images/user/userr3.png';

const NewsfeedTop = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img src={profileImg} alt="Profile" className="w-12 h-12 rounded-full" />
        <input
          type="text"
          placeholder="What's on your mind, Shanto?"
          className="w-full p-2 rounded-full bg-gray-100 focus:outline-none"
        />
      </div>
      <div className="flex justify-around mb-4">
        <button className="flex items-center space-x-2 text-gray-600">
          <FaVideo className="text-red-500" />
          <span>Live Video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600">
          <FaImages className="text-green-500" />
          <span>Photo/Video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600">
          <FaSmile className="text-yellow-500" />
          <span>Feeling/activity</span>
        </button>
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        <div className="relative w-1/4">
          <img src={profileImg} alt="Post" className="w-full h-full rounded-lg object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <button className="bg-green-500 p-2 rounded-full text-white text-2xl">+</button>
          </div>
        </div>
        <div className="relative w-1/4">
          <img src={post1} alt="Post" className="w-full h-full rounded-lg object-cover" />
          <div className="absolute bottom-0 left-0 p-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <p className="text-white text-sm">Vish Patil</p>
          </div>
        </div>
        <div className="relative w-1/4">
          <img src={post2} alt="Post" className="w-full h-full rounded-lg object-cover" />
          <div className="absolute bottom-0 left-0 p-2">
            <img src={user2} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <p className="text-white text-sm">Rakesh Shetty</p>
          </div>
        </div>
        <div className="relative w-1/4">
          <img src={post3} alt="Post" className="w-full h-full rounded-lg object-cover" />
          <div className="absolute bottom-0 left-0 p-2">
            <img src={user3} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <p className="text-white text-sm">Akash Bolre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsfeedTop;