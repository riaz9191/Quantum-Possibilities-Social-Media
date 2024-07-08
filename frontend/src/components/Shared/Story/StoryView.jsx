import React, { useState, useEffect, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaEllipsisH,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const dummyProfilePic = "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg";
const dummyName = "John Doe";

const StoryView = () => {
  const { id } = useParams();
  const [selectedStory, setSelectedStory] = useState(null);
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("https://qsbackend-riaz9191s-projects.vercel.app/api/stories");
        setStories(response.data);
        const storyIndex = response.data.findIndex((story) => story._id === id);
        setCurrentIndex(storyIndex);
        setSelectedStory(response.data[storyIndex]);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, [id]);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            handleNextStory();
            return 0;
          }
          return prevProgress + 0.5;
        });
      }, 30);
    }

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextStory = () => {
    const nextIndex = (currentIndex + 1) % stories.length;
    setCurrentIndex(nextIndex);
    setSelectedStory(stories[nextIndex]);
    setProgress(0);
  };

  const handlePreviousStory = () => {
    const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
    setCurrentIndex(prevIndex);
    setSelectedStory(stories[prevIndex]);
    setProgress(0);
  };

  const handlePausePlay = () => {
    setIsPaused(!isPaused);
  };

  const handleDeleteStory = async () => {
    try {
      await axios.delete(`https://qsbackend-riaz9191s-projects.vercel.app/api/stories/${selectedStory._id}`);
      setStories(stories.filter(story => story._id !== selectedStory._id));
      setShowDropdown(false);
      handleNextStory();
    } catch (error) {
      console.error("Error deleting story:", error);
    }
  };

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!selectedStory) return <div>Loading...</div>;

  return (
    <div className="md:flex h-screen bg-gray-900">
      {/* Left Side - Sidebar */}
      <div className="w-1/4 bg-white p-4 overflow-y-auto hidden md:block">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">All stories</h2>
          <Link to="/">
            <FaTimes className="text-gray-500 cursor-pointer" />
          </Link>
        </div>
        {stories.map((story) => (
          <div
            key={story._id}
            className="flex items-center mb-4 cursor-pointer"
            onClick={() => {
              setSelectedStory(story);
              setCurrentIndex(stories.indexOf(story));
              setProgress(0);
            }}
          >
            <img
              src={story.user.profilePic || dummyProfilePic}
              alt={story.user.username}
              className="w-10 h-10 rounded-full mr-4 border-2 border-green-500"
            />
            <div>
              <p className="text-sm font-bold">Abdul</p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(story.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <div className="pl-20">❤️❤️❤️</div>
          </div>
        ))}
      </div>

      {/* Right Side - Story Viewer */}
      <div className="md:w-3/4 md:flex justify-center items-center bg-black relative w-full">
        <div className="w-full mx-auto max-w-lg relative">
          <div className="absolute top-4 left-4 flex items-center z-50">
            <img
              src={selectedStory.user.profilePic || dummyProfilePic}
              alt={selectedStory.user.username}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="text-white">
              <p className="font-bold">{dummyName}</p>
              <p className="text-xs">
                {new Date(selectedStory.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="absolute z-50 top-4 right-4 flex items-center ">
            <FaEllipsisH
              className="text-white cursor-pointer mr-4"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
              >
                <button
                  onClick={handleDeleteStory}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Delete Story
                </button>
              </div>
            )}
            <button
              onClick={handlePausePlay}
              className="text-white cursor-pointer mr-4"
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>
            <Link to="/">
              <FaTimes className="text-white cursor-pointer" />
            </Link>
          </div>
          <div className="absolute z-50 top-0 left-0 w-full h-2 bg-gray-800">
            <div
              className="h-full bg-[#307777]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div
            className="w-full h-[600px] flex justify-center items-center relative"
            style={{
              backgroundColor:
                selectedStory.type === "text"
                  ? selectedStory.backgroundColor || "#000"
                  : "#000",
              color: selectedStory.textColor || "#FFF",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            {selectedStory.type === "photo" ? (
              <img
                src={selectedStory.image || dummyProfilePic}
                alt="Main Story"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div
                className="w-full h-full flex justify-center items-center relative"
                style={{
                  backgroundColor:
                    selectedStory.backgroundColor || "#000",
                  color: selectedStory.textColor || "#FFF",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                {selectedStory.text}
              </div>
            )}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                color: selectedStory.textColor || "#FFF",
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              {selectedStory.text}
            </div>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <FaArrowLeft
              className="text-white text-2xl cursor-pointer"
              onClick={handlePreviousStory}
            />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <FaArrowRight
              className="text-white text-2xl cursor-pointer"
              onClick={handleNextStory}
            />
          </div>
          <div className="absolute bottom-4 left-32 transform -translate-x-1/2 bg-white text-black bg-opacity-50 px-4 py-2 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Reply"
              className="bg-transparent border-none text-black placeholder-gray-300 focus:outline-none"
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-opacity-50 px-4 py-2 rounded-lg flex space-x-2">
            <span className="text-white cursor-pointer text-2xl">👍</span>
            <span className="text-white cursor-pointer text-2xl">❤️</span>
            <span className="text-white cursor-pointer text-2xl">😂</span>
            <span className="text-white cursor-pointer text-2xl">😮</span>
            <span className="text-white cursor-pointer text-2xl">😢</span>
            <span className="text-white cursor-pointer text-2xl">😡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryView;
