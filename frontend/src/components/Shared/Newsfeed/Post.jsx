import React, { useState, useEffect } from "react";
import PostDetails from "./PostDetails";
import Skeleton from "../Loader/Skeleton";

const Post = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy posts data with updated images and reactions
  const dummyPosts = [
    {
      _id: "1",
      user_id: { first_name: "John", last_name: "Doe", profile_pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42903d42-26f4-496d-a03d-9a17e9840ead/d88l4qg-43fbab37-dbfd-45df-b370-921f10a7d734.jpg/v1/fill/w_1024,h_1536,q_75,strp/random_guy_by_metarkice_d88l4qg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzQyOTAzZDQyLTI2ZjQtNDk2ZC1hMDNkLTlhMTdlOTg0MGVhZFwvZDg4bDRxZy00M2ZiYWIzNy1kYmZkLTQ1ZGYtYjM3MC05MjFmMTBhN2Q3MzQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D7TKVpsGhz_Y4yN8ouoB71PCQpmFyAzrS9VHcabF3ZE" },
      description: "This is a sample post with a beautiful landscape",
      media: [{ media: "https://img.freepik.com/free-photo/top-view-plastic-objects-arrangement_23-2149439627.jpg" }],
      createdAt: new Date(),
      reactionCount: 5,
      reactionTypeCountsByPost: [
        { reaction_type: "like", count: 3 },
        { reaction_type: "love", count: 2 },
      ],
      totalComments: 10,
      postShareCount: 2,
      comments: [
        { _id: "1", user_id: { first_name: "Jane", last_name: "Doe", profile_pic: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-what-is-the-jiang-yong-character-from-the-game-world-war-image_2914332.jpg" }, comment_name: "Great post!" }
      ]
    },
    {
      _id: "2",
      user_id: { first_name: "Alice", last_name: "Smith", profile_pic: "https://images.nightcafe.studio/jobs/UDbNfPMN3DN6z80UULYq/UDbNfPMN3DN6z80UULYq--1--evdu2_4x.jpg?tr=w-1600,c-at_max" },
      description: "Here is another random post, enjoying the vibes!",
      media: [{ media: "https://img.freepik.com/free-photo/still-life-small-decorative-objects-with-vivid-colors_23-2149732877.jpg" }],
      createdAt: new Date(),
      reactionCount: 2,
      reactionTypeCountsByPost: [
        { reaction_type: "haha", count: 2 }
      ],
      totalComments: 3,
      postShareCount: 1,
      comments: [
        { _id: "1", user_id: { first_name: "Bob", last_name: "Jones", profile_pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42903d42-26f4-496d-a03d-9a17e9840ead/d88l4qg-43fbab37-dbfd-45df-b370-921f10a7d734.jpg/v1/fill/w_1024,h_1536,q_75,strp/random_guy_by_metarkice_d88l4qg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzQyOTAzZDQyLTI2ZjQtNDk2ZC1hMDNkLTlhMTdlOTg0MGVhZFwvZDg4bDRxZy00M2ZiYWIzNy1kYmZkLTQ1ZGYtYjM3MC05MjFmMTBhN2Q3MzQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D7TKVpsGhz_Y4yN8ouoB71PCQpmFyAzrS9VHcabF3ZE" }, comment_name: "LOL!" }
      ]
    }
  ];

  useEffect(() => {
    setPosts(dummyPosts);
    setLoading(false);
  }, []);

  const handleReaction = (postId, reactionType) => {
    const updatedPosts = posts.map((post) => {
      if (post._id === postId) {
        const updatedReactions = [...post.reactionTypeCountsByPost];
        const reactionIndex = updatedReactions.findIndex(r => r.reaction_type === reactionType);
        if (reactionIndex >= 0) {
          updatedReactions[reactionIndex].count += 1;
        } else {
          updatedReactions.push({ reaction_type: reactionType, count: 1 });
        }
        return { ...post, reactionTypeCountsByPost: updatedReactions };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  if (loading) {
    return <Skeleton />;
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
