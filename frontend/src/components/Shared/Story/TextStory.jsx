import React, { useState } from "react";
import { FaPalette, FaLock, FaGlobe, FaUsers, FaTimes } from "react-icons/fa";
import { SketchPicker } from "react-color";
import { Link } from "react-router-dom";

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

  const handleTextChange = (e) => {
    if (!hasStartedTyping && e.target.value !== "") {
      setHasStartedTyping(true);
    }
    else if(e.target.value == ""){
        setHasStartedTyping(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="relative w-full bg-white rounded-lg shadow-lg">
        <div
          className="relative w-full h-screen flex items-center justify-center"
          style={{ backgroundColor }}
        >
          <textarea
            className="w-full h-full p-8 text-4xl font-semibold text-center focus:outline-none bg-transparent resize-none placeholder-center"
            style={{ color: textColor }}
            placeholder="Start Typing"
            autoFocus
            onChange={handleTextChange}
          />
          <div className="absolute top-4 left-4">
            <Link to="/">
              <button className="text-white text-xl">
                <FaTimes />
              </button>
            </Link>
          </div>
          <div className="absolute bottom-4 left-4 flex">
            <button
              className="text-white text-xl shadow-2xl flex flex-col justify-center items-center"
              onClick={() =>
                setIsPrivacyOptionsVisible(!isPrivacyOptionsVisible)
              }
            >
              <FaLock />
              <p>Privacy</p>
            </button>
            {hasStartedTyping && (
              <>
                <button
                  className="text-white text-xl ml-6"
                  onClick={() =>
                    setIsBackgroundColorPickerVisible(
                      !isBackgroundColorPickerVisible
                    )
                  }
                >
                  <FaPalette />
                </button>
                <button
                  className="bg-gray-300 ml-4 text-gray-600 py-2 px-4 rounded-lg"
                  onClick={() =>
                    setIsTextColorPickerVisible(!isTextColorPickerVisible)
                  }
                >
                  Text Color
                </button>
              </>
            )}
          </div>
          <div className="absolute bottom-4 right-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              onClick={() => alert("Posted!")}
            >
              Post
            </button>
          </div>
          {isBackgroundColorPickerVisible && (
            <div className="absolute bottom-16 left-4">
              <SketchPicker
                color={backgroundColor}
                onChangeComplete={(color) => setBackgroundColor(color.hex)}
              />
            </div>
          )}
          {isTextColorPickerVisible && (
            <div className="absolute bottom-16 right-4">
              <SketchPicker
                color={textColor}
                onChangeComplete={(color) => setTextColor(color.hex)}
              />
            </div>
          )}
          {isPrivacyOptionsVisible && (
            <div className="absolute bottom-16 left-4 bg-white p-2 rounded-lg shadow-lg">
              <div
                className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => setPrivacy("Public")}
              >
                <FaGlobe className="text-blue-500" />
                <span>Public</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => setPrivacy("Friends")}
              >
                <FaUsers className="text-green-500" />
                <span>Friends</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => setPrivacy("Only Me")}
              >
                <FaLock className="text-gray-500" />
                <span>Only Me</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-4 p-4">
          <div className="text-gray-600">
            {privacy === "Public" && <FaGlobe className="inline-block mr-2" />}
            {privacy === "Friends" && <FaUsers className="inline-block mr-2" />}
            {privacy === "Only Me" && <FaLock className="inline-block mr-2" />}
            {privacy}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextStory;
