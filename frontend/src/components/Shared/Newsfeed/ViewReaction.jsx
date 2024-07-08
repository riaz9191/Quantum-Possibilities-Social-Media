import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import {
  FaThumbsUp,
  FaHeart,
  FaLaugh,
  FaSadTear,
  FaSurprise,
  FaAngry,
} from 'react-icons/fa';
import Skeleton from '../Loader/Skeleton';

const ViewAllReactions = () => {
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [reactionCounts, setReactionCounts] = useState({
    like: 0,
    love: 0,
    haha: 0,
    sad: 0,
    wow: 0,
    angry: 0,
  });

  const fetchReactions = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        throw new Error('Authentication tokens not found');
      }

      const response = await axios.get(
        'https://quantumpossibilities.eu:82/api/get-all-users-posts?pageNo=1&pageSize=10',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      const posts = response.data.posts;

      const allReactions = posts.flatMap(post => post.reactionTypeCountsByPost.map(reaction => ({
        ...reaction.user_details,
        reaction_type: reaction.reaction_type,
      })));
      console.log(allReactions)

      const reactionCounts = {
        like: allReactions.filter(r => r.reaction_type === 'like').length,
        love: allReactions.filter(r => r.reaction_type === 'love').length,
        haha: allReactions.filter(r => r.reaction_type === 'haha').length,
        sad: allReactions.filter(r => r.reaction_type === 'sad').length,
        wow: allReactions.filter(r => r.reaction_type === 'wow').length,
        angry: allReactions.filter(r => r.reaction_type === 'angry').length,
      };

      setReactions(allReactions);
      setReactionCounts(reactionCounts);
    } catch (error) {
      console.error('Error fetching reactions:', error);
    }
  };

  useEffect(() => {
    fetchReactions();
  }, []);

  if (loading) {
    return <Skeleton/>;
  }


  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Reaction Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-bold text-green-700">All</h2>
            <div className="flex items-center space-x-2">
              <FaThumbsUp className="text-blue-500" />
              <span>{reactionCounts.like}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-red-500" />
              <span>{reactionCounts.love}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaLaugh className="text-yellow-500" />
              <span>{reactionCounts.haha}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSadTear className="text-yellow-500" />
              <span>{reactionCounts.sad}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSurprise className="text-yellow-500" />
              <span>{reactionCounts.wow}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaAngry className="text-red-500" />
              <span>{reactionCounts.angry}</span>
            </div>
          </div>
        </div>
        <ul className="space-y-4">
          {reactions.map((reaction) => (
            <li key={reaction._id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={`https://quantumpossibilities.eu:82/uploads/${reaction.profile_pic}`}
                  alt={reaction.first_name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{`${reaction.first_name} ${reaction.last_name}`}</p>
                  <p className="text-gray-500 text-sm">{reaction.mutualFriends || 0} mutual friends</p>
                </div>
              </div>
              <div>
                <button className="bg-[#307777] text-white px-4 py-2 rounded-lg">
                  {reaction.reaction_type}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewAllReactions;
