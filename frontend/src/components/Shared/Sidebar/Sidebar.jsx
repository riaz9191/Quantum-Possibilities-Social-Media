/* eslint-disable react/prop-types */
import {
  FaUser,
  FaUsers,
  FaComments,
  FaBookmark,
  FaWallet,
  FaStore,
  FaUserTie,
  FaShoppingCart,
} from "react-icons/fa";
import userImg from "../../../assets/images/user/user1.png";
const dummyProfilePic = "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg";

const Sidebar = ({ user }) => {
  // console.log(user);
  return (
    <div className="w-2/12 pl-4 pt-2 shadow-2xl h-screen fixed bg-white">
      <div className="flex items-center space-x-4 mb-4 ">
        <img
          src={user.profilePic}
          alt="James Rodigan"
          className="w-12 h-12 rounded-full"
          onError={(e) =>
            (e.target.src =
              "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg")
          }
        />
        <span className="font-semibold text-lg">{user.name}</span>
      </div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaUser />
          <p className="text-black">
            <span>Explore</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaUsers />
          <p className="text-black">
            <span>Friends</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaComments />
          <p className="text-black">
            <span>Groups</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaBookmark />
          <p className="text-black">
            <span>Pages</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaWallet />
          <p className="text-black">
            <span>Wallet</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaStore />
          <p className="text-black">
            <span>Market Place</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaUserTie />
          <p className="text-black">
            <span>Seller Panel</span>
          </p>
        </li>
        <li className="flex items-center space-x-3 text-[#307777]">
          <FaShoppingCart />
          <p className="text-black">
            <span>Buyer Panel</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
