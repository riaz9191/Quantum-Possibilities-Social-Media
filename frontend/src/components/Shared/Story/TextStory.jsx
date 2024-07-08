import React, { useState } from "react";
import { FaPalette, FaLock, FaGlobe, FaUsers, FaTimes } from "react-icons/fa";
import { SketchPicker } from "react-color";
import { Link, useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import axios from "axios";
import { toast } from "react-hot-toast";

const TextStory = () => {
  const [backgroundColor, setBackgroundColor] = useState("#334BC6");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [isTextColorPickerVisible, setIsTextColorPickerVisible] =
    useState(false);
  const [isBackgroundColorPickerVisible, setIsBackgroundColorPickerVisible] =
    useState(false);
  const [privacy, setPrivacy] = useState("Public");
  const [isPrivacyOptionsVisible, setIsPrivacyOptionsVisible] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [overlayText, setOverlayText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setOverlayText(e.target.value);
    if (!hasStartedTyping && e.target.value !== "") {
      setHasStartedTyping(true);
    } else if (e.target.value === "") {
      setHasStartedTyping(false);
    }
  };

  const handleTextClear = () => {
    setOverlayText('');
    setHasStartedTyping(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const storyData = {
      user: "60d0fe4f5311236168a109ca", // Replace with actual user ID
      type: "text",
      text: overlayText,
      image: "",
      backgroundColor,
      textColor,
      privacy,
    };

    try {
      const response = await axios.post("https://qsbackend-riaz9191s-projects.vercel.app/api/stories", storyData);
      toast.success("Story created successfully!");
      navigate('/');
      setOverlayText("");
      setBackgroundColor("#334BC6");
      setTextColor("#FFFFFF");
      setPrivacy("Public");
    } catch (error) {
      toast.error("Failed to create story.");
      console.error("Error creating story:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex h-screen bg-gray-200">
      {/* Left Side */}
      <div className="w-1/4 bg-white p-6 border-r border-gray-200 md:flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Create Your Story</h1>
          <div className="relative mb-6">
            <textarea
              className="w-full h-40 border border-gray-300 rounded p-2"
              placeholder="Start Typing"
              value={overlayText}
              onChange={handleTextChange}
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              onClick={handleTextClear}
            >
              <FaTimes />
            </button>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Background Color</label>
            <div className="flex space-x-2">
              {['#334BC6', 'green', 'red', 'yellow', 'purple', 'orange', 'black', 'white'].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${backgroundColor === color ? 'border-2 border-black' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setBackgroundColor(color)}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Text Color</label>
            <div className="flex space-x-2">
              {['white', 'black', 'blue', 'red', 'yellow', 'green', 'purple', 'orange'].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${textColor === color ? 'border-2 border-black' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setTextColor(color)}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyType">
              Select Story Type
            </label>
            <div className="relative">
              <select
                id="storyType"
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Public">Public</option>
                <option value="Friends">Friends</option>
                <option value="Only Me">Only Me</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300 w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Posting..." : "Create Story"}
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-3/4 md:flex justify-center items-center bg-gray-100 p-10">
        <div className="bg-white rounded-lg shadow-lg p-10 md:w-10/12 max-w-8xl">
          <h2 className="text-xl font-bold mb-6 text-center">Preview</h2>
          <div
            className="relative flex justify-center items-center h-[500px] bg-gray-50 rounded-lg border border-gray-300 py-10 my-10"
            style={{ backgroundColor }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="text-center text-4xl font-bold" style={{ color: textColor }}>
                {overlayText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextStory;
