import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaEllipsisH,
} from "react-icons/fa";
// import { useHistory } from 'react-router-dom';

const stories = [
  // Add your story data here
  {
    id: 1,
    name: "Ayesha Akter Mitu",
    time: "21 hour",
    image: "https://via.placeholder.com/50",
    mainImage:
      "https://s3-alpha-sig.figma.com/img/0d63/5630/71ee0be67a603e99a26544662f2b5442?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRFqL855BK5JIx4zmncZBryQ9MWYuNPNotaJ2GI-B-ps1OkibiJE7cCP-f-BPTtFSoA5dFALj--YsFGj4RSqd2~WWEhyDIE7IIz1xg180r4zsvr6EtwE778YfYZ8I3joP40EXoocG1v~bxMBgGHd2p0q0EvV~WuFZa1m8p0ROS8ZXze0Cg0FjdHNtCwITjGBW3XgiFawHe7mP3Xe-Fpcjmp37REWlqSYYedU0dNawJd95eLqplwIk3hTcksYogUInF~T2wnr0Mlym4S03HiOK5zwRX2KSc4WHCQ6W4-7k0ojCiqsBOznCItvUK4FHW95Rr4VjBPIyeoK88fBwofCig__",
  },
  // Add more stories as needed
];

const StoryView = () => {
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  //   const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      //   history.push('/');
    }, 10000); // Redirect after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left Side - Sidebar */}
      <div className="w-1/4 bg-white p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">All stories</h2>
          <FaTimes className="text-gray-500 cursor-pointer" />
        </div>
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex items-center mb-4 cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-bold">{story.name}</p>
              <p className="text-xs text-gray-500">{story.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Story Viewer */}
      <div className="w-3/4 flex  justify-center items-center bg-black relative">
        <div className="w-full  max-w-lg relative">
          <div className="absolute top-4  left-4 flex items-center">
            <img
              src={selectedStory.image}
              alt={selectedStory.name}
              className="w-10 h-10 rounded-full mr-2 "
            />
            <div className="text-white">
              <p className="font-bold">{selectedStory.name}</p>
              <p className="text-xs">{selectedStory.time} Ago</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center">
            <FaEllipsisH className="text-white cursor-pointer mr-4" />
            <FaTimes className="text-white cursor-pointer" />
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-800">
            <div
              className="h-full bg-[#307777]"
              style={{ animation: "progress 15s linear forwards" }}
            ></div>
          </div>
          <img
            src={selectedStory.mainImage}
            alt="Main Story"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <FaArrowLeft className="text-white text-2xl cursor-pointer" />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <FaArrowRight className="text-white text-2xl cursor-pointer" />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Reply"
              className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg flex space-x-2">
            <span className="text-white cursor-pointer">👍</span>
            <span className="text-white cursor-pointer">❤️</span>
            <span className="text-white cursor-pointer">😂</span>
            <span className="text-white cursor-pointer">😮</span>
            <span className="text-white cursor-pointer">😢</span>
            <span className="text-white cursor-pointer">😡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryView;
