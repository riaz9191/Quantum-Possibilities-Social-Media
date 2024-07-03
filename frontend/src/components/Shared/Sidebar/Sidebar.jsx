import React from 'react';
import { FaUser, FaUsers, FaComments, FaBookmark, FaWallet, FaStore, FaUserTie, FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-4 mb-4">
        <img src="path-to-profile-image.jpg" alt="James Rodigan" className="w-10 h-10 rounded-full" />
        <span>James Rodigan</span>
      </div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaUser />
          <span>Explore</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaUsers />
          <span>Friends</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaComments />
          <span>Groups</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaBookmark />
          <span>Pages</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaWallet />
          <span>Wallet</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaStore />
          <span>Market Place</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaUserTie />
          <span>Seller Panel</span>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaShoppingCart />
          <span>Buyer Panel</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
