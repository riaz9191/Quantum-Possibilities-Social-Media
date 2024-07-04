import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
  FaComments,
} from "react-icons/fa";
import Container from "../Container";
import logoImg from "../../../assets/images/logo/logo.png";
import userImg from "../../../assets/images/user/user1.png"; // Replace with your user image path

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        {/* <Container> */}
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 w">
            {/* Logo */}
            <Link to="/">
              <img
                className="hidden md:block w-10 h-10 "
                src={logoImg}
                alt="logo"
              />
            </Link>

            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none ml-2"
              />
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-6 gap-60">
              <Link to="/">
                <FaHome className="text-[#307777] text-2xl" />
              </Link>
              <Link to="/friends">
                <FaUsers className="text-gray-500 text-2xl" />
              </Link>
              <Link to="/groups">
                <FaComments className="text-gray-500 text-2xl" />
              </Link>
              <Link to="/marketplace">
                <FaShoppingCart className="text-gray-500 text-2xl relative">
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">
                    3
                  </span>
                </FaShoppingCart>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/notifications">
                <FaBell className="text-gray-500 text-2xl" />
              </Link>
              <Link to="/messages">
                <FaComments className="text-gray-500 text-2xl" />
              </Link>
              <Link to="/profile">
                <img
                  src={userImg}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          </div>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default Navbar;
