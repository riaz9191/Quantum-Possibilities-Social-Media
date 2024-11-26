import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Newsfeed from "../../components/Shared/Newsfeed/Newsfeed";
import RightSidebar from "../../components/Shared/RightSidebar/RightSidebar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Sidebar2 from "../../components/Shared/Sidebar2/Sidebar2";
import Loader from "../../components/Shared/Loader/Loader";

const Home = () => {
  const [user, setUser] = useState({ name: "John Doe", profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflYvogfRbEf-CKXnGSgljjZW_NObr5ECtCjHtMnKIeWO5qPPYYKtAuDaH3XSaDQs0DyY&usqp=CAU" });
  const [loading, setLoading] = useState(false);  // Set to false since there's no actual loading

  useEffect(() => {
    // Simulate fetching user data with a delay
    const fetchUserData = () => {
      setTimeout(() => {
        setUser({
          name: "Jane Doe",
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflYvogfRbEf-CKXnGSgljjZW_NObr5ECtCjHtMnKIeWO5qPPYYKtAuDaH3XSaDQs0DyY&usqp=CAU",
        });
        setLoading(false);
      }, 1000);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <Loader />;
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
        <Newsfeed user={user} />
      </div>
      <div className="w-2/12 hidden md:flex">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;

