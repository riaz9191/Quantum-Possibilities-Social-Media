import React from 'react';
import { FaTimes, FaGlobe } from 'react-icons/fa';
import userImg1 from '../../../assets/images/user/user1.png'; // Replace with your user image path
import userImg2 from '../../../assets/images/user/user1.png'; // Replace with your user image path
import userImg3 from '../../../assets/images/user/user1.png'; // Replace with your user image path

const viewers = [
  { id: 1, name: 'Callya Ashley', mutualFriends: 1, image: userImg1 },
  { id: 2, name: 'Callya Ashley', mutualFriends: 1, image: userImg2 },
  { id: 3, name: 'Callya Ashley', mutualFriends: 1, image: userImg3 },
  { id: 4, name: 'Callya Ashley', mutualFriends: 1, image: userImg1 },
  { id: 5, name: 'Callya Ashley', mutualFriends: 1, image: userImg2 },
  { id: 6, name: 'Callya Ashley', mutualFriends: 1, image: userImg3 },
  { id: 7, name: 'Callya Ashley', mutualFriends: 1, image: userImg1 },
  { id: 8, name: 'Callya Ashley', mutualFriends: 1, image: userImg2 },
];

const StoryReaction = () => {
  return (
    <div className="min-h-screen md:p-4 bg-gray-100 flex items-center justify-center">
      <div className="relative bg-white p-4 rounded-lg h-screen shadow-lg w-full ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">199 viewers</h2>
          <button>
          <div className="flex gap-2"><FaGlobe className="text-gray-500" />
            <FaTimes className="text-gray-500 text-xl" /></div>
          </button>
        </div>
        <ul className="space-y-4">
          {viewers.map((viewer) => (
            <li key={viewer.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={viewer.image} alt={viewer.name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{viewer.name}</p>
                  <p className="text-gray-500 text-sm">{viewer.mutualFriends} mutual friends</p>
                </div>
              </div>
              <div className="flex space-x-1 text-2xl">
                <span className="text-red-500">&#9829;&#9829;&#9829;</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoryReaction;
