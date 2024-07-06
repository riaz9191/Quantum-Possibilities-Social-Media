import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Newsfeed from "../../components/Shared/Newsfeed/Newsfeed";
import RightSidebar from "../../components/Shared/RightSidebar/RightSidebar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Sidebar2 from "../../components/Shared/Sidebar2/Sidebar2";
import axios from "axios";
import Loader from "../../components/Shared/Loader/Loader";

const Home = () => {
  const [user, setUser] = useState({ name: "", profilePic: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post("https://quantumpossibilities.eu:82/api/user-login", {
          email: localStorage.getItem('email'),
          password:localStorage.getItem('password'),
        });
        console.log(response.data.user);
        setUser({
          name: `${response.data.user.first_name} ${response.data.user.last_name}`,
          profilePic: `https://quantumpossibilities.eu:82/uploads/${response.data.user.profile_pic}`,
        });
        setLoading(false)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  
  if(loading){
    return <Loader/>
  }

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
