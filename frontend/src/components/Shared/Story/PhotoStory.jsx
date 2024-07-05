import React, { useState, useRef } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import Slider from 'react-slider';

const PhotoStory = () => {
  const [storyType, setStoryType] = useState('Public');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleImageCancel = () => {
    setSelectedImage(null);
    setRotation(0);
  };

  const handleRotationChange = (value) => {
    setRotation(value);
  };

  return (
    <div className="md:flex h-screen bg-gray-200 ">
      {/* Left Side */}
      <div className="w-1/4 bg-white p-6 border-r border-gray-200 md:flex flex-col justify-between hidden ">
        <div>
          <h1 className="text-2xl font-bold mb-4">Create Your Story</h1>
          <div className="mb-6">
            <textarea
              className="w-full h-40 border border-gray-300 rounded p-2"
              placeholder="Start Typing"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Background Color</label>
            <div className="flex space-x-2">
              {['blue', 'green', 'red', 'yellow', 'purple', 'orange', 'black', 'white'].map((color) => (
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyType">
              Select Story Type
            </label>
            <div className="relative">
              <select
                id="storyType"
                value={storyType}
                onChange={(e) => setStoryType(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
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
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300 w-full">
            Create Story
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-3/4 flex justify-center items-center bg-gray-100 p-10">
        <div className="bg-white rounded-lg shadow-lg p-10 md:w-10/12 max-w-8xl">
          <h2 className="text-xl font-bold mb-6 text-center">Preview</h2>
          <div className="relative flex justify-center items-center h-[500px] bg-gray-50 rounded-lg border border-gray-300 py-10 my-10">
            {!selectedImage ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
                <div className="flex flex-col items-center justify-center">
                  <FaPlus className="text-4xl text-gray-500" />
                  <span className="mt-2 text-gray-500">Select photo to crop and rotate</span>
                </div>
              </>
            ) : (
              <>
                <img
                  ref={imageRef}
                  src={selectedImage}
                  alt="Preview"
                  className="max-h-full max-w-full rounded-lg"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
                <button
                  onClick={handleImageCancel}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                >
                  <FaTimes />
                </button>
              </>
            )}
          </div>
          {selectedImage && (
            <div className="mt-4 flex flex-col items-center">
              <Slider
                className="w-full h-5 bg-[#307777] rounded-full"
                thumbClassName="custom-thumb"
                trackClassName="custom-track"
                value={rotation}
                min={0}
                max={180}
                step={1}
                onChange={handleRotationChange}
                renderThumb={(props, state) => <div {...props} className="custom-thumb"></div>}
              />
              <div className="text-center mt-2">Select photo to crop and rotate</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoStory;
