import React, { useState, useEffect } from "react";
import { FaVideo, FaImages, FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const dummyProfilePic = "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg";

const NewsfeedTop = ({ user }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("https://qsbackend-riaz9191s-projects.vercel.app/api/stories");
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.profilePic || dummyProfilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full"
          onError={(e) =>
            (e.target.src =
              "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg")
          }
        />
        <input
          type="text"
          placeholder={`What's on your mind, ${user.firstName}?`}
          className="w-full p-2 rounded-full bg-gray-100 focus:outline-none"
        />
        <FaImages className="text-green-500 md:hidden" />
      </div>
      <div className="md:flex justify-around mb-4 hidden">
        <button className="flex items-center space-x-2 text-gray-600">
          <FaVideo className="text-red-500" />
          <span>Live Video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600">
          <FaImages className="text-green-500" />
          <span>Photo/Video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600">
          <FaSmile className="text-yellow-500" />
          <span>Feeling/activity</span>
        </button>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        navigation
        className="flex space-x-2 w-full overflow-x-auto"
      >
        <SwiperSlide className="relative w-32 h-56">
          <img
            src={user.profilePic || dummyProfilePic}
            alt="Profile"
            className="w-32 h-56 rounded-3xl object-cover"
            onError={(e) =>
              (e.target.src =
                "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg")
            }
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/story">
              <button className="absolute bottom-0 bg-green-500 py-2 px-3 rounded-full text-white text-xl">
                +
              </button>
            </Link>
          </div>
        </SwiperSlide>
        {stories.map((story) => (
          <SwiperSlide key={story._id} className="relative w-32 h-56">
            <Link to={`/view-story/${story._id}`}>
              {story.type === "photo" ? (
                <img
                  src={story.image || dummyProfilePic}
                  alt="Post"
                  className="w-32 h-56 rounded-3xl object-cover"
                />
              ) : (
                <div
                  className="w-32 h-56 flex items-center justify-center rounded-3xl"
                  style={{
                    backgroundColor: story.backgroundColor,
                    color: story.textColor,
                    fontSize: "1rem",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  {story.text}
                </div>
              )}
              <div className="absolute bottom-0 left-0 p-2">
                <img
                  src={story.user.profilePic || dummyProfilePic}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <p className="text-white text-sm">{story.user.username}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsfeedTop;
