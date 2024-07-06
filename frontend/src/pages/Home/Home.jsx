import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Newsfeed from "../../components/Shared/Newsfeed/Newsfeed";
import RightSidebar from "../../components/Shared/RightSidebar/RightSidebar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Sidebar2 from "../../components/Shared/Sidebar2/Sidebar2";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({ name: "", profilePic: "" });

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

  return (
    <div className="flex gap-4">
      <div className="w-2/12 hidden md:flex">
        <Sidebar user={user} />
      </div>
      <div className="w-2/12 hidden md:flex">
        <Sidebar2 />
      </div>
      <div className="w-full md:w-6/12">
        <Newsfeed  user={user} />
      </div>
      <div className="w-2/12 hidden md:flex">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
