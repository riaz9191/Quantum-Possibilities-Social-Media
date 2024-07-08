// PostDetails.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaEllipsisH,
  FaLaugh,
  FaHeart,
  FaThumbsUp as FaThumbsUpFilled,
  FaTimes,
  FaBookmark,
  FaFlag,
  FaBan,
  FaBellSlash,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const PostDetails = ({
  post,
  user,
  handleReaction,
  handleShowMoreComments,
}) => {
  const [showReactions, setShowReactions] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [visibleComments, setVisibleComments] = useState(post.comments);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const dropdownRef = useRef(null);

  const fetchMoreComments = async () => {
    try {
      const response = await axios.get(
        `https://quantumpossibilities.eu:82/api/get-comments?postId=${post._id}&pageNo=2&pageSize=5`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const newComments = response.data.comments;
      if (newComments.length > 0) {
        setVisibleComments([...visibleComments, ...newComments]);
      } else {
        setHasMoreComments(false);
      }
    } catch (error) {
      console.error("Error fetching more comments:", error);
    }
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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`https://quantumpossibilities.eu:82/uploads/${post.user_id.profile_pic}`}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="">
              <span className="font-semibold">{`${post.user_id.first_name} ${post.user_id.last_name}`}</span>
              {post.tagged_user_list.length > 0 && (
                <span>
                  {" "}
                  with{" "}
                  <span className="font-semibold">
                    {post.tagged_user_list
                      .map(
                        (taggedUser) =>
                          `${taggedUser.user.first_name} ${taggedUser.user.last_name}`
                      )
                      .join(" & ")}
                  </span>
                </span>
              )}
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
          <FaTimes />
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
      {post.media.length > 0 && (
        <>
          <img
            src={`https://quantumpossibilities.eu:82/uploads/post/${post.media[0].media}`}
            alt="Post"
            className="w-full rounded-lg mb-4"
          />

          {/* <p>{post.description}</p> */}
        </>
      )}
      {post.description && (
        <>
          <p className="text-xl py-3">{post.description}</p>
        </>
      )}
      <div className="flex items-center justify-between mb-2">
        <Link to="/view-all-reactions">
          <div className="flex items-center space-x-2 text-lg">
            {post.reactionCount > 0 && (
              <>
                <span>{post.reactionCount}</span>
                {post.reactionTypeCountsByPost.some(
                  (reaction) => reaction.reaction_type === "like"
                ) && <FaThumbsUpFilled className="text-blue-500" />}
                {post.reactionTypeCountsByPost.some(
                  (reaction) => reaction.reaction_type === "love"
                ) && <FaHeart className="text-red-500" />}
                {post.reactionTypeCountsByPost.some(
                  (reaction) => reaction.reaction_type === "haha"
                ) && <FaLaugh className="text-yellow-500" />}
              </>
            )}
          </div>
        </Link>
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
                src={`https://quantumpossibilities.eu:82/uploads/${comment.user_id.profile_pic}`}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <div className="bg-gray-100 p-2 rounded-lg flex-1">
                  <p className="font-semibold">{`${comment.user_id.first_name} ${comment.user_id.last_name}`}</p>
                  <p className="text-sm">{comment.comment_name}</p>
                </div>
                <div className="flex fcol items-center space-x-2 text-sm text-gray-500">
                <span>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</span>

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
                  View {comment.replies.length} Reply
                </button>
                {showMoreComments &&
                  comment.replies.map((reply) => (
                    <div
                      key={reply._id}
                      className="flex items-center space-x-2 mt-2"
                    >
                      <img
                        src={`https://quantumpossibilities.eu:82/uploads/${reply.replies_user_id.profile_pic}`}
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-gray-100 p-2 rounded-lg flex-1">
                        <p className="font-semibold">{`${reply.replies_user_id.first_name} ${reply.replies_user_id.last_name}`}</p>
                        <p className="text-sm">{reply.replies_comment_name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4">
        <img
          src={user.profilePic}
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <input
          type="text"
          placeholder="Write a public comment..."
          className="w-full ml-2 p-2 rounded-full bg-gray-100 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PostDetails;
