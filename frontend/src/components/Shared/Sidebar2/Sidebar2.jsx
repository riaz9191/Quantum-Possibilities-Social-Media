
import { FaUserFriends } from "react-icons/fa";
import news from "../../../assets/images/sidebar2/1.png";
import user1 from "../../../assets/images/sidebar2/u1.png";
import add1 from "../../../assets/images/sidebar2/d1.png";
import add2 from "../../../assets/images/sidebar2/s1.png";

const Sidebar2 = () => {
  return (
    <div className="p-4 bg-white shadow-md fixed w-2/12 h-full">
      <div className="mb-4 relative">
        <img
          src={news}
          alt="News"
          className="w-full h-64 rounded object-cover"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full rounded-b">
          <p className="text-sm">
            Karabakh humanitarian fears grow with thousands sleeping in
            Stepanakert streets
          </p>
          <div className="flex justify-end mt-2">
            <button className="text-blue-500 bg-white p-1 text-xs rounded-md mt-1">
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-1 mb-2">
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Pages You Might Like</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Super</p>
              <p className="text-xs text-[#307777]">Facebook Page</p>
            </div>
            <button className="text-white p-1 rounded bg-[#307777] text-xs">Follow</button>
          </li>
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Super</p>
              <p className="text-xs text-[#307777]">Facebook Page</p>
            </div>
            <button className="text-white p-1 rounded bg-[#307777] text-xs">Follow</button>
          </li>
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Super</p>
              <p className="text-xs text-[#307777]">Facebook Page</p>
            </div>
            <button className="text-white p-1 rounded bg-[#307777] text-xs">Follow</button>
          </li>
          {/* Repeat for more pages */}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Pages You May Know</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Angelina Anka</p>
          <button className="text-white p-1 rounded bg-[#307777] text-xs">See All</button>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Anka</p>
              <p className="text-xs text-[#307777]">3 friends in common</p>
            </div>
            <FaUserFriends className="text-[#307777]" />
          </li>
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Anka</p>
              <p className="text-xs text-[#307777]">3 friends in common</p>
            </div>
            <FaUserFriends className="text-[#307777]" />
          </li>
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Anka</p>
              <p className="text-xs text-[#307777]">3 friends in common</p>
            </div>
            <FaUserFriends className="text-[#307777]" />
          </li>
          <li className="flex items-center space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Angelina Anka</p>
              <p className="text-xs text-[#307777]">3 friends in common</p>
            </div>
            <FaUserFriends className="text-[#307777]" />
          </li>
          {/* Repeat for more users */}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Sponsored</h3>
        <div className="space-y-2">
          <img src={add1} alt="Ad 1" className="w-full h-auto rounded" />
          <img src={add2} alt="Ad 2" className="w-full h-auto rounded" />
          {/* Repeat for more ads */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
