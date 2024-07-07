// Post.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "./PostDetails.jsx";
import Skeleton from "../Loader/Skeleton.jsx";

const Post = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken || !refreshToken) {
        throw new Error("Authentication tokens not found");
      }

      const response = await axios.get(
        "https://quantumpossibilities.eu:82/api/get-all-users-posts?pageNo=1&pageSize=10",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setPosts(response.data.posts);
      console.log(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleReaction = (postId, reaction) => {
    const updatedPosts = posts.map((post) =>
      post._id === postId
        ? { ...post, reactions: [...post.reactions, reaction] }
        : post
    );
    setPosts(updatedPosts);
  };

  if (loading) {
    return <Skeleton/>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostDetails
          key={post._id}
          post={post}
          user={user}
          handleReaction={handleReaction}
        />
      ))}
    </div>
  );
};

export default Post;
