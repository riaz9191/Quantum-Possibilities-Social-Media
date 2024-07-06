import React, { useState, useRef, useEffect } from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaEllipsisH,
  FaLaugh,
  FaHeart,
  FaThumbsUp as FaThumbsUpFilled,
  FaClosedCaptioning,
  FaCrosshairs,
  FaTimes,
  FaBookmark,
  FaFlag,
  FaBan,
  FaBellSlash,
  FaLink,
} from "react-icons/fa";
import profileImg from "../../../assets/images/posts/post1.png";
import postImg from "../../../assets/images/user/profile.jpg";
import { Link } from "react-router-dom";

const Post = () => {
  const [showReactions, setShowReactions] = useState(false);
  const [reactions, setReactions] = useState([]);
  const [showMoreComments, setShowMoreComments] = useState(true);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Nafijul Islam",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      replies: [
        {
          id: 1,
          name: "Brooklyn Simmons",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      id: 2,
      name: "Leslie Alexander",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      replies: [],
    },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleShowMoreComments = () => {
    setShowMoreComments(!showMoreComments);
  };

  const handleReaction = (reaction) => {
    setReactions([...reactions, reaction]);
    setShowReactions(false);
  };

  const handleShowReactions = () => {
    setShowReactions(!showReactions);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">Memes Group</p>
            <p className="text-gray-500 text-sm">1h</p>
          </div>
        </div>
        <div className="flex gap-4 relative">
          <button onClick={toggleDropdown}>
            <FaEllipsisH />
          </button>
          <FaTimes/>
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-8 right-0 w-48 border-2 bg-white rounded-md shadow-lg z-20"
            >
              <ul className="py-1">
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaTimes className="mr-3" />
                  <span>Hide Post</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaBookmark className="mr-3" />
                  <span>Bookmark</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaFlag className="mr-3" />
                  <span>Report</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaBan className="mr-3" />
                  <span>Block</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaBellSlash className="mr-3" />
                  <span>Turn off notifications</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaLink className="mr-3" />
                  <span>Copy Link</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <img src={postImg} alt="Post" className="w-full rounded-lg mb-4" />
      <div className="flex items-center justify-between mb-2">
        <Link to="/view-all-reaction">
          <div className="flex items-center space-x-2">
            <span>{reactions.length}</span>
            {reactions.includes("like") && (
              <FaThumbsUpFilled className="text-blue-500" />
            )}
            {reactions.includes("love") && <FaHeart className="text-red-500" />}
            {reactions.includes("laugh") && (
              <FaLaugh className="text-yellow-500" />
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <span>39 Comments</span>
          <span>30 Shares</span>
        </div>
      </div>
      <div className="flex justify-around border-t border-b py-2 relative">
        <button
          className="flex items-center space-x-1"
          onClick={handleShowReactions}
        >
          <FaThumbsUp />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaComment />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaShare />
          <span>Share</span>
        </button>
        {showReactions && (
          <div className="absolute bottom-12 left-0 flex space-x-2 bg-white p-2 shadow-lg rounded-lg">
            <button onClick={() => handleReaction("like")}>
              <FaThumbsUp className="text-blue-500" />
            </button>
            <button onClick={() => handleReaction("love")}>
              <FaHeart className="text-red-500" />
            </button>
            <button onClick={() => handleReaction("laugh")}>
              <FaLaugh className="text-yellow-500" />
            </button>
          </div>
        )}
      </div>
      <div className="mt-2">
        {showMoreComments ? (
          comments.map((comment) => (
            <div key={comment.id} className="mb-2">
              <div className="flex items-center space-x-2">
                <img
                  src={profileImg}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-sm">{comment.text}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>1h</span>
                    <button className="font-semibold">Like</button>
                    <button className="font-semibold">Reply</button>
                  </div>
                </div>
              </div>
              {comment.replies.length > 0 && (
                <div className="ml-10 mt-2">
                  <button
                    className="text-sm text-gray-500"
                    onClick={() => setShowMoreComments(!showMoreComments)}
                  >
                    View 1 Reply
                  </button>
                  {showMoreComments &&
                    comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="flex items-center space-x-2 mt-2"
                      >
                        <img
                          src={profileImg}
                          alt="User"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{reply.name}</p>
                          <p className="text-sm">{reply.text}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <button
            className="text-sm text-gray-500"
            onClick={handleShowMoreComments}
          >
            View more comments
          </button>
        )}
      </div>
      <div className="flex items-center mt-4">
        <img src={profileImg} alt="User" className="w-8 h-8 rounded-full" />
        <input
          type="text"
          placeholder="Write a public comment..."
          className="w-full ml-2 p-2 rounded-full bg-gray-100 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Post;
