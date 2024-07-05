import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaEllipsisH,
  FaShare,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const stories = [
  // Add your story data here
  {
    id: 1,
    name: "Ayesha Akter Mitu",
    time: "21 hour",
    image: "https://via.placeholder.com/50",
    mainImage:
      "https://s3-alpha-sig.figma.com/img/0fb7/9f30/201daf8e9de84a566c6ee7814724ee6e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bV8yYTn1xctwYrhkm4XfEhWyk51Gl2QWrV1fYpXNNnlARNuNm-tahDufL6zsiVC3pwzkBjZR0DxRIBFp5PluAZGLLVpaSVOsXeCOHb-TOfITyvADf~3Fb9anf4G16VTSd9lzaPJ0tZ2xxf30c5gW56nJ5pqVLFkS2-nvIvw6Sg10MmeR4j5Hj-NRSVkeeLfhLI210gn2SoUqlkxMtp-xB02A5MH9gA80Wjg0sYUPJTbXJUUDDdCOyhB67DZY7ICFOhfUy1IeoNg12R3B0IXnca78rDX-na9jk0vxE46Ym0Lt5Gn5APr~Q9y0XoDP7Asv4cTJS7wHtftu4c~U2540ew__",
  },
  // Add more stories as needed
];

const MyStory = () => {
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  //   const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      //   history.push('/');
    }, 10000); // Redirect after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:flex h-screen bg-gray-900">
      {/* Left Side - Sidebar */}
      <div className="w-1/4 bg-white p-4 overflow-y-auto hidden md:block  ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">All stories</h2>
          <Link to="/">
            {" "}
            <FaTimes className="text-gray-500 cursor-pointer" />
          </Link>
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
      <div className="md:w-3/4 md:flex  justify-center items-center bg-black relative">
        <div className="w-full mx-auto max-w-lg relative">
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
            <Link to="/">
              <FaTimes className="text-white cursor-pointer" />
            </Link>
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
          <div className="absolute bottom-4 left-32 transform -translate-x-1/2 text-white  bg-opacity-50 px-4 py-2 rounded-lg flex items-center gap-2">
            <FaEye />
            <p className="font-bold">104 Person View</p>
          </div>
          <div className="absolute bottom-4 right-4 transform bg-opacity-50 px-4 py-2 flex items-center rounded-lg space-x-2 text-white">
            <p className="font-bold">Share story</p>
            <FaShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
