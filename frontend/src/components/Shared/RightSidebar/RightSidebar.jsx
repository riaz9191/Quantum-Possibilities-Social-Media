import React from "react";
import { FaUserFriends } from "react-icons/fa";
import news from "../../../assets/images/sidebar2/1.png";
import user1 from "../../../assets/images/sidebar2/u1.png";
import add1 from "../../../assets/images/sidebar2/d1.png";
import add2 from "../../../assets/images/sidebar2/s1.png";

const RightSidebar = () => {
  return (
    <div className="p-4 bg-white shadow-md fixed">
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Sponsored</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <img
              src={add1}
              alt="Ad 1"
              className="w-40 h-40 rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p>আপনার অফিসের লাঞ্চ</p>
              <p className="text-[#9FA2A6]">homefectionery.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              src={add2}
              alt="Ad 1"
              className="w-40 h-40 rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p>SEMrush এর সাথে Ubersuggest</p>
              <p className="text-[#9FA2A6]">homefectionery.com</p>
            </div>
          </div>
          {/* Repeat for more ads */}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2 flex justify-between items-center">
          Friend requests{" "}
          <button className="text-blue-500 text-xs">See all</button>
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Harmain Shakeel</p>
              <p className="text-xs text-gray-500">7h</p>
            </div>
            <button className="text-blue-500 text-xs">Confirm</button>
            <button className="text-gray-500 text-xs">Delete</button>
          </li>
          {/* Repeat for more friend requests */}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Birthdays</h3>
        <p className="text-sm">
          Bilal Lokman and 3 others have birthdays today.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Contacts</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <p className="text-sm">Mubashra Ansari</p>
          </li>
          {/* Repeat for more contacts */}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Group conversations</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <p className="text-sm">3 Idiots</p>
          </li>
          {/* Repeat for more group conversations */}
          <li className="flex items-center space-x-2">
            <button className="text-blue-500 text-xs">Create new group</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
