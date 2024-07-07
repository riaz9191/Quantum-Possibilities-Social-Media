import React from "react";
import { FaUserFriends } from "react-icons/fa";
import news from "../../../assets/images/sidebar2/1.png";
import user1 from "../../../assets/images/sidebar2/u1.png";
import add1 from "../../../assets/images/sidebar2/d1.png";
import add2 from "../../../assets/images/sidebar2/s1.png";

const RightSidebar = () => {
  return (
    <div className="p-4 bg-white shadow-md fixed w-2/12 h-screen">
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Sponsored</h3>
        <div className="space-y-2">
          <div className="flex gap-2 w-32">
            <img
              src={add1}
              alt="Ad 1"
              className=" h-32 rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p>আপনার অফিসের লাঞ্চ</p>
              <p className="text-[#151617]">homefectionery.com</p>
            </div>
          </div>
          <div className="flex gap-2 w-24">
            <img
              src={add2}
              alt="Ad 1"
              className=" h-32 rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p>SEMrush এর সাথে Ubersuggest</p>
              <p className="text-[#9FA2A6]">homefectionery.com</p>
            </div>
          </div>
          {/* Repeat for more ads */}
        </div>
      </div>
      <div className="p-4 bg-white shadow">
        <div className="mb-4">
          <h3 className="font-semibold mb-2 flex justify-between items-center">
            Friend requests
            <button className="text-[#307777] text-base">See all</button>
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 gap-3">
              <div>
                <img
                  src={user1}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">Harmain Shakeel</p>
                  <p className="text-xs text-gray-500">2h</p>
                </div>
                <div className="flex space-x-1">
                  <button className="bg-[#307777] text-white text-xs px-3 py-1 rounded-md">
                    Confirm
                  </button>
                  <button className="bg-black text-white text-xs px-3 py-1 rounded-md">
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <li className="flex items-center space-x-2 gap-3">
              <div>
                <img
                  src={user1}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">Harmain Shakeel</p>
                  <p className="text-xs text-gray-500">2h</p>
                </div>
                <div className="flex space-x-1">
                  <button className="bg-[#307777] text-white text-xs px-3 py-1 rounded-md">
                    Confirm
                  </button>
                  <button className="bg-black text-white text-xs px-3 py-1 rounded-md">
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <li className="flex items-center space-x-2 gap-3">
              <div>
                <img
                  src={user1}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">Harmain Shakeel</p>
                  <p className="text-xs text-gray-500">2h</p>
                </div>
                <div className="flex space-x-1">
                  <button className="bg-[#307777] text-white text-xs px-3 py-1 rounded-md">
                    Confirm
                  </button>
                  <button className="bg-black text-white text-xs px-3 py-1 rounded-md">
                    Delete
                  </button>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
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
          <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
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
