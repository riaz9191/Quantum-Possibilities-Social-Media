import React from 'react';
import { FaThumbsUp, FaHeart, FaLaugh, FaSadTear, FaSurprise, FaAngry } from 'react-icons/fa';
import userImg1 from '../../../assets/images/user/user1.png'; // Replace with your user image path
import userImg2 from '../../../assets/images/user/user1.png'; // Replace with your user image path
import userImg3 from '../../../assets/images/user/user1.png'; // Replace with your user image path

const reactions = [
  { id: 1, name: 'Callya Ashley', mutualFriends: 1, action: 'Add Friend', image: userImg1 },
  { id: 2, name: 'Callya Ashley', mutualFriends: 1, action: 'Message', image: userImg2 },
  { id: 3, name: 'Callya Ashley', mutualFriends: 1, action: 'Cancel Request', image: userImg3 },
  { id: 4, name: 'Callya Ashley', mutualFriends: 1, action: 'Add Friend', image: userImg1 },
  { id: 5, name: 'Callya Ashley', mutualFriends: 1, action: 'Add Friend', image: userImg2 },
  { id: 6, name: 'Callya Ashley', mutualFriends: 1, action: 'Add Friend', image: userImg3 },
  { id: 7, name: 'Callya Ashley', mutualFriends: 1, action: 'Add Friend', image: userImg1 },
  { id: 8, name: 'Callya Ashley', mutualFriends: 1, action: 'Add Friend', image: userImg2 },
];

const ViewAllReactions = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Reaction Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-bold text-green-700">All</h2>
            <div className="flex items-center space-x-2">
              <FaThumbsUp className="text-blue-500" />
              <span>12</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-red-500" />
              <span>5</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaLaugh className="text-yellow-500" />
              <span>1</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSadTear className="text-yellow-500" />
              <span>2</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSurprise className="text-yellow-500" />
              <span>15</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaAngry className="text-red-500" />
              <span>15</span>
            </div>
          </div>
        </div>
        <ul className="space-y-4">
          {reactions.map((reaction) => (
            <li key={reaction.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={reaction.image} alt={reaction.name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{reaction.name}</p>
                  <p className="text-gray-500 text-sm">{reaction.mutualFriends} mutual friends</p>
                </div>
              </div>
              <div>
                {reaction.action === 'Add Friend' && (
                  <button className="bg-[#307777] text-white px-4 py-2 rounded-lg">Add Friend</button>
                )}
                {reaction.action === 'Message' && (
                  <button className="bg-[#307777] text-white px-4 py-2 rounded-lg">Message</button>
                )}
                {reaction.action === 'Cancel Request' && (
                  <button className="bg-[#EBEEF0] text-[#3C3C3B] px-4 py-2 rounded-lg">Cancel Request</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewAllReactions;
