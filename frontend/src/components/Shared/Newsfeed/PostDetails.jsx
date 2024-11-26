import React, { useState, useEffect, useRef } from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaTimes,
  FaBookmark,
  FaFlag,
  FaBan,
  FaBellSlash,
  FaLink,
  FaEllipsisH,
} from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

const PostDetails = ({ post, user, handleReaction }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`${post.user_id.profile_pic}`}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p>
              <span className="font-semibold">{`${post.user_id.first_name} ${post.user_id.last_name}`}</span>
            </p>
            <p className="text-gray-500 text-sm">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-4 relative">
          <button onClick={toggleDropdown}>
            <FaEllipsisH />
          </button>
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-8 right-0 w-48 border-2 bg-white rounded-md shadow-lg z-20"
            >
              <ul className="py-1">
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer">
                  <FaTimes className="mr-3" />
                  <span>Hide Post</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer">
                  <FaBookmark className="mr-3" />
                  <span>Bookmark</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer">
                  <FaFlag className="mr-3" />
                  <span>Report</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer">
                  <FaBan className="mr-3" />
                  <span>Block</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer">
                  <FaBellSlash className="mr-3" />
                  <span>Turn off notifications</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer">
                  <FaLink className="mr-3" />
                  <span>Copy Link</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {post.media.length > 0 && (
        <img
          src={`${post.media[0].media}`}
          alt="Post"
          className="w-full rounded-lg mb-4 mt-3"
        />
      )}
      {post.description && <p className="text-xl py-3">{post.description}</p>}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2 text-lg">
          <span>{post.reactionCount}</span>
          <FaThumbsUp />
        </div>
        <div className="flex items-center space-x-4">
          <span>{post.totalComments} Comments</span>
          <span>{post.postShareCount} Shares</span>
        </div>
      </div>
      <div className="flex justify-around border-t border-b py-2 relative">
        <button
          className="flex items-center space-x-1"
          onClick={() => handleReaction(post._id, "like")}
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
      </div>
      {/* Comments Section */}
      <div className="mt-4">
        {post.comments.map((comment) => (
          <div key={comment._id} className="mb-2">
            <div className="flex items-center space-x-2">
              <img
                src={`${comment.user_id.profile_pic}`} // Random comment user profile image
                alt="User"
                className="w-8 h-8 rounded-full"
                onError={(e) =>
                  (e.target.src =
                    "https://i.ibb.co/vxpYCYg/dummy-avatar-d2ecc4e8.jpg")
                }
              />
              <div className="flex flex-col">
                <div className="bg-gray-100 p-2 rounded-lg flex-1">
                  <p className="font-semibold">{`${comment.user_id.first_name} ${comment.user_id.last_name}`}</p>
                  <p className="text-sm">{comment.comment_name}</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  {/* <span>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</span> */}
                  <button className="font-semibold">Like</button>
                  <button className="font-semibold">Reply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
