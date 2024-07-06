import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaBell,
  FaComments,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import logoImg from "../../../assets/images/logo/logo.png";

const Navbar = () => {
  const [user, setUser] = useState({ name: "", profilePic: "" });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post("https://quantumpossibilities.eu:82/api/user-login", {
          email: "anik.ba@pakizatvl.com",
          password: "12345678As@",
        });
        console.log(response.data.user);
        setUser({
          name: `${response.data.user.first_name} ${response.data.user.last_name}`,
          profilePic: `https://quantumpossibilities.eu:82/uploads/${response.data.user.profile_pic}`,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    // Clear local storage
    localStorage.clear();

    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 w">
          {/* Logo */}
          <Link to="/">
            <img
              className="hidden md:block w-10 h-10"
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
          <div className="flex items-center space-x-6 relative">
            <Link to="/notifications">
              <FaBell className="text-gray-500 text-2xl" />
            </Link>
            <Link to="/messages">
              <FaComments className="text-gray-500 text-2xl" />
            </Link>
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img
                src={user.profilePic}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
            </button>
            {dropdownOpen && (
              <div ref={dropdownRef} className="absolute right-0 mt-72 w-48 bg-white rounded-md shadow-2xl z-20 border-2">
                <div className="flex items-center px-4 py-2 border-b">
                  <img
                    src={user.profilePic}
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                  </div>
                </div>
                <div className="py-1">
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings & privacy
                  </Link>
                  <Link
                    to="/customize-menu"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Customize Menu
                  </Link>
                  <Link
                    to="/feedback"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Give us Feedback
                  </Link>
                  <Link
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
